# Portfolio Deploy Script
# This script will initialize git, add files, commit and push to GitHub

Write-Host "🚀 Starting Portfolio Deployment..." -ForegroundColor Green

# Check if git is installed
try {
    $gitVersion = git --version
    Write-Host "✅ Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git is not installed. Please install Git first:" -ForegroundColor Red
    Write-Host "   Download from: https://git-scm.com/download/windows" -ForegroundColor Yellow
    exit 1
}

# Initialize git repository if not exists
if (!(Test-Path ".git")) {
    Write-Host "📦 Initializing Git repository..." -ForegroundColor Blue
    git init
}

# Add remote origin
Write-Host "🔗 Adding remote origin..." -ForegroundColor Blue
git remote remove origin 2>$null
git remote add origin https://github.com/MinhToan4/portfolio.git

# Check git config
$userName = git config user.name
$userEmail = git config user.email

if (!$userName -or !$userEmail) {
    Write-Host "⚙️  Configuring Git user..." -ForegroundColor Blue
    git config --global user.name "Nguyễn Minh Toàn"
    git config --global user.email "toanminh0404@gmail.com"
}

# Add all files (respecting .gitignore)
Write-Host "📁 Adding files..." -ForegroundColor Blue
git add .

# Check if there are changes to commit
$status = git status --porcelain
if ($status) {
    # Commit changes
    $commitMessage = "🎉 Initial commit: Modern IT Portfolio Website"
    Write-Host "💾 Committing changes: $commitMessage" -ForegroundColor Blue
    git commit -m "$commitMessage"
    
    # Push to GitHub
    Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Blue
    Write-Host "   Repository: https://github.com/MinhToan4/portfolio.git" -ForegroundColor Yellow
    Write-Host "   Note: You may need to enter your GitHub credentials" -ForegroundColor Yellow
    
    git push -u origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Successfully deployed to GitHub!" -ForegroundColor Green
        Write-Host "🌐 Your portfolio is now available at:" -ForegroundColor Green
        Write-Host "   https://github.com/MinhToan4/portfolio" -ForegroundColor Cyan
        Write-Host "🚀 You can now deploy to Vercel:" -ForegroundColor Green
        Write-Host "   1. Go to https://vercel.com" -ForegroundColor Yellow
        Write-Host "   2. Connect your GitHub repository" -ForegroundColor Yellow
        Write-Host "   3. Deploy automatically!" -ForegroundColor Yellow
    } else {
        Write-Host "❌ Failed to push to GitHub" -ForegroundColor Red
        Write-Host "💡 Try running: git push -u origin main" -ForegroundColor Yellow
    }
} else {
    Write-Host "ℹ️  No changes to commit" -ForegroundColor Yellow
}

Write-Host "`n🎉 Deployment script completed!" -ForegroundColor Green
