import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* No duplicate steps, this one already in CheckBookings.js
Given('that i am on the start page', () => {});*/

/* No duplicate steps, this one already in CreateAccount.js
Given('I am on the account creation menu', () => {});*/

When('I fill in account creation details using, my email has already been used {string} as my email and {string} as my password', (email, password) => {
  cy.get('input[name="emailInput"]').type(email);  
  cy.get('input[type="password"]').type(password);
});

Then('i should not be able to make an account', () => {
  cy.get('button').contains('BLI MEDLEM');  
});