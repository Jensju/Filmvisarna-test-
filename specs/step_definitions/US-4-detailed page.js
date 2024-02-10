import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Given('The user is on the websites home page', () => {
//   // TODO: implement step
//   cy.visit('https://filmvisarna-team5.nodehill.se/');
// });

Given('The user click on the movie titled {string}', (movie) => {
  // TODO: implement step
  cy.wait(4000);
  cy.get(':nth-child(1) > .movieImages').first().click({force: true});
});

Then('The user should be directed to the movie details page', () => {
  // TODO: implement step
  cy.wait(2000);
  cy.get('.movie-details-component').should('be.visible');
});

When('The user look at the page content', () => {
  // TODO: implement step
  cy.get('div#root div.col-lg-6.col-xl-7.col-xxl-8 > div').should('be.visible');
});

Then('The user should see the following {string}' ,  () => {
  // TODO: implement step
  cy.get('iframe').should('be.visible');
  cy.get('.movie-details-director > p > .text-secondary-detail-color').should('be.visible');
  cy.get('div#root div.movie-details-age-rest > p.text-primary-detail-color').should('be.visible');
  cy.get('div#root div:nth-child(8) > p > span').should('be.visible')
  cy.get('div#root div.movie-details-desc').should('be.visible');
  cy.get('div#root div.movie-details-actors > p > span').should('be.visible');

});

Then('The user click on the {string} button or a smilar navigation element', (a) => {
  // TODO: implement step
  cy.get('.company-logo').click();
});

Then('The user should be redirected back to the home page', () => {
  // TODO: implement step
  cy.visit('https://filmvisarna-team5.nodehill.se/');
});
