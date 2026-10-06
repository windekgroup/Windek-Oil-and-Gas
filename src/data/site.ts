import type {
  NavItem,
  ServiceItem,
  ValueItem,
  GrowthGoal,
  FaqItem,
  TeamMember,
  GlossaryTerm,
  LocationItem,
} from './types';

export const COMPANY_NAME = 'Windek Oil and Gas Limited';
export const SHORT_NAME = 'Windek';
export const DOMAIN = 'windekoilandgasltd.com';
export const SITE_URL = 'https://windekoilandgasltd.com';
export const RC_NUMBER = 'RC1493721';
export const TAGLINE =
  'Delivering Sustainable Energy Solutions through Operational Excellence and Innovation';
export const SLOGAN = 'Fueling Growth. Powering Nigeria.';

export const CONTACT = {
  address: {
    street: '19 Redemption Road, Trans-Amadi',
    locality: 'Port Harcourt',
    region: 'Rivers State',
    country: 'Nigeria',
    countryCode: 'NG',
    full: '19 Redemption Road, Trans-Amadi, Port Harcourt, Rivers State, Nigeria',
  },
  phone: '+234 808 526 9328',
  phoneHref: '+2348085269328',
  email: 'info@windekoilandgasltd.com',
  emailHref: 'mailto:info@windekoilandgasltd.com',
  geo: { latitude: 4.8156, longitude: 7.0498 },
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=19+Redemption+Road+Trans-Amadi+Port+Harcourt+Rivers+State+Nigeria',
  hours: 'Monday - Friday, 8:00 - 17:00 WAT',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Locations', href: '/locations/' },
  { label: 'Insights', href: '/insights/' },
  { label: 'Careers', href: '/careers/' },
  { label: 'Contact', href: '/contact/' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    slug: 'emmanuel-uwandu',
    name: 'Emmanuel Uwandu',
    role: 'Chief Operating Officer',
    image: '/images/team-emmanuel-uwandu.jpg',
    bio: 'Emmanuel leads Windek\'s operations across the energy value chain, with over 10 years of experience in the oil and gas sector spanning strategic operations, project delivery and expansion.',
    focus: 'Operations strategy, project delivery, upstream and midstream expansion',
  },
  {
    slug: 'motunrayo-adeogun',
    name: 'Motunrayo Adeogun',
    role: 'Head of Business Development',
    image: '/images/team-motunrayo-adeogun.jpg',
    bio: 'Motunrayo drives Windek\'s growth strategy and manages stakeholder relationships across the energy value chain, from joint venture operators to LPG distributors and industrial consumers.',
    focus: 'Commercial growth, key accounts, partnerships and tender participation',
  },
  {
    slug: 'joy-makanjuola',
    name: 'Joy Makanjuola',
    role: 'Head of Human Resources',
    image: '/images/team-joy-makanjuola.jpg',
    bio: 'Joy leads people operations at Windek, responsible for talent development, organisational design and the local content programmes that build Nigerian technical capability.',
    focus: 'Talent, organisational development, local content and training',
  },
  {
    slug: 'dorcas-oloniyo',
    name: 'Dorcas Oloniyo',
    role: 'Head of Account',
    image: '/images/team-dorcas-oloniyo.jpg',
    bio: 'Dorcas oversees Windek\'s financial operations, including project costing, commercial controls and contract administration across active engagements.',
    focus: 'Financial control, project costing and contract administration',
  },
];

