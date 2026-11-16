import { NextResponse } from 'next/server';
import { siteConfig } from '@/data/site';

export interface RepoItem {
  id: string | number;
  name: string;
  description: string;
  language: string | null;
  stars: number;
  forks: number;
  url: string | null;
  updatedAt: string;
}

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface ContributionWeek {
  days: ContributionDay[];
}

const FALLBACK_REPOS: RepoItem[] = [
  {
    id: 'cargosync',
    name: 'CargoSync',
    description: '[Repository description to be synchronized once GitHub handle is configured.]',
    language: 'TypeScript / Python',
    stars: 0,
    forks: 0,
    url: null,
    updatedAt: 'Recent',
  },
  {
    id: 'iecs',
    name: 'Intelligent-Energy-Control-System',
    description: '[Repository description to be synchronized once GitHub handle is configured.]',
    language: 'Python / ML',
    stars: 0,
    forks: 0,
    url: null,
    updatedAt: 'Recent',
  },
];

// GraphQL query to fetch last 52 weeks of contributions
const CONTRIBUTIONS_QUERY = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

function levelFromString(level: string): 0 | 1 | 2 | 3 | 4 {
  switch (level) {
    case 'FIRST_QUARTILE':  return 1;
    case 'SECOND_QUARTILE': return 2;
    case 'THIRD_QUARTILE':  return 3;
    case 'FOURTH_QUARTILE': return 4;
    default:                return 0;
  }
}

export async function GET() {
  const githubHref = siteConfig.socials.github.href;
  const usernameMatch = githubHref.match(/github\.com\/([^/]+)/);
  const username = usernameMatch ? usernameMatch[1] : null;

  if (!username || username.includes('[')) {
    return NextResponse.json({ configured: false, repos: FALLBACK_REPOS, contributions: null });
  }

  const token = process.env.GITHUB_TOKEN;

  const headers: Record<string, string> = {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'Dharvesh-Portfolio',
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    // ── Fetch repos (REST) ──────────────────────────────────────────
    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=4&type=owner`,
      { headers, next: { revalidate: 3600 } }
    );

    const repos: RepoItem[] = reposRes.ok
      ? (await reposRes.json()).map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description || '[No description provided]',
          language: repo.language,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          url: repo.html_url,
          updatedAt: new Date(repo.updated_at).toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric',
          }),
        }))
      : FALLBACK_REPOS;

    // ── Fetch contribution calendar (GraphQL — requires token) ──────
    let contributions: ContributionWeek[] | null = null;
    let totalContributions: number | null = null;

    if (token) {
      const gqlRes = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: { ...headers, 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: CONTRIBUTIONS_QUERY, variables: { username } }),
        next: { revalidate: 3600 },
      });

      if (gqlRes.ok) {
        const gqlData = await gqlRes.json();
        const calendar =
          gqlData?.data?.user?.contributionsCollection?.contributionCalendar;

        if (calendar) {
          totalContributions = calendar.totalContributions as number;
          contributions = (calendar.weeks as any[]).map((week: any) => ({
            days: week.contributionDays.map((day: any) => ({
              date: day.date,
              count: day.contributionCount,
              level: levelFromString(day.contributionLevel),
            })),
          }));
        }
      }
    }

    return NextResponse.json({
      configured: true,
      repos: repos.length > 0 ? repos : FALLBACK_REPOS,
      contributions,
      totalContributions,
    });
  } catch {
    return NextResponse.json({
      configured: true,
      repos: FALLBACK_REPOS,
      contributions: null,
      totalContributions: null,
    });
  }
}
