import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//Opens the homepage and sets the browser viewport to 1680x1050
Given('the user is on the home page', () => {
  cy.visit('/');
  cy.viewport(1680, 1050);
});

//Simulates a click on a link in the footer to navigate to the specified page.
Given('the user click on {string} page', (a) => {
  cy.get('a.footer-item[href="/kontakt"]').click()
});

//Waits for the page to load by checking for the visibility of an element with ID 'formName', with a timeout of 10 seconds.
When('the page is fully loaded', () => {
  cy.get('#formName', { timeout: 10000 }).should('be.visible');
});

//Verifies that input fields for name, email, and a text field are interactive by typing sample data into each.
Then('each field should be interactive, allowing user input', () => {
  cy.get('#formName').type('John Doe');
    cy.get('#formEmail').type('john.doe@example.com');
    cy.get('#formTextField').type('Hello, this is a test message.');
});