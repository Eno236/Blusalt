import FileUploadPage from './FileUploadPage';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const page = new FileUploadPage();

Given('I open the file upload page', () => {
  page.visit();
});

When('I upload a file', () => {
  page.uploadFile('example.json'); // Upload example file from fixtures
});

Then('I should see the uploaded file name', () => {
  page.verifyFileUpload();
});
