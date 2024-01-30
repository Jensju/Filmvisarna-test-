import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* No duplicate steps, this one already in CheckBookings.js
Given('that i am on the start page', () => {});*/

Given('I am on the log in page', () => {
  cy.get('#basic-nav-dropdown').click();
  cy.get('a').contains('Logga in').click();
});

When('I fill in my account details using {string} and {string}', (adminEmail, adminPassword) => {
  cy.get('input[name="emailInput"]').type(adminEmail);
  cy.get('input[type="password"]').type(adminPassword);
});

Then('I should be able to log in', () => {
  // TODO: implement step
});