// Import necessary libraries and commands
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('the user is at the start page', () => {
  cy.visit('https://filmvisarna-team5.nodehill.se/'); 
});

Then('the user clicks to symbolized button at the right top side of website', () => {
  cy.get('[fill-rule="evenodd"]').click({force: true});
  cy.wait(5000);
});

Then('the user clicks to the {string} button', (buttonText) => {
  cy.get('[href="/logga-in"]').click();
});

Then(' the user logs in with the {string} adress and {string} ', (email, password) => {
  cy.get(':nth-child(2) > .form-control').type('unlgrsel@gmail.com');
  cy.get('.input-icon-container.mt-3 > .form-control').type('2019Gursel.');
  cy.get('#login-btn').click();
  cy.wait(5000);

});

/*
When('The user can see the booking history under {string}', (sectionText) => {
  cy.get(':nth-child(3) > h2').should('be.visible');
});
*/
Given('the user clicks to {string} button', (buttonText) => {
  cy.get(':nth-child(4) > .justify-content-center > .cancel-booking-btn').click();
  // cy.get('.row > :nth-child(5)').click();
});

Given('the user can click to {string} button in the next process for canceling booking', (buttonText) => {
  cy.get('.modal-cancel-btn').click();
});


Then('the user should be redirected back to home page.', () => {
  cy.get('.company-logo'); // Replace with the actual home page URL
  
});
