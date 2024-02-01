import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then('I should be able to choose {string} available seats', (units) => {
  // TODO: implement step
  cy.get( '.default-seat.available-seat' )
  .should('be.visible')
  cy.get( '.default-seat.available-seat:first' )
    .click()
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

Then('I should get an alert message {string}', (messageText) => {
  // TODO: implement step
  const stub = cy.stub()
  cy.on( 'window:alert', stub )
  cy.get( '.flex-space-between button' ).contains( 'Gå vidare' ).click()
    .then( () => {
      expect( stub.getCall( 0 ) ).to.be.calledWith( messageText )
    } )
});

When('I select a day that has already passed in the filter by date', () => {
  // TODO: implement step
  cy.get( '.filterScreenings' )
    .then( $el => {
      const today = new Date( $el.attr( 'value' ) );
      const yesterday = new Date( today );
      yesterday.setDate( yesterday.getDate() - 1 );
      const yesterdayFormatted = yesterday.toISOString().slice( 0, 10 );
      cy.get( '.filterScreenings' ).type( yesterdayFormatted ).trigger( 'input' );
    } );
});


When( 'I choose {string} reserved seats', (units) => {
  // TODO: implement step
  cy.get( '.default-seat.occupied-seat:first' )
    .click( { force: true } )
 } );

Then( 'I should not see any available screenings to choose from', () => {
  // TODO: implement step
  cy.get( '.screeningsContainer' )
    .then( ( $el ) => {
      expect( $el ).to.not.be.visible;
    } );
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


Then('the system displays a message {string}', (messageText) => {
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
