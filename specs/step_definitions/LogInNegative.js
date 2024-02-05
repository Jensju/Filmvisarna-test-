import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* No duplicate steps, this one already in CheckBookings.js
Given('that i am on the start page', () => {});*/

/* No duplicate steps, this one already in LoginToAccount.js
Given('I am on the log in page', () => {});*/

When('I fill in my account details incorrectly using {string} and {string}', (email, password) => {
  cy.get('input[name="emailInput"]').type(email);
  cy.get('input[type="password"]').type(password);
  cy.get('button').contains('LOGGA IN').click();
});

Then('I should not login', () => {
  cy.get('small').contains('Ingen medlem med denna email eller lösenord finns').should('be.visible');
});