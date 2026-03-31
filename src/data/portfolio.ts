export const portfolioData = {
  personal: {
    name: "Nguyễn Minh Toàn",
    title: "Backend Developer",
    subtitle: "PTIT Honors Program Student",
    description: "I am an Information Technology student at PTIT, combining technical expertise with creative problem-solving to build meaningful applications. My software development journey is driven by curiosity and a strong commitment to continuous learning. I am currently seeking internship opportunities to apply my knowledge to real-world projects and further develop my skills in a professional environment.",
    email: "toanminh0404@gmail.com",
    phone: "+84 334 470 295",
    location: "Ha Dong, Hanoi, Vietnam",
    avatar: "/avatar1.png",
    socialLinks: {
      github: "https://github.com/MinhToan4",
      linkedin: "https://www.linkedin.com/in/to%C3%A0n-nguy%E1%BB%85n-minh-b9436b219/",
      facebook: "https://www.facebook.com/minhtoansbo",
      X: "https://x.com/SboToan"
    }
  },

  skills: {
    frontend: [
      { name: "React", level: 80, icon: "react" },
      { name: "Next.js", level: 85, icon: "nextjs" },
      { name: "TypeScript", level: 75, icon: "typescript" },
      { name: "JavaScript", level: 80, icon: "javascript" },
      { name: "HTML/CSS", level: 85, icon: "html" },
      { name: "Tailwind CSS", level: 80, icon: "tailwind" }
    ],
    backend: [
      { name: "Node.js", level: 70, icon: "nodejs" },
      { name: "Python", level: 85, icon: "python" },
      { name: "Java", level: 80, icon: "java" },
      { name: "C++", level: 75, icon: "cpp" },
      { name: "C", level: 70, icon: "c" },
      { name: "Express.js", level: 65, icon: "express" },
      { name: "MongoDB", level: 60, icon: "mongodb" },
      { name: "PostgreSQL", level: 80, icon: "postgresql" },
      { name: "SQL Server", level: 70, icon: "sqlserver" },
      { name: "Firebase", level: 60, icon: "firebase" }
    ],
    tools: [
      { name: "Git", level: 85, icon: "git" },
      { name: "Maven", level: 75, icon: "maven" },
      { name: "Vercel", level: 70, icon: "vercel" },
      { name: "Docker", level: 60, icon: "docker" },
      { name: "VS Code", level: 90, icon: "vscode" },
      { name: "Figma", level: 65, icon: "figma" },
      { name: "Postman", level: 75, icon: "postman" }
    ],
    knowledge: [
      { name: "DSA", level: 75, icon: "algorithm" },
      { name: "OOP", level: 85, icon: "oop" }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Eye Clinic Management System",
      description: "A comprehensive eye clinic management system developed in Java. It includes UML activity diagrams for the authentication flow, JWT-based registration and login, data access and user management layers connected to PostgreSQL through JDBC, together with a custom HTTP server and routing system.",
      image: "/images/project1.jpg",
      technologies: ["Java 21", "PostgreSQL", "Supabase", "Maven", "JWT", "Render"],
      liveUrl: "https://github.com/Sagitoaz/BTL_OOP",
      githubUrl: "https://github.com/Sagitoaz/BTL_OOP",
      featured: true
    },
    {
      id: 2,
      title: "GestureAI Game Hub",
      description: "An interactive gesture-controlled game built with MediaPipe and OpenCV. It integrates hand tracking for gesture input, game state management, collision detection, and smooth real-time performance at 60 FPS.",
      image: "/images/project3.jpg",
      technologies: ["Python", "MediaPipe", "OpenCV", "Pygame", "Hand Tracking"],
      liveUrl: "https://github.com/MinhToan4/BTL_PYTHON",
      githubUrl: "https://github.com/MinhToan4/BTL_PYTHON",
      featured: true
    },
    {
      id: 3,
      title: "2D Platformer Game",
      description: "A 2D platformer developed in C++ with SFML. It features player movement with gravity and jumping, collision detection, enemy AI with patrol and attack behaviors, and a TinyXML-based level save and load system.",
      image: "/images/project2.jpg",
      technologies: ["C++17", "SFML", "TinyXML", "Game Development"],
      liveUrl: "https://github.com/MinhToan4/Game-1",
      githubUrl: "https://github.com/MinhToan4/Game-1",
      featured: false
    }
  ],

  experience: [
    {
      id: 1,
      title: "Information Technology Student",
      company: "Posts and Telecommunications Institute of Technology (PTIT)",
      period: "2023 - Present",
      description: "Honors Program student actively engaged in academic study and the exploration of emerging technologies.",
      achievements: [
        "Entrance Scholarship (2023)",
        "Academic Encouragement Scholarship (Excellent Distinction) - Semester I (2023-2024)",
        "Academic Encouragement Scholarship (Excellent Distinction) - Semester II (2023-2024)",
        "Academic Encouragement Scholarship (Excellent Distinction) - Semester I (2024-2025)",
        "Academic Encouragement Scholarship (Excellent Distinction) - Semester II (2024-2025)"
      ]
    },
    {
      id: 2,
      title: "Academic Excellence",
      company: "Posts and Telecommunications Institute of Technology (PTIT)",
      period: "2023 - Present",
      description: "Maintained outstanding academic performance with a consistently high GPA.",
      achievements: [
        "Cumulative GPA: 3.82/4.0",
        "Most recent semester GPA: 3.93/4.0",
        "Information Technology Honors Program student",
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
      description: "Ranked among the students with the highest national high school graduation examination scores at Yen My High School in the 2023 academic cycle and received a certificate of merit from the Study Promotion Association for outstanding performance in the 2023 university entrance examination."
    },
    {
      id: 2,
      degree: "Bachelor's Student in Information Technology",
      school: "Posts and Telecommunications Institute of Technology (PTIT)",
      period: "2023 - Present",
      gpa: "3.82/4.0",
      description: "Undergraduate student in Information Technology."
    }
  ],

  certifications: [
    {
      name: "Generative AI for Educators with Gemini",
      issuer: "Google",
      date: "2026",
      url: "https://edu.exceedlms.com/student/award/9KbfQpUFfun2e2S5WsEL439n"
    },
    {
      name: "Fundamentals of Deep Learning",
      issuer: "NVIDIA",
      date: "2025",
      url: "https://learn.nvidia.com/certificates?id=t0iPFHLYR86VAcVIGgtdiw"
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
    },
    {
      name: "Advanced Algorithms: PTIT.SAMSUNG 2025",
      issuer: "PTIT & Samsung",
      date: "2025",
      url: ""
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
      id: 8,
      title: "Top 3 National Finalist (Computing Track) - Huawei ICT Competition",
      type: "achievement",
      description: "Huawei ICT Competition | 2025 - 2026"
    },
    {
      id: 9,
      title: "Runner-Up - SUI Campus Hackathon",
      type: "achievement",
      description: "SUI Campus Hackathon | 02/2026"
    },
    {
      id: 3,
      title: "PTIT NITS IT Talent Incubation Lab",
      type: "organization",
      description: "Member of the PTIT NITS IT Talent Incubation Lab."
    },
    {
      id: 4,
      title: "Volunteer Blood Donation",
      type: "volunteer",
      description: "Receiving institution: Central Military Hospital 108."
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
