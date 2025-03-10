@echo off
setlocal enabledelayedexpansion

:: Define paths with forward slashes
set "ICON_DIR=images/icon"
set "JSON_FILE=json/skills.json"

:: Initialize JSON structure
echo { > "%JSON_FILE%"

:: Initialize a flag to track if we are adding the first item
set "first=1"

:: Loop through files in the icon directory
for %%f in (%ICON_DIR%/*) do (
    :: Skip directories (like "ignore")
    if not "%%~xf"=="" (
        set "filename=%%~nf"
        set "extension=%%~xf"
        
        :: Check if the file is an image (can be adjusted for other formats)
        if /i "!extension!"==".png" (
            :: If it's not the first entry, add a comma before appending the next item
            if !first! equ 1 (
                set "first=0"
            ) else (
                echo , >> "%JSON_FILE%"
            )
            :: Add the entry to skills.json
            echo     "!filename!": {"name":"!filename!","progress":75,"src":"%ICON_DIR%/!filename!!extension!"} >> "%JSON_FILE%"
        )
    )
)

:: Close JSON structure
echo } >> "%JSON_FILE%"

echo Script finished.
