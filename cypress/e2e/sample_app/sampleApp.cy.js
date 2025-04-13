import SampleAppPage from './SampleAppPage';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const page = new SampleAppPage();

Given('I open the sample app page', () => {
  page.visit();
});

When('I enter username and password', () => {
  page.fillUsername('blusalt');
  page.fillPassword('Test1234');
});

When('I click the login button', () => {
  page.clickLogin();
});

Then('I should see a successful login message', () => {
  page.verifyLoginSuccess();
});
