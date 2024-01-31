# Filmvisarna-test-

Kör test:
npm run test-ui 



Trigga med input istället för Mousedown
cy.get('a').trigger('input')


import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the first page', () => {
  cy.visit('/');
});

When('I make a choice of date in the calendar', () => {
  // Not. When I choose a date through value (example: value="2024-01-30") it will display the change in the date field but it doesn´t update the date list below.
  cy.get('.filterScreenings').trigger('value')
  <!-- cy.get('.filterScreenings, [value="2024-01-25"]') -->
});

When('click the first choise in the movie list', () => {
  cy.get('.screeningsBtn').click()
});

Then('I expect to land on the first step of the booking state', () => {
  cy.get('screening-input').value
});