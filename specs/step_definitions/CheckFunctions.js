import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* No duplicate steps, this one already in CheckBookings.js
Given('that i am on the start page', () => {});*/

/* No duplicate steps, this one already in CheckBookings.js
Given('I am logged in using {string} and {string}', (a, b) => {});*/

When('I open user features', () => {
  //Bör denna raderas då det inte finns särskillt många features att kolla på som inte täcks av CheckBookings
});

Then('I should have access to user features', () => {
  // TODO: implement step
});