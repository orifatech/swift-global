export interface NavLinkItem {
  label: string;
  href: string;
}

export interface CompanyEntity {
  name: string;
  legalName: string;
  domain: string;
  tagline: string;
  badgeText: string;
  primaryFocus: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  logoSvg: string;
  navLinks: NavLinkItem[];
  sisterCompany: {
    name: string;
    legalName: string;
    href: string;
    domain: string;
    subtitle: string;
    ctaLabel: string;
    description: string;
  };
}

export const COMPANY: CompanyEntity = {
  name: 'Swift Global Inc.',
  legalName: 'Swift Global Inc.',
  domain: 'swiftglobalinc.com',
  tagline: 'Engineering Procurement, Heavy Industrial & Turnkey EPC Execution',
  badgeText: 'International EPC & Procurement',
  primaryFocus: 'Heavy Equipment Sourcing, Industrial Facilities & Turnkey Project Delivery',
  description: 'Executing complex international equipment sourcing, technical vendor prequalification, industrial facility modernizations, and multi-model EPC delivery across North America, the Middle East, and West Africa.',
  email: 'info@swiftglobalinc.com',
  phone: '+1 (587) 566-3166',
  address: '1000 King Street West, Toronto, ON, M6K 3N1',
  logoSvg: '/images/swift-global-logo.svg',
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Sectors', href: '/sectors' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' }
  ],
  sisterCompany: {
    name: 'Swift Consult Inc.',
    legalName: 'Swift Consult Inc.',
    href: 'https://swiftconsultinc.com',
    domain: 'swiftconsultinc.com',
    subtitle: 'Structural & Civil Engineering Practice',
    ctaLabel: 'Visit Swift Consult Inc. →',
    description: 'Need licensed Canadian P.Eng structural calculations, Civil 3D site servicing, SWMM hydrology, or municipal building permits in North America?'
  }
};

export interface ServiceItem {
  number: string;
  title: string;
  shortDesc: string;
  imageDesktop: string;
  imageMobile: string;
  features: string[];
  keySpecs: { label: string; value: string }[];
}

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Engineering Procurement & Technical Sourcing',
    shortDesc: 'Strategic international equipment sourcing, technical bid leveling, quality assurance expediting, and global supply chain logistics for mission-critical capital projects.',
    imageDesktop: '/images/heavy-equipment-mfg.webp',
    imageMobile: '/images/heavy-equipment-mfg-mobile.webp',
    features: [
      'Material & heavy machinery sourcing with technical bid leveling',
      'OEM vendor prequalification, Factory Acceptance Testing (FAT), and expediting',
      'Direct support for EPC, Design-Build, and Construction Management projects',
      'Cross-border customs logistics, freight consolidation, and heavy-lift chartering'
    ],
    keySpecs: [
      { label: 'Scale', value: 'Heavy Industrial & Energy' },
      { label: 'Geographies', value: 'North America, Middle East, Africa' }
    ]
  },
  {
    number: '02',
    title: 'Industrial Facility Modernization & Turnkey EPC',
    shortDesc: 'Multidisciplinary engineering, high-pressure equipment installation, and turnkey EPC delivery for high-output processing and manufacturing facilities.',
    imageDesktop: '/images/international-epc-site.webp',
    imageMobile: '/images/international-epc-site-mobile.webp',
    features: [
      'Industrial plant process optimization & brownfield retrofits',
      'High-pressure vessels, distillation columns, and process piping installation',
      'Safety audits, hazardous area classification, and mechanical commissioning',
      'Turnkey delivery from procurement through commercial operations date (COD)'
    ],
    keySpecs: [
      { label: 'Compliance', value: 'ASME Section VIII / API / ISO 9001' },
      { label: 'Delivery Model', value: 'Turnkey EPC & CM at-Risk' }
    ]
  },
  {
    number: '03',
    title: 'Quality Oversight, Inspection & Testing',
    shortDesc: 'Rigorous vendor surveillance, third-party Non-Destructive Testing (NDT), and mill certification audits ensuring zero quality drift before shipment.',
    imageDesktop: '/images/industrial-plant.webp',
    imageMobile: '/images/industrial-plant-mobile.webp',
    features: [
      'Independent witness inspections during critical manufacturing hold-points',
      'Non-Destructive Testing (NDT): Radiographic, Ultrasonic, Magnetic Particle',
      'Material test report (MTR) verification against ASTM, CSA, and EN standards',
      'Comprehensive Quality Dossier compilation for regulatory handoff'
    ],
    keySpecs: [
      { label: 'Standards', value: 'ISO 9001:2015 / ASME' },
      { label: 'Verification', value: '100% Traceable MTRs' }
    ]
  },
  {
    number: '04',
    title: 'Global Supply Chain Logistics & Port Staging',
    shortDesc: 'End-to-end maritime chartering, breakbulk forwarding, export compliance, and secure bonded staging at key international transshipment hubs.',
    imageDesktop: '/images/global-logistics.webp',
    imageMobile: '/images/global-logistics-mobile.webp',
    features: [
      'Incoterms 2020 contract structuring (FOB, CIF, DDP, DAP)',
      'Heavy-lift route surveys, marine barging, and specialized axle transport',
      'Bonded warehouse management and customs expedited clearance',
      'Real-time GPS tracking and milestone schedule contingency buffers'
    ],
    keySpecs: [
      { label: 'Incoterms', value: 'Full 2020 Matrix' },
      { label: 'Hubs', value: 'Jebel Ali, Lekki, Rotterdam, Houston' }
    ]
  },
  {
    number: '05',
    title: 'Project & Construction Management',
    shortDesc: 'End-to-end owner representation and general contracting leadership, guaranteeing cost predictability, rigorous safety culture, and aggressive schedule control.',
    imageDesktop: '/images/commercial-tower.webp',
    imageMobile: '/images/commercial-tower-mobile.webp',
    features: [
      'Earned value management (EVM) and critical path scheduling (Primavera P6)',
      'Contractor management, HSE compliance, and OSHA standard safety enforcement',
      'Commissioning management, punch-list closeout, and warranty handover',
      'Risk mitigation matrices tailored to emerging market infrastructure'
    ],
    keySpecs: [
      { label: 'Methodology', value: 'EVM / Primavera P6' },
      { label: 'Safety Record', value: 'Zero Lost Time Incidents (LTI)' }
    ]
  }
];

