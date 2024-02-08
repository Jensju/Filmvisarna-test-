import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"; 

Given( 'that I am on the main page', () => {
  cy.visit( '/' );
  cy.viewport( 1280, 4600 )
} );

When( 'I cancel all my active bookings', () => {
  cy.get( '.cancel-booking-btn' ).each( ( $el ) => {
    cy.wrap( $el ).click( { force: true } );
    cy.get( '.modal-cancel-btn' ).click();
  } );
} );

Then( 'I should not see any active bookings', () => {
  cy.contains( 'Du har inga aktiva bokningar.' )
    .should( 'be.visible' )
} );
