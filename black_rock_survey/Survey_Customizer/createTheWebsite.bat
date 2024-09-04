@echo off

REM Change directory to the current directory (should be Survey_Customizer folder)
cd /d "%~dp0"

REM Install "Survey_Customizer"'s dependencies into "node_modules" subfolder.
call npm install

REM Extract from "Survey_Customization_Form.docx" to populate customSettings.js, customStrategies.js, and customTheme.js
node formContent.js

REM Copy customSettings.js as settings.js, move copy to Website_Source_Code\data (overrides existing)
copy /y "customSettings.js" "..\Website_Source_Code\data\settings.js" >nul

REM Copy customTheme.js as theme.js, move copy to Website_Source_Code\data (overrides existing)
copy /y "customTheme.js" "..\Website_Source_Code\data\theme.js" >nul

REM Copy customStrategies.js as strategies.js, move copy to Website_Source_Code\data (overrides existing)
copy /y "customStrategies.js" "..\Website_Source_Code\data\strategies.js" >nul

REM Set the paths for moving copies of images to Website_Source_Code
set "englishImagesSource=%~dp0\Images\Choices_Images\English"
set "englishImagesDestination=%~dp0..\Website_Source_Code\public\images\icons\en"
set "secondLangImagesSource=%~dp0\Images\Choices_Images\Secondary_Language"
set "secondLangImagesDestination=%~dp0..\Website_Source_Code\public\images\icons\es"
set "logoSource=%~dp0\Images\Header_Logo"
set "logoDestination=%~dp0..\Website_Source_Code\public\images"
set "faviconSource=%~dp0\Images\Site_Icons"
set "faviconDestination=%~dp0..\Website_Source_Code\public"

REM Delete all existing images in Website_Source_Code
del /q "%englishImagesDestination%\*.*"
del /q "%secondLangImagesDestination%\*.*"
del /q "%logoDestination%\*.*"
del /q "%faviconDestination%\*.*"

REM Copy all images to Website_Source_Code
xcopy "%englishImagesSource%\*.*" "%englishImagesDestination%" /I /C /Q >nul
xcopy "%secondLangImagesSource%\*.*" "%secondLangImagesDestination%" /I /C /Q >nul
xcopy "%logoSource%\*.*" "%logoDestination%" /I /C /Q >nul
xcopy "%faviconSource%\*.*" "%faviconDestination%" /I /C /Q >nul

REM Change directory to the Website_Source_Code folder
cd /d "..\Website_Source_Code"

REM Install "Website_Source_Code"'s dependencies into "node_modules" subfolder.
call npm install

REM Start the website at localhost:3000
npm run dev