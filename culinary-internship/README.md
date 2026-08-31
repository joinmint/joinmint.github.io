# 🍳 Mint Project Culinary Internship Application Form

**Status:** 95% Complete — One Quick Manual Step Remaining

---

## ✅ What's Done

### 1. **GitHub Pages Form** 
- **Live at:** `https://joinmint.github.io/culinary-internship/`
- 35-question intake form with Mint Project branding
- Parent/Guardian section (auto-expands for under-18)
- File upload for certifications/training documents
- Real-time validation and success confirmation screen
- **Status:** ✅ Deployed and ready

### 2. **Google Sheet**
- **Sheet:** `Culinary Internship Submissions`
- **URL:** https://docs.google.com/spreadsheets/d/14lUBFXcFI65tzkU08XRwfGN-U5wZaIWDGMt5DkkDu1k/edit
- 36 columns tracking:
  - Personal info (name, email, phone, age, demographics)
  - Culinary experience & certifications
  - Schedule availability & career goals
  - Parent/Guardian info (if under 18)
  - File uploads with links
- **Status:** ✅ Created with headers

### 3. **Google Drive Folder**
- **Folder:** `Culinary Internship - File Uploads`
- **URL:** https://drive.google.com/drive/folders/1b-ZYBO4VikXdmQuOXmCTBxJvs9hEuRxo
- Stores all uploaded certifications & training documents
- Auto-organizes by applicant name & date
- **Status:** ✅ Created and ready

### 4. **Apps Script Backend Code**
- **File:** `/culinary-internship/Code.gs`
- Handles form submissions
- Logs data to Google Sheet
- Uploads files to Google Drive
- Calculates age & under-18 status
- **Status:** ✅ Complete with IDs pre-filled

### 5. **GitHub Repository**
- **Repo:** `joinmint/joinmint.github.io`
- **Branch:** `main`
- All files committed and pushed
- **Status:** ✅ Deployed

---

## ⏳ ONE REMAINING STEP: Deploy Apps Script (5 minutes)

The only manual step is to create and deploy the Google Apps Script web app. This is a one-time setup.

### Quick Deploy Instructions:

1. **Go to:** https://script.google.com/
2. **Create new project** → Name it `Culinary Internship Form`
3. **Copy the Code:**
   - Delete default code in `Code.gs`
   - Copy all code from: `/tasklet/agent/home/culinary-internship/Code.gs`
   - Paste it in
   - Click **Save**
4. **Deploy as Web App:**
   - Click **Deploy** → **New deployment** → Select **Web app**
   - Execute as: `join@mintproject.org`
   - Who has access: **Anyone**
   - Click **Deploy**
5. **Copy the URL** that appears (looks like: `https://script.google.com/macros/s/AKfycby.../exec`)
6. **Update the form:**
   - Open `/tasklet/agent/home/culinary-internship/index.html`
   - Find: `const APPS_SCRIPT_URL = '';`
   - Replace with your deployment URL
   - Save & commit to GitHub

**That's it!** The form will then be fully functional.

---

## 📋 Form Fields (35 Questions)

### Personal Information
- First & Last Name
- Email & Phone
- Date of Birth (auto-calculates age & under-18 status)
- Gender & Race/Ethnicity
- Address, City, State, ZIP

### Culinary Experience
- Previous culinary experience level
- Kitchen roles held
- Cuisine expertise
- Cooking skills assessment
- Certifications (Food Handler, ServSafe, Other)

### Program Interest
- Preferred cuisine type
- Career goals
- Why interested in program
- References

### Schedule & Availability
- Tuesday/Thursday/Friday availability
- Schedule limitations & conflicts
- Transportation
- Work authorization status

### Parent/Guardian (if Under 18)
- Name, Email, Phone
- Signature & Date
- Auto-expands if age < 18

### File Uploads
- Certifications & training documents
- Supported: PDF, Word, Excel, Images

---

## 🔗 Key Resources

| Resource | Link |
|----------|------|
| **Form** | https://joinmint.github.io/culinary-internship/ |
| **Google Sheet** | https://docs.google.com/spreadsheets/d/14lUBFXcFI65tzkU08XRwfGN-U5wZaIWDGMt5DkkDu1k/edit |
| **Drive Folder** | https://drive.google.com/drive/folders/1b-ZYBO4VikXdmQuOXmCTBxJvs9hEuRxo |
| **Setup Guide** | `/tasklet/agent/home/culinary-internship/SETUP.md` |
| **GitHub Repo** | https://github.com/joinmint/joinmint.github.io |
| **Local Files** | `/tasklet/agent/home/culinary-internship/` |

---

## 💡 How It Works

1. **Applicant submits form** at `https://joinmint.github.io/culinary-internship/`
2. **Form validates** (checks required fields, file types)
3. **Form sends POST request** to Apps Script deployment URL
4. **Apps Script:**
   - Calculates age from date of birth
   - Sets under-18 status
   - Creates folder in Google Drive for applicant files
   - Uploads files to folder
   - Appends row to Google Sheet with all data + file links
5. **Applicant sees success screen** with "Submit Another Report" button
6. **You review** submissions in Google Sheet or Drive folder

---

## 🎯 What Happens After Deployment

Once the Apps Script is deployed:
- Form automatically logs submissions to Google Sheet
- Files automatically upload to organized Drive folder
- Applicant data is timestamped with server-side "Submitted At" date
- Age calculation and under-18 detection happens automatically
- You can manage applications, track files, and prepare payment reports

---

**Questions?** Check `/tasklet/agent/home/culinary-internship/SETUP.md` for detailed step-by-step instructions and troubleshooting.
