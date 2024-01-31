import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the start page', () => {
  cy.visit( '/' );
  cy.viewport(1280, 1600)
});

Given('I logg in in my account', () => {
  // TODO: implement step
  cy.get( 'div.nav-top.navbar-nav div.nav-item.dropdown a#basic-nav-dropdown' )
  .click()
  // cy.get( 'a#basic-nav-droptown' )
  //   .click()
  cy.get( 'div[aria-labelledby="basic-nav-dropdown"]' )
    .contains( 'a', 'Logga in' )
    .click()
  
});

Given('I enter {string} into email field', (emailAdress) => {
  // TODO: implement step
  cy.get( 'div.col input[type="email"]', { timeout: 10000 } )
    .should( 'be.visible' )
    .click( { force: true } )
    .type( emailAdress )
});

Given('I enter {string} into password field', (password) => {
  // TODO: implement step
  cy.get( 'div.col input[type="password"]' )
  .type( password )
});

Given('I press {string} button', (buttonName) => {
  // TODO: implement step
  cy.get('.col' ).find('button' ).contains(buttonName.toUpperCase() ).click()
});

Given( 'I go to the start page', () => {
  // TODO: implement step
  cy.get( 'button.startpage-btn' )
    .should( 'be.visible' )
    .click();
} );

When('I select the first available screening from the list', () => {
  // TODO: implement step
  cy.get( 'div.container div.row button:first' )
  .should( 'be.visible' )
    .click( { force: true, multiple: true } ) 
});

When('I select the first available time from the list', () => {
  // TODO: implement step
  cy.get( 'div.accordion-item' )
    .should( 'be.visible' )
    .find( '.screening-list:first' )
    .click()
});

When('I press on the button {string} in the date box', (buttonName) => {
  // TODO: implement step
  cy.get( 'div.accordion-item' )
    .contains( buttonName )
    .should( 'be.visible' )
    .click( { force: true } )
});

When('I choose {string} {string} seats', (units, categoryName) => {
  // TODO: implement step
  units = + units;
  cy.wrap( units ).as( 'units' );
  let buyButton = cy.get( '.ticket-category' ).contains( categoryName ).parent().should( 'be.visible' ).find( 'button' ).contains( '+' )
  for ( let i = 0; i < units; i++ ) {
    buyButton.click( { force: true } ); 
  }
});
  
When('I press on the button {string} in the number of seats box', (buttonName) => {
  // TODO: implement step
  cy.get( 'div.price-component' )
    .contains( buttonName )
    .should( 'be.visible' )
    .click( { force: true } )
});

When('I choose {string} available seat', (units) => {
  // TODO: implement step
  cy.get( '.default-seat.available-seat:first' )
    .should( 'be.visible' )
    .click( { force: true, multiple: true } )
  
});

When('I press on the button {string} in the seats box', (buttonName) => {
  // TODO: implement step //div.theater-container .flex-space-between
  cy.get( '.flex-space-between' )
    .should( 'be.visible' )
    .click( { force: true } )
    .find( 'button' )
    .click()
});

When( 'I enter my email {string} in the input field in the confirmation box', ( emailAdress ) => {
  // TODO: implement step
  cy.get( '.accordion-item' )
    .should( 'be.visible' )
    .click( { force: true } )
    .find( 'input' )
    .type( emailAdress )
});

When('I press on the button {string}', (buttonName) => {
  // TODO: implement step 
  cy.get('.according-item:last')
    .should( 'be.visible' )
    .click( { force: true } )
    .find( 'button' )
    .contains( buttonName )
  .click()
});

When('I confirm the booking and press on the button {string}', (a) => {
  // TODO: implement step
});

Then('I should see a confirmation of booking message', () => {
  // TODO: implement step
});

Then('the confirmation message should contain selected seat numbers, which film and date/time and unique booking number', () => {
  // TODO: implement step
});

/* No duplicate steps, this one already above
When('I enter my email {string} in the input field in the confirmation box', (a) => {});*/

/* No duplicate steps, this one already above
When('I press on the button {string}', (a) => {});*/

/* No duplicate steps, this one already above
When('I confirm the booking and press on the button {string}', (a) => {});*/

/* No duplicate steps, this one already above
Then('I should see a confirmation of booking message', () => {});*/

/* No duplicate steps, this one already above
Then('the confirmation message should contain selected seat numbers, which film and date/time and unique booking number', () => {});*/

/* No duplicate steps, this one already above
When('I enter my email {string} in the input field in the confirmation box', (a) => {});*/

/* No duplicate steps, this one already above
When('I press on the button {string}', (a) => {});*/

/* No duplicate steps, this one already above
When('I confirm the booking and press on the button {string}', (a) => {});*/

Then('I should not see a confirmation of booking message', () => {
  // TODO: implement step
});

/* No duplicate steps, this one already above
When('I enter my email {string} in the input field in the confirmation box', (a) => {});*/

/* No duplicate steps, this one already above
When('I press on the button {string}', (a) => {});*/

/* No duplicate steps, this one already above
When('I confirm the booking and press on the button {string}', (a) => {});*/

/* No duplicate steps, this one already above
Then('I should see a confirmation of booking message', () => {});*/

/* No duplicate steps, this one already above
Then('the confirmation message should contain selected seat numbers, which film and date/time and unique booking number', () => {});*/