export interface SectorItem {
  id: string;
  title: string;
  summary: string;
  imageDesktop: string;
  imageMobile: string;
  bulletPoints: string[];
  stats: { label: string; value: string }[];
}

export const SECTORS: SectorItem[] = [
  {
    id: 'heavy-industrial',
    title: 'Industrial Facilities & Processing Plants',
    summary: 'Turnkey equipment sourcing, mechanical piping erection, and electrical automation for heavy chemical, metallurgical, and manufacturing complexes.',
    imageDesktop: '/images/international-epc-site.webp',
    imageMobile: '/images/international-epc-site-mobile.webp',
    bulletPoints: [
      'Chemical processing and petrochemical facility expansions',
      'Rotary equipment, high-pressure boilers, and turbine sourcing',
      'Facility modernization, electrical substations, and SCADA automation',
      'Full lifecycle engineering procurement and construction management'
    ],
    stats: [
      { label: 'Uptime Reliability', value: '99.8%' },
      { label: 'Facilities Executed', value: '18+ Plants' }
    ]
  },
  {
    id: 'marine-logistics',
    title: 'Deepwater Marine Terminals & Logistics Hubs',
    summary: 'Specialized equipment procurement, quayside crane assembly, and container yard infrastructure for high-throughput international maritime trade gateways.',
    imageDesktop: '/images/global-logistics.webp',
    imageMobile: '/images/global-logistics-mobile.webp',
    bulletPoints: [
      'Ship-to-Shore (STS) and Rubber-Tired Gantry (RTG) crane procurement',
      'Quay structural equipment and marine berthing fender systems',
      'Intermodal railway siding and heavy container pavement logistics',
      'Free trade zone customs bonded staging and warehousing'
    ],
    stats: [
      { label: 'Berth Capacity', value: '3 Heavy Berths' },
      { label: 'Annual Throughput', value: '500,000+ TEU' }
    ]
  },
  {
    id: 'energy-petrochem',
    title: 'Energy, Petrochemical & Pipeline Terminals',
    summary: 'Engineering procurement and turnkey EPC execution for bulk liquid storage tanks, process manifolds, pumping stations, and refinery modernizations.',
    imageDesktop: '/images/industrial-plant.webp',
    imageMobile: '/images/industrial-plant-mobile.webp',
    bulletPoints: [
      'API 650 storage tanks and high-pressure manifold fabrication',
      'Crude handling, blending units, and custody transfer metering',
      'Environmental vapor recovery and flare stack modernization',
      'Strict compliance with ASME Section VIII and API 510/570'
    ],
    stats: [
      { label: 'Terminal Capacity', value: '120,000 BPD' },
      { label: 'Quality Verification', value: 'ASME Certified' }
    ]
  }
];

