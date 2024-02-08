import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Then('I should be able to choose {string} available seats', (units) => {
  // TODO: implement step
  cy.get( '.default-seat.available-seat' )
    .filter( ( _, el ) => {
      const $el = Cypress.$( el );
      const $nextEls = $el.nextUntil( '.default-seat:not(.available-seat)' );
      return $nextEls.length === units - 1
    } )
    .eq( 0 )
    .click();
});


Then('I should be able to press on the button {string} in the seats box', (buttonName) => {
  // TODO: implement step
  cy.get( '.flex-space-between' )
    .find( 'button' )
    .contains( buttonName )
    .should('be.visible')
    .click()
});


Then('I should see the booking confirmation box', () => {
  // TODO: implement step
  cy.get( '.accordion-item .accordion-header' )
    .contains( 'Bekräfta' )
  .should('be.visible')
});


When('I choose the film {string} in {string} on {string} from the list of screenings', (filmName, time, date) => {
  // TODO: implement step
  cy.get( '.screeningsContainer' )
    .contains( date )
    .parent()
    .find( 'p' )
    .contains( filmName )
    .parent()
    .find( 'button' )
    .contains( time )
    .click() 
});


Then('I should get an alert message that I need to choose an available seat {string}', (messageText) => {
  // TODO: implement step
  const stub = cy.stub()
  cy.on( 'window:alert', stub )
  cy.get( '.flex-space-between button' ).contains( 'Gå vidare' ).click()
    .then( () => {
      expect( stub.getCall( 0 ) ).to.be.calledWith( messageText )
    } )
});


When( 'I choose {string} reserved seats', (units) => {
  // TODO: implement step
  cy.get( '.default-seat.occupied-seat:first' )
    .click( { force: true } )
 } );


Then('the system displays an alert message', () => {
  // TODO: implement step
  cy.on( 'window:alert', ( str ) => {
    throw new Error( 'Unexpected challenge window.alert()' )
  } )
});


When( 'I enter email {string} in the input field in the confirmation box', ( emailAdress ) => {
  // TODO: implement step
  cy.get( '.accordion-body' )
    .find( 'input[type="email"]' )
    .type( emailAdress )
    .click( { force: true } )
});


Then('the system displays a message that email is incorrect {string}', (messageText) => {
  // TODO: implement step
  cy.get( '.accordion-body' )
    .find( '.text-danger' )
    .contains( messageText )
    .then( ( $el ) => {
      expect( $el ).to.be.visible;
    } );
});

Then('I should not receive a request for a booking confirmation', () => {
  // TODO: implement step
  cy.get( '.modal-header' )
    .contains( 'Bekräfta bokning' )
    .then( ( $el ) => {
      expect( $el ).to.not.be.visible;
    } );
});


When( 'I click on {string} to select less than 1 {string} seat', ( emblem, categoryName ) => {
  // TODO: implement step
  cy.get( '.ticket-category' )
    .contains( categoryName )
    .parent()
    .find( 'button' )
    .contains( emblem )
    .click()
} );
 
Then( 'I can not go to the next stage of the booking when I click the submit button {string}', (buttonName) => {
  // TODO: implement step
  cy.get( 'div.price-component' )
    .contains( buttonName )
    .click()
  cy.get( 'div.theater-container' ).should( 'not.be.visible' ); 
  // cy.get( 'div.theater-container' ).should( 'not.exist' );
} );



//OBS!!!!!!
// Don't forget to cancel seats booked during testing. 
// Go to the https://filmvisarna-team5.nodehill.se/
// Log in with the email test.yev@gmail.com and the password Test1234! 
   

    