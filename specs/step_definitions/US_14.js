import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('the user is at the home page', () => {
  // TODO: implement step
  cy.visit('https://filmvisarna-team5.nodehill.se/'); 
});

Then('the user decides the day to see the movie details', () => {
  // TODO: implement step
  cy.wait(3000);
  cy.get('.container-xl > :nth-child(1)')
});

Then('the user clicks to the time of the movie', () => {
  // TODO: implement step
  cy.get(':nth-child(1) > .movieImages').first().click({force: true});
});

When('the user selects and clicks a valid date-time with the language of the movie', () => {
  // TODO: implement step
  cy.get(':nth-child(2) > .custom-radio-button').click({force: true} );
});

Then('the user clicks to {string} button', (a) => {
  // TODO: implement step
  cy.get('.screening-list > .confirm-button').click({force: true} );
});

Then('the user clicks to related segments', () => {
  // TODO: implement step
  cy.get(':nth-child(1) > .counter-container > :nth-child(3)').click({force: true});
});

Then('the user clicks to {string}', (a) => {
  // TODO: implement step
  cy.get('.price-component > .confirm-button').click({force: true});
});

Then('the user can see that how many reserved seats live in the screen', () => {
  // TODO: implement step
  cy.get('.theater-container');
  cy.screenshot('.theater-container');
  cy.get('.theater-container').should('exist');
});

Then('the user click on the {string} button or a smilar navigation element.', (a) => {
  // TODO: implement step
  cy.get('.company-logo').click();
});

Then('the user should be redirected back to the home page.', () => {
  // TODO: implement step
  cy.visit('https://filmvisarna-team5.nodehill.se/');
});