import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* No duplicate steps, this one already in check-trailer-links.js
Given('that I am on the start page', () => {});*/

let toDaysDate = new Date().toLocaleDateString('sv-SV');

Given('that the start date is todays date', () => {
  cy.get('.filterScreenings').type(toDaysDate).should('exist');
});

Given('have choosen a new viewing date', () => {
  cy.get('.filterScreenings').type('2024-10-01').trigger('input');
});

Given('that I haver checked that the new date is accepted', () => {
  cy.get('.filterScreenings').type('2024-10-01').should('exist');
})

When('I click on the reset button', () => {
  cy.get('.resetBtn').click();
});

Then('the calendar date will return to the origin state', () => {
  // let toDaysDate = new Date().toLocaleDateString('sv-SV');
  cy.get('.filterScreenings').type(toDaysDate).should('exist');
});