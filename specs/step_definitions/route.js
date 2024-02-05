import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//Opens the homepage and sets the browser viewport to 1680x1050
Given('the user is exploring various pages on the website', () => {
  cy.visit('/');
  cy.viewport(1680, 1050);
});

//Navigates to a page by clicking a link identified by its 'href' attribute, using the URL parameter.
When('they navigate by clicking on a link with the href to {string}', URL => {
  cy.get(`a[href="${URL}"]`).click();
});

//Verifies that the current page's URL includes the specified string.
Then('the URL should change to {string}', URL => {
  cy.url().should('include', URL);
});