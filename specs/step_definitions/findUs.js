import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//Opens the homepage and sets the browser viewport to 1680x1050
Given('the user is on the homepage', () => {
  cy.visit('/');
  cy.viewport(1680, 1050);
});

//Scrolls the viewport to the bottom of the page
When('the user scrolls to the bottom of the page', () => {
  cy.scrollTo('bottom');
});

//Clicks on a footer link with a specific title, "hitta hit".
Then('a section titled {string} should be present in the footer', (a) => {
  cy.get('a.footer-item[href="/hitta-hit"]').click()
});

//Checks for the visibility of a map iframe and verifies the presence of specific address text on the page.
Then('this section should contain address details, possibly a map or directions', () => {
  cy.get('iframe').should('be.visible');
  cy.get('p.text-center.mt-5.mb-5').should('have.text', 'Besöksadress: Gustav Adolfs torg 2, 111 52 Stockholm');
});