export const portfolioData = {
  personal: {
    name: "Nguyễn Minh Toàn",
    title: "Software Developer",
    subtitle: "Talented Information Technology Student - PTIT",
    description: "Fourth-year Information Technology student in PTIT's Talent Program with hands-on experience in full-stack development, AI applications, and cloud technologies. Seeking a collaborative environment to contribute to meaningful projects, strengthen technical skills, and grow professionally.",
    email: "toanminh0404@gmail.com",
    phone: "+84 334 470 295",
    location: "Ha Dong, Hanoi, Vietnam",
    avatar: "/avatar1.png",
    socialLinks: {
      github: "https://github.com/MinhToan4",
      linkedin: "https://www.linkedin.com/in/to%C3%A0n-nguy%E1%BB%85n-minh-b9436b219/",
      facebook: "https://www.facebook.com/minhtoansbo"
    }
  },

  skills: {
    frontend: [
      { name: "Next.js", level: 85, icon: "nextjs" },
      { name: "React", level: 80, icon: "react" },
      { name: "TypeScript", level: 75, icon: "typescript" },
      { name: "JavaScript", level: 80, icon: "javascript" },
      { name: "HTML/CSS", level: 85, icon: "html" },
      { name: "Tailwind CSS", level: 80, icon: "tailwind" },
      { name: "Vite", level: 75, icon: "vite" }
    ],
    backend: [
      { name: "Python", level: 85, icon: "python" },
      { name: "Java", level: 80, icon: "java" },
      { name: "Spring Boot", level: 75, icon: "spring" },
      { name: "C++", level: 75, icon: "cpp" },
      { name: "C", level: 70, icon: "c" },
      { name: "Node.js", level: 70, icon: "nodejs" },
      { name: "PostgreSQL", level: 80, icon: "postgresql" },
      { name: "openGauss", level: 75, icon: "database" },
      { name: "SQL Server", level: 70, icon: "sqlserver" },
      { name: "JDBC", level: 75, icon: "database" },
      { name: "JavaFX / PyQt6 / SFML", level: 70, icon: "desktop" }
    ],
    tools: [
      { name: "Docker", level: 75, icon: "docker" },
      { name: "Git", level: 85, icon: "git" },
      { name: "openEuler", level: 75, icon: "linux" },
      { name: "Supabase", level: 75, icon: "supabase" },
      { name: "Render", level: 70, icon: "cloud" },
      { name: "Linear / Plane.so", level: 75, icon: "tool" },
      { name: "VS Code", level: 90, icon: "vscode" },
      { name: "Postman", level: 75, icon: "postman" }
    ],
    knowledge: [
      { name: "DSA", level: 85, icon: "algorithm" },
      { name: "OOP", level: 90, icon: "oop" },
      { name: "Cloud Architecture", level: 75, icon: "cloud" },
      { name: "System Modeling (UML)", level: 80, icon: "architecture" }
    ]
  },

  projects: [
    {
      id: 1,
      title: "AWS First Cloud AI Journey (FCAJ) – Buildathon",
      role: "Cloud Intern",
      organization: "AWS FCAJ Buildathon Program",
      period: "10/2026 - Present",
      status: { label: "ACTIVE BUILDATHON", color: "text-amber-500 bg-amber-500/10 border-amber-500/35" },
      highlight: "CloudQuest (cloudquest.pvpwork.com)",
      metric: "Interactive 3D Cloud Platform",
      description: "Gaining hands-on experience with cloud architecture and AWS services through the AWS FCAJ Buildathon program. Architected and deployed CloudQuest, an interactive 3D platform that teaches cloud computing concepts visually to the community, earning positive feedback from AWS mentors and driving continued development.",
      bullets: [
        "Gaining hands-on experience with cloud architecture and AWS services through the AWS FCAJ Buildathon program.",
        "Built CloudQuest (cloudquest.pvpwork.com), an interactive 3D platform that teaches cloud concepts visually to the community; the mentor gave positive feedback and encouraged further development."
      ],
      technologies: ["AWS Services", "Cloud Architecture", "Interactive 3D Web", "Full-Stack Development", "Next.js"],
      liveUrl: "https://cloudquest.pvpwork.com/",
      githubUrl: "",
      hash: "EXP-01 // AWS-FCAJ"
    },
    {
      id: 2,
      title: "TPETIE – Children's Fashion E-Commerce",
      role: "Freelance Full-Stack Developer",
      organization: "TPETIE (tpetie.store)",
      period: "09/2026 - Present",
      status: { label: "PRODUCTION LIVE", color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/35" },
      highlight: "tpetie.store",
      metric: "Commercial E-Commerce Platform",
      description: "Full-lifecycle freelance engineering for a premium children's fashion brand. Directly collaborated with client stakeholders to analyze business workflows, clarify requirements, and translate brand vision into an optimized e-commerce production platform.",
      bullets: [
        "Communicate directly with the client to understand business workflows, clarify requirements, and translate the brand's vision into an e-commerce platform.",
        "Collaborate with the marketing team and external partners to align website features, content, and user experience with business needs.",
        "Coordinate client feedback and evolving requirements throughout development, keeping stakeholders informed and refining the platform to meet their expectations."
      ],
      technologies: ["Full-Stack", "E-Commerce", "Next.js", "Payment Gateways", "Tailwind CSS", "UI/UX Design"],
      liveUrl: "https://tpetie.store/",
      githubUrl: "",
      hash: "EXP-02 // TPETIE"
    },
    {
      id: 3,
      title: "AIFA Holding – ArtTech & AI Startup",
      role: "Software Developer",
      organization: "AIFA Holding",
      period: "07/2026 - Present",
      status: { label: "CORE ENGINEERING", color: "text-primary bg-primary/10 border-primary/35" },
      highlight: "AI Learning Platform & Distributed Workers",
      metric: "High-Throughput Processing",
      description: "Developing robust backend background workers and interactive AI education platforms. Maintaining system reliability while expanding processing pipelines to support evolving partner requirements and educational initiatives.",
      bullets: [
        "Continue working with the Vidtory team to maintain and improve existing background workers, resolve system issues, and develop new workers to support evolving product requirements.",
        "Develop an AI learning platform for students, using images and videos to make AI concepts more visual, accessible, and engaging.",
        "Collaborate with the team on projects involving partner organizations, contributing to development and providing technical support to address partners' needs and resolve technical issues."
      ],
      technologies: ["Python", "Distributed Workers", "AI Education Platform", "System Reliability", "Partner APIs"],
      liveUrl: "",
      githubUrl: "",
      hash: "EXP-03 // AIFA"
    },
    {
      id: 4,
      title: "Vidtory – AI Fashion Image & Video Startup",
      role: "Software Developer Intern",
      organization: "Vidtory",
      period: "05/2026 - 07/2026",
      status: { label: "ENTERPRISE COLLABORATION", color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/35" },
      highlight: "Panasonic Collaborative Project",
      metric: "GenAI Background Pipelines",
      description: "Contributed to core feature engineering for an AI-powered fashion image and video generation platform. Developed background workers and investigated and resolved complex distributed system bottlenecks.",
      bullets: [
        "Contributed to feature development for an AI-powered fashion image and video generation platform.",
        "Developed background workers and investigated and resolved system issues.",
        "Contributed to a high-impact collaborative project with Panasonic."
      ],
      technologies: ["Generative AI", "Computer Vision", "Async Workers", "Panasonic Solution", "Docker", "Git"],
      liveUrl: "",
      githubUrl: "",
      hash: "EXP-04 // VIDTORY"
    },
    {
      id: 5,
      title: "Chatbot - PTIT NITS Lab × VDSmart",
      role: "AI & Data Engineer",
      organization: "PTIT NITS Lab (Nurturing IT Student Talent)",
      period: "05/2026 - 09/2026",
      status: { label: "ACCURACY > 90%", color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/35" },
      highlight: "VDSmart AI Chatbot Deployment",
      metric: ">90% Accuracy Exceeded Criteria",
      description: "Delivered an advanced AI conversational engine in partnership with VDSmart that achieved over 90% accuracy, exceeding all acceptance criteria through systematic dataset preparation, cleaning, and QA.",
      bullets: [
        "Delivered an AI chatbot with VDSmart that reached over 90% accuracy and exceeded all acceptance criteria, earning strong stakeholder feedback.",
        "Performed data cleaning, quality control, and labeling to build high-fidelity datasets."
      ],
      technologies: ["AI Chatbot", "NLP", "Data Cleaning", "Dataset Labeling & QA", "VDSmart Integration"],
      liveUrl: "",
      githubUrl: "",
      hash: "EXP-05 // NITS-LAB"
    },
    {
      id: 6,
      title: "CyberLabX — Research & Engineering",
      role: "Full-Stack Developer & Team Lead",
      organization: "Supervised by Dr. Nguyen Ngoc Diep",
      period: "03/2026 - Present",
      status: { label: "TEAM LEADERSHIP", color: "text-amber-500 bg-amber-500/10 border-amber-500/35" },
      highlight: "6-Member Team Architecture",
      metric: "System Architecture & Schema Optimization",
      description: "Led a 6-member engineering team in designing and developing application architecture across database, frontend, and backend layers under the supervision of Dr. Nguyen Ngoc Diep.",
      bullets: [
        "Led a six-member team in designing and developing the application across database, frontend, and backend layers.",
        "Created sequence diagrams, class diagrams, and entity-relationship models to define system architecture and workflows.",
        "Designed and optimized database schemas for efficient data management and high performance."
      ],
      technologies: ["Spring Boot", "PostgreSQL", "UML System Modeling", "Database Optimization", "Team Leadership", "Supabase"],
      liveUrl: "",
      mentorEmail: "mailto:diepnguyenngoc@ptit.edu.vn",
      githubUrl: "",
      hash: "EXP-06 // CYBERLABX"
    }
  ],

  experience: [
    {
      id: 1,
      title: "Talented Information Technology Student",
      company: "Posts and Telecommunications Institute of Technology (PTIT)",
      period: "2023 - Present",
      description: "Student in the Talented Information Technology Program, actively engaged in academic excellence, algorithmic research, and emerging technologies.",
      achievements: [
        "Entrance Scholarship (2023)",
        "Yen My District Certificate of Merit - Outstanding University Entrance Examination Performance (Decision No. 18/QD-CTHKH, 2023)",
        "Academic Encouragement Scholarship (Excellent Distinction) - Semester I (2023-2024)",
        "Academic Encouragement Scholarship (Excellent Distinction) - Semester II (2023-2024)",
        "Academic Encouragement Scholarship (Excellent Distinction) - Semester I (2024-2025)",
        "Academic Encouragement Scholarship (Excellent Distinction) - Semester II (2024-2025)",
        "Academic Encouragement Scholarship (Excellent Distinction) - Semester I (2025-2026)",
        "Academic Encouragement Scholarship (Excellent Distinction) - Semester II (2025-2026)"
      ]
    },
    {
      id: 2,
      title: "Academic Excellence",
      company: "Posts and Telecommunications Institute of Technology (PTIT)",
      period: "2023 - Present",
      description: "Maintained outstanding academic performance with a consistently high GPA.",
      achievements: [
        "Cumulative GPA: 3.81/4.0",
        "Talented Information Technology Program student",
        "Completed multiple applied projects in Java, Python, and C++"
      ]
    }
  ],

  education: [
    {
      id: 1,
      degree: "High School Diploma",
      school: "Yen My High School",
      period: "2020 - 2023",
      gpa: "Excellent Student",
      description: "Graduated with top academic standing at Yen My High School; awarded Certificate of Merit (Decision No. 18/QD-CTHKH) by Chairman of Yen My District Study Promotion Association & Bureau of Education and Training for outstanding achievement in the 2023 National University Entrance Examination."
    },
    {
      id: 2,
      degree: "Bachelor of Information Technology (Talented Program)",
      school: "Posts and Telecommunications Institute of Technology (PTIT)",
      period: "2023 - Present",
      gpa: "3.81/4.0",
      description: "Undergraduate student in the Talented Information Technology Program at PTIT."
    }
  ],

  certifications: [
    {
      name: "PTIT x SAMSUNG: Advanced Algorithms (2025)",
      issuer: "PTIT & Samsung",
      date: "2025",
      url: "https://drive.google.com/file/d/1bVBE7AmAnChZV7xOQLGxpuXtbi6uajMr/view?usp=sharing"
    },
    {
      name: "Fundamentals of Deep Learning",
      issuer: "NVIDIA",
      date: "2025",
      url: "https://learn.nvidia.com/certificates?id=t0iPFHLYR86VAcVIGgtdiw"
    },
    {
      name: "Generative AI for Educators with Gemini",
      issuer: "Google",
      date: "2025",
      url: "https://edu.google.accredible.com/e3bd6189-51bc-4719-b918-fb8f22547d58#acc.x1CVKuON"
    },
    {
      name: "AWS Cloud Quest: Generative AI Practitioner",
      issuer: "AWS",
      date: "2025",
      url: "https://www.credly.com/badges/3e3a0359-c5ae-43c4-b526-70e560714f99/linked_in_profile"
    },
    {
      name: "AWS Cloud Quest: Cloud Practitioner",
      issuer: "AWS",
      date: "2025",
      url: "https://www.credly.com/badges/335ab364-4fa5-436c-8b07-3b47010bf6cc/linked_in_profile"
    },
    {
      name: "English Proficiency: CEFR Level B2",
      issuer: "British Council",
      date: "2025",
      url: "https://credentials.britishcouncil.org/4b9b63d6-6fa6-4bd6-a657-3c1c1102e7cc?key=0bf4840609de5904de0aeb7f85bf67ca034918e21fb1648d0ea67f7e478e6517#acc.i4j0apTd"
    },
    {
      name: "Google Analytics Certificate",
      issuer: "Google",
      date: "2025",
      url: "https://skillshop.credential.net/dc00957f-08cc-4790-8fcf-c4d0fcd6f0ed#acc.X2xtCL8i"
    },
    {
      name: "Google for Education Certificate",
      issuer: "Google",
      date: "2025",
      url: "https://edu.google.accredible.com/e3bd6189-51bc-4719-b918-fb8f22547d58#acc.x1CVKuON"
    }
  ],

  academicResults: {
    generalSubjects: [
      { name: "Algebra", numericGrade: 9.7, letterGrade: "A+" },
      { name: "Calculus I", numericGrade: 9.4, letterGrade: "A+" },
      { name: "Calculus II", numericGrade: 8.9, letterGrade: "A" },
      { name: "Applied Physics", numericGrade: 9.9, letterGrade: "A+" },
      { name: "Probability and Statistics", numericGrade: 9.7, letterGrade: "A+" }
    ],
    programmingSubjects: [
      { name: "Discrete Mathematics I", numericGrade: 9.2, letterGrade: "A+" },
      { name: "Discrete Mathematics II", numericGrade: 9.6, letterGrade: "A+" },
      { name: "C++ Programming", numericGrade: 8.0, letterGrade: "B+" },
      { name: "Data Structures and Algorithms", numericGrade: 9.8, letterGrade: "A+" },
      { name: "Object-Oriented Programming", numericGrade: 9.6, letterGrade: "A+" },
      { name: "Python Programming", numericGrade: 9.9, letterGrade: "A+" }
    ]
  },

  activities: [
    {
      id: 10,
      title: "First Prize (Global Final) - Huawei ICT Competition",
      type: "achievement",
      description: "Practice Competition – Computing Track | Global Final 2025 - 2026 (Shenzhen, China)",
      image: "/profile-images/huawei_global_team.jpg"
    },
    {
      id: 11,
      title: "Grand Prize (APAC Champion) - Huawei ICT Competition",
      type: "achievement",
      description: "Huawei ICT Competition APAC Final 2025 - 2026",
      image: "/profile-images/huawei_apac_stage_opt.jpg"
    },
    {
      id: 8,
      title: "Top 3 National Finalist (Computing Track) - Huawei ICT Competition",
      type: "achievement",
      description: "Huawei ICT Competition Vietnam | 2025 - 2026",
      image: "/profile-images/huawei_vietnam_poster.jpg"
    },
    {
      id: 17,
      title: "Second Prize (Runner-Up) - PROCON PTIT 2026",
      type: "achievement",
      description: "PROCON PTIT Programming Contest 2026 | Faculty of Information Technology 1, PTIT (09/2026)",
      image: "/profile-images/nhi_procon.jpg"
    },
    {
      id: 18,
      title: "Certificate of Merit - Outstanding University Entrance Performance 2023",
      type: "achievement",
      description: "Awarded by Chairman of Yen My District Study Promotion Association & Head of Bureau of Education and Training for outstanding achievement in the 2023 National University Entrance Examination | Decision No. 18/QD-CTHKH (10/2023)",
      image: "/profile-images/tieu_bieu_do_dai_hoc.jpg"
    },
    {
      id: 9,
      title: "Runner-Up - SUI Campus Hackathon",
      type: "achievement",
      description: "SUI Campus Hackathon | Build The Next Web3 | 02/2026",
      image: "/profile-images/sui_hackathon_award.jpg"
    },
    {
      id: 1,
      title: "ICPC PTIT 2025 Programming Contest",
      type: "competition",
      description: "Participated in the ICPC programming contest organized by PTIT."
    },
    {
      id: 2,
      title: "VPBank Cloud Quest 2025",
      type: "competition",
      description: "Participated in the Cloud Quest competition organized by VPBank."
    },
    {
      id: 3,
      title: "PTIT NITS IT Talent Incubation Lab",
      type: "organization",
      description: "Member of the PTIT NITS IT Talent Incubation Lab."
    },
    {
      id: 12,
      title: "Class President - Class D23CTCN01-B",
      type: "organization",
      description: "Class President for the Talented Information Technology Program (Class D23CTCN01-B)."
    },
    {
      id: 13,
      title: "UX/UI Lead - Institute-Level Project",
      type: "organization",
      description: "Led the UI/UX design team for an institute-level research project, mentored directly by Dr. Nguyen Ngoc Diep."
    },
    {
      id: 4,
      title: "Volunteer Blood Donation",
      type: "volunteer",
      description: "Receiving institution: Central Military Hospital 108."
    },
    {
      id: 14,
      title: "Winter Warmth Campaign 2026 - Season 14",
      type: "volunteer",
      description: "Active volunteer connecting love across highlands during the 14th Winter Warmth campaign organized by PTIT.",
      image: "/profile-images/volunteer_winter_warmth_1.png"
    },
    {
      id: 15,
      title: "Winter Warmth Journey 2025 - Blooming",
      type: "volunteer",
      description: "Campaign contributor for the 2025 Winter Warmth Campaign, supporting remote mountainous students.",
      image: "/profile-images/volunteer_winter_warmth_2.png"
    },
    {
      id: 16,
      title: "Winter to Pa Co Volunteer Campaign 2026",
      type: "volunteer",
      description: "Contributed funding and operational support for the 'Winter to Pa Co' community welfare program in Pa Co, Mai Chau, Hoa Binh.",
      image: "/profile-images/volunteer_paco.png"
    },
    {
      id: 5,
      title: "Office Tour - WorldQuant Hanoi",
      type: "event",
      description: "Participated in an office tour at WorldQuant Hanoi, a leading global quantitative asset management firm."
    },
    {
      id: 6,
      title: "Office Tour - Panasonic R&D Center Vietnam",
      type: "event",
      description: "Participated in an office tour at Panasonic R&D Center Vietnam, Panasonic's research and development center in Vietnam."
    },
    {
      id: 7,
      title: "Office Tour - NAB Vietnam",
      type: "event",
      description: "Participated in an office tour at NAB Vietnam, the local technology hub of National Australia Bank."
    }
  ]
};

export type PortfolioData = typeof portfolioData;