export interface ProjectItem {
  id: string;
  title: string;
  sector: 'Heavy Industrial' | 'Marine & Logistics' | 'Energy & Petrochemical';
  location: string;
  region: 'Middle East' | 'West Africa' | 'North America';
  year: string;
  scope: string;
  image: string;
  imageMobile: string;
  stats: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'gulf-petrochem-terminal',
    title: 'Petrochemical Facility Expansion & Equipment Procurement',
    sector: 'Energy & Petrochemical',
    location: 'Jebel Ali, United Arab Emirates',
    region: 'Middle East',
    year: '2023',
    scope: 'Turnkey EPC procurement of specialized high-pressure process vessels, alloy heat exchangers, process piping fabrication, and FAT inspection.',
    image: '/images/international-epc-site.webp',
    imageMobile: '/images/international-epc-site-mobile.webp',
    stats: '120,000 BPD Capacity • ASME Stamped'
  },
  {
    id: 'lagos-deepwater-staging',
    title: 'Deepwater Marine & Heavy Logistics Staging Terminal',
    sector: 'Marine & Logistics',
    location: 'Lekki Free Zone, Lagos, Nigeria',
    region: 'West Africa',
    year: '2023',
    scope: 'Port equipment sourcing, heavy-duty mobile harbor cranes, quayside structural integration, and international freight consolidation.',
    image: '/images/global-logistics.webp',
    imageMobile: '/images/global-logistics-mobile.webp',
    stats: '3 Heavy Berths • 500k TEU Throughput'
  },
  {
    id: 'calgary-intermodal-depot',
    title: 'Intermodal Freight & Industrial Structural Depot',
    sector: 'Heavy Industrial',
    location: 'Calgary, Alberta, Canada',
    region: 'North America',
    year: '2023',
    scope: 'Global steel structure procurement, long-span truss fabrication, automated overhead crane systems, and on-site EPC assembly.',
    image: '/images/heavy-equipment-mfg.webp',
    imageMobile: '/images/heavy-equipment-mfg-mobile.webp',
    stats: '240,000 sq.ft • Complete Turnkey Delivery'
  },
  {
    id: 'red-sea-refinery-upgrade',
    title: 'Industrial Turbine & Process Automation Upgrade',
    sector: 'Energy & Petrochemical',
    location: 'Yanbu Industrial City, Saudi Arabia',
    region: 'Middle East',
    year: '2024',
    scope: 'Procurement of high-efficiency gas turbine units, vibration monitoring instrumentation, and technical FAT expediting.',
    image: '/images/industrial-plant.webp',
    imageMobile: '/images/industrial-plant-mobile.webp',
    stats: '450 MW Output • ISO 9001 QMS'
  }
];

export const GLOBAL_REGIONS = [
  {
    region: 'Canada & USA',
    flag: '🇨🇦 🇺🇸',
    headquarters: 'North American Corporate HQ: Toronto, ON',
    description: 'Procurement management, OEM technical audits, North American equipment dispatch, and project management oversight.',
    keyHubs: ['Toronto, ON', 'Calgary, AB', 'Houston, TX'],
    leadRole: 'Corporate Leadership & Technical Audits'
  },
  {
    region: 'Middle East',
    flag: '🇦🇪 🇸🇦',
    headquarters: 'Regional Operations Hub: Dubai, UAE',
    description: 'High-capacity industrial equipment sourcing, petrochemical refinery modernizations, and cross-border Middle East logistics.',
    keyHubs: ['Dubai, UAE', 'Abu Dhabi', 'Doha, Qatar', 'Yanbu, KSA'],
    leadRole: 'Procurement & Petrochemical Operations'
  },
  {
    region: 'West Africa',
    flag: '🇳🇬 🇬🇭',
    headquarters: 'Regional EPC Staging Hub: Lagos, Nigeria',
    description: 'Heavy industrial supply chain, deepwater port staging, infrastructure logistics, and turnkey EPC execution.',
    keyHubs: ['Lagos (Lekki Free Zone)', 'Accra, Ghana', 'Port Harcourt'],
    leadRole: 'Turnkey EPC & Port Operations'
  }
];
