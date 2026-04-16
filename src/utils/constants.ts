// Developer Info
export const DEVELOPER_NAME = "Bharath Thangam"
export const DEVELOPER_ROLE = "Software Engineer | Full-Stack Developer"
export const DEVELOPER_INTRO = "Software Engineer with 4+ years of experience building and supporting scalable applications in retail systems. Skilled in MERN stack, cloud platforms, and production environments."
export const DEVELOPER_EMAIL = "bharath81019999@gmail.com"
export const DEVELOPER_PHONE = "+91 9443485048"

// Skills
export const SKILLS = [
  { name: "JavaScript", icon: "⚙️", color: "#FFD700", proficiency: 90 },
  { name: "Python", icon: "🐍", color: "#3776AB", proficiency: 75 },
  { name: "React", icon: "⚛️", color: "#61DAFB", proficiency: 90 },
  { name: "TypeScript", icon: "📘", color: "#3178C6", proficiency: 80 },
  { name: "Node.js", icon: "🟩", color: "#68A063", proficiency: 85 },
  { name: "MongoDB", icon: "🍃", color: "#13AA52", proficiency: 85 },
  { name: "PostgreSQL", icon: "🗄️", color: "#336791", proficiency: 80 },
  { name: "AWS", icon: "☁️", color: "#FF9900", proficiency: 85 },
  { name: "SQL", icon: "📊", color: "#CC2927", proficiency: 85 },
  { name: "Express JS", icon: "⚡", color: "#000000", proficiency: 88 },
  { name: "Git", icon: "🔀", color: "#F1502F", proficiency: 90 },
  { name: "Docker", icon: "🐳", color: "#2496ED", proficiency: 75 },
  { name: "Linux", icon: "🐧", color: "#FCC624", proficiency: 80 },
  { name: "Splunk", icon: "📈", color: "#000000", proficiency: 85 },
  { name: "Three.js", icon: "🎨", color: "#8B5CF6", proficiency: 70 },
  { name: "Tailwind", icon: "🎯", color: "#06B6D4", proficiency: 88 },
]

// Work Experience
export const WORK_EXPERIENCE = [
  {
    id: 1,
    title: "Software Engineer",
    company: "H&M",
    period: "Feb 2026 - Present",
    location: "Tata Consultancy Services, Coimbatore",
    description: "Developer Tool Enablement | Retail Project",
    achievements: [
      "Managed and supported 20+ developer tools, including onboarding, testing, deployment, and licensing",
      "Developed internal dashboards (MERN stack) for tool metrics and cost visibility (Backstage-based portal)",
      "Worked in Agile environment, handling tasks via Jira and contributing through Git-based PR workflows",
      "Utilized GitHub Copilot to improve development efficiency and productivity"
    ]
  },
  {
    id: 2,
    title: "Application Support",
    company: "Neimanmarcus Group (SAKS)",
    period: "Apr 2023 - Jan 2026",
    location: "Retail Project - POS & Credit Systems",
    description: "Supported 40+ stores and 30+ restaurants",
    achievements: [
      "Supported POS & credit systems across 40+ stores and 30+ restaurants, ensuring smooth transactions",
      "Monitored EOD/SOD, batch jobs, and handled deployments, patches, and production changes",
      "Resolved production issues using Splunk and performed RCA, including credit/payment issue handling",
      "Built Splunk dashboards & alerts, reducing incidents by ~80%",
      "Managed gift card operations and data reconciliation"
    ]
  },
  {
    id: 3,
    title: "Project Management",
    company: "Stellantis (PSA Group)",
    period: "Dec 2021 - Apr 2023",
    location: "Smart Car Project - EE Components",
    description: "Electrical & Electronics team for electric vehicle development",
    achievements: [
      "Coordinated Electrical & Electronics (EE) team for electric vehicle development, managing cross-functional activities and client communications",
      "Supported incident tracking, engineering requests, and supplier coordination",
      "Assisted in plant operations, vehicle testing, and logistics processes"
    ]
  }
]

// Education
export const EDUCATION = [
  {
    id: 1,
    school: "Scaler",
    degree: "Specialized in Software development and Problem Solving",
    period: "Apr 2024 - Present",
    details: "Coursework: Data structures and Algorithm, Low level design (MERN), High level design & Data Engineering"
  },
  {
    id: 2,
    school: "Nanadha College of Technology",
    degree: "B.E. in Electronics and Communication Engineering",
    period: "Aug 2017 - Jun 2021",
    details: "CGPA: 7.74/10"
  }
]

// Certifications
export const CERTIFICATIONS = [
  { name: "Google Cloud Associate Cloud Engineer", issuer: "Google Cloud" },
  { name: "AWS Certified Developer - Associate", issuer: "Amazon Web Services" },
  { name: "DSA & DBMS Certification", issuer: "Scaler" }
]

// Awards
export const AWARDS = [
  { title: "Star of the Month Award", date: "May 2024" },
  { title: "Best Team Award", date: "FY2024" }
]

// Projects
export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform (In Progress)",
    description: "Full-stack e-commerce solution with real-time inventory management and payment processing.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "🛍️",
    link: "#",
  },
  {
    id: 2,
    title: "3D Portfolio Generator",
    description: "Interactive tool to generate stunning 3D portfolios with customizable themes and animations.",
    tags: ["Three.js", "React", "Vite", "Tailwind"],
    image: "🎨",
    link: "#",
  },
  {
    id: 3,
    title: "Real-time Chat Application (In Progress)",
    description: "WebSocket-based chat app with encrypted messaging and user presence detection.",
    tags: ["Socket.io", "React", "AWS", "Redis"],
    image: "💬",
    link: "#",
  },
  {
    id: 4,
    title: "AI Content Summarizer (In Progress)",
    description: "AI-powered application that summarizes long-form content using advanced NLP models.",
    tags: ["Python", "React", "GPT API", "FastAPI"],
    image: "🤖",
    link: "#",
  },
]

// Social Links
export const SOCIAL_LINKS = [
  { name: "GitHub", icon: "Github", url: "https://github.com/Bharathz" },
  { name: "LinkedIn", icon: "Linkedin", url: "https://www.linkedin.com/in/bharaththangam/" },
  { name: "Email", icon: "Mail", url: "mailto:bharath81019999@gmail.com" },
]

// Navigation
export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

// Colors
export const COLORS = {
  primary: "#8b5cf6",
  secondary: "#06b6d4",
  accent: "#ec4899",
  dark: "#0a0e27",
  light: "#e5e7eb",
}
