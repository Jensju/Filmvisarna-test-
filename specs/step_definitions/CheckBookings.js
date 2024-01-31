import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that i am on the start page', () => {
  cy.viewport(1680, 1050);
  cy.visit(`/`);
});

Given('I am logged in using {string} and {string}', (adminEmail, adminPassword) => {
  cy.get('#basic-nav-dropdown').click();
  cy.get('a').contains('Logga in').click();
  cy.get('input[name="emailInput"]').type(adminEmail);
  cy.get('input[type="password"]').type(adminPassword);
});

When('I check bookings', () => {
  //Osäker om det går att testa, då log in verkar inte fungera
});

Then('I should see my bookings', () => {
  // TODO: implement step
});