@echo off
cd /d "%~dp0"
where npm >nul 2>nul
if errorlevel 1 (
 echo ERROR: Node.js and npm are required. Install Node.js from https://nodejs.org/ first.
 pause
 exit /b 1
)
if not exist node_modules (
 echo Installing npm dependencies (requires an internet connection)...
 call npm install
 if errorlevel 1 (
  echo npm install failed. Check your internet connection.
  pause
  exit /b 1
 )
)
echo Starting BiteHub development server...
echo Open the local URL shown below in your browser.
call npm run dev
pause
