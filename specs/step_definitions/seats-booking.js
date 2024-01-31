import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then('I should be able to choose {string} available seats', (a) => {
  // TODO: implement step
});

Then('I should be able to press on the button {string} in the seats box', (a) => {
  // TODO: implement step
});

Then('I should see the booking confirmation box', () => {
  // TODO: implement step
});

When('I choose the film {string} in {string} on {string} from the list of screenings', (filmName, time, date) => {
  // TODO: implement step
  cy.get( '.screeningsContainer' )
    .contains( date )
    .should( 'be.visible' )
    .click( { force: true, multiple:true } )
    .parent()
    .find( 'p' )
    .contains( filmName )
    .should( 'be.visible' )
    .click( { force: true } )
    .parent()
    .find( 'button' )
    .contains( time )
    .should( 'be.visible' )
    .click( { force: true } )
  
});

Then('I should get an alert message {string}', (a) => {
  // TODO: implement step
});

Given('I select a day that has already passed in the filter by date {string}', (a) => {
  // TODO: implement step
});


Then('the system displays an alert message', () => {
  // TODO: implement step
});


When('I enter email {string} in the input field in the confirmation box', (a) => {
  // TODO: implement step
});


Then('the system displays a message {string}', (a) => {
  // TODO: implement step
});

Then('I should not be able to press button {string}', (a) => {
  // TODO: implement step
});
