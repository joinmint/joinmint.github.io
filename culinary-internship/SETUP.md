# Mint Project Culinary Internship Form - Setup Guide

## Overview
The form architecture consists of:
- **GitHub Pages** (static HTML form): `https://joinmint.github.io/culinary-internship/`
- **Google Apps Script** (backend handler): Receives form submissions, uploads files, logs to Google Sheet
- **Google Sheet** (database): Stores all 36 submission fields
- **Google Drive Folder** (file storage): Stores uploaded certifications/documents

**Current Status:**
- ✅ HTML form created and deployed to GitHub
- ✅ Google Sheet created: `Culinary Internship Submissions`
- ✅ Google Drive folder created: `Culinary Internship - File Uploads`
- ✅ Code.gs (Apps Script backend) ready
- ⏳ **YOU NEED:** Create Apps Script project and deploy it

---

## Step 1: Create a Google Apps Script Project

1. Open **Google Apps Script**: https://script.google.com/
2. Click **New Project** (top left)
3. Name it: `Culinary Internship Form`
4. You'll see a blank `Code.gs` file

---

## Step 2: Replace the Code

1. **Delete** the default code in `Code.gs` (select all: `Ctrl+A`, then delete)
2. **Copy the entire contents** from `/tasklet/agent/home/culinary-internship/Code.gs` (local file)
3. **Paste** it into the Apps Script `Code.gs` file
4. Click **Save** (Ctrl+S)

**Key IDs Already in Code:**
- Sheet ID: `14lUBFXcFI65tzkU08XRwfGN-U5wZaIWDGMt5DkkDu1k`
- Drive Folder ID: `1b-ZYBO4VikXdmQuOXmCTBxJvs9hEuRxo`

---

## Step 3: Deploy as Web App

1. Click **Deploy** (top right, near Save)
2. Click **New deployment** (blue button)
3. Click the **Select type** dropdown (gear icon) → Choose **Web app**
4. Fill in the form:
   - **Execute as:** `join@mintproject.org` (your Mint Project account)
   - **Who has access:** `Anyone` (so the form can submit)
5. Click **Deploy**
6. A dialog will appear with the deployment URL. **Copy the entire URL** (looks like: `https://script.google.com/macros/s/AKfycby...xxxxx/exec`)

---

## Step 4: Update the Form with the Deployment URL

1. Open `/tasklet/agent/home/culinary-internship/index.html` in a text editor
2. Find the line (around line 30-40):
   ```javascript
   const APPS_SCRIPT_URL = '';  // Replace with your deployment URL
   ```
3. Replace the empty string with your deployment URL:
   ```javascript
   const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby...xxxxx/exec';
   ```
4. Save the file

---

## Step 5: Push Updated Form to GitHub

1. Commit and push the updated `index.html` to GitHub:
   ```bash
   git add culinary-internship/index.html
   git commit -m "Add Apps Script deployment URL for Culinary form"
   git push
   ```

---

## Step 6: Verify the Form is Live

1. Visit: `https://joinmint.github.io/culinary-internship/`
2. Fill out the form with test data
3. Upload a test file (image, PDF, or document)
4. Submit
5. Check the Google Sheet: https://docs.google.com/spreadsheets/d/14lUBFXcFI65tzkU08XRwfGN-U5wZaIWDGMt5DkkDu1k/edit
   - New row should appear with submitted data
   - "Files Uploaded" should be "Yes"
   - Files should appear in: https://drive.google.com/drive/folders/1b-ZYBO4VikXdmQuOXmCTBxJvs9hEuRxo

---

## Troubleshooting

**Form says "Submission failed":**
- Check the deployment URL is correct and doesn't have typos
- Make sure you selected "Anyone" has access in deployment settings

**Files not uploading:**
- Check the Drive folder ID in `Code.gs` line 3: `var DRIVE_FOLDER_ID = '1b-ZYBO4VikXdmQuOXmCTBxJvs9hEuRxo';`
- Check folder permissions on Google Drive

**Data not appearing in Sheet:**
- Check the Sheet ID in `Code.gs` line 2: `var SHEET_ID = '14lUBFXcFI65tzkU08XRwfGN-U5wZaIWDGMt5DkkDu1k';`
- Make sure Apps Script has permission to access the Sheet

---

## Resources

- **Google Sheet:** https://docs.google.com/spreadsheets/d/14lUBFXcFI65tzkU08XRwfGN-U5wZaIWDGMt5DkkDu1k/edit
- **Drive Folder:** https://drive.google.com/drive/folders/1b-ZYBO4VikXdmQuOXmCTBxJvs9hEuRxo
- **GitHub Repo:** https://github.com/joinmint/joinmint.github.io
- **Form URL:** https://joinmint.github.io/culinary-internship/

---

Once deployed, the form will automatically:
- ✅ Log submissions to Google Sheet
- ✅ Upload files to Google Drive folder
- ✅ Calculate applicant age and under-18 status
- ✅ Show "Submission Successful!" message
- ✅ Allow applicants to submit another report
