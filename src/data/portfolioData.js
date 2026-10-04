export const personalData = {
  name: "Rubesh",
  fullName: "Rubesh Karthik SS",
  title: "Computer Science & Engineering Student",
  roles: [
    "Data Analytics & Software Developer",
    "AI & Computer Vision Enthusiast",
    "B.E. CSE Student @ SNS College of Technology",
    "Full-Stack Web & Software Developer"
  ],
  educationBrief: "B.E. in Computer Science and Engineering • SNS College Of Technology (2022 - 2026)",
  location: "Bangalore, Karnataka • Open to Relocation",
  status: "Seeking Software Engineering & Data Analytics Roles",
  avatar: "/images/rubesh.jpg",
  aboutImage: "/images/rubesh.jpg",
  email: "rubeshkarthik166@gmail.com",
  phone: "+91 7708050935",
  github: "https://github.com/Rubesh166",
  linkedin: "https://www.linkedin.com/in/rubesh-karthik-ss?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  leetcode: "https://leetcode.com/rubeshkarthikSS",
  twitter: "https://x.com/rubeshkarthikSS",
  bio: "Aspiring Software Professional with a strong foundation in Data Analyst and Software Development. Skilled in Python, SQL, data analysis and visualization. Proficient in developing efficient, data-driven solutions with strong problem-solving and analytical skills.",
  quickStats: [
    { label: "B.E. CGPA", value: "7.93", helper: "SNS College of Technology" },
    { label: "Technical Projects", value: "6+", helper: "AI, Python & Analytics" },
    { label: "SSLC / HSC", value: "91.8% | 82.3%", helper: "Fusco’s Matric Hr Sec school" },
    { label: "Industry Internships", value: "2", helper: "Data Analytics & Python" },
    { label: "Cloud & AI Badges", value: "5+", helper: "Oracle AI, Databricks, SQL" }
  ]
};

export const skillsData = {
  categories: [
    { id: "all", label: "All Competencies" },
    { id: "technical", label: "Technical Skills" },
    { id: "framework", label: "Frameworks" },
    { id: "analytical", label: "Analytical Skills" },
    { id: "soft", label: "Soft Skills" },
    { id: "tools", label: "Tools" }
  ],
  items: [
    // Technical Skills
    { name: "Python", category: "technical", level: 95, icon: "Terminal", tag: "Technical Skill", highlight: "Core language for automation, scripting, and data analysis" },
    { name: "SQL", category: "technical", level: 90, icon: "Database", tag: "Technical Skill", highlight: "Relational queries, complex joins, data extraction, and schema design" },

    // Framework
    { name: "Pandas", category: "framework", level: 92, icon: "Layers", tag: "Framework", highlight: "Data manipulation, cleaning, aggregation, and telemetry logging" },
    { name: "Pytest", category: "framework", level: 88, icon: "CheckCircle2", tag: "Framework", highlight: "Automated test suites, unit testing, and test automation" },
    { name: "OpenCV", category: "framework", level: 90, icon: "BrainCircuit", tag: "Framework", highlight: "Real-time computer vision, image processing, and facial detection" },
    { name: "MediaPipe", category: "framework", level: 88, icon: "Component", tag: "Framework", highlight: "Hand landmark tracking, gesture recognition, and pose estimation" },
    { name: "Flask", category: "framework", level: 86, icon: "Server", tag: "Framework", highlight: "Lightweight Python web framework for REST APIs and services" },

    // Analytical Skills
    { name: "Problem-Solving", category: "analytical", level: 94, icon: "Cpu", tag: "Analytical Skill", highlight: "Structured problem breakdown, logical deduction, and algorithm design" },
    { name: "Critical Thinking", category: "analytical", level: 92, icon: "Binary", tag: "Analytical Skill", highlight: "Evaluating complex system requirements, edge cases, and architectures" },

    // Soft Skills
    { name: "Communication", category: "soft", level: 92, icon: "Radio", tag: "Soft Skill", highlight: "Clear technical presentations, cross-functional collaboration, and reporting" },
    { name: "Teamwork", category: "soft", level: 94, icon: "Workflow", tag: "Soft Skill", highlight: "Collaborative project delivery, team synergy, and peer code reviews" },
    { name: "Leadership", category: "soft", level: 90, icon: "Compass", tag: "Soft Skill", highlight: "Guiding project initiatives, team coordination, and mentorship" },

    // Tools
    { name: "Power BI", category: "tools", level: 92, icon: "Boxes", tag: "Tool", highlight: "Interactive business intelligence dashboards, DAX, sales analysis" },
    { name: "Figma", category: "tools", level: 86, icon: "Palette", tag: "Tool", highlight: "UI/UX wireframing, interface prototypes, and user experience design" },
    { name: "MS Excel", category: "tools", level: 90, icon: "FileCode", tag: "Tool", highlight: "Advanced data modeling, formulas, pivot tables, and spreadsheets" },
    { name: "PyCharm", category: "tools", level: 92, icon: "TerminalSquare", tag: "Tool", highlight: "Python IDE, virtual environments, linters, and breakpoint debugging" },
    { name: "GitHub", category: "tools", level: 90, icon: "GitBranch", tag: "Tool", highlight: "Git version control, repositories, collaboration, and pull requests" }
  ]
};

