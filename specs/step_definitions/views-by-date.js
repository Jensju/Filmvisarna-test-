import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* No duplicate steps, this one already in check-trailer-links.js
Given('that I am on the start page', () => {});*/

Given('choose a date in the calendar', () => {
  cy.get('.filterScreenings').should('exist')
});

When('I click the {string} in the calendar', (date) => {
  cy.get('.filterScreenings').type(date).trigger('input');
});

When('the choice of movie list is updated and I choose the first element', () => {
  cy.get('.screeningContainer').should('exist')
});

Then('I expect a button to apper to continue to the starting point for making a booking', () => {
  cy.get('.screeningsBtn').should('exist')
});
