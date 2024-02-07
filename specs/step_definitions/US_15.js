// Import necessary libraries and commands
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Given('the user is at the start page', () => {
//   cy.visit('https://filmvisarna-team5.nodehill.se/'); 
// });

Then('the user clicks to symbolized button at the right top side of website', () => {
  cy.get('[fill-rule="evenodd"]').click({force: true});
  // cy.wait(5000);
});

Then('the user clicks sign in button', () => {
  cy.get('[href="/logga-in"]').click();
});

Then('the user logs in with the {string} adress and {string}', (email, password) => {
  cy.get(':nth-child(2) > .form-control').type('unlgrsel@gmail.com');
  cy.get('.input-icon-container.mt-3 > .form-control').type('2019Gursel.');
} );

Given( 'the user clicks submit button {string}', ( buttonName ) => {
  // TODO: implement step
  cy.get( '.col' ).find( 'button' ).contains( buttonName.toUpperCase() ).click()
} );

/*
When('The user can see the booking history under {string}', (sectionText) => {
  cy.get(':nth-child(3) > h2').should('be.visible');
});
*/

When( 'the user can click to cancel button', () => {
  cy.get( '.mb-4.table-dark:first ' )
    .find( '.cancel-booking-btn' )
    .click()
});

Given('the user can click to {string} button in the next process for canceling booking', (buttonText) => {
  cy.get('.modal-cancel-btn').should('be.visible')
});


Then('the user should be redirected back to start page.', () => {
  cy.get('.company-logo'); // Replace with the actual home page URL
  
});
