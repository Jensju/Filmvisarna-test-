// Import necessary libraries and commands
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('The user is at the home page', () => {
  cy.visit('https://filmvisarna-team5.nodehill.se/'); 
});

Then('The user clicks to symbolized button at the right top side of website', () => {
  cy.get('.header').click();
});
Then('The user clicks to the {string} button', (buttonText) => {
  cy.get('[href="/logga-in"]').click();
});

Then('The user logs in with the {string} address and {string}.', (email, password) => {
  cy.get(':nth-child(2) > .form-control').type('unlgrsel@gmail.com');
  cy.get('.input-icon-container.mt-3 > .form-control').type('2019Gursel.');
  cy.get('#login-btn').click();
});

Given('The user clicks to {string} button', (buttonText) => {
  cy.get(':nth-child(4) > .justify-content-center > .cancel-booking-btn').click();
});

Given('The user clicks to {string} link under upper right link/box', (linkText) => {
  cy.get('.upper-right-box').contains(linkText).click();
});

When('The user can see the booking history under {string}', (sectionText) => {
  cy.contains(sectionText).should('be.visible');
});

Given('The user can click to {string} button', (buttonText) => {
  cy.contains(buttonText).click();
});

Then('the user click on the {string} button 2 times to redirect to home page.', (buttonText) => {
  cy.contains(buttonText).click().click();
});

Then('the user should be redirected back to the home page.', () => {
  cy.url().should('eq', 'https://example.com/home'); // Replace with the actual home page URL
});