export const CORE_VALUES: ValueItem[] = [
  {
    title: 'Safety',
    description: 'Zero harm operations aligned with international oil and gas standards.',
    icon: 'shield',
  },
  {
    title: 'Integrity',
    description: 'Unwavering commitment to ethical business practices.',
    icon: 'award',
  },
  {
    title: 'Sustainability',
    description: 'Creating long-term value while protecting the environment.',
    icon: 'leaf',
  },
  {
    title: 'Innovation',
    description: 'Leveraging advanced technology for energy solutions.',
    icon: 'bulb',
  },
  {
    title: 'Stakeholder Value',
    description: 'Creating value for all partners and communities.',
    icon: 'users',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    slug: 'upstream-operations',
    title: 'Upstream Operations',
    shortTitle: 'Upstream',
    tagline: 'Onshore and offshore well delivery',
    summary:
      'End-to-end well delivery support, from exploration planning and drilling supervision through completion, workover and production optimisation.',
    icon: 'drill',
    image: '/images/hero-upstream.jpg',
    imageAlt: 'Drilling rig operating in Nigeria',
    imageWidth: 800,
    imageHeight: 530,
    items: [
      'Onshore and offshore well design and drilling',
      'Completion and workover services',
      'Reservoir evaluation and production optimisation',
      'Subsurface services including geological mapping',
    ],
    intro:
      'Windek delivers upstream services across the exploration, development and production lifecycle. Our teams support exploration and production companies with well planning, drilling supervision, completion design and reservoir interpretation, built around safety and schedule discipline.',
    capabilities: [
      {
        title: 'Well design and drilling support',
        description:
          'Planning and supervision of well programmes, including drilling engineering support, mud programme design and directional drilling coordination.',
      },
      {
        title: 'Completion and workover',
        description:
          'Completion design, running and cementing, well intervention and workover operations delivered by crews experienced in Nigerian field conditions.',
      },
      {
        title: 'Reservoir evaluation',
        description:
          'Core analysis, pressure testing and geological mapping to support reserve estimation and field development planning.',
      },
      {
        title: 'Production optimisation',
        description:
          'Wellbore integrity reviews and production enhancement aimed at improving recovery factors and sustaining deliverability.',
      },
    ],
    faqs: [
      {
        question: 'What does upstream operations mean in oil and gas?',
        answer:
          'Upstream operations are the exploration and production phases of the oil and gas value chain. They cover finding hydrocarbon accumulations, drilling wells into them, completing and workovering the wells, and producing from them until they are depleted or abandoned.',
      },
      {
        question: 'Does Windek work on both onshore and offshore fields?',
        answer:
          'Yes. Windek provides onshore and offshore well design, drilling support, completion and reservoir evaluation services for exploration and production operators in Nigeria.',
      },
    ],
  },
  {
    slug: 'lpg-infrastructure',
    title: 'Midstream & LPG Infrastructure',
    shortTitle: 'LPG & Midstream',
    tagline: 'Storage, terminals and distribution',
    summary:
      'Design, build and operate the bulk storage, terminal and distribution assets that make LPG reliably available to retailers and industrial consumers.',
    icon: 'factory',
    image: '/images/midstream-lpg.jpg',
    imageAlt: 'Industrial storage tanks and pipeline infrastructure',
    imageWidth: 800,
    imageHeight: 530,
    items: [
      'LPG storage and terminal development',
      'Terminal construction and operations',
      'Pipeline and distribution services',
      'Bulk storage and bottling solutions',
    ],
    intro:
      'Midstream and LPG infrastructure sits between production and the end customer. Windek designs, builds and operates the storage, terminal and distribution assets that make LPG reliably available across a market, and our flagship LPG Terminal Facility at Atabrikang is built on exactly this model.',
    capabilities: [
      {
        title: 'LPG storage and terminal development',
        description:
          'Feasibility, design and construction of bulk LPG storage tanks and associated terminals, sized to regional demand.',
      },
      {
        title: 'Terminal construction and operations',
        description:
          'Civil, mechanical and instrumentation works through to safe operational readiness and ongoing terminal management.',
      },
      {
        title: 'Pipeline and distribution',
        description:
          'Pipeline networks and loading systems that move product from storage into regional distribution.',
      },
      {
        title: 'Bulk storage and bottling',
        description:
          'Bulk storage facilities and bottling plant solutions for LPG retailers, distributors and industrial consumers.',
      },
    ],
    faqs: [
      {
        question: 'Why does Nigeria need more LPG storage capacity?',
        answer:
          'Nigeria has abundant domestic LPG production but a persistent shortage of bulk storage and terminal capacity, which forces long-haul road transport, raises delivered cost and causes frequent supply interruptions. Additional storage close to demand centres reduces delivered cost and improves reliability for retailers and industrial consumers.',
      },
      {
        question: 'What is bulk LPG storage?',
        answer:
          'Bulk LPG storage means holding liquefied petroleum gas in large-volume tanks rather than in small cylinders. Bulk storage lets suppliers hold thousands of tonnes on site, which reduces road transport per tonne delivered and gives end users a steadier supply.',
      },
    ],
  },
  {
    slug: 'engineering-logistics',
    title: 'Engineering & Logistics',
    shortTitle: 'Engineering',
    tagline: 'EPCI, fabrication and marine logistics',
    summary:
      'Single-point EPCI responsibility backed by fabrication, marine and land logistics, dredging and civil works capability in the Niger Delta.',
    icon: 'anchor',
    image: '/images/engineering-logistics.jpg',
    imageAlt: 'Heavy engineering and logistics operations',
    imageWidth: 800,
    imageHeight: 530,
    items: [
      'Engineering, Procurement, Construction & Installation',
      'Fabrication and modular construction',
      'Marine and land logistics support',
      'Dredging and civil works',
    ],
    intro:
      'Our engineering and logistics arm delivers the physical works behind energy infrastructure. As an integrated EPCI contractor we take responsibility for design, procurement, construction and installation, backed by marine and land logistics capability in the Niger Delta.',
    capabilities: [
      {
        title: 'EPCI delivery',
        description:
          'Single-point responsibility for engineering, procurement, construction and installation on midstream and infrastructure projects.',
      },
      {
        title: 'Fabrication and modularisation',
        description:
          'Modular construction and structural fabrication that shortens site schedules and reduces offshore installation risk.',
      },
      {
        title: 'Marine and land logistics',
        description:
          'Vessel charter, cargo handling and overland haulage supporting project sites across river and road corridors.',
      },
      {
        title: 'Dredging and civil works',
        description:
          'Channel and berth dredging, piling, foundations and site civil works for terminal and waterfront construction.',
      },
    ],
    faqs: [
      {
        question: 'What does EPCI mean?',
        answer:
          'EPCI stands for Engineering, Procurement, Construction and Installation. It is a delivery model where one contractor is responsible for all four phases of a project, rather than each phase being awarded separately, which gives the client a single point of accountability.',
      },
      {
        question: 'Why does local content matter on EPCI projects?',
        answer:
          'Nigeria\'s local content policy requires that Nigerian engineering capacity is used wherever reasonably available. EPCI projects with genuine local participation also shorten mobilisation times, reduce exposure to foreign exchange and keep more project value inside the local economy.',
      },
    ],
  },
];

