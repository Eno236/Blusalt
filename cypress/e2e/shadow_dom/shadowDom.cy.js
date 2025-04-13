import ShadowDomPage from './ShadowDomPage';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const page = new ShadowDomPage();

Given('I open the shadow dom page', () => {
  page.visit();
});

When('I access the shadow dom element', () => {
  page.accessShadowElement();
});

Then('I should verify its text', () => {
  page.verifyShadowText();
});
