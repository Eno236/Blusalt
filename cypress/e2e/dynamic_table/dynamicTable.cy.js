import DynamicTablePage from './DynamicTablePage';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const page = new DynamicTablePage();

Given('I open the dynamic table page', () => {
  page.visit();
});

When('I find Chromes CPU value', () => {
  page.findChromeCpu();
});

Then('I should see a valid CPU value displayed', () => {
  page.verifyCpuValue();
});
