export interface Project {
  id: string
  title: string
  category: string
  description: string
  role: string
  technologies: string[]
  artwork: 'legal' | 'property' | 'climate'
  url?: string
  demo?: {
    src: string
    poster: string
    width: number
    height: number
    duration: string
    captions: { src: string; language: string; label: string }
  }
}

export interface SupportingProject {
  id: string
  title: string
  category: string
  description: string
  technologies: string[]
  url?: string
}

export interface BackgroundEntry {
  id: string
  title: string
  organization: string
  period: string
  description: string
}

export interface SiteContent {
  name: string
  discipline: string
  sampleContent: boolean
  metadata: { title: string; description: string }
  intro: { eyebrow: string; headline: string; accent: string; description: string }
  work: {
    heading: string
    description: string
    projects: Project[]
    supportingProjects: SupportingProject[]
  }
  about: {
    heading: string
    paragraphs: string[]
    interests: string[]
    experience: BackgroundEntry[]
    education: BackgroundEntry[]
    research: BackgroundEntry[]
  }
  contact: { heading: string; description: string; email?: string; socials: { label: string; url: string }[] }
}

// Portfolio copy is based on the supplied résumé and linked public repositories.
// Keep team attribution and research submission status when updating descriptions.
// Leave optional URLs/email empty to hide their actions. Use complete https:// URLs.
export const siteContent: SiteContent = {
  name: 'William (Sibo) Zhang',
  discipline: 'AI Engineer · Sydney',
  sampleContent: false,
  metadata: {
    title: 'William (Sibo) Zhang — AI Engineer & Data Scientist',
    description: 'Sydney-based AI engineer working on legal AI, workflow automation, and data science. Explore William Zhang’s professional work, team projects, and research.',
  },
  intro: {
    eyebrow: 'AI engineering · Data science',
    headline: 'AI & data systems.',
    accent: 'Built for real work.',
    description: 'I’m William, an AI engineer based in Sydney. I work on legal AI, workflow automation, and data science, turning complex information into tools people can use.',
  },
  work: {
    heading: 'From information to useful systems.',
    description: 'Professional work, collaborative products, and experiments across AI and data.',
    projects: [
      {
        id: 'lexvia-legal-ai',
        title: 'Legal AI at Lexvia',
        category: 'Professional work',
        description: 'Developing legal AI workflows, Codex plugins, and SharePoint automation at Lexvia to support legal research and everyday operations.',
        role: 'AI Engineer · Lexvia',
        technologies: ['Agentic AI', 'Codex plugins', 'SharePoint'],
        artwork: 'legal',
        url: 'https://github.com/Lexvia-Co/lexvia-plugins',
      },
      {
        id: 'microburbs-facts',
        title: 'Microburbs Facts',
        category: 'Team project · Beta',
        description: 'A beta Chrome extension built with team Street Cred for the Microburbs Hackathon 2026. It combines property research, an AI assistant, and Python calculations to help renters and buyers explore Sydney homes.',
        role: 'Contributor · Street Cred team',
        technologies: ['React', 'TypeScript', 'Node.js', 'Python'],
        artwork: 'property',
        url: 'https://github.com/sibo-zhang25/microburbs-facts',
        demo: {
          src: new URL('../assets/demo.mp4', import.meta.url).href,
          poster: new URL('../assets/microburbs-facts-poster.jpg', import.meta.url).href,
          width: 1920,
          height: 1080,
          duration: '2:27',
          captions: {
            src: new URL('../assets/microburbs-facts.en.vtt?no-inline', import.meta.url).href,
            language: 'en',
            label: 'English',
          },
        },
      },
      {
        id: 'helios-corn-futures',
        title: 'Helios Corn Futures',
        category: 'Team competition project',
        description: 'Developed and evaluated climate-risk features for a Kaggle corn-futures competition, combining nonlinear transformations, lag analysis, and batch processing to manage memory use.',
        role: 'Feature engineering · Team contribution',
        technologies: ['Python', 'pandas', 'NumPy'],
        artwork: 'climate',
        url: 'https://github.com/sibo-zhang25/helios_corn_futures',
      },
    ],
    supportingProjects: [
      {
        id: 'airbnb-elt',
        title: 'Airbnb ELT Pipeline',
        category: 'UTS coursework',
        description: 'An Airbnb and NSW census analytics pipeline using Airflow for ingestion, PostgreSQL for storage, and layered dbt models for transformation and analytical marts.',
        technologies: ['Airflow', 'PostgreSQL', 'dbt Cloud', 'Python'],
        url: 'https://github.com/sibo-zhang25/bde_airbnb',
      },
      {
        id: 'nyc-taxi-analytics',
        title: 'NYC Taxi Analytics',
        category: 'UTS coursework',
        description: 'Explored NYC taxi journeys in Databricks with Spark SQL, then compared baseline, Ridge, and nearest-neighbor models for fare prediction.',
        technologies: ['Databricks', 'Spark SQL', 'Python', 'scikit-learn'],
        url: 'https://github.com/sibo-zhang25/bde_taxi_databricks',
      },
    ],
  },
  about: {
    heading: 'A foundation in maths.\nA focus on applied AI.',
    paragraphs: [
      'My background combines mathematics at the University of Sydney with data science and innovation at UTS. Today, I apply that foundation to legal AI and workflow automation at Lexvia.',
      'Alongside engineering, my experience spans data-centre research, financial research, and collaborative data projects. I’m interested in the practical work of connecting data, models, and the people who use them.',
    ],
    interests: ['Agentic AI', 'Workflow automation', 'Data engineering'],
    experience: [
      {
        id: 'lexvia',
        title: 'AI Engineer',
        organization: 'Lexvia Legal Consulting',
        period: 'Jun 2026 — Present',
        description: 'Legal AI workflows, multi-agent systems, Codex plugins, and SharePoint automation.',
      },
      {
        id: 'onlyfacts',
        title: 'Data Intern',
        organization: 'OnlyFacts',
        period: 'Feb 2026 — Present',
        description: 'Researched the Australian data-centre industry and built a tracker of operating and under-construction sites.',
      },
      {
        id: 'invesight',
        title: 'Financial Intern Analyst',
        organization: 'Invesight Fund Management',
        period: 'Sep — Dec 2024',
        description: 'Researched Australian and U.S. public companies, performed valuations, and prepared investment theses.',
      },
    ],
    education: [
      {
        id: 'uts',
        title: 'Master of Data Science and Innovation',
        organization: 'University of Technology Sydney',
        period: 'Feb 2025 — Jun 2026',
        description: 'Recipient of the UTS Chinese Postgraduate Tuition Fee Scholarship.',
      },
      {
        id: 'usyd',
        title: 'Bachelor of Liberal Arts and Science · Mathematics',
        organization: 'University of Sydney',
        period: 'Feb 2023 — Jun 2024',
        description: 'Mathematics-focused undergraduate study.',
      },
    ],
    research: [
      {
        id: 'tiktok-agentic-ai',
        title: 'Agentic AI Account Activities on TikTok',
        organization: 'Research project',
        period: 'Apr — Jul 2026',
        description: 'Analysed agentic AI account activity through case studies and theoretical analysis. Paper submitted to the Australasian Data Science and Machine Learning Conference 2026.',
      },
    ],
  },
  contact: {
    heading: 'Let’s put good ideas\nto work.',
    description: 'Interested in applied AI, workflow automation, or a data project? I’d be glad to connect.',
    email: 'sibo.zhang@student.uts.edu.au',
    socials: [
      { label: 'GitHub', url: 'https://github.com/sibo-zhang25' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/szha5977/' },
    ],
  },
}
