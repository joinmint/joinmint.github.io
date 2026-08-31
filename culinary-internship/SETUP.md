# Mint Project Culinary Internship Form - Setup Guide

## Overview
This is a 35-question culinary internship intake form that collects applicant information, experience, certifications, and availability. File uploads are supported (certifications/training documents).

## Architecture
- **Frontend:** GitHub Pages (HTML form at `/culinary-internship/index.html`)
- **Backend:** Google Apps Script (processes submissions, uploads files, logs to Sheet)
- **Storage:** Google Drive (file uploads) + Google Sheets (submission log)

## Setup Steps

### 1. Create a Google Sheet for Submissions
- Create a new Google Sheet
- Name it: "Culinary Internship Submissions"
- Add these column headers in row 1:
  1. Submitted At
  2. First Name
  3. Last Name
  4. Email
  5. Phone
  6. Date of Birth
  7. Age
  8. Gender
  9. Street Address
  10. City
  11. State
  12. ZIP Code
  13. Culinary Experience
  14. Kitchen Roles
  15. Cuisine Expertise
  16. Cooking Skills Level
  17. Strongest Skills
  18. Areas for Improvement
  19. Certifications
  20. Certification Details
  21. Dietary Restrictions
  22. Schedule Commitment
  23. Schedule Conflicts
  24. Transportation
  25. Career Goals
  26. Program Interest
  27. Why Join
  28. References
  29. Guardian Name
  30. Guardian Relationship
  31. Guardian Email
  32. Guardian Phone
  33. Guardian Signature
  34. Guardian Signature Date
  35. Agreement
  36. File Upload Folder Link

### 2. Create a Google Drive Folder
- Create a new folder in Google Drive named "Culinary Internship - File Uploads"
- Copy the folder ID from the URL (it's the long alphanumeric string after `/folders/`)

### 3. Create a Google Apps Script Project
- Go to https://script.google.com
- Create a new project
- Name it: "Culinary Internship Form"
- Delete the default `Code.gs` file
- Create a new file named `Code.gs`
- Paste the contents from `/culinary-internship/Code.gs` in this repository
- In the Apps Script editor, open the script and find these lines:
  ```javascript
  var SHEET_ID = ''; // Will be set during setup
  var DRIVE_FOLDER_ID = ''; // Will be set during setup
  ```
- Replace with your actual IDs:
  ```javascript
  var SHEET_ID = 'YOUR_SHEET_ID_HERE';
  var DRIVE_FOLDER_ID = 'YOUR_FOLDER_ID_HERE';
  ```
- **Get your Sheet ID:** Open your Google Sheet, copy the ID from the URL (it's between `/d/` and `/edit`)
- **Get your Folder ID:** Open your Google Drive folder, copy the ID from the URL (it's after `/folders/`)

### 4. Deploy the Apps Script
- In Apps Script editor, click "Deploy" → "New deployment"
- Select type: "Web app"
- Execute as: Your email
- Who has access: "Anyone"
- Click "Deploy"
- Copy the deployment URL (it looks like: `https://script.google.com/macros/s/AKfycby.../exec`)

### 5. Update the Form with Your Apps Script URL
- Open `/culinary-internship/index.html`
- Find this line near the top of the `<script>` section:
  ```javascript
  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/...';  ```
- Replace with your deployed Apps Script URL
- Commit and push to GitHub

### 6. Deploy to GitHub Pages
- Push all files to the `joinmint/joinmint.github.io` repository under `/culinary-internship/`
- Ensure `.nojekyll` exists in the repo root
- The form will be live at: `https://joinmint.github.io/culinary-internship/`

## File Structure
```
culinary-internship/
├── index.html           # Main intake form
├── Code.gs              # Google Apps Script backend
└── SETUP.md             # This setup guide
```

## Features
- ✅ 35-question intake form
- ✅ Parent/Guardian section (auto-expands if applicant is under 18)
- ✅ File uploads for certifications/training documents
- ✅ Real-time form validation
- ✅ Success screen after submission
- ✅ All submissions logged to Google Sheet
- ✅ File uploads stored in Google Drive

## Testing
1. Fill out the form completely
2. Upload a test file
3. Submit
4. Check Google Sheet for the new row
5. Check Google Drive folder for the uploaded file

## Notes
- The form requires all marked fields (*) before submission
- Guardian information is only required for applicants under 18
- Files are organized in dated folders by applicant name
- Submitted At timestamp is server-side (always accurate)