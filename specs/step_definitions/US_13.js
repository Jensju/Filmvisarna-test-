import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Given('the user is on the home page', () => {
//   // TODO: implement step
//   cy.visit('https://filmvisarna-team5.nodehill.se/');
//   cy.viewport(1280, 1600);

// });

When('the user clicks to time of the {string}', (movie) => {
  // TODO: implement step
    cy.get('.movieCard:nth-child(' + movie + ')').click();
});

Then('the trailer of the movies can be visable', () => {
  // TODO: implement step
  cy.get('.movie-details-trailer').should('exist');
});

// When('the user clicks on the {string} button or a similar navigation element', (a) => {
//   // TODO: implement step
//   cy.get('.company-logo').click();

// });
