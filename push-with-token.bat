@echo off
echo 🚀 GitHub Push với Personal Access Token
echo.
echo ⚠️  QUAN TRỌNG: Bạn cần Personal Access Token từ GitHub
echo    1. Truy cập: https://github.com/settings/tokens
echo    2. Generate new token (classic)
echo    3. Chọn 'repo' scope
echo    4. Copy token
echo.

set /p token="Nhập Personal Access Token: "

if "%token%"=="" (
    echo ❌ Token không được để trống!
    pause
    exit /b 1
)

echo.
echo 🔗 Đang push lên GitHub...

D:\Git\bin\git.exe remote set-url origin https://MinhToan4:%token%@github.com/MinhToan4/portfolio.git
D:\Git\bin\git.exe push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ✅ Thành công! Portfolio đã được push lên GitHub
    echo 🌐 Repository: https://github.com/MinhToan4/portfolio
    echo.
    echo 🚀 Bước tiếp theo - Deploy lên Vercel:
    echo    1. Truy cập: https://vercel.com
    echo    2. Đăng nhập bằng GitHub
    echo    3. Import repository 'portfolio'
    echo    4. Click Deploy
    echo.
) else (
    echo ❌ Có lỗi xảy ra khi push
    echo 💡 Kiểm tra lại Personal Access Token
)

echo 🔐 Xóa token khỏi URL để bảo mật...
D:\Git\bin\git.exe remote set-url origin https://github.com/MinhToan4/portfolio.git

echo.
pause
