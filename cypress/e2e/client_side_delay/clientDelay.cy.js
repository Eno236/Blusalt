import ClientDelayPage from './ClientDelayPage';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const page = new ClientDelayPage();

Given('I open the client side delay page', () => {
  page.visit();
});

When('I click the button to load the message', () => {
  page.clickButton();
});

Then('I should see the message displayed', () => {
  page.verifyMessage();
});
