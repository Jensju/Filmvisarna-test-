import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* No duplicate steps, this one already in CheckBookings.js
Given('that i am on the start page', () => {});*/

Given('I am on the account creation menu', () => {
  cy.get('#basic-nav-dropdown').click();
  cy.get('a').contains('Bli medlem').click();
});

When('I fill in account creation details using {string} as my email and {string} as my password', (email, password) => {
  // glöm inte att vanlig JS kod kan användas också
  cy.get('input[name="emailInput"]').type(email);  
  cy.get('input[type="password"]').type(password);
});

Then('I should be able to create an account', () => {
  cy.get('button').contains('BLI MEDLEM');
  // before doing anymore chekc with Thomas on Wedensday
});