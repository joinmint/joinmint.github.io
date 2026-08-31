// Culinary Internship Intake Form - Google Apps Script
// Handles file uploads and logging to Google Sheet

var SHEET_ID = ''; // Will be set during setup
var DRIVE_FOLDER_ID = ''; // Will be set during setup

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSheet();
    
    // Collect submitted data
    var firstName = e.parameter.firstName || '';
    var lastName = e.parameter.lastName || '';
    var email = e.parameter.email || '';
    var phone = e.parameter.phone || '';
    var dob = e.parameter.dob || '';
    var gender = e.parameter.gender || '';
    var address = e.parameter.address || '';
    var city = e.parameter.city || '';
    var state = e.parameter.state || '';
    var zip = e.parameter.zip || '';
    var culinaryExperience = e.parameter.culinaryExperience || '';
    var kitchenRole = e.parameter.kitchenRole || '';
    var cuisineExpertise = e.parameter.cuisineExpertise || '';
    var cookingSkills = e.parameter.cookingSkills || '';
    var strongSkills = e.parameter.strongSkills || '';
    var improvementAreas = e.parameter.improvementAreas || '';
    var certifications = e.parameter.certifications || '';
    var certDetails = e.parameter.certDetails || '';
    var dietary = e.parameter.dietary || '';
    var scheduleCommit = e.parameter.scheduleCommit || '';
    var scheduleConflicts = e.parameter.scheduleConflicts || '';
    var transportation = e.parameter.transportation || '';
    var careerGoals = e.parameter.careerGoals || '';
    var programInterest = e.parameter.programInterest || '';
    var why = e.parameter.why || '';
    var references = e.parameter.references || '';
    var guardianName = e.parameter.guardianName || '';
    var guardianRelationship = e.parameter.guardianRelationship || '';
    var guardianEmail = e.parameter.guardianEmail || '';
    var guardianPhone = e.parameter.guardianPhone || '';
    var guardianSignature = e.parameter.guardianSignature || '';
    var guardianDate = e.parameter.guardianDate || '';
    var agreement = e.parameter.agreement || '';
    
    var submittedAt = new Date();
    var folderLink = '';
    
    // Handle file uploads
    if (e.parameter.certFileCount) {
      var certFileCount = parseInt(e.parameter.certFileCount);
      if (certFileCount > 0) {
        // Create folder for this submission
        var folderName = firstName + ' ' + lastName + ' - ' + Utilities.formatDate(submittedAt, 'America/New_York', 'MMM dd, yyyy');
        var parentFolder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
        var submissionFolder = parentFolder.createFolder(folderName);
        folderLink = submissionFolder.getUrl();
        
        // Upload files
        for (var i = 0; i < certFileCount; i++) {
          var blob = e.parameter['certFile' + i];
          if (blob) {
            submissionFolder.createFile(blob);
          }
        }
      }
    }
    
    // Calculate age
    var age = '';
    if (dob) {
      var birthDate = new Date(dob);
      var today = new Date();
      age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    }
    
    // Append row to sheet
    sheet.appendRow([
      submittedAt,
      firstName,
      lastName,
      email,
      phone,
      dob,
      age,
      gender,
      address,
      city,
      state,
      zip,
      culinaryExperience,
      kitchenRole,
      cuisineExpertise,
      cookingSkills,
      strongSkills,
      improvementAreas,
      certifications,
      certDetails,
      dietary,
      scheduleCommit,
      scheduleConflicts,
      transportation,
      careerGoals,
      programInterest,
      why,
      references,
      guardianName,
      guardianRelationship,
      guardianEmail,
      guardianPhone,
      guardianSignature,
      guardianDate,
      agreement,
      folderLink
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