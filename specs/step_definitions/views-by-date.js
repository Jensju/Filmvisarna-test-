import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the land page', () => {
  cy.visit('./.')});

Given('choose a date in the calendar', () => {
  cy.get('.filterScreenings')
});

When('I click the <{string}> in the calendar', (a) => {
  cy.get('.filterScreenings').type('2024-02-01').trigger('input');
});

Then('I expect the viewing of the movie list to be updated', () => {
  // Showing the movie options
  cy.get('input.filterscreenings[value="<{string}>"]').should('exist')
});