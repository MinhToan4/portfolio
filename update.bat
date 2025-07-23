@echo off
echo 🔄 Portfolio Update Script
echo.

REM Check if there are changes to commit
D:\Git\bin\git.exe diff --quiet
if %errorlevel% equ 0 (
    D:\Git\bin\git.exe diff --cached --quiet
    if %errorlevel% equ 0 (
        echo ℹ️  Không có thay đổi nào để commit
        pause
        exit /b 0
    )
)

echo 📁 Thêm tất cả thay đổi...
D:\Git\bin\git.exe add .

echo.
set /p message="Nhập commit message (hoặc Enter để dùng mặc định): "
if "%message%"=="" set message=📝 Update portfolio content

echo.
echo 💾 Commit thay đổi: %message%
D:\Git\bin\git.exe commit -m "%message%"

echo.
echo 🔐 Nhập Personal Access Token để push...
set /p token="Token: "

if "%token%"=="" (
    echo ❌ Token không được để trống!
    pause
    exit /b 1
)

echo.
echo 🚀 Đang push lên GitHub...
D:\Git\bin\git.exe remote set-url origin https://MinhToan4:%token%@github.com/MinhToan4/portfolio.git
D:\Git\bin\git.exe push

if %errorlevel% equ 0 (
    echo ✅ Update thành công!
    echo 🌐 Repository: https://github.com/MinhToan4/portfolio
    if exist "vercel.json" (
        echo 🚀 Vercel sẽ tự động deploy trong vài phút
    )
) else (
    echo ❌ Có lỗi xảy ra khi push
)

echo.
echo 🔐 Xóa token khỏi URL để bảo mật...
D:\Git\bin\git.exe remote set-url origin https://github.com/MinhToan4/portfolio.git

echo.
pause
