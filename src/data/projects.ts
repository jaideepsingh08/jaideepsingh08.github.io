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
    fullDescription: `Founder & CTO as a Fellow at Menlo Ventures, responsible for product vision, technical architecture, and company strategy.

Sensory Labs builds multimodal tactile sensing hardware that gives robots human-like touch perception for physical AI and industrial automation.

The physical AI space is experiencing rapid growth, with companies like Figure, 1X, and Sanctuary AI raising billions to build humanoid robots—but nearly all lack reliable tactile feedback. Sensory Labs was founded to fill that critical sensing gap, building hardware that fuses 300-point touch force arrays, ego and context video, audio, IMU, pose, proprioception, slip sensing, temperature, and texture detection into a unified perception layer for robotic manipulation. The company targeted high-value applications in manufacturing QC, bin picking, and dexterous assembly, partnering with robotics integrators.`,
    highlights: [
      'Defined product roadmap, hired team, and led all mechanical and electrical prototyping',
      'Architected multimodal sensor stack: 300-point force, video, audio, IMU, slip, temperature, and texture',
      'Secured early partnerships with robotics integrators for industrial deployment',
      'Managed MEMS fabrication vendor relationships and sensor module manufacturing'
    ],
    technologies: ['Tactile Sensing', 'Physical AI', 'Multimodal Systems', 'Robotics', 'Computer Vision', 'Hardware Prototyping'],
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
    fullDescription: `Director of Engineering, leading the hardware engineering organization across mechanical, electrical, and optical disciplines.

UnitX builds AI-powered visual inspection systems that automate quality control for high-volume manufacturing.

UnitX has deployed 820+ systems across 135 factories, inspecting over $6.1 billion in products annually for customers including GE, Teijin, Heliene, Linamar, and Stanley Electric. Systems have logged 5.7M+ cumulative operating hours. The company's FleX platform delivers 9x lower defect escape rates and 3x faster deployment than legacy solutions, making it one of the most widely adopted AI inspection platforms in North America.`,
    highlights: [
      'Built and managed cross-functional hardware team spanning mechanical, electrical, and optical engineering',
      'Standardized inspection platform architecture—drove 3x reduction in deployment cycle time',
      'Owned full hardware lifecycle: optical design, DFM, supplier qualification, and field deployment',
      'Established reliability and environmental qualification programs enabling 24/7/365 factory uptime'
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
    fullDescription: `Founding engineer, later Head of Systems Engineering—owned hardware architecture, firmware, reliability, certification, and manufacturing scale-up.

Mill makes a kitchen food recycler that turns food scraps into nutrient-rich grounds, keeping waste out of landfills.

Founded by Matt Rogers (co-founder of Nest), Mill has raised $100M+ through Series C and partnered with Amazon and Whole Foods for distribution. Named one of TIME's 200 Best Inventions of 2024. The product is a first-of-its-kind connected appliance with no existing safety certification pathway—every UL and FCC standard had to be interpreted and validated from scratch. Filed 18 patents on novel mechanical, thermal, and sensing technologies.`,
    highlights: [
      'Joined pre-seed, scaled through Series C ($100M+ raised)—owned full hardware and firmware stack',
      'Filed 18 patents spanning mechanical, thermal, and sensing innovations',
      'Led UL 60335 and FCC certification from scratch for a novel high-power connected appliance',
      'Scoped, qualified, and ramped contract manufacturers across US and Mexico to volume production'
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
    fullDescription: `Product Architect & Engineering Lead on the founding team for Platform 2, reporting directly to co-founder Keenan Wyrobek.

Zipline operates the world's largest autonomous delivery system, using drones to deliver medical supplies, e-commerce packages, and food on demand.

Zipline has raised $800M+ at a $7.6B valuation, completed 1M+ autonomous deliveries across 22 countries, and partners with governments and retailers including Walmart. Platform 2 is the next-generation architecture designed to scale drone logistics from rural healthcare into dense suburban and commercial markets. I defined the ground systems architecture—building parametric simulation tools for system sizing, throughput modeling, and unit economics that became the quantitative foundation for deployment decisions.`,
    highlights: [
      'Defined ground systems architecture for Platform 2 alongside Zipline\'s co-founder',
      'Built parametric simulation tools for system sizing, throughput, and unit economics modeling',
      'Translated product strategy into technical requirements and system-level trade studies',
      'Conducted shipper site audits to identify integration constraints and deployment frameworks'
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
    fullDescription: `Independent project—designed the complete ventilator system from first principles during the COVID-19 pandemic.

The goal was a functional mechanical ventilator at <$500 BOM (1/50th the cost of conventional ICU units) that could be manufactured with locally available components in resource-constrained healthcare settings.

Designed to meet key parameters from the UK MHRA Rapidly Manufactured Ventilator System (RMVS) specification, including tidal volume control, PEEP regulation, and alarm systems. Prioritized off-the-shelf components and standard fabrication processes to enable decentralized production without specialized tooling.`,
    highlights: [
      'Designed complete ventilator system at <$500 BOM—1/50th conventional ICU ventilator cost',
      'Engineered pneumatic circuit with tidal volume control, PEEP regulation, and fail-safe alarms',
      'Targeted UK MHRA RMVS specification compliance for emergency deployment',
      'Optimized for decentralized manufacturing with off-the-shelf components'
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
    fullDescription: `Mechanical Engineer, responsible for robotic lift module design, systems integration, and safety architecture.

Bumblebee Spaces builds AI-controlled robotic furniture that stores beds, desks, and closets in the ceiling and deploys them on command—doubling usable floor space in urban apartments.

Backed by prominent Silicon Valley investors and featured in Dezeen, TechCrunch, and The Verge. The system uses ceiling-mounted robots with AI-driven inventory tracking, app-controlled deployment, and FaceID authentication. Each module supports 200+ lb payloads, operates at <40 dB, and is rated for 10,000+ cycles—engineered for residential environments where the hardware operates directly above people.`,
    highlights: [
      'Designed robotic lift modules: structural frame, linear actuation, cable management, and safety interlocks',
      'Engineered multi-layer safety system with load cells, obstruction detection, and mechanical fail-safes',
      'Integrated mechanical systems with AI controls, app deployment, and FaceID-authenticated access',
      'Delivered production-ready hardware installed in real San Francisco residential units'
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
    fullDescription: `Lead Mechanical Engineer, owning the complete mechanical architecture from blank-sheet concept through production tooling release.

GreyOrange builds autonomous mobile robots (AMRs) for goods-to-person warehouse fulfillment and logistics automation.

GreyOrange has raised $400M+, is planning a $600M US IPO, and deploys robots for IKEA, Flipkart, XPO Logistics, and other major fulfillment operators across Asia, Europe, and North America. The Butler AMR navigates autonomously under warehouse racking, lifts mobile racks weighing up to 500 kg, and transports them to human pick stations. I designed the chassis, drivetrain, payload interface, and rack-engagement mechanism—the architecture that became the foundation for the company's entire product family.`,
    highlights: [
      'Owned end-to-end mechanical architecture: chassis, drivetrain, payload interface, and rack-engagement system',
      'Platform deployed at IKEA, Flipkart, XPO Logistics across global fulfillment centers',
      'Optimized structure via FEA for 500 kg payload capacity with high-volume sheet metal manufacturing',
      'Created foundation platform architecture that scaled into multiple product variants'
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
    fullDescription: `Promoted to Senior Mechanical Engineer to lead the design of the heavy-payload Butler XL variant.

The XL extends GreyOrange's AMR platform to handle industrial-scale payloads exceeding 1,000 kg for large 3PL and e-commerce fulfillment operators.

GreyOrange needed to address demand from enterprise customers automating heavier rack configurations without sacrificing fleet density. I re-architected the chassis, drivetrain, and power systems to double payload capacity while maintaining the same aisle-width compatibility as the standard Butler. Redesigned drive modules with higher-torque motors and upgraded battery and thermal management for multi-shift operation. Maximized subassembly commonality with the standard platform to keep supply chain complexity low.`,
    highlights: [
      'Architected heavy-payload variant: 1,000+ kg capacity—double the standard Butler platform',
      'Redesigned drivetrain, power, and thermal systems for continuous multi-shift operation',
      'Maintained same aisle-width compatibility for seamless integration with existing fleets',
      'Maximized manufacturing commonality with standard platform to reduce supply chain cost'
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
    fullDescription: `Two roles at FCA India: Manufacturing Technologist in Body-in-White (BIW) and Engine divisions, and CAE Engineer in closure durability analysis.

Fiat Chrysler Automobiles (now Stellantis) is one of the world's largest automakers, producing vehicles across the Jeep, Fiat, Chrysler, Ram, and Maserati brands.

FCA India's Ranjangaon plant was the centerpiece of the "Made in India" Jeep program—the first time a Jeep was manufactured in India. I led the BIW automation strategy for the right-hand-drive Jeep Compass line, driving build efficiency from 27% to 65%. Also stood up a temporary BIW facility producing 300+ Fiat Punto/Linea units per day. In my CAE role, I developed FEA models for closure durability that cut computation time 40% and improved accuracy 12%, publishing findings at SAE World Congress 2016 in the peer-reviewed SAE International Journal.`,
    highlights: [
      'Led BIW automation for Jeep Compass "Made in India" program—drove efficiency from 27% to 65%',
      'Stood up temporary BIW facility producing 300+ vehicles/day for Fiat Punto/Linea',
      'Developed FEA models cutting computation time 40% with 12% accuracy improvement',
      'Published closure durability research at SAE World Congress 2016 (SAE International Journal)'
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
