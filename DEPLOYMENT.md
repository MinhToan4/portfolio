# 🚀 Hướng dẫn Deploy Portfolio

## Cách 1: Sử dụng script tự động (Khuyến nghị)

### Bước 1: Cài đặt Git (nếu chưa có)
1. Download Git từ: https://git-scm.com/download/windows
2. Cài đặt với các tùy chọn mặc định
3. Restart terminal sau khi cài đặt

### Bước 2: Chạy script deploy
```bash
# Chạy PowerShell script
./deploy.ps1

# Hoặc chạy Batch script nếu PowerShell bị chặn
./deploy.bat
```

## Cách 2: Deploy thủ công

### Bước 1: Push code lên GitHub
```bash
# Cấu hình Git user (chỉ cần làm 1 lần)
git config --global user.name "Nguyễn Minh Toàn"
git config --global user.email "toanminh0404@gmail.com"

# Khởi tạo git repository
git init

# Thêm tất cả files
git add .

# Commit đầu tiên
git commit -m "🎉 Initial commit: Modern IT Portfolio Website"

# Thêm remote repository
git remote add origin https://github.com/MinhToan4/portfolio.git

# Push lên GitHub
git push -u origin main
```

### Bước 2: Deploy với Vercel
1. Truy cập [vercel.com](https://vercel.com)
2. Đăng nhập bằng GitHub account
3. Click "New Project"
4. Import GitHub repository vừa tạo
5. Vercel sẽ tự động detect Next.js và configure
6. Click "Deploy"

## Cách 2: Deploy bằng Vercel CLI

### Bước 1: Cài đặt Vercel CLI
```bash
npm install -g vercel
```

### Bước 2: Login và Deploy
```bash
# Login với Vercel account
vercel login

# Deploy project
vercel

# Hoặc deploy production
vercel --prod
```

## Cấu hình Environment Variables (nếu cần)

Nếu bạn sử dụng EmailJS hoặc các service khác cần API keys:

1. Trong Vercel Dashboard, vào project settings
2. Chọn tab "Environment Variables"
3. Thêm các variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## Custom Domain (Optional)

1. Trong Vercel Dashboard, vào project settings
2. Chọn tab "Domains"
3. Thêm custom domain của bạn
4. Follow hướng dẫn để cấu hình DNS

## Automatic Deployments

Khi đã connect với GitHub, mỗi khi bạn push code mới:
- **Main branch**: Auto deploy to production
- **Other branches**: Auto deploy to preview URLs

## Performance Optimization

Vercel tự động optimize:
- ✅ Image optimization
- ✅ Static generation
- ✅ Edge caching
- ✅ Compression
- ✅ CDN distribution

## Monitoring

Trong Vercel Dashboard bạn có thể monitor:
- Page load performance
- Core Web Vitals
- Error tracking
- Analytics

## Troubleshooting

### Build errors:
1. Check terminal output trong Vercel Dashboard
2. Đảm bảo tất cả dependencies được install
3. Check TypeScript errors

### Runtime errors:
1. Check Function Logs trong Vercel Dashboard
2. Test locally trước khi deploy

## Updates

Để update website:
1. Make changes locally
2. Test với `npm run dev`
3. Commit và push lên GitHub
4. Vercel sẽ auto-deploy

---

🎉 **Chúc mừng!** Portfolio của bạn đã online và sẵn sàng để chia sẻ với thế giới!
