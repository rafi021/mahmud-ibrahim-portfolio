// Mock data for Mahmud Ibrahim's Portfolio

export const personalInfo = {
  name: "Mahmud Ibrahim",
  title: "Senior Backend Engineer / Tech Lead",
  tagline: "Building scalable SaaS & Fintech platforms that serve millions",
  location: "Dhaka, Bangladesh",
  phone: "+880-1675-306077",
  email: "eng.ibrahim.mahmud@gmail.com",
  linkedin: "https://www.linkedin.com/in/mahmud-ibrahim-4917ba21a/",
  github: "https://github.com/rafi021",
  summary: "Senior Backend Engineer / Tech Lead with 10+ years of experience designing and scaling SaaS, Fintech, and Microservices-based platforms. Proven track record of building high-availability systems serving 600K+ users, optimizing performance by up to 75%, and leading DevOps-driven CI/CD pipelines on AWS and Kubernetes. Strong expertise in Laravel, microservices architecture, cloud infrastructure, and system scalability."
};

export const metrics = [
  { label: "Years Experience", value: "10+" },
  { label: "Users Served", value: "600K+" },
  { label: "Performance Boost", value: "75%" },
  { label: "Active Projects", value: "25+" }
];

export const skills = {
  backend: [
    { name: "PHP (Laravel)", level: 95 },
    { name: "Node.js (Express)", level: 85 },
    { name: "Python", level: 80 }
  ],
  frontend: [
    { name: "Vue.js / Nuxt.js", level: 85 },
    { name: "React.js / Next.js", level: 80 }
  ],
  database: [
    { name: "MySQL", level: 90 },
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 80 }
  ],
  messaging: [
    { name: "Redis", level: 85 },
    { name: "RabbitMQ", level: 80 },
    { name: "Kafka", level: 75 }
  ],
  devops: [
    { name: "Docker", level: 90 },
    { name: "Kubernetes", level: 85 },
    { name: "CI/CD", level: 90 },
    { name: "AWS", level: 85 }
  ],
  architecture: [
    { name: "Microservices", level: 90 },
    { name: "REST APIs", level: 95 },
    { name: "TDD", level: 85 },
    { name: "SaaS", level: 90 }
  ]
};

export const experience = [
  {
    id: 1,
    title: "Tech Lead",
    company: "Soft IT Care",
    location: "Banani, Dhaka",
    period: "May 2025 - Present",
    description: "Leading backend architecture and DevOps for a scalable SaaS platform focused on Ecommerce and F-commerce solutions.",
    achievements: [
      "Architected scalable SaaS application with RESTful APIs enabling third-party integrations and AI-driven modular growth",
      "Boosted application performance by 75% through SQL tuning and smart caching strategies",
      "Implemented streamlined DevOps pipelines with CI/CD, cutting deployment errors and server costs in half",
      "Increased system stability by 67% through proactive monitoring and real-time issue resolution"
    ],
    projects: [{ name: "SaaS Product", url: "https://funnelliner.com/" }],
    current: true
  },
  {
    id: 2,
    title: "Senior Backend Engineer (Lead)",
    company: "CodeMoly Tech",
    location: "Dhaka",
    period: "Sep 2024 - May 2025",
    description: "Led backend development for fintech ERP SaaS platform serving 1,027+ businesses.",
    achievements: [
      "Designed scalable microservices architecture with RESTful APIs for third-party integration",
      "Enhanced performance by 35% through backend optimization, SQL tuning, and caching",
      "Reduced deployment errors by 70% using Docker, CI/CD, and automated testing",
      "Successfully launched Bebshadar Fintech ERP, onboarding 1,027+ businesses within 3 months"
    ],
    projects: [
      { name: "Bebshadar SaaS", url: "https://bebshadar.com/" },
      { name: "Live Platform", url: "https://bebshadar.codemoly.io" }
    ],
    current: false
  },
  {
    id: 3,
    title: "Senior Backend Engineer (Lead)",
    company: "Hishabee Tech BD",
    location: "Farmgate, Dhaka",
    period: "Nov 2023 - Aug 2024",
    description: "Led SaaS product R&D serving 600K+ B2C and 150K+ B2B clients in fintech sector.",
    achievements: [
      "Designed and developed Hishabee Tech's SaaS products serving 600K+ B2C clients (Dokan) and 150K+ B2B clients (Paikari)",
      "Helped 2,600+ MSMEs source products and access Islamic Financing via Puji Fintech",
      "Streamlined deployment with Docker and CI/CD, reducing errors and increasing availability",
      "Increased monthly SaaS sales from 45% to 87%"
    ],
    projects: [
      { name: "Puji (B2B Islamic Finance)", url: "https://baki.hishabee.business/" },
      { name: "Paikari (B2B Fintech)", url: "https://paikari.hishabee.io" },
      { name: "Dokan (B2C MSME SaaS)", url: "https://hishabee.io/hishabee-dokan" }
    ],
    current: false
  },
  {
    id: 4,
    title: "Senior Software Engineer",
    company: "Shuttle BD",
    location: "Badda, Dhaka",
    period: "Sep 2022 - Oct 2023",
    description: "Architected microservices-based B2B transportation system for ride-sharing platform.",
    achievements: [
      "Built scalable B2B transportation system serving 24 companies, 950+ daily rides, 250+ vehicles",
      "Designed 'Shuttle for School' microservices application for school transportation logistics",
      "Developed Corporate Admin Panel with automated billing, real-time tracking, and reporting dashboards"
    ],
    projects: [
      { name: "Shuttle for School", url: "https://www.shuttlebd.com/shuttle-for-school" },
      { name: "Corporate Admin Panel", url: "https://www.shuttlebd.com/business" }
    ],
    current: false
  },
  {
    id: 5,
    title: "Top Level Instructor",
    company: "iAcademy and Instructory",
    location: "Banani, Dhaka",
    period: "Jul 2022 - Present",
    description: "Delivering technology-focused training on modern web application development.",
    achievements: [
      "Delivered online and offline tech courses on modern web development",
      "Steering curriculum development for educational platforms"
    ],
    projects: [
      { name: "Instructory E-learning", url: "https://instructory.net/" },
      { name: "iAcademy IT Institute", url: "https://iacademybd.com/" }
    ],
    current: true
  }
];

