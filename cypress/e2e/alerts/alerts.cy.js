import AlertsPage from './AlertsPage';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const page = new AlertsPage();

Given('I open the alerts page', () => {
  page.visit();
});

When('I click the alert button', () => {
  page.triggerAlert();
});

Then('I should see an alert message', () => {
  page.verifyAlert();
});
