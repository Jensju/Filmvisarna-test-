import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('the user is on the websites home page', () => {
  // TODO: implement step
  cy.visit('https://filmvisarna-team5.nodehill.se/');
});

Given('user selects {string} and {string} and then clicks on the button {string}', (a, b, c) => {
  // TODO: implement step
  cy.wait(4000);
  cy.get(':nth-child(1) > .movieImages').first().click({force: true});
  cy.get(':nth-child(2) > .custom-radio-button').click({force: true} );
  cy.get('.screening-list > .confirm-button').click({force: true} );
});

Then('the user selects the {string} and {string} and clicks on the button {string}', (a, b, c) => {
  // TODO: implement step
  cy.get(':nth-child(1) > .counter-container > :nth-child(3)').click({force: true});
  cy.get('.price-component > .confirm-button').click({force: true});
});

Then('the system displays the available {string} for the selected showtime.', (a) => {
  // TODO: implement step
  cy.get('.theater-container');
  cy.screenshot('.theater-container');
  cy.get('.theater-container').should('exist');
});

Then('the user clicks on one of the {string}.', (a) => {
  // TODO: implement step
  cy.get(':nth-child(6) > :nth-child(3)').click({force: true}); 
});

Then('the user verify that {string} are visible.', (a) => {
  // TODO: implement step
  cy.get('.theater-container > :nth-child(2) > :nth-child(3)');
  cy.screenshot('.theater-container > :nth-child(2) > :nth-child(3)');
});

Then('the user selects the {string} and {string} and clicks on the button {string}.', (a, b, c) => {
  // TODO: implement step
  cy.get(':nth-child(1) > .counter-container > :nth-child(3)').click({force: true});
  cy.get('.price-component > .confirm-button').click({force: true});
});

Then('the system notifies that all seats are {string}.', (a) => {
  // TODO: implement step
  cy.get('.seats-explained > :nth-child(3)').contains('Upptagen plats'); 
});

Then('the user verify that no seats are visible.', () => {
  // TODO: implement step
  cy.get('.seats-explained > :nth-child(3)').should('be.visible');
});