export const projectsData = [
  {
    id: "gesture-attendance-system",
    title: "Facial & Hand Gesture AI-Powered Attendance System",
    category: "AI & ML",
    badge: "Computer Vision & Healthcare",
    image: "/images/neuro_vision.jpg",
    description: "AI-driven real-time face recognition and hand gesture detection system with dedicated Staff and Student dashboards and CSV telemetry.",
    longDescription: "Developed an AI-powered system for real-time face recognition and hand gesture detection. Implemented Thumbs Up, Thumbs Down, and Neutral gesture feedback within a 15-second capture window. Engineered separate Staff and Student dashboards to monitor attendance and hand gesture feedback, allowing staff to mark attendance seamlessly using facial recognition and collect gesture-based feedback stored automatically in CSV records.",
    tags: ["Python", "OpenCV", "MediaPipe", "Flask", "Pandas", "Face-Recognition"],
    metrics: "15-sec capture window • Real-time gesture feedback",
    github: "https://github.com/Rubesh166/facial-and-hand-gesture-using-ai-powered-attendance-system",
    demo: "https://github.com/Rubesh166/facial-and-hand-gesture-using-ai-powered-attendance-system",
    architecture: [
      "Face Recognition Pipeline: 128-d face embeddings comparison with OpenCV cascade",
      "Gesture Detector: MediaPipe 21-point hand landmark vector tracking (Thumbs Up/Down/Neutral)",
      "Dashboard Server: Flask backend serving real-time video feed and control endpoints",
      "Telemetry Store: Automated Pandas CSV synchronization for attendance and feedback logs"
    ],
    challenges: "Calibrating real-time gesture classification in variable lighting; optimized using normalized coordinate vectors and frame thresholding."
  },
  {
    id: "bi-performance-tracker",
    title: "Real-Time Attendance & Performance Tracking with Power BI",
    category: "Data Analytics",
    badge: "Business Intelligence",
    image: "/images/nexus_cloud.jpg",
    description: "Interactive Business Intelligence dashboard tracking operational attendance and workforce performance metrics across teams, managers, and job tiers.",
    longDescription: "Designed and developed an interactive BI dashboard to track real-time attendance and performance across teams, managers, and job levels, enabling data-driven insights and improved decision-making for organizational leadership.",
    tags: ["Power BI", "SQL", "Data Analytics", "DAX", "Business Intelligence"],
    metrics: "Cross-department KPI tracking • Real-time dashboards",
    github: "https://github.com/Rubesh166/power-bi-projects/blob/main/attendance%20analysis.pbix",
    demo: "https://github.com/Rubesh166/power-bi-projects/blob/main/attendance%20analysis.pbix",
    architecture: [
      "Data Extraction: SQL data pipelines querying employee logs and timesheet data",
      "Data Modeling: Star-schema relational model linking departments, roles, and attendance",
      "Visual Analytics: Custom Power BI interactive cards, heatmaps, and manager filter drill-downs",
      "Automated Refresh: Scheduled dataset updates delivering timely workforce insights"
    ],
    challenges: "Handling heterogeneous timesheet data formats; structured custom Power Query ETL transformations to ensure 100% data consistency."
  },
  {
    id: "movie-ticket-system",
    title: "Movie Ticket Reservation System",
    category: "Systems & Python",
    badge: "Python & RDBMS",
    image: "/images/algoverse.jpg",
    description: "Desktop database application featuring interactive seat allocation, booking validation, and show management connected to MySQL.",
    longDescription: "Built a Movie Ticket Reservation System using Python and Tkinter for the graphical user interface, and PyMySQL to connect with MySQL for handling booking, seat availability, and payment records. Implemented features such as seat allocation, booking validation, and database-driven show management.",
    tags: ["Python", "Tkinter", "PyMySQL", "MySQL", "Database Design"],
    metrics: "ACID database transactions • Interactive GUI seat grid",
    github: "https://github.com/Rubesh166/movie-tickets-using-pymsql",
    demo: "https://github.com/Rubesh166/movie-tickets-using-pymsql",
    architecture: [
      "GUI Interface: Python Tkinter layout with real-time seat matrix grid",
      "Database Layer: MySQL schema managing movie schedules, theaters, and user bookings",
      "Connector Module: PyMySQL handling connection pools and parameterized queries",
      "Validation Engine: Concurrency checks preventing double-booking of selected seats"
    ],
    challenges: "Preventing concurrent booking clashes on popular showtimes; implemented transactional row-locking in MySQL."
  },
  {
    id: "sales-analysis-dashboard",
    title: "Sales Data Visualization & Analytics Suite",
    category: "Data Analytics",
    badge: "Sales Analytics",
    image: "/images/nexus_cloud.jpg",
    description: "Enterprise sales intelligence reporting suite developed during Data Analytics Internship at Gateway Software Solutions.",
    longDescription: "Created comprehensive sales trend reports and interactive dashboards. Interpreted patterns in customer purchase behavior, seasonal revenue shifts, and product category profitability, delivering actionable insights for management.",
    tags: ["Power BI", "Sales Analysis", "Data Modeling", "Excel", "SQL"],
    metrics: "Trend forecasting • Actionable revenue optimization",
    github: "https://github.com/Rubesh166/power-bi-projects/blob/main/sales%20analysis.pbix",
    demo: "https://github.com/Rubesh166/power-bi-projects/blob/main/sales%20analysis.pbix",
    architecture: [
      "ETL Pipeline: Cleansed and aggregated raw transaction datasets",
      "DAX Measures: Revenue growth rates, customer retention indices, and margin calculations",
      "Reporting Suite: Visual KPI scorecards with dynamic date and regional filters"
    ],
    challenges: "Synthesizing multi-year sales data with missing SKU attributes; resolved via automated imputation and lookup tables."
  }
];

