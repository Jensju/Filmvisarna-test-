import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('the user is on the home page', () => {
  cy.visit('https://filmvisarna-team5.nodehill.se/');
});

When('the user scrolls to the footer section', () => {
  // TODO: implement step
  cy.scrollTo('bottom');
});

When('the user clicks on the {string} link', (a) => {
  // TODO: implement step
  cy.get('[href="/om-oss"]').click();
});

Then('the user should be directed to the {string} page', (OmOss) => { 
  // TODO: implement step
  cy.url('https://filmvisarna-team5.nodehill.se/om-oss').should('eq', 'https://filmvisarna-team5.nodehill.se/om-oss');
});

Then('the user should see relevant information about the company or organization', () => {
  // TODO: implement step
   cy.get('div#root h3').should('be.visible')
});