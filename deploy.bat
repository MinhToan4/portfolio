@echo off
echo 🚀 Starting Portfolio Deployment...

REM Check if git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git is not installed. Please install Git first:
    echo    Download from: https://git-scm.com/download/windows
    pause
    exit /b 1
)

echo ✅ Git is installed

REM Initialize git repository if not exists
if not exist ".git" (
    echo 📦 Initializing Git repository...
    git init
)

REM Add remote origin
echo 🔗 Adding remote origin...
git remote remove origin 2>nul
git remote add origin https://github.com/MinhToan4/portfolio.git

REM Configure git user if not set
for /f "delims=" %%i in ('git config user.name 2^>nul') do set username=%%i
for /f "delims=" %%i in ('git config user.email 2^>nul') do set useremail=%%i

if "%username%"=="" (
    echo ⚙️ Configuring Git user...
    git config --global user.name "Nguyen Minh Toan"
    git config --global user.email "toanminh0404@gmail.com"
)

REM Add all files
echo 📁 Adding files...
git add .

REM Check if there are changes
git diff --cached --quiet
if %errorlevel% neq 0 (
    REM Commit changes
    echo 💾 Committing changes...
    git commit -m "🎉 Initial commit: Modern IT Portfolio Website"
    
    REM Push to GitHub
    echo 🚀 Pushing to GitHub...
    echo    Repository: https://github.com/MinhToan4/portfolio.git
    echo    Note: You may need to enter your GitHub credentials
    
    git push -u origin main
    
    if %errorlevel% equ 0 (
        echo ✅ Successfully deployed to GitHub!
        echo 🌐 Your portfolio is now available at:
        echo    https://github.com/MinhToan4/portfolio
        echo 🚀 You can now deploy to Vercel:
        echo    1. Go to https://vercel.com
        echo    2. Connect your GitHub repository
        echo    3. Deploy automatically!
    ) else (
        echo ❌ Failed to push to GitHub
        echo 💡 Try running: git push -u origin main
    )
) else (
    echo ℹ️ No changes to commit
)

echo.
echo 🎉 Deployment script completed!
pause
