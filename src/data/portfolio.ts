export const portfolioData = {
  personal: {
    name: "Nguyễn Minh Toàn",
    title: "Full PTIT Developer",
    subtitle: "Nhiệt huyết với IT",
    description: "Tôi là một lập trình viên PTIT với đam mê tạo ra những sản phẩm công nghệ có ý nghĩa. Với tính cách cẩn thận, kỹ tính và cầu toàn tôi luôn muốn tạo ra một sản phẩm tốt nhất có thể.", email: "toanminh0404@gmail.com",
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
      title: "Flappy Bird với Điều Khiển Bằng Cử Chỉ Tay",
      description: "Phiên bản đặc biệt của game Flappy Bird được điều khiển bằng cử chỉ tay thông qua công nghệ MediaPipe Hand Tracking của Google. Game hỗ trợ điều khiển bằng cả hai tay và có nhiều tính năng thú vị!",
      image: "/images/project1.jpg",
      technologies: ["Python", "MediaPipe", "OpenCV", "Pygame", "Hand Tracking"],
      liveUrl: "https://github.com/MinhToan4/flappy-bird",
      githubUrl: "https://github.com/MinhToan4/flappy-bird",
      featured: true
    },
    {
      id: 2,
      title: "2D Platformer Game",
      description: "Game 2D platformer phát triển bằng C++ sử dụng thư viện SFML. Dự án thể hiện kỹ năng phát triển game, lập trình hướng đối tượng và tích hợp đa phương tiện với các tính năng như di chuyển nhân vật, nhảy, bắn và chiến đấu với kẻ thù.",
      image: "/images/project2.jpg",
      technologies: ["C++", "SFML", "Game Development", "OOP", "TinyXML"],
      liveUrl: "https://www.youtube.com/watch?v=NuZzsPUH6F8",
      githubUrl: "https://github.com/MinhToan4/Game-1",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Trang web portfolio cá nhân được xây dựng với Next.js, TypeScript và Tailwind CSS. Hiển thị các dự án, kỹ năng và kinh nghiệm của tôi với giao diện người dùng đẹp mắt và hiệu ứng chuyển động mượt mà.",
      image: "/images/project3.jpg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
      liveUrl: "https://minhtoanportfolio.vercel.app/",
      githubUrl: "https://github.com/MinhToan4/portfolio",
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
      name: "Fundamentals of Deep Learning",
      issuer: "NVIDIA Deep Learning Institute",
      date: "2025",
      url: "https://learn.nvidia.com/certificates?id=t0iPFHLYR86VAcVIGgtdiw"
    }
  ]
};

export type PortfolioData = typeof portfolioData;
