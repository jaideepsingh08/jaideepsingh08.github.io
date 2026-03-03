// Import project images
import unitxLogo from '@/assets/logos/unitx-logo.jpg';
import sensoryLabsImg from '@/assets/projects/sensory-labs.png';
import sensoryLabsImg2 from '@/assets/projects/sensory-labs-2.png';
import sensoryLabsImg3 from '@/assets/projects/sensory-labs-3.png';
import sensoryLabsImg4 from '@/assets/projects/sensory-labs-4.png';
import sensoryLabsImg5 from '@/assets/projects/sensory-labs-5.jpg';
import millImg from '@/assets/projects/mill.jpg';
import millImg2 from '@/assets/projects/mill-2.jpg';
import millImg3 from '@/assets/projects/mill-3.jpg';
import millImg4 from '@/assets/projects/mill-4.jpg';
import ziplineImg from '@/assets/projects/zipline.webp';
import ziplineImg2 from '@/assets/projects/zipline-2.webp';
import ziplineImg3 from '@/assets/projects/zipline-3.jpg';
import unitxImg from '@/assets/projects/unitx.jpg';
import unitxImg2 from '@/assets/projects/unitx-2.jpg';
import unitxImg3 from '@/assets/projects/unitx-3.jpg';
import unitxImg4 from '@/assets/projects/unitx-4.jpg';
import bumblebeeImg from '@/assets/projects/bumblebee.jpg';
import bumblebeeImg2 from '@/assets/projects/bumblebee-2.jpg';
import bumblebeeImg3 from '@/assets/projects/bumblebee-3.jpg';
import bumblebeeImg4 from '@/assets/projects/bumblebee-4.jpg';
import bumblebeeImg5 from '@/assets/projects/bumblebee-5.jpg';
import bumblebeeImg6 from '@/assets/projects/bumblebee-6.jpg';
import bumblebeeImg7 from '@/assets/projects/bumblebee-7.jpg';
import bumblebeeImg8 from '@/assets/projects/bumblebee-8.jpg';
import bumblebeeImg9 from '@/assets/projects/bumblebee-9.png';
import amrImg from '@/assets/projects/amr.jpg';
import amrImg2 from '@/assets/projects/amr-2.jpg';
import amrImg3 from '@/assets/projects/amr-3.jpg';
import amrImg4 from '@/assets/projects/amr-4.jpg';
import amrImg5 from '@/assets/projects/amr-5.jpg';
import amrImg6 from '@/assets/projects/amr-6.jpg';
import amrImg7 from '@/assets/projects/amr-7.jpg';
import amrImg8 from '@/assets/projects/amr-8.webp';
import amrImg9 from '@/assets/projects/amr-9.jpg';
import butlerXlImg from '@/assets/projects/butler-xl.jpg';
import butlerXlImg2 from '@/assets/projects/butler-xl-2.jpg';
import butlerXlImg3 from '@/assets/projects/butler-xl-3.jpg';
import butlerXlImg4 from '@/assets/projects/butler-xl-4.jpg';
import butlerXlImg5 from '@/assets/projects/butler-xl-5.jpg';
import butlerXlImg6 from '@/assets/projects/butler-xl-6.jpg';
import butlerXlImg7 from '@/assets/projects/butler-xl-7.jpg';
import fiatImg from '@/assets/projects/fiat.jpg';
import fiatImg2 from '@/assets/projects/fiat-2.jpg';
import fiatImg3 from '@/assets/projects/fiat-3.jpg';
import fiatImg4 from '@/assets/projects/fiat-4.jpg';
import fiatImg5 from '@/assets/projects/fiat-5.jpg';
import fiatImg6 from '@/assets/projects/fiat-6.jpg';
import fiatImg7 from '@/assets/projects/fiat-7.jpg';
import bajaImg from '@/assets/projects/baja.jpg';
import bajaImg2 from '@/assets/projects/baja-2.jpg';
import bajaImg3 from '@/assets/projects/baja-3.jpg';
import bajaImg4 from '@/assets/projects/baja-4.jpg';
import igcImg from '@/assets/projects/igc.jpg';
import igcImg2 from '@/assets/projects/igc-2.jpg';
import igcImg3 from '@/assets/projects/igc-3.jpg';
import igcImg4 from '@/assets/projects/igc-4.jpg';
import efficycleImg from '@/assets/projects/efficycle.jpg';
import efficycleImg2 from '@/assets/projects/efficycle-2.jpg';
import efficycleImg3 from '@/assets/projects/efficycle-3.jpg';
import efficycleImg4 from '@/assets/projects/efficycle-4.jpg';
import rcRacingImg from '@/assets/projects/rc-racing.jpg';
import rcRacingImg2 from '@/assets/projects/rc-racing-2.jpg';
import rcRacingImg3 from '@/assets/projects/rc-racing-3.jpg';
import rcRacingImg4 from '@/assets/projects/rc-racing-4.jpg';
import scooterImg from '@/assets/projects/scooter.jpg';
import scooterImg2 from '@/assets/projects/scooter-2.jpg';
import scooterImg3 from '@/assets/projects/scooter-3.jpg';
import scooterImg4 from '@/assets/projects/scooter-4.jpg';
import bevAnalysisImg from '@/assets/projects/bev-analysis.jpg';
import bevAnalysisImg2 from '@/assets/projects/bev-analysis-2.jpg';
import bevAnalysisImg3 from '@/assets/projects/bev-analysis-3.jpg';
import bevAnalysisImg4 from '@/assets/projects/bev-analysis-4.jpg';
import marsImg from '@/assets/projects/mars.jpg';
import marsImg2 from '@/assets/projects/mars-2.jpg';
import marsImg3 from '@/assets/projects/mars-3.jpg';
import marsImg4 from '@/assets/projects/mars-4.jpg';
import ventilatorImg from '@/assets/projects/ventilator.jpg';
import ventilatorImg2 from '@/assets/projects/ventilator-2.jpg';
import ventilatorImg3 from '@/assets/projects/ventilator-3.jpg';
import ventilatorImg4 from '@/assets/projects/ventilator-4.jpg';