export const GROWTH_GOALS: GrowthGoal[] = [
  {
    period: 'Current Position',
    title: 'Established Operations',
    description:
      'Flagship $100M LPG terminal project and proven expertise across the energy value chain.',
    icon: 'shield',
  },
  {
    period: '2025-2027',
    title: 'Expansion Phase',
    description: 'Expand LPG infrastructure to 3+ additional states and secure new E&P blocks.',
    icon: 'trending',
  },
  {
    period: '2028-2030',
    title: 'Future Vision',
    description:
      'Digital transformation and pioneering clean energy solutions (Solar + LPG hybrids).',
    icon: 'zap',
  },
];

export const PROJECT = {
  slug: 'lpg-terminal-facility',
  name: 'LPG Terminal Facility',
  subtitle: '20,000 MT Storage & Distribution Hub',
  location: 'Atabrikang, Akwa Ibom',
  valuation: '$100M',
  completion: 'Q4 2025',
  capacity: '20,000 MT',
  partner: 'Cakasa Nigeria Limited',
  image: '/images/lpg-terminal.jpg',
  imageAlt: 'Bulk LPG storage tanks and distribution terminal infrastructure at a coastal oil and gas port',
  imageWidth: 1600,
  imageHeight: 1200,
  summary:
    'A landmark infrastructure project designed to revolutionise LPG availability in Southern Nigeria. This facility represents our commitment to solving energy infrastructure deficits through strategic capital deployment and engineering excellence.',
  challenge: `Nigeria is one of Africa's largest LPG producers, yet supply to consumers remains unreliable because bulk storage and terminal capacity sits far short of what the market needs. LPG moves out of production by road in small cylinders or in small tankers, so delivered cost stays high and interruptions are frequent, particularly for retailers and industrial consumers outside the immediate production belt.

Adding capacity has been constrained by capital intensity, long construction lead times and the difficulty of executing waterfront terminal works in the Niger Delta.`,
  approach: `Windek is delivering a 20,000 metric tonne LPG storage and distribution hub at Atabrikang, Akwa Ibom, positioned on the Southern Nigerian gas corridor between production and the major consumption centres of the South East and South South.

The facility is being executed as an integrated EPCI project with Cakasa Nigeria Limited, combining bulk storage, loading and distribution capability on a single site. Locating the terminal between production and demand shortens haul distances, reduces the number of road trips per tonne delivered, and puts replenishment capacity closer to the retail market it serves.

As a 100% indigenous operator, Windek is building the engineering, project management and workforce capability in Nigeria rather than importing it.`,
  outcomes: [
    'Bulk LPG storage capacity of 20,000 metric tonnes at a single site',
    'Positioned between production and the Southern Nigerian consumption corridor',
    'Integrated EPCI delivery with Cakasa Nigeria Limited',
    'Engineered to reduce delivered cost and supply interruption for retailers',
  ],
  stats: [
    { value: '20,000 MT', label: 'Storage capacity' },
    { value: '$100M', label: 'Project valuation' },
    { value: 'Q4 2025', label: 'Target completion' },
    { value: 'EPCI', label: 'Delivery model' },
  ],
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What services does Windek Oil and Gas Limited provide?',
    answer:
      'Windek Oil and Gas Limited provides three core service lines: Upstream Operations (well design, drilling support, completion, workover and reservoir evaluation), Midstream and LPG Infrastructure (LPG storage, terminal development, pipeline distribution and bottling), and Engineering and Logistics (EPCI, fabrication, modular construction, marine logistics, dredging and civil works).',
  },
  {
    question: 'Where is Windek Oil and Gas Limited located?',
    answer:
      'Windek Oil and Gas Limited is headquartered at 19 Redemption Road, Trans-Amadi, Port Harcourt, Rivers State, Nigeria. The company serves clients across Nigeria, including operations in Rivers State and Akwa Ibom.',
  },
  {
    question: 'What is the LPG Terminal Facility project?',
    answer:
      "The LPG Terminal Facility is Windek's flagship project: a 20,000 metric tonne LPG storage and distribution hub at Atabrikang, Akwa Ibom. Valued at 100 million US dollars and targeted for completion in Q4 2025, it is intended to improve LPG availability and distribution efficiency across Southern Nigeria.",
  },
  {
    question: 'Is Windek an indigenous Nigerian company?',
    answer:
      'Yes. Windek Oil and Gas Limited is a 100 percent indigenous Nigerian energy company registered in Nigeria with RC number 1493721, headquartered in Port Harcourt and focused on delivering sustainable energy solutions through operational excellence and innovation.',
  },
  {
    question: 'How can I contact Windek Oil and Gas Limited?',
    answer:
      'You can reach Windek Oil and Gas Limited by phone on +234 808 526 9328, by email at info@windekoilandgasltd.com, or by visiting the office at 19 Redemption Road, Trans-Amadi, Port Harcourt, Rivers State. You can also send a message through the contact form on this website.',
  },
];

