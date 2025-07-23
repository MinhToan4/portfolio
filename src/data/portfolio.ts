export const portfolioData = {
  personal: {
    name: "Nguyễn Minh Toàn",
    title: "Full PTIT Developer",
    subtitle: "Nhiệt huyết với IT",
    description: "Tôi là một lập trình viên PTIT với đam mê tạo ra những sản phẩm công nghệ có ý nghĩa. Với tính cách cẩn thận, kỹ tính và cầu toàn tôi luôn muốn tạo ra một sản phẩm tốt nhất có thể.",    email: "toanminh0404@gmail.com",
    phone: "+84 332 312 065",
    location: "Ha Noi City, Vietnam",
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
      { name: "React", level: 0, icon: "react" },
      { name: "Next.js", level: 0, icon: "nextjs" },
      { name: "TypeScript", level: 0, icon: "typescript" },
      { name: "JavaScript", level: 0, icon: "javascript" },
      { name: "HTML/CSS", level: 0, icon: "html" },
      { name: "Tailwind CSS", level: 0, icon: "tailwind" }
    ],
    backend: [
      { name: "Node.js", level: 0, icon: "nodejs" },
      { name: "Python", level: 0, icon: "python" },
      { name: "Express.js", level: 0, icon: "express" },
      { name: "MongoDB", level: 0, icon: "mongodb" },
      { name: "PostgreSQL", level: 0, icon: "postgresql" },
      { name: "Firebase", level: 0, icon: "firebase" }
    ],
    tools: [
      { name: "Git", level: 0, icon: "git" },
      { name: "Docker", level: 0, icon: "docker" },
      { name: "VS Code", level: 0, icon: "vscode" },
      { name: "Figma", level: 0, icon: "figma" },
      { name: "Postman", level: 0, icon: "postman" }
    ]
  },
  
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform (Không có thật)",
      description: "Một nền tảng thương mại điện tử hoàn chỉnh với React, Node.js và MongoDB. Bao gồm thanh toán online, quản lý đơn hàng và dashboard admin.",
      image: "/images/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project1",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App (Không có thật)",
      description: "Ứng dụng quản lý công việc với real-time collaboration, drag & drop và notification system.",
      image: "/images/project2.jpg",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project2",
      featured: true
    },
    {
      id: 3,
      title: "Weather App (Không có thật)",
      description: "Ứng dụng thời tiết với giao diện đẹp, hiển thị dự báo 7 ngày và lưu trữ địa điểm yêu thích.",
      image: "/images/project3.jpg",
      technologies: ["React Native", "APIs", "Redux", "Async Storage"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project3",
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
        "GPA ổn định",
        "...",
        "..."
      ]
    },
    {
      id: 2,
      title: "Full PTIT Developer",
      company: "PTIT",
      period: "2023 - 2100",
      description: "Mất ngủ cùng anh em PTIT",
      achievements: [
        "Học 3 ngày làm chủ kiến thức",
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
      gpa: "3 năm học sinh giỏi",
      description: "Thuộc TOP học sinh có tổng điểm thi THPT năm 2023 - 2024 của trường THPT Yên Mỹ và được giấy khen của hội khuyến học: Đạt thành tích tiêu biểu trong Kỳ tuyển sinh Đại học năm 2023"
    },

    {
      id: 2,
      degree: "Sinh viên PTIT",
      school: "Học viện Công nghệ Bưu chính Viễn thông",
      period: "2023 - Hiện nay",
      gpa: "3.6+",
      description: "Học bổng đầu vào, các học bổng khuyến khích học tập và là sinh viên lớp tài năng Công nghệ thông tin"
    }
  ],
  
  certifications: [
    {
      name: "Chưa có",
      issuer: "...",
      date: "...",
      url: "https://example.com"
    }
  ]
};

export type PortfolioData = typeof portfolioData;
