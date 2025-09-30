@echo off
echo Deploying Paragon Services to Hostinger VPS...
echo.

echo Step 1: Building production files...
call npm run build
if %errorlevel% neq 0 (
    echo Build failed!
    pause
    exit /b 1
)

echo.
echo Step 2: Creating deployment package...
if exist deploy.zip del deploy.zip
powershell Compress-Archive -Path "build\*" -DestinationPath "deploy.zip"

echo.
echo Step 3: Upload instructions for Hostinger VPS:
echo.
echo 1. Go to your Hostinger VPS control panel
echo 2. Open File Manager or use SFTP
echo 3. Navigate to /var/www/html/
echo 4. Delete all existing files in /var/www/html/
echo 5. Upload the deploy.zip file
echo 6. Extract deploy.zip in /var/www/html/
echo 7. Set proper permissions: chmod -R 755 /var/www/html/
echo.
echo Alternative: Use SCP command:
echo scp deploy.zip root@your-vps-ip:/var/www/html/
echo ssh root@your-vps-ip "cd /var/www/html && unzip deploy.zip && chmod -R 755 ."
echo.
echo Your deployment package is ready: deploy.zip
echo.
pause
