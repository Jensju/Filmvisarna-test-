import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* No duplicate steps, this one already in CheckBookings.js
Given('that i am on the start page', () => {});*/

Given('I am on the account creation menu', () => {
  cy.get('#basic-nav-dropdown').click();
  cy.get('a').contains('Bli medlem').click();
});

When('I fill in account creation details', () => {
  // glöm inte att vanlig JS kod kan användas också
  cy.get('input[name="emailInput"]').type('testMejlFilmtestarna@gmail.com');  
  cy.get('input[type="password"]').type('123456')
});

Then('I should be able to create an account', () => {
  cy.get('button').contains('BLI MEDLEM')
  // vefore doing anymore chekc with Thomas on Wedensday
});