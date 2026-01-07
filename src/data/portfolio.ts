export const portfolioData = {
  personal: {
    name: "Nguyễn Minh Toàn",
    title: "Back-End Developer",
    subtitle: "Sinh viên PTIT hệ tài năng",
    description: "Là sinh viên CNTT tại PTIT, tôi kết hợp chuyên môn kỹ thuật và tư duy giải quyết vấn đề sáng tạo để xây dựng các ứng dụng có ý nghĩa. Hành trình phát triển phần mềm của tôi được thúc đẩy bởi sự tò mò và cam kết học hỏi liên tục. Tôi đang tìm kiếm cơ hội thực tập để áp dụng kiến thức vào các dự án thực tế và phát triển kỹ năng trong môi trường chuyên nghiệp.",
    email: "toanminh0404@gmail.com",
    phone: "+84 334 470 295",
    location: "Ha Dong, Ha Noi, Vietnam",
    avatar: "/avatar.jpg",
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
      description: "Hệ thống quản lý phòng khám mắt toàn diện được phát triển bằng Java. Bao gồm sơ đồ hoạt động UML cho luồng xác thực, Đăng ký/Đăng nhập với Xác thực JWT, Lớp dữ liệu và Quản lý người dùng kết nối với PostgreSQL qua JDBC, cùng với máy chủ HTTP tùy chỉnh và hệ thống định tuyến.",
      image: "/images/project1.jpg",
      technologies: ["Java 21", "PostgreSQL", "Supabase", "Maven", "JWT", "Render"],
      liveUrl: "https://github.com/Sagitoaz/BTL_OOP",
      githubUrl: "https://github.com/Sagitoaz/BTL_OOP",
      featured: true
    },
    {
      id: 2,
      title: "GestureAI Game Hub",
      description: "Trò chơi sáng tạo được điều khiển bằng cử chỉ tay sử dụng MediaPipe và OpenCV. Tích hợp theo dõi tay cho đầu vào cử chỉ, quản lý trạng thái trò chơi, phát hiện va chạm, và duy trì hiệu suất mượt mà 60 FPS với xử lý thời gian thực.",
      image: "/images/project3.jpg",
      technologies: ["Python", "MediaPipe", "OpenCV", "Pygame", "Hand Tracking"],
      liveUrl: "https://github.com/MinhToan4/BTL_PYTHON",
      githubUrl: "https://github.com/MinhToan4/BTL_PYTHON",
      featured: true
    },
    {
      id: 3,
      title: "2D Platformer Game",
      description: "Trò chơi platformer 2D được phát triển bằng C++ sử dụng SFML. Bao gồm chuyển động người chơi với trọng lực và nhảy, phát hiện va chạm, AI kẻ thù với mô hình tuần tra và tấn công, cùng với hệ thống lưu/tải cấp độ trò chơi bằng TinyXML.",
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
      title: "Sinh viên PTIT",
      company: "PTIT",
      period: "2023 - Hiện tại",
      description: "Phát triển kỹ năng và tiếp thu kiến thức.",
      achievements: [
        "Duy trì GPA tốt",
        "...",
        "..."
      ]
    },
    {
      id: 2,
      title: "Nhà phát triển Full Stack",
      company: "PTIT",
      period: "2023 - Hiện tại",
      description: "Thức khuya cùng anh em PTIT",
      achievements: [
        "Học 3 ngày để làm chủ kiến thức",
        "...",
        "..."
      ]
    }
  ],

  education: [
    {
      id: 1,
      degree: "Tốt nghiệp Trung học phổ thông",
      school: "Trường THPT Yên Mỹ",
      period: "2020 - 2023",
      gpa: "Học sinh giỏi",
      description: "Xếp hạng trong top học sinh có điểm thi tốt nghiệp THPT cao nhất năm 2023-2024 của trường THPT Yên Mỹ và nhận giấy khen từ Hội Khuyến học: Đạt thành tích xuất sắc trong kỳ tuyển sinh Đại học năm 2023"
    },

    {
      id: 2,
      degree: "Sinh viên PTIT",
      school: "Học viện Công nghệ Bưu chính Viễn thông",
      period: "2023 - Hiện tại",
      gpa: "3.82/4.0",
      description: "Nhận học bổng đầu vào, các học bổng khuyến khích học tập và là sinh viên lớp tài năng Công nghệ thông tin. GPA học kỳ gần nhất: 3.93/4.0"
    }
  ],

  certifications: [
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
  ]
};

export type PortfolioData = typeof portfolioData;