export const education = [
  {
    degree: "M.Sc. in Computer Science & Engineering",
    institution: "United International University",
    location: "Dhaka, Bangladesh",
    period: "2015 - 2017",
    cgpa: "4.00/4.00",
    specialization: "Data Science, IoT"
  },
  {
    degree: "B.Sc. in Electrical & Electronic Engineering",
    institution: "United International University",
    location: "Dhaka, Bangladesh",
    period: "2008 - 2012",
    cgpa: "3.29/4.00",
    specialization: "Embedded Systems, Electronics"
  }
];

export const certifications = [
  {
    name: "Certified Kubernetes Administrator (CKA)",
    institute: "CSL Training, Dhaka, BD",
    year: "2024"
  },
  {
    name: "Professional DevOps Engineering",
    institute: "CSL Training, Dhaka, BD",
    year: "2023"
  },
  {
    name: "RHCSA Course (56 hours)",
    institute: "CSL Training, Dhaka, BD",
    year: "2023"
  },
  {
    name: "Full Stack Web Development",
    institute: "LinkedIn Learning",
    year: "2022"
  }
];

export const featuredProjects = [
  {
    id: 1,
    title: "Funnelliner SaaS Platform",
    company: "Soft IT Care",
    description: "Enterprise-grade SaaS application for E-commerce and F-commerce with RESTful APIs, third-party integrations, and AI-driven features. Achieved 75% performance boost through optimization.",
    technologies: ["Laravel", "Vue.js", "MySQL", "Redis", "AWS", "Docker"],
    metrics: ["75% Performance Boost", "50% Cost Reduction", "67% Less Downtime"],
    url: "https://funnelliner.com/",
    featured: true
  },
  {
    id: 2,
    title: "Bebshadar Fintech ERP",
    company: "CodeMoly Tech",
    description: "Comprehensive fintech ERP SaaS platform with microservices architecture. Successfully onboarded 1,027+ businesses within 3 months post-launch.",
    technologies: ["Laravel", "Microservices", "PostgreSQL", "Docker", "CI/CD"],
    metrics: ["1,027+ Businesses", "35% Performance Gain", "70% Fewer Errors"],
    url: "https://bebshadar.com/",
    featured: true
  },
  {
    id: 3,
    title: "Hishabee Multi-SaaS Platform",
    company: "Hishabee Tech BD",
    description: "Multi-tenant SaaS ecosystem serving 600K+ B2C and 150K+ B2B clients with Dokan, Paikari, and Puji platforms for business management and Islamic financing.",
    technologies: ["Laravel", "Vue.js", "MySQL", "Redis", "Microservices"],
    metrics: ["600K+ B2C Users", "150K+ B2B Users", "87% Sales Growth"],
    url: "https://hishabee.io/",
    featured: true
  },
  {
    id: 4,
    title: "Shuttle Corporate Transport System",
    company: "Shuttle BD",
    description: "Microservices-based B2B transportation platform serving 24 companies with real-time tracking, automated billing, and route optimization.",
    technologies: ["Node.js", "React", "MongoDB", "Microservices", "AWS"],
    metrics: ["24 Companies", "950+ Daily Rides", "1,200+ Active Users"],
    url: "https://www.shuttlebd.com/",
    featured: true
  },
  {
    id: 5,
    title: "Future Grid - Smart Grid Monitor",
    company: "UIU Centre for Energy Research",
    description: "Government-funded R&D project with 100+ IoT devices sending data via MQTT protocol. Multi-user dashboard, automated billing, and SMS notifications.",
    technologies: ["PHP", "IoT", "MQTT", "MySQL", "Data Visualization"],
    metrics: ["100+ IoT Devices", "Govt Funded", "Real-time Monitoring"],
    url: null,
    featured: false
  },
  {
    id: 6,
    title: "Sirris - Smart Irrigation System",
    company: "UIU Centre for Energy Research",
    description: "IDCOL-funded R&D project with sensor-controlled irrigation, central monitoring, role-based dashboards, and automated billing with SMS alerts.",
    technologies: ["PHP", "IoT", "Sensors", "Dashboard", "SMS Integration"],
    metrics: ["IDCOL Funded", "Patented System", "IoT Integration"],
    url: null,
    featured: false
  }
];

export const achievements = [
  {
    title: "Patent for Smart Irrigation System",
    description: "Smart Irrigation System (BD-1006043) - Government-funded R&D project involving IoT, MQTT, and real-time monitoring.",
    year: "2016",
    icon: "award"
  },
  {
    title: "Institute of Engineers (IEB) Member",
    description: "Professional membership - M-39360",
    year: "Active",
    icon: "users"
  },
  {
    title: "600K+ Users Platform",
    description: "Built and scaled platforms serving over 600,000 active users with high availability.",
    year: "2023-2024",
    icon: "trending-up"
  },
  {
    title: "75% Performance Optimization",
    description: "Achieved 75% performance improvement through SQL optimization and smart caching strategies.",
    year: "2025",
    icon: "zap"
  }
];