export const LOCATIONS: LocationItem[] = [
  {
    slug: 'port-harcourt',
    name: 'Port Harcourt',
    type: 'Headquarters',
    region: 'Rivers State',
    country: 'Nigeria',
    description:
      'Windek Oil and Gas Limited is headquartered in Trans-Amadi, Port Harcourt, in the heart of Nigeria\'s oil and gas services belt. Our office is the base for corporate leadership, commercial operations and project management across all three service lines.',
    services: ['Upstream Operations', 'Midstream & LPG Infrastructure', 'Engineering & Logistics'],
    metaDescription:
      'Windek Oil and Gas Limited head office at 19 Redemption Road, Trans-Amadi, Port Harcourt, Rivers State. Corporate, commercial and project management base.',
    image: '/images/about-operations.jpg',
    imageAlt: 'Windek Oil and Gas operations team',
    imageWidth: 1600,
    imageHeight: 916,
    coordinates: { latitude: 4.8156, longitude: 7.0498 },
    address: '19 Redemption Road, Trans-Amadi, Port Harcourt, Rivers State, Nigeria',
    phone: '+234 808 526 9328',
    email: 'info@windekoilandgasltd.com',
  },
  {
    slug: 'rivers-state',
    name: 'Rivers State',
    type: 'Operating Region',
    region: 'Rivers State',
    country: 'Nigeria',
    description:
      'Rivers State is where Windek was founded and remains the centre of gravity for the company. It hosts Nigeria\'s densest concentration of oil and gas services infrastructure, marine logistics terminals and fabrication capacity, and is the operating base for much of our engineering and logistics work.',
    services: ['Upstream Operations', 'Engineering & Logistics', 'Marine & land logistics'],
    metaDescription:
      'Rivers State is Windek\'s home region and the centre of Nigerian oil and gas services, marine logistics and fabrication capacity.',
    image: '/images/engineering-logistics.jpg',
    imageAlt: 'Engineering and logistics operations in the Niger Delta',
    imageWidth: 800,
    imageHeight: 530,
    coordinates: { latitude: 4.8156, longitude: 7.0498 },
    address: 'Port Harcourt, Rivers State, Nigeria',
    phone: '+234 808 526 9328',
    email: 'info@windekoilandgasltd.com',
  },
  {
    slug: 'akwa-ibom',
    name: 'Akwa Ibom',
    type: 'Project Location',
    region: 'Akwa Ibom',
    country: 'Nigeria',
    description:
      'Atabrikang, Akwa Ibom is the site of Windek\'s flagship LPG Terminal Facility, a 20,000 metric tonne bulk storage and distribution hub serving the Southern Nigerian gas corridor. The location was chosen for its position between gas production and the South East and South South consumption markets.',
    services: ['Midstream & LPG Infrastructure', 'LPG storage and terminal development', 'EPCI delivery'],
    metaDescription:
      'Atabrikang, Akwa Ibom hosts Windek\'s 20,000 MT LPG storage and distribution terminal, sited between gas production and Southern Nigeria\'s markets.',
    image: '/images/lpg-terminal.jpg',
    imageAlt: 'Bulk LPG storage tanks at a coastal oil and gas terminal',
    imageWidth: 1600,
    imageHeight: 1200,
    coordinates: { latitude: 4.5856, longitude: 7.87 },
    address: 'Atabrikang, Akwa Ibom, Nigeria',
    phone: '+234 808 526 9328',
    email: 'info@windekoilandgasltd.com',
  },
];

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: 'LPG',
    category: 'Products',
    definition:
      'Liquefied Petroleum Gas, a mixture of propane and butane stored as a liquid under pressure. It is used for cooking, heating, industrial feedstock and power generation.',
  },
  {
    term: 'Upstream',
    category: 'Value chain',
    definition:
      'The exploration and production stage of the oil and gas value chain, covering seismic survey, drilling, completion, workover and production.',
  },
  {
    term: 'Midstream',
    category: 'Value chain',
    definition:
      'The transport, storage and processing stage between upstream production and downstream sales, including gathering, pipelines, terminals and treatment facilities.',
  },
  {
    term: 'Downstream',
    category: 'Value chain',
    definition:
      'The refining, distribution and retail stage that turns crude oil and gas into usable products such as petrol, diesel, kerosene and LPG.',
  },
  {
    term: 'EPCI',
    category: 'Delivery',
    definition:
      'Engineering, Procurement, Construction and Installation. A delivery model where one contractor is accountable for all four phases of a project.',
  },
  {
    term: 'Terminal',
    category: 'Infrastructure',
    definition:
      'A facility where products are received, stored and loaded for onward distribution. For LPG, a terminal combines bulk storage tanks with loading and dispatch capability.',
  },
  {
    term: 'Wellhead',
    category: 'Upstream',
    definition:
      'The surface assembly that controls and supports a producing well, including the wellhead, casing head and Christmas tree.',
  },
  {
    term: 'Workover',
    category: 'Upstream',
    definition:
      'Intervention on an existing well to restore, improve or extend its production rate, including logging, stimulation and completion changes.',
  },
  {
    term: 'Gas flaring',
    category: 'Environment',
    definition:
      'The burning of associated gas produced with crude oil. Routine flaring wastes a fuel input and releases CO2, which is why Nigeria has set targets to end it.',
  },
  {
    term: 'Local content',
    category: 'Policy',
    definition:
      'Nigeria\'s policy requiring that Nigerian engineering, labour and services are used wherever reasonably available on projects in the country.',
  },
  {
    term: 'Dredging',
    category: 'Infrastructure',
    definition:
      'The removal of sediment from waterways to maintain navigable depth, commonly required to create or maintain shipping channels and berths.',
  },
  {
    term: 'Cylinder',
    category: 'Products',
    definition:
      'A pressure vessel used to store and transport LPG in small quantities, typically 3kg to 50kg sizes for domestic and commercial use.',
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
export const getLocation = (slug: string) => LOCATIONS.find((l) => l.slug === slug);
export const getTeamMember = (slug: string) => TEAM_MEMBERS.find((t) => t.slug === slug);