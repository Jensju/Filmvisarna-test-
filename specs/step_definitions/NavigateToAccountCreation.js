import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* No duplicate steps, this one already in CheckBookings.js
Given('that i am on the start page', () => {});*/

When('I click on the button to create an Account', () => {
  cy.get('#basic-nav-dropdown').click();
  cy.get('a').contains('Bli medlem').click();
});

Then('I should see the account creation Menu', () => {
  cy.get('input[name="emailInput"]').should('exist')
  cy.get('input[type="password"]').should('exist')
});