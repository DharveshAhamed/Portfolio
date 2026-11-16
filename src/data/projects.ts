/**
 * Project data model and verified/placeholder data.
 *
 * NOTE: Strict adherence to facts — no fake descriptions, tags, links, or metrics.
 */

export interface Project {
  slug: string;
  title: string;
  summary: string;
  status: string;
  role: string;
  timeline: string;
  description: string[];
  problem?: string;
  goalsAndConstraints?: string[];
  approach?: string[];
  keyDecisions?: string[];
  tags: string[]; // only verified tags; empty by default
  coverImage?: string;
  links: {
    live?: string;
    github?: string;
  };
  outcomes?: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: 'cargosync',
    title: 'CargoSync',
    summary: 'A smart logistics platform featuring 3D cargo optimization, trucker matching, multi-stop delivery planning, and Checklist-based shipment tracking.',
    status: 'Completed',
    role: 'Full-Stack Developer',
    timeline: 'Nov 2026',
    description: [
      'Developed a full-stack logistics platform developed to simplify freight transportation by connecting shippers with suitable truck operators.',
      'Designed backend REST API workflows and data-validation logic using Python and FastAPI.',
      'Implemented 3D cargo packing visualization and loading-sequence optimization to support truck-space planning and multi-stop unloading.',
      'Developed proximity- and rating-based carrier matching workflows to help connect shipments with suitable carriers.',
      'Implemented Checklist based shipment verification to support traceable delivery workflows.',
    ],
    problem: 'Freight logistics frequently suffers from inefficient truck-space utilization, manual matching delays between shippers and carriers, and lack of real-time traceable delivery verification.',
    goalsAndConstraints: [
      'Automate shipper-to-carrier matching based on spatial proximity and carrier ratings.',
      'Provide an interactive 3D cargo visualizer for real-time truck volume optimization.',
      'Secure shipment handoffs with verifiable Checklist authentication.',
    ],
    approach: [
      'Engineered backend REST APIs with Python and FastAPI, validating payloads with Pydantic.',
      'Constructed responsive frontend and 3D cargo container visualization with Next.js, React, and Three.js.',
      'Integrated PostgreSQL with Supabase for real-time data persistence and authentication.',
    ],
    keyDecisions: [
      'Chose FastAPI for asynchronous API throughput and automatic OpenAPI documentation.',
      'Integrated Three.js for client-rendered 3D bounding-box spatial packing inspection.',
    ],
    tags: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Supabase', 'Three.js'],
    coverImage: '/projects/cargosync-cover.png',
    links: {
      github: 'https://github.com/DharveshAhamed/CargoSync',
    },
    outcomes: [
      'Streamlined freight coordination and minimized wasted container cargo volume.',
      'Enhanced delivery accountability with cryptographically secure Checklist authentication.',
    ],
    featured: true,
  },
  {
    slug: 'intelligent-energy-control-system',
    title: 'Intelligent Energy Control System',
    summary: 'IoT Application for real-time electricity monitoring and automated device control integrating hardware sensors with software interfaces.',
    status: 'Completed',
    role: 'IoT & Software Developer',
    timeline: '2024',
    description: [
      'Developed an IoT-based electricity monitoring and automation system.',
      'Integrated hardware components with software applications for monitoring and controlling connected electrical devices.',
      'Worked on communication between IoT hardware and application interfaces, linking software workflows with physical components.',
    ],
    problem: 'Excessive energy waste occurs due to lack of granular electrical telemetry and absence of automated control over power-hungry connected devices.',
    goalsAndConstraints: [
      'Real-time power draw and voltage monitoring over wireless telemetry.',
      'Safe, low-latency device switching via solid-state relays and microcontroller firmware.',
      'Mobile control dashboard with intuitive state indicators and fault alerts.',
    ],
    approach: [
      'Programmed Arduino UNO to read sensor telemetry and orchestrate electrical relay switching.',
      'Configured Wi-Fi 6 wireless communication protocol for low-latency transmission to the backend.',
      'Built cross-platform mobile management application using Flutter.',
      'Designed custom PCB layouts for power circuit safety and compact hardware integration.',
    ],
    keyDecisions: [
      'Employed Python for data processing and telemetry analytics pipeline.',
      'Utilized Flutter for unified mobile controls across iOS and Android.',
    ],
    tags: ['Python', 'Arduino UNO', 'Flutter', 'Wi-Fi 6', 'PCB'],
    coverImage: '/projects/iecs-cover.png',
    links: {},
    outcomes: [
      'Achieved automated remote appliance cut-off and proactive consumption telemetry.',
      'Demonstrated reliable hardware-to-software communication over modern wireless protocols.',
    ],
    featured: true,
  },
];
