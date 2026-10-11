@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
 echo Node.js is required on this computer. Install the official Node.js LTS before the event.
 pause
 exit /b 1
)
echo Open http://127.0.0.1:4173 in your browser.
echo Keep this window open during the demo.
node scripts/serve.mjs
pause
