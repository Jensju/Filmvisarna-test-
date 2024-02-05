import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* No duplicate steps, this one already in check-trailer-links.js
Given('that I am on the start page', () => {});*/

Given('choose a date in the calendar', () => {
  cy.get('.filterScreenings').should('exist')
});

When('I click the {string} in the calendar', (date) => {
  cy.get('.filterScreenings').type(date).trigger('input');
});

Then('I expect the {string} of the movie list to be updated', (date) => {
  cy.get('.filterScreenings').type(date).should('exist')
});