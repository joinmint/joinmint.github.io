// Culinary Internship Intake Form - Google Apps Script
// Handles submissions to Google Sheet and file uploads to Google Drive

var SHEET_ID = '14lUBFXcFI65tzkU08XRwfGN-U5wZaIWDGMt5DkkDu1k'; // Replace if needed
var DRIVE_FOLDER_ID = '1b-ZYBO4VikXdmQuOXmCTBxJvs9hEuRxo'; // Replace if needed

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName('Submissions');
    
    // Get all form parameters
    var firstName = e.parameter.firstName || '';
    var lastName = e.parameter.lastName || '';
    var email = e.parameter.email || '';
    var phone = e.parameter.phone || '';
    var dob = e.parameter.dob || '';
    var raceEthnicity = e.parameter.raceEthnicity || '';
    var gender = e.parameter.gender || '';
    var address = e.parameter.address || '';
    var city = e.parameter.city || '';
    var state = e.parameter.state || '';
    var zip = e.parameter.zip || '';
    var culinaryExperience = e.parameter.culinaryExperience || '';
    var training = e.parameter.training || '';
    var foodHandler = e.parameter.foodHandler || '';
    var servsafe = e.parameter.servsafe || '';
    var otherCerts = e.parameter.otherCerts || '';
    var cookingLevel = e.parameter.cookingLevel || '';
    var preferredCuisine = e.parameter.preferredCuisine || '';
    var careerGoals = e.parameter.careerGoals || '';
    var whyInterested = e.parameter.whyInterested || '';
    var availabilityTuesday = e.parameter.availabilityTuesday || '';
    var availabilityThursday = e.parameter.availabilityThursday || '';
    var availabilityFriday = e.parameter.availabilityFriday || '';
    var scheduleInfo = e.parameter.scheduleInfo || '';
    var workAuth = e.parameter.workAuth || '';
    var guardianName = e.parameter.guardianName || '';
    var guardianEmail = e.parameter.guardianEmail || '';
    var guardianPhone = e.parameter.guardianPhone || '';
    var guardianSignature = e.parameter.guardianSignature || '';
    var programAreas = e.parameter.programAreas || '';
    var additionalComments = e.parameter.additionalComments || '';
    
    // Calculate age and isUnder18
    var age = '';
    var isUnder18 = 'No';
    if (dob) {
      var birthDate = new Date(dob);
      var today = new Date();
      age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      isUnder18 = (age < 18) ? 'Yes' : 'No';
    }
    
    var submittedAt = new Date();
    var fileUrls = '';
    var filesUploaded = 'No';
    
    // Handle file uploads
    if (e.parameter.fileCount) {
      var fileCount = parseInt(e.parameter.fileCount);
      if (fileCount > 0) {
        filesUploaded = 'Yes';
        var folderName = firstName + ' ' + lastName + ' - ' + Utilities.formatDate(submittedAt, 'America/New_York', 'MMM dd, yyyy');
        var parentFolder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
        var submissionFolder = parentFolder.createFolder(folderName);
        var fileLinks = [];
        
        // Upload files
        for (var i = 0; i < fileCount; i++) {
          var blob = e.parameter['file' + i];
          if (blob) {
            var file = submissionFolder.createFile(blob);
            fileLinks.push(file.getUrl());
          }
        }
        fileUrls = fileLinks.join('; ');
      }
    }
    
    // Append row to sheet with all 36 columns
    sheet.appendRow([
      submittedAt,                    // A - Submitted At
      firstName,                      // B - First Name
      lastName,                       // C - Last Name
      email,                          // D - Email
      phone,                          // E - Phone
      dob,                            // F - Date of Birth
      age,                            // G - Age
      isUnder18,                      // H - Is Under 18
      gender,                         // I - Gender
      raceEthnicity,                  // J - Race/Ethnicity
      address,                        // K - Address
      city,                           // L - City
      state,                          // M - State
      zip,                            // N - ZIP
      culinaryExperience,             // O - Previous Culinary Experience
      training,                       // P - Culinary Training/Certifications
      foodHandler,                    // Q - Food Handler Certification
      servsafe,                       // R - ServSafe Certification
      otherCerts,                     // S - Other Certifications
      cookingLevel,                   // T - Cooking Level
      preferredCuisine,               // U - Preferred Cuisine
      careerGoals,                    // V - Career Goals
      whyInterested,                  // W - Why Interested in Program
      availabilityTuesday,            // X - Availability - Tuesday
      availabilityThursday,           // Y - Availability - Thursday
      availabilityFriday,             // Z - Availability - Friday
      scheduleInfo,                   // AA - Schedule Limitations
      workAuth,                       // AB - Work Authorization
      guardianName,                   // AC - Parent/Guardian Name
      guardianEmail,                  // AD - Parent/Guardian Email
      guardianPhone,                  // AE - Parent/Guardian Phone
      guardianSignature,              // AF - Parent/Guardian Signature
      programAreas,                   // AG - Interested Program Areas
      additionalComments,             // AH - Additional Comments
      filesUploaded,                  // AI - Files Uploaded
      fileUrls                        // AJ - File Upload URLs
    ]);
    
    return ContentService.createTextOutput('Success').setMimeType(ContentService.MimeType.TEXT);
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService.createTextOutput('Error: ' + error.toString()).setMimeType(ContentService.MimeType.TEXT);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('Culinary Internship Form is active.');
}
