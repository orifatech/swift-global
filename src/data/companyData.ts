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

export interface ProjectSpecification {
  label: string;
  value: string;
}

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
  contractType?: string;
  verificationStatus?: string;
  highlights?: string[];
  specifications?: ProjectSpecification[];
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'gulf-petrochem-terminal',
    title: 'Petrochemical Facility Expansion & Equipment Procurement',
    sector: 'Energy & Petrochemical',
    location: 'Jebel Ali, United Arab Emirates',
    region: 'Middle East',
    year: '2023',
    scope: 'Turnkey EPC procurement of specialized high-pressure process vessels, alloy heat exchangers, process piping prefabrication, and technical Factory Acceptance Testing (FAT) expediting.',
    image: '/images/international-epc-site.webp',
    imageMobile: '/images/international-epc-site-mobile.webp',
    stats: '120,000 BPD Capacity • ASME Stamped',
    contractType: 'Turnkey EPC Equipment Package',
    verificationStatus: 'ASME Section VIII Certified',
    highlights: [
      'Procured 14 high-pressure API 650/620 storage units and duplex stainless steel reactor vessels',
      'Orchestrated multi-country ocean heavy-lift logistics with chartered semi-submersible vessels',
      'Conducted 100% radiographic weld testing and hydrostatic vessel pressure audits under ASME Section VIII',
      'Achieved zero punch-list delays during live refinery tie-in and commissioning'
    ],
    specifications: [
      { label: 'Throughput Capacity', value: '120,000 Barrels Per Day (BPD)' },
      { label: 'Procurement Scope', value: 'API Heat Exchangers, Process Columns, Pumps' },
      { label: 'Metallurgy', value: 'Duplex 2205 Stainless & Inconel 625 Clad' },
      { label: 'Quality Verification', value: 'ASME Section VIII Div 1 & 2 / API 510 Stamped' },
      { label: 'Staging Hub', value: 'Jebel Ali Free Zone (JAFZA) Bonded Yard' },
      { label: 'FAT Inspection', value: 'Third-Party Lloyd\'s Register Certified' }
    ]
  },
  {
    id: 'lagos-deepwater-staging',
    title: 'Deepwater Marine & Heavy Logistics Staging Terminal',
    sector: 'Marine & Logistics',
    location: 'Lekki Free Zone, Lagos, Nigeria',
    region: 'West Africa',
    year: '2023',
    scope: 'Port equipment sourcing, heavy-duty mobile harbor cranes, quayside structural integration, roll-on/roll-off (RoRo) ramps, and international freight consolidation.',
    image: '/images/global-logistics.webp',
    imageMobile: '/images/global-logistics-mobile.webp',
    stats: '3 Heavy Berths • 500k TEU Throughput',
    contractType: 'International Procurement & Port Integration',
    verificationStatus: 'Verified Maritime Delivery',
    highlights: [
      'Procured twin 120-ton Gottwald mobile harbor cranes and fleet of heavy reach stackers',
      'Engineered heavy container yard pavement and bollard tensioning anchoring for mega-vessels',
      'Established bonded logistics corridor with expedited customs clearance at Lekki Deep Sea Port',
      'Delivered turnkey quayside power supply, perimeter security, and high-mast solar lighting'
    ],
    specifications: [
      { label: 'Berth Deepwater Draft', value: '16.5 Meters Low-Water Datum' },
      { label: 'Container Capacity', value: '500,000+ TEU Annual Throughput' },
      { label: 'Equipment Sourced', value: 'Twin 120-Ton Mobile Harbor Cranes, 12 Kalmar Stackers' },
      { label: 'Marine Standards', value: 'PIANC Marine Guidelines / BS 6349 Maritime Works' },
      { label: 'Bonded Facility', value: 'Lekki Free Zone Custom Authority Clearances' },
      { label: 'Logistics Corridor', value: 'Dedicated West African Heavy-Haul Transit' }
    ]
  },
  {
    id: 'calgary-intermodal-depot',
    title: 'Intermodal Freight & Industrial Structural Depot',
    sector: 'Heavy Industrial',
    location: 'Calgary, Alberta, Canada',
    region: 'North America',
    year: '2023',
    scope: 'Global steel structure procurement, long-span heavy truss fabrication, automated overhead gantry systems, heavy equipment dispatch, and on-site EPC assembly.',
    image: '/images/heavy-equipment-mfg.webp',
    imageMobile: '/images/heavy-equipment-mfg-mobile.webp',
    stats: '240,000 sq.ft • Complete Turnkey Delivery',
    contractType: 'Design-Build EPC & Supply Chain',
    verificationStatus: 'Turnkey Commissioned',
    highlights: [
      'Sourced 2,800 metric tons of pre-engineered structural steel across global ISO-certified mills',
      'Engineered synchronized dual 30-ton crane runways for intermodal locomotive maintenance',
      'Executed full winterized construction logistics schedule in sub-zero Canadian temperatures',
      'Handed over facility 3 weeks ahead of scheduled rail carrier assumption date'
    ],
    specifications: [
      { label: 'Building Footprint', value: '240,000 sq.ft Enclosed Depot' },
      { label: 'Steel Tonnage', value: '2,800 Metric Tons Structural Steel' },
      { label: 'Overhead Gantry', value: 'Twin Synchronized 30-Ton Cranes' },
      { label: 'Design Codes', value: 'CSA S16 / National Building Code of Canada' },
      { label: 'Procurement Strategy', value: 'Direct Global Mill Sourcing with Factory Audits' },
      { label: 'QA/QC Protocol', value: 'Non-Destructive Testing (NDT) 100% Complete' }
    ]
  },
  {
    id: 'red-sea-refinery-upgrade',
    title: 'Industrial Turbine & Process Automation Upgrade',
    sector: 'Energy & Petrochemical',
    location: 'Yanbu Industrial City, Saudi Arabia',
    region: 'Middle East',
    year: '2024',
    scope: 'Procurement of high-efficiency gas turbine generator units, vibration monitoring instrumentation, explosion-proof switchgear, and technical FAT expediting.',
    image: '/images/industrial-plant.webp',
    imageMobile: '/images/industrial-plant-mobile.webp',
    stats: '450 MW Output • ISO 9001 QMS',
    contractType: 'Specialized Power Turbomachinery Procurement',
    verificationStatus: 'ISO 9001:2015 FAT Verified',
    highlights: [
      'Supplied heavy-duty aeroderivative gas turbine skid packages certified for high ambient temperatures',
      'Factory acceptance testing (FAT) witnessed by independent Saudi Aramco certified inspectors',
      'Pre-commissioning electrical harmonic analysis and synchronized busbar protection integration',
      'Reduced auxiliary plant fuel consumption by 11.4% with combined-cycle heat recovery'
    ],
    specifications: [
      { label: 'Power Rating', value: '450 MW Combined-Cycle Generation' },
      { label: 'Turbine Configuration', value: 'Twin SGT-800 Gas Turbine Skid Assemblies' },
      { label: 'Ambient Rating', value: 'Engineered for +52°C Arabian Gulf Conditions' },
      { label: 'Electrical Standards', value: 'IEC 60034 / IEEE 841 Hazardous Location' },
      { label: 'Expediting Origin', value: 'European OEM Audits & Direct Airfreight Dispatch' },
      { label: 'Commissioning Status', value: 'Live Grid Synchronization Completed' }
    ]
  },
  {
    id: 'guinea-bauxite-terminal',
    title: 'West African Deepwater Bulk Loading Terminal',
    sector: 'Marine & Logistics',
    location: 'Kamsar Port, Republic of Guinea',
    region: 'West Africa',
    year: '2024',
    scope: 'Procurement of continuous conveyor shiploader equipment, marine berthing dolphins, catenary mooring buoys, and transshipment barge fleets for bulk mineral export.',
    image: '/images/global-logistics.webp',
    imageMobile: '/images/global-logistics-mobile.webp',
    stats: '3,500 TPH Shiploader • Capesize Berthing',
    contractType: 'Turnkey Marine Bulk Handling Package',
    verificationStatus: 'Commissioned & Handed Over',
    highlights: [
      'Engineered and supplied 3,500 tons/hour telescopic luffing shiploader with dust containment',
      'Procured 4 heavy tugboat vessels and self-propelled transshipment barges for offshore loading',
      'Integrated solar-powered radar aids-to-navigation across coastal Guinea navigation channel',
      'Operated 18-month warranty maintenance and local crew operational training program'
    ],
    specifications: [
      { label: 'Loading Capacity', value: '3,500 Tons Per Hour (TPH) Continuous' },
      { label: 'Vessel Handling', value: 'Up to 180,000 DWT Capesize Bulk Carriers' },
      { label: 'Offshore Anchorage', value: '18 Nautical Miles Offshore Transshipment Zone' },
      { label: 'Marine Certification', value: 'Bureau Veritas (BV) Marine Classed' },
      { label: 'Logistics Fleet', value: '4 ASD Tugboats & 6 Bulk Barges' },
      { label: 'Environmental', value: 'Enclosed Telescopic Chute Dust Suppression' }
    ]
  },
  {
    id: 'al-jubail-cracking-unit',
    title: 'Al-Jubail Petrochemical Cracking & Compression Module',
    sector: 'Heavy Industrial',
    location: 'Al-Jubail Industrial City, Saudi Arabia',
    region: 'Middle East',
    year: '2023',
    scope: 'International sourcing of heavy-wall ethylene cracking furnace coils, cryogenic multi-stage compressor skids, heavy industrial valving, and high-integrity pipeline skids.',
    image: '/images/heavy-equipment-mfg.webp',
    imageMobile: '/images/heavy-equipment-mfg-mobile.webp',
    stats: '850,000 MTA Ethylene • ISO 14001',
    contractType: 'Major Capital Equipment Procurement',
    verificationStatus: 'API 617 Certified',
    highlights: [
      'Sourced high-temperature centrifugal cast radiant tubes meeting stringent HP-Nb microalloy specs',
      'Witnessed full cryogenic aero-performance string testing for centrifugal compressor trains',
      'Managed direct charter Antonov An-124 cargo flights for mission-critical compressor impellers',
      'Conducted on-site ultrasonic inspection during installation with zero baseline defects'
    ],
    specifications: [
      { label: 'Ethylene Output', value: '850,000 Metric Tons Per Annum (MTA)' },
      { label: 'Compressor Trains', value: 'Multi-Stage Centrifugal API 617 Trains' },
      { label: 'Radiant Coil Alloy', value: '35Cr-45Ni-Nb Centrifugally Cast Alloy' },
      { label: 'Quality Verification', value: 'API 617 / ASME Section VIII Div 2' },
      { label: 'Freight Expedition', value: 'Chartered Heavy-Lift Ocean & Cargo Airfreight' },
      { label: 'Safety Record', value: '1.2 Million Man-Hours Zero LTI' }
    ]
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