export const experienceData = [
  {
    id: 1,
    role: "Data Analytics Intern",
    company: "Gateway Software Solutions",
    period: "May 2025 – June 2025",
    type: "Internship",
    location: "Bangalore, India",
    skills: ["Power BI", "Data Visualization", "Sales Analysis", "Data Analytics", "Reporting"],
    responsibilities: [
      "Developed skills in sales data visualization and reporting, enhancing the ability to interpret trends and patterns",
      "Gained practical exposure to how data-driven insights influence real-world business decisions through sales analysis",
      "Built interactive Power BI dashboards for tracking product performance, customer segments, and revenue growth",
      "Collaborated with senior analysts to refine data presentation and executive reporting decks"
    ]
  },
  {
    id: 2,
    role: "Python Development Intern",
    company: "Litz Tech",
    period: "March 2024 – April 2024",
    type: "Internship",
    location: "Bangalore, India",
    skills: ["Python", "Tkinter", "PyMySQL", "MySQL", "Database Architecture"],
    responsibilities: [
      "Built a Movie Ticket Reservation System using Python and Tkinter for the desktop user interface",
      "Integrated PyMySQL to connect with MySQL for handling booking, seat availability, and payment records",
      "Implemented features including real-time seat allocation, booking validation, and database-driven show management",
      "Wrote modular, testable Python code following object-oriented software engineering principles"
    ]
  },
  {
    id: 3,
    role: "Software Development Course Graduate",
    company: "NIT Trichy (National Institute of Technology)",
    period: "Academic Workshop",
    type: "Academic Excellence",
    location: "Tiruchirappalli, Tamil Nadu",
    skills: ["Object-Oriented Programming (OOP)", "Software Engineering", "C++ / Python", "Design Patterns"],
    responsibilities: [
      "Completed the intensive 'Introduction to Software Development' course at NIT Trichy",
      "Acquired a solid understanding of Object-Oriented Programming (OOP) principles, inheritance, polymorphism, and abstraction",
      "Applied structured software development lifecycle (SDLC) models and design best practices"
    ]
  },
  {
    id: 4,
    role: "UI/UX Design Workshop Scholar",
    company: "Kumaraguru College of Technology (KCT)",
    period: "Design Workshop",
    type: "Design & HCI",
    location: "Coimbatore, Tamil Nadu",
    skills: ["Figma", "UI/UX Design", "Wireframing", "User Research", "Prototyping"],
    responsibilities: [
      "Participated in an intensive UI/UX workshop at KCT, gaining foundational knowledge in UI/UX design principles",
      "Designed user personas, empathy maps, and interactive wireframes using Figma",
      "Evaluated accessibility, visual hierarchy, and usability heuristics for modern web applications"
    ]
  }
];

