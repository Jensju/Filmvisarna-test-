import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the start page', () => {
  cy.visit('/');
  cy.viewport(1280, 1600);
});

When('I have choosen the {string} poster in the list', (movie) => {
  cy.get('.movieCard:nth-child(' + movie + ')').click();
  cy.wait(3000);
});

Then('the trailer should appear', () => {
  cy.get('.movie-details-trailer').should('exist');
});