export type ProjectCategory = 'professional' | 'academic' | 'personal';

export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  category: ProjectCategory;
  description: string;
  fullDescription: string;
  highlights: string[];
  technologies: string[];
  image: string;
  gallery?: string[];
  year: string;
  company?: string;
  role?: string;
  hidden?: boolean;
}

export const projects: Project[] = [
  // Professional Company Projects
  {
    id: 'sensory-labs',
    title: 'Sensory Labs - Tactile Sensing for Physical AI',
    shortTitle: 'Sensory Labs Tactile Sensing',
    category: 'professional',
    description: 'Founded and led a deep-tech startup building multimodal tactile sensing hardware to give robots human-like touch perception for industrial and physical AI applications.',
    fullDescription: `Founded Sensory Labs to address a critical gap in robotics: the absence of reliable, high-bandwidth tactile sensing. While computer vision has matured rapidly, manipulation tasks in unstructured environments still fail because robots cannot feel what they are handling. Sensory Labs was built to close that gap.

Architected the full hardware and firmware stack for multimodal tactile sensors that fuse pressure, shear, proximity, and thermal data into a unified perception layer. Designed sensor modules for integration into industrial grippers, robotic hands, and custom end-effectors—targeting applications in manufacturing QC, bin picking, and dexterous assembly.

Drove the company from incorporation through initial customer discovery, securing early partnerships with robotics integrators and research labs. Defined the product roadmap, led mechanical and electrical prototyping, and managed relationships with MEMS fabrication partners. The venture operated at the frontier of physical AI—an emerging space now attracting significant capital and attention from major robotics companies.`,
    highlights: [
      'Founded and served as CTO—owned product vision, technical architecture, and go-to-market strategy',
      'Designed multimodal tactile sensor hardware fusing pressure, shear, thermal, and proximity modalities',
      'Developed sensor integration frameworks for industrial grippers and robotic end-effectors',
      'Secured early partnerships with robotics integrators and university research labs'
    ],
    technologies: ['Tactile Sensing', 'Physical AI', 'Multimodal Systems', 'Robotics', 'Hardware Prototyping'],
    image: sensoryLabsImg,
    gallery: [sensoryLabsImg, sensoryLabsImg2, sensoryLabsImg3, sensoryLabsImg4],
    year: '2024 - 2025',
    company: 'Sensory Labs',
    role: 'Founder & CTO'
  },
  {
    id: 'unitx',
    title: 'UnitX - AI Visual Inspection Systems',
    shortTitle: 'UnitX Visual Inspection',
    category: 'professional',
    description: 'Directed hardware engineering for AI-powered inline inspection systems deployed at GE, Teijin, and other Tier-1 manufacturers—inspecting $6B+ in products annually.',
    fullDescription: `Joined UnitX as Director of Engineering to scale the hardware platform behind one of the most deployed AI visual inspection systems in North American manufacturing. UnitX systems run continuously at facilities operated by GE, Teijin, Heliene, Linamar, and other Tier-1 manufacturers, with over 5.7 million cumulative hours of operation.

Owned the full hardware development lifecycle—from optical system architecture and industrial enclosure design through supplier qualification, DFM, and field deployment. Built and managed a cross-functional engineering team spanning mechanical, electrical, and optical disciplines. Drove standardization of the inspection platform to reduce deployment time by 3x while maintaining sub-millimeter imaging precision across diverse product geometries.

Established hardware reliability programs, environmental qualification protocols, and factory acceptance testing standards that enabled UnitX to guarantee 24/7/365 uptime in harsh manufacturing environments. The systems I architected achieved 9x lower defect escape rates compared to manual inspection—directly improving yield and reducing scrap costs for customers processing billions of dollars in product annually.`,
    highlights: [
      'Directed hardware engineering org—hired, mentored, and managed mechanical, electrical, and optical engineers',
      'Architected inspection platform deployed across 5.7M+ cumulative operating hours at Tier-1 manufacturers',
      'Drove 3x reduction in deployment cycle time through hardware standardization and modular design',
      'Delivered 9x improvement in defect escape rate vs. manual inspection for GE, Teijin, and others'
    ],
    technologies: ['Computer Vision', 'AI/ML', 'Industrial Hardware', 'Manufacturing Systems', 'Quality Control'],
    image: unitxImg,
    gallery: [unitxImg, unitxImg2, unitxImg3, unitxImg4],
    year: '2023 - 2024',
    company: 'UnitX',
    role: 'Director of Engineering'
  },
  {
    id: 'mill',
    title: 'Mill - Kitchen Food Recycler',
    shortTitle: 'Mill Food Recycler',
    category: 'professional',
    description: 'Founding engineer and Head of Systems Engineering at Mill (TIME\'s Best Inventions 2024). Architected hardware from pre-seed through Series C, filed 18 patents, led UL/FCC certification and contract manufacturing ramp.',
    fullDescription: `Joined Mill as a founding engineer and grew into Head of Systems Engineering, owning the entire hardware and firmware stack for a first-of-its-kind consumer appliance—from a blank sheet of paper through Series C ($100M+ raised). Mill's kitchen food recycler was recognized as one of TIME's 200 Best Inventions of 2024.

Architected the electromechanical systems, thermal management, and embedded controls for both Gen-1 and Gen-2 products. Led the full certification program from scratch—navigating UL 60335 (US & Canada) and FCC compliance for a high-power, internet-connected appliance with novel drying, grinding, and dehydration subsystems. This was not an incremental update to an existing product category; every safety standard had to be negotiated and validated against a new product paradigm.

Owned the manufacturing scale-up strategy end-to-end: scoped and qualified contract manufacturers in the US and Mexico, established incoming quality standards, and managed the proto-to-mass-production transition. Filed 18 patents covering novel mechanical, thermal, and sensing technologies. Built and led a multidisciplinary team of mechanical, electrical, firmware, and test engineers through rapid iteration cycles while maintaining rigorous reliability targets.`,
    highlights: [
      'Founding engineer through Series C ($100M+ raised)—owned hardware architecture, reliability, and certification',
      'Filed 18 patents spanning mechanical, thermal, and sensing innovations',
      'Led UL 60335 and FCC certification programs from scratch for a novel high-power consumer appliance',
      'Scoped, qualified, and ramped contract manufacturers across US and Mexico from prototype to volume production'
    ],
    technologies: ['Consumer Hardware', 'Systems Architecture', 'UL/FCC Certification', 'DFM/DFA', 'Manufacturing Scale-up'],
    image: millImg,
    gallery: [millImg, millImg2, millImg3, millImg4],
    year: '2021 - 2023',
    company: 'Mill',
    role: 'Head of Systems Engineering'
  },
  {
    id: 'zipline',
    title: 'Zipline - Platform 2 Ground Systems',
    shortTitle: 'Zipline Ground Systems',
    category: 'professional',
    description: 'Product Architect on the founding team for Zipline\'s Platform 2—defined ground systems architecture for the next-generation autonomous delivery network (1M+ deliveries globally).',
    fullDescription: `Recruited onto the founding leadership team for Zipline Platform 2, the company's next-generation autonomous logistics system designed to extend drone delivery from rural healthcare into dense suburban and commercial markets. Zipline has since completed over 1 million autonomous deliveries across multiple continents—Platform 2 is the architecture that scales that capability into everyday commerce.

Served as Product Architect for ground systems, reporting directly to co-founder Keenan Wyrobek. Translated high-level product and business objectives into concrete technical requirements, system-level trade studies, and hardware architecture proposals. Conducted on-site audits of prospective shipper facilities to identify integration constraints, space requirements, and operational workflows that shaped system design.

Developed parametric simulation tools to model ground system sizing across demand scenarios, throughput targets, and unit economics. These models became the quantitative foundation for configuration decisions, capital expenditure planning, and customer deployment proposals. The work defined the hardware systems architecture that Zipline would build against as Platform 2 moved from concept into production.`,
    highlights: [
      'Founding team for Platform 2—defined ground systems architecture alongside Zipline\'s co-founder',
      'Translated product strategy into technical requirements, system trade studies, and architecture proposals',
      'Built parametric simulation tools for system sizing, throughput modeling, and unit economics',
      'Conducted shipper site audits and developed integration frameworks for diverse deployment scenarios'
    ],
    technologies: ['Systems Architecture', 'Simulation Modeling', 'Hardware Integration', 'Logistics Systems', 'Autonomous Delivery'],
    image: ziplineImg,
    gallery: [ziplineImg, ziplineImg2, ziplineImg3],
    year: '2020 - 2021',
    company: 'Zipline',
    role: 'Product Architect & Engineering Lead'
  },
  {
    id: 'low-cost-ventilator',
    title: 'Low Cost Ventilator Design',
    shortTitle: 'Low Cost Ventilator',
    category: 'personal',
    description: 'Independently designed a sub-$500 mechanical ventilator targeting deployment in resource-constrained healthcare systems across developing regions.',
    fullDescription: `Independently designed a low-cost mechanical ventilator system during the COVID-19 pandemic, targeting a bill-of-materials under $500—roughly 1/50th the cost of conventional ICU ventilators. The goal was a device that could be manufactured with locally available components and assembled without specialized tooling, enabling rapid deployment in regions with limited healthcare infrastructure.

Developed the pneumatic circuit, pressure regulation system, and fail-safe mechanisms from first principles. Designed for compliance with key parameters from the UK MHRA Rapidly Manufactured Ventilator System (RMVS) specification, including tidal volume control, PEEP regulation, and alarm systems. Prioritized design-for-manufacture using off-the-shelf components and standard fabrication processes to enable decentralized production.`,
    highlights: [
      'Designed complete ventilator system at <$500 BOM—1/50th the cost of conventional ICU units',
      'Engineered pneumatic circuit with tidal volume control, PEEP regulation, and fail-safe alarms',
      'Targeted compliance with UK MHRA RMVS specification for emergency ventilator systems',
      'Optimized for decentralized manufacturing using off-the-shelf components and standard processes'
    ],
    technologies: ['Medical Devices', 'Low-Cost Design', 'Pneumatic Systems', 'Healthcare Engineering', 'DFM'],
    image: ventilatorImg,
    gallery: [ventilatorImg, ventilatorImg2, ventilatorImg3, ventilatorImg4],
    year: '2020',
    role: 'Personal Project'
  },
  // Original Portfolio Projects
  {
    id: 'bumblebee-spaces',
    title: 'Bumblebee Spaces - Robotic Furniture',
    shortTitle: 'Bumblebee Spaces Robotic Furniture',
    category: 'professional',
    description: 'Engineered ceiling-mounted robotic furniture systems that double usable floor space in urban apartments—designed for 10,000+ cycle life, silent operation, and residential safety certification.',
    fullDescription: `Bumblebee Spaces built AI-controlled robotic furniture that stores beds, desks, closets, and storage modules in the ceiling and deploys them on command—effectively doubling usable floor space in urban apartments. Featured in Dezeen, TechCrunch, and backed by prominent Silicon Valley investors.

Led mechanical design and systems integration for the robotic lift modules, including the structural frame, linear actuation system, cable management, and safety interlocks. Each module needed to support 200+ lbs of payload, operate near-silently (<40 dB), and survive 10,000+ deployment cycles in a residential environment where failure is not an option—these systems operate directly above people.

Developed the sensor suite and safety architecture, including load cells, limit switches, and obstruction detection systems that meet residential safety requirements. Collaborated closely with firmware and controls engineers to integrate mechanical systems with the AI-driven space management platform, enabling app-controlled deployment with FaceID authentication and real-time inventory tracking of stored objects.`,
    highlights: [
      'Designed robotic lift modules supporting 200+ lb payloads with <40 dB operation and 10,000+ cycle life',
      'Engineered multi-layer safety architecture: load cells, obstruction detection, and mechanical interlocks',
      'Integrated mechanical systems with AI-driven controls, app-based deployment, and FaceID authentication',
      'Delivered production-ready hardware for real residential installations in San Francisco apartments'
    ],
    technologies: ['Robotics', 'Mechanical Design', 'Consumer Products', 'Safety Systems', 'Embedded Systems'],
    image: bumblebeeImg,
    gallery: [bumblebeeImg, bumblebeeImg2, bumblebeeImg3, bumblebeeImg4, bumblebeeImg5, bumblebeeImg6, bumblebeeImg7, bumblebeeImg8, bumblebeeImg9],
    year: '2019 - 2020',
    company: 'Bumblebee Spaces',
    role: 'Mechanical Engineer'
  },
  {
    id: 'autonomous-mobile-robot',
    title: 'GreyOrange - Warehouse Robot M',
    shortTitle: 'GreyOrange Warehouse Robot M',
    category: 'professional',
    description: 'Led complete mechanical architecture of the GreyOrange Butler AMR—a goods-to-person warehouse robot deployed across fulfillment centers globally for companies like IKEA and Flipkart.',
    fullDescription: `Led the complete mechanical design of the GreyOrange Butler, an autonomous mobile robot (AMR) that became one of the most widely deployed goods-to-person warehouse automation platforms globally. GreyOrange systems are used by major retailers and logistics operators including IKEA, Flipkart, and XPO Logistics across fulfillment centers in Asia, Europe, and North America.

Owned the full mechanical architecture from blank-sheet concept through production release: chassis structure, drivetrain integration, payload interface, and rack-engagement mechanism. The Butler navigates autonomously under warehouse racking, lifts and transports mobile racks weighing up to 500 kg to human pick stations—eliminating the need for workers to walk miles through warehouse aisles.

Executed rigorous structural optimization using FEA to balance payload capacity against weight and cost, achieving a platform light enough for efficient battery operation while rigid enough to maintain navigation accuracy under full load. Designed for high-volume manufacturing with sheet metal construction, modular subassemblies, and field-serviceable components. The architecture I developed became the foundation platform for multiple product variants and payload configurations.`,
    highlights: [
      'Owned end-to-end mechanical architecture of the Butler AMR—from concept through production tooling release',
      'Platform deployed globally at IKEA, Flipkart, XPO Logistics, and other major fulfillment operators',
      'Designed chassis, drivetrain, and rack-engagement system for 500 kg payload capacity',
      'Optimized structure via FEA for weight, stiffness, and high-volume sheet metal manufacturing'
    ],
    technologies: ['Mechanical Design', 'Robotics', 'SolidWorks', 'FEA', 'DFM/DFA'],
    image: amrImg7,
    gallery: [amrImg7, amrImg6, amrImg8, amrImg9, amrImg5, amrImg, amrImg2, amrImg3, amrImg4],
    year: '2015 - 2016',
    company: 'GreyOrange',
    role: 'Lead Mechanical Engineer'
  },
  {
    id: 'butler-xl',
    title: 'GreyOrange - Warehouse Robot XL',
    shortTitle: 'GreyOrange Warehouse Robot XL',
    category: 'professional',
    description: 'Architected the Butler XL heavy-payload variant—scaling the AMR platform from 500 kg to 1,000+ kg capacity while preserving maneuverability and fleet compatibility.',
    fullDescription: `Promoted to Senior Mechanical Engineer to lead the design of the Butler XL, a heavy-duty variant of GreyOrange's autonomous mobile robot platform engineered for industrial-scale payloads exceeding 1,000 kg. The XL addressed demand from large 3PL and e-commerce fulfillment operators who needed to automate heavier rack configurations without sacrificing fleet density or navigation precision.

Fundamentally re-architected the chassis, drivetrain, and power systems to handle double the payload of the standard Butler while maintaining compatibility with existing fleet management software and warehouse infrastructure. This required advanced structural analysis, redesigned drive modules with higher-torque motors, and an upgraded battery and thermal management system to sustain multi-shift operation under increased mechanical loads.

Solved critical engineering trade-offs between payload capacity, turning radius, and floor loading—ensuring the XL could operate in the same aisle widths as the smaller platform. Designed for manufacturability at GreyOrange's production facility, using shared subassemblies with the standard Butler where possible to minimize supply chain complexity.`,
    highlights: [
      'Architected heavy-payload AMR variant supporting 1,000+ kg—double the standard platform capacity',
      'Redesigned drivetrain, power, and thermal systems for multi-shift industrial operation',
      'Maintained same aisle-width compatibility as standard Butler for seamless fleet integration',
      'Maximized manufacturing commonality with standard platform to reduce supply chain complexity'
    ],
    technologies: ['Heavy Robotics', 'Industrial Design', 'Structural Analysis', 'Power Systems', 'Thermal Management'],
    image: butlerXlImg7,
    gallery: [butlerXlImg7, butlerXlImg5, butlerXlImg6, butlerXlImg, butlerXlImg2, butlerXlImg3, butlerXlImg4],
    year: '2016 - 2017',
    company: 'GreyOrange',
    role: 'Senior Mechanical Engineer'
  },
  {
    id: 'fiat-closures',
    title: 'Fiat Chrysler - Automotive Design & Manufacturing',
    shortTitle: 'Fiat Chrysler',
    category: 'professional',
    description: 'Two engineering roles at FCA: drove BIW assembly line automation from 27% to 65% efficiency for Jeep Compass production, and published CAE durability research at SAE World Congress 2016.',
    fullDescription: `Held two engineering roles at Fiat Chrysler Automobiles (FCA) India, spanning manufacturing technology and CAE durability analysis across the company's most strategically important vehicle programs.

As Manufacturing Technologist, owned process optimization across Engine Manufacturing and Body-in-White (BIW) assembly divisions. Stood up a temporary BIW facility that achieved 300+ units/day output for Fiat Punto and Linea production. Led the automation strategy for the right-hand-drive Jeep Compass BIW line—a flagship program under FCA's "Made in India" initiative—driving build efficiency from 27% to 65% through robotic cell redesign, fixture optimization, and cycle time reduction. Also supported BIW process development for the Tata Nexon contract manufacturing line.

As CAE Engineer, developed advanced finite element models for automotive closure durability (doors, hoods, tailgates), reducing computation time by 40% while improving correlation accuracy by 12%. Conducted structural analysis, NVH characterization, and fatigue life prediction using ANSYS and HyperMesh. Research on closure durability methodologies was presented at SAE World Congress 2016 and published in the SAE International Journal—a peer-reviewed venue for automotive engineering.`,
    highlights: [
      'Drove BIW assembly automation from 27% to 65% efficiency for Jeep Compass "Made in India" program',
      'Stood up temporary BIW facility achieving 300+ units/day for Fiat Punto/Linea production',
      'Developed FEA models reducing computation time 40% and improving accuracy 12% for closure durability',
      'Published research at SAE World Congress 2016 in the SAE International Journal (peer-reviewed)'
    ],
    technologies: ['Manufacturing Engineering', 'BIW Assembly', 'Robotics', 'ANSYS', 'HyperMesh', 'NVH Analysis', 'Process Optimization'],
    image: fiatImg5,
    gallery: [fiatImg5, fiatImg, fiatImg2, fiatImg3, fiatImg4, fiatImg6, fiatImg7],
    year: '2014 - 2015',
    company: 'Fiat Chrysler Automobiles',
    role: 'Manufacturing Technologist & CAE Engineer'
  },
  {
    id: 'sae-baja',
    title: 'SAE Baja - Chassis & Suspension Design',
    shortTitle: 'SAE Baja Racing',
    category: 'academic',
    description: 'Designed chassis and suspension systems for off-road racing vehicle competing in SAE Baja series.',
    fullDescription: `Led the chassis and suspension design for our university's SAE Baja off-road racing vehicle. The competition challenges student teams to design, build, and race single-seat off-road vehicles that can survive brutal terrain and aggressive driving.

This was my introduction to real vehicle dynamics and the art of designing for extreme conditions. Every gram matters, every weld must be perfect, and the vehicle must survive impacts that would destroy a road car.`,
    highlights: [
      'Complete chassis design for off-road competition',
      'Suspension geometry optimization for terrain',
      'Lightweight design with structural integrity',
      'Hands-on fabrication and testing'
    ],
    technologies: ['Vehicle Dynamics', 'Chassis Design', 'Suspension Design', 'Welding', 'Competition Engineering'],
    image: bajaImg,
    gallery: [bajaImg, bajaImg2, bajaImg3, bajaImg4],
    year: '2014 - 2015',
    role: 'Chassis Lead',
    hidden: true
  },
  {
    id: 'igc-karting',
    title: 'IGC 2013 - International Karting Championship',
    shortTitle: 'IGC Karting Championship',
    category: 'academic',
    description: 'Designed and raced kart in International Go-Karting Championship competition.',
    fullDescription: `Designed and built a racing kart for the International Go-Karting Championship, competing against teams from across the country. The competition required building a kart from scratch that could compete on performance, reliability, and innovation.

Racing teaches engineering lessons you cannot learn in a classroom. When your design choices determine whether you win or crash, you learn to make decisions with conviction and test them relentlessly.`,
    highlights: [
      'Complete kart design and fabrication',
      'Performance optimization for competition',
      'Hands-on racing and iteration',
      'Team leadership and project management'
    ],
    technologies: ['Kart Design', 'Vehicle Dynamics', 'Fabrication', 'Competition Strategy', 'Team Leadership'],
    image: igcImg,
    gallery: [igcImg, igcImg2, igcImg3, igcImg4],
    year: '2013',
    role: 'Team Lead',
    hidden: true
  },
  {
    id: 'efficycle',
    title: 'SAE Efficycle - Hybrid Tricycle',
    shortTitle: 'SAE Efficycle Hybrid',
    category: 'academic',
    description: 'Designed human-electric hybrid tricycle for SAE North India Efficycle competition.',
    fullDescription: `Developed a human-electric hybrid tricycle for the SAE North India Efficycle competition, which challenges teams to build the most efficient and practical human-powered vehicle with electric assist.

This project combined my interests in vehicle design and sustainable transportation. The challenge was maximizing efficiency while maintaining practical usability—a balance that defines good engineering.`,
    highlights: [
      'Hybrid powertrain design and integration',
      'Aerodynamic and lightweight construction',
      'Efficiency optimization for competition scoring',
      'Practical design for real-world usability'
    ],
    technologies: ['Hybrid Systems', 'Electric Vehicles', 'Lightweight Design', 'Efficiency Engineering', 'Sustainable Transport'],
    image: efficycleImg,
    gallery: [efficycleImg, efficycleImg2, efficycleImg3, efficycleImg4],
    year: '2014',
    role: 'Design Lead',
    hidden: true
  },
  {
    id: 'rc-racing',
    title: 'IIT Bombay Techfest - RC Racing Prototype',
    shortTitle: 'Techfest RC Racing',
    category: 'personal',
    description: 'Built high-performance RC racing prototype for competitive events at IIT Bombay Techfest.',
    fullDescription: `Designed and built a high-performance RC racing prototype for competitive events at IIT Bombay's Techfest, one of Asia's largest science and technology festivals.

RC racing is a proving ground for understanding vehicle dynamics at a manageable scale. The principles (weight distribution, suspension tuning, power-to-weight ratio) translate directly to full-scale vehicles, but you can iterate much faster.`,
    highlights: [
      'High-performance chassis design',
      'Competitive racing configuration',
      'Rapid prototyping and iteration',
      'Performance tuning and optimization'
    ],
    technologies: ['RC Design', 'Rapid Prototyping', 'Vehicle Dynamics', 'Performance Tuning', '3D Printing'],
    image: rcRacingImg,
    gallery: [rcRacingImg, rcRacingImg2, rcRacingImg3, rcRacingImg4],
    year: '2013',
    role: 'Designer & Builder',
    hidden: true
  },
  {
    id: 'electric-scooter',
    title: 'Electric Scooter Design',
    shortTitle: 'Electric Scooter',
    category: 'personal',
    description: 'Personal project designing a practical electric scooter for urban commuting.',
    fullDescription: `Designed an electric scooter optimized for practical urban commuting—focusing on range, portability, and everyday usability rather than maximum performance.

Personal projects like this let me explore ideas without constraints. The goal was creating something I would actually use daily, which forced honest evaluation of every design decision.`,
    highlights: [
      'Practical urban mobility solution',
      'Range and portability optimization',
      'Complete electrical and mechanical design',
      'Real-world usability focus'
    ],
    technologies: ['Electric Vehicles', 'Battery Systems', 'Mechanical Design', 'Urban Mobility', 'Personal Transport'],
    image: scooterImg,
    gallery: [scooterImg, scooterImg2, scooterImg3, scooterImg4],
    year: '2015',
    role: 'Personal Project',
    hidden: true
  },
  {
    id: 'bev-analysis',
    title: 'BEV Energy Consumption & Range Analysis',
    shortTitle: 'BEV Range Analysis',
    category: 'academic',
    description: 'Research on battery electric vehicle energy consumption, range estimation, and capacity fade analysis.',
    fullDescription: `Conducted research on battery electric vehicle performance, focusing on energy consumption modeling, range estimation algorithms, and battery capacity fade over time.

This work combined my interests in electric vehicles with rigorous analytical methods. Understanding how batteries degrade and how to predict range accurately is critical for EV adoption and user confidence.`,
    highlights: [
      'Energy consumption modeling and validation',
      'Range estimation algorithm development',
      'Battery degradation and capacity fade analysis',
      'Research publication and presentation'
    ],
    technologies: ['MATLAB', 'Battery Modeling', 'Energy Systems', 'Data Analysis', 'Electric Vehicles'],
    image: bevAnalysisImg,
    gallery: [bevAnalysisImg, bevAnalysisImg2, bevAnalysisImg3, bevAnalysisImg4],
    year: '2016',
    role: 'Research Engineer',
    hidden: true
  },
  {
    id: 'mars-urbanization',
    title: 'NASA - Mars Urbanization Challenge',
    shortTitle: 'NASA Mars Challenge',
    category: 'personal',
    description: 'Conceptual design for Mars habitat and urbanization systems for NASA-affiliated competition.',
    fullDescription: `Developed conceptual designs for Mars habitat and urbanization systems as part of a NASA-affiliated design competition. The challenge required thinking through all aspects of sustainable human presence on Mars, from structural systems to life support to psychological well-being.

Projects like this stretch your thinking beyond conventional constraints. When you cannot rely on Earth-based assumptions, you are forced to reason from first principles about what humans actually need to survive and thrive.`,
    highlights: [
      'Comprehensive Mars habitat design',
      'Life support and sustainability systems',
      'Structural design for Mars environment',
      'NASA competition participation'
    ],
    technologies: ['Space Systems', 'Habitat Design', 'Life Support', 'Structural Engineering', 'Systems Thinking'],
    image: marsImg,
    gallery: [marsImg, marsImg2, marsImg3, marsImg4],
    year: '2016',
    role: 'Design Lead',
    hidden: true
  }
];

export const companies = [
  {
    name: 'Sensory Labs',
    logo: '/placeholder.svg',
    description: 'Physical AI & Robotics'
  },
  {
    name: 'UnitX',
    logo: unitxLogo,
    description: 'AI Visual Inspection'
  },
  {
    name: 'Mill',
    logo: '/placeholder.svg',
    description: 'Consumer Hardware'
  },
  {
    name: 'Zipline',
    logo: '/placeholder.svg',
    description: 'Autonomous Delivery'
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  return projects.filter(project => project.category === category);
};
