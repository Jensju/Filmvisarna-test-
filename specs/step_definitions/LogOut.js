import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* No duplicate steps, this one already in CheckBookings.js
Given('that i am on the start page', () => {});*/

/* No duplicate steps, this one already in CheckBookings.js
Given('I am logged in using {string} and {string}', (a, b) => {});*/

When('I click the log out button', () => {
  cy.get('#basic-nav-dropdown').click();
  cy.get('a').contains('Logga ut').click();
});

Then('I should log out', () => {
  cy.get('p').contains('Du är inloggad').should('not.exist');
});