export const educationData = {
  degree: "Bachelor of Engineering (B.E.)",
  major: "Computer Science and Engineering (CSE)",
  institution: "SNS College Of Technology",
  duration: "2022 — 2026 (Final Year)",
  cgpa: "7.93 / 10.0",
  schooling: [
    {
      level: "Higher Secondary Certificate (HSC)",
      school: "Fusco’s Matric Hr Sec school",
      duration: "2021 — 2022",
      score: "82.3 %"
    },
    {
      level: "Secondary School Leaving Certificate (SSLC)",
      school: "Fusco’s Matric Hr Sec school",
      duration: "2019 — 2020",
      score: "91.8 %"
    }
  ],
  coursework: [
    "Object-Oriented Programming (OOP)",
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Computer Networks",
    "Python & Software Development",
    "Data Analytics & Business Intelligence",
    "Operating Systems",
    "Software Engineering Principles"
  ],
  academicAchievements: [
    "Completed 'Introduction to Software Development' at NIT Trichy",
    "Participated in UI/UX design workshop at KCT",
    "Consistent high academic performance across high school (91.8% SSLC) and engineering"
  ]
};

export const codingProfiles = {
  leetcode: {
    handle: "rubeshkarthikSS",
    rating: "Active",
    badge: "Python & SQL Problem Solver",
    totalSolved: 120,
    breakdown: {
      easy: 65,
      medium: 45,
      hard: 10
    },
    streak: "Consistent Daily Problem Solver"
  },
  codeforces: {
    handle: "rubeshkarthikSS",
    rank: "Contributor",
    rating: "Active",
    contests: 12
  },
  github: {
    username: "rubeshkarthikSS",
    repos: 15,
    stars: 35,
    commitsYear: 380
  }
};

export const achievementsData = [
  {
    id: 1,
    title: "Oracle Cloud Certified AI Foundation Associate",
    issuer: "Oracle Cloud Infrastructure",
    date: "2025",
    description: "Certified proficiency in AI, Machine Learning fundamentals, deep neural networks, and Oracle Cloud AI services.",
    tag: "Cloud & AI Certification"
  },
  {
    id: 2,
    title: "Databricks Generative AI Fundamentals",
    issuer: "Databricks Academy",
    date: "2024",
    description: "Demonstrated fundamental expertise in LLMs, prompt engineering, generative architectures, and AI evaluation frameworks.",
    tag: "Generative AI"
  },
  {
    id: 3,
    title: "Python Programming Professional Certification",
    issuer: "Python Certification Board",
    date: "2024",
    description: "Validated competencies in core Python syntax, OOP, modules, file I/O, data structures, and automation scripting.",
    tag: "Programming Certification"
  },
  {
    id: 4,
    title: "SQL & Relational Database Certification",
    issuer: "Database Technology Certification",
    date: "2024",
    description: "Mastery of complex SQL queries, relational database schema design, indexing, and data manipulation.",
    tag: "Database Certification"
  },
  {
    id: 5,
    title: "Data Science Specialization Certification",
    issuer: "Data Analytics Institute",
    date: "2024",
    description: "Comprehensive validation in data visualization, statistical analysis, Pandas, and business intelligence reporting.",
    tag: "Data Science"
  },
  {
    id: 6,
    title: "Software Development Course Honor",
    issuer: "National Institute of Technology (NIT) Trichy",
    date: "2024",
    description: "Completed rigorous coursework in OOP principles and structured software engineering paradigms.",
    tag: "Academic Honor"
  }
];

