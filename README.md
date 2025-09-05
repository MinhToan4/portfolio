# Portfolio cá nhân của Nguyễn Minh Toàn

![Nguyễn Minh Toàn Portfolio](public/avatar.jpg)

🔗 **Live Demo**: [https://minhtoanportfolio.vercel.app/](https://minhtoanportfolio.vercel.app/)

## 📝 Giới thiệu

Đây là trang web portfolio cá nhân của tôi, được xây dựng bằng Next.js, TypeScript và Tailwind CSS. Trang web này giới thiệu về bản thân tôi, các dự án thực tế và kinh nghiệm làm việc của tôi. Portfolio được thiết kế với giao diện hiện đại, animations mượt mà và responsive trên mọi thiết bị.

## 🚀 Công nghệ sử dụng

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Ngôn ngữ**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email**: [EmailJS](https://www.emailjs.com/)

## 🌟 Tính năng

- **Giao diện thân thiện với người dùng**: Thiết kế hiện đại và responsive.
- **Hiệu ứng chuyển động mượt mà**: Sử dụng Framer Motion để tạo các hiệu ứng chuyển động mượt mà.
- **Dự án thực tế**: Hiển thị các dự án thật với mô tả chi tiết và liên kết đến GitHub/demo.
- **Xem thêm/Ẩn bớt**: Chức năng hiển thị/ẩn mô tả dự án đầy đủ.
- **Tối ưu hóa SEO**: Đã cấu hình metadata và OpenGraph để tối ưu SEO.
- **Form liên hệ**: Tích hợp EmailJS để gửi email trực tiếp từ form liên hệ.

## 🔄 Quy trình làm việc

1. Cập nhật thông tin cá nhân và dự án trong file `src/data/portfolio.ts`
2. Tùy chỉnh các components trong thư mục `src/components/`
3. Thêm dự án thực tế với các mô tả chi tiết và liên kết GitHub/demo
4. Sử dụng tính năng xem thêm/ẩn bớt cho các mô tả dài
5. Chạy kiểm thử với `start-dev.bat`
6. Build và deploy lên Vercel

## 📱 Responsive

Trang web được thiết kế để hoạt động tốt trên tất cả các kích thước màn hình:
- Desktop
- Tablet
- Mobile

## 🛠️ Cài đặt và Chạy

### Yêu cầu

- Node.js (v22.19.0 hoặc phiên bản tương thích)
- npm hoặc yarn

### Bước 1: Clone dự án

```bash
git clone https://github.com/MinhToan4/portfolio.git
cd portfolio
```

### Bước 2: Cài đặt các dependencies

```bash
npm install
# hoặc
yarn install
```

### Bước 3: Chạy dự án ở môi trường development

#### Cách 1: Sử dụng file batch (Windows)

```bash
# Chạy file batch để tự động thiết lập PATH và khởi động dự án
start-dev.bat
```

#### Cách 2: Sử dụng npm hoặc yarn

```bash
# Đảm bảo Node.js đã được thêm vào PATH
npm run dev
# hoặc
yarn dev
```

Dự án sẽ chạy tại địa chỉ [http://localhost:3000](http://localhost:3000).

### Bước 4: Build cho production

```bash
npm run build
# hoặc
yarn build
```

## 📁 Cấu trúc thư mục

```
portfolio/
├── public/             # Static assets
│   ├── avatar.jpg      # Avatar image
│   ├── cv.md           # CV content
│   ├── logo.png        # Logo
│   └── ...             # Other static files
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── globals.css # Global CSS
│   │   ├── globals_new.css # Alternative CSS
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   ├── components/     # React components
│   │   ├── About.tsx   # About section
│   │   ├── Contact.tsx # Contact section
│   │   ├── Experience.tsx # Experience section
│   │   ├── Footer.tsx  # Footer component
│   │   ├── Header.tsx  # Navigation header
│   │   ├── Header_new.tsx # Alternative header
│   │   ├── Hero.tsx    # Hero section
│   │   ├── Loading.tsx # Loading component
│   │   └── Projects.tsx # Projects section
│   │   └── Skills.tsx  # Skills section
│   ├── data/           # Data files
│   │   └── portfolio.ts # Portfolio data
│   └── lib/            # Utilities
│       └── utils.ts    # Utility functions
├── start-dev.bat       # Batch file to run the project on Windows
├── eslint.config.mjs   # ESLint configuration
├── next.config.ts      # Next.js config
├── package.json        # Dependencies
├── postcss.config.mjs  # PostCSS configuration
├── tailwind.config.ts  # Tailwind CSS config
└── tsconfig.json       # TypeScript config
```

## 🏆 Chứng chỉ

- **Fundamentals of Deep Learning** - NVIDIA Deep Learning Institute (2025)

## 📝 License

© 2025 Nguyễn Minh Toàn. All rights reserved.

