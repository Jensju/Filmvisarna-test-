import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('The user is on the home page', () => {
  // TODO: implement step
    cy.visit('https://filmvisarna-team5.nodehill.se/');

});

When('The user can see the movie alternatives at the right side of the website', () => {
  // TODO: implement step
    cy.get(':nth-child(1) > .screeningContainer').should('be.visible');

});

Then('The user clicks to time of the {string}', (a) => {
  // TODO: implement step
    cy.get(':nth-child(1) > .screeningContainer > .screeningsBtn').click();

});

Then('The user clicks the red button in the video to see the trailer', () => {
  // TODO: implement step
});

Then('The user clicks on the {string} button or a smilar navigation element', (a) => {
  // TODO: implement step
});

/* No duplicate steps, this one already above
Then('The user clicks to time of the {string}', (a) => {});*/

/* No duplicate steps, this one already above
Then('The user clicks the red button in the video to see the trailer', () => {});*/

/* No duplicate steps, this one already above
Then('The user clicks on the {string} button or a smilar navigation element', (a) => {});*/

Then('The user should be redirected back to the home page.', () => {
  // TODO: implement step
});