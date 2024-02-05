import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When( 'I choose a movie {string} from the list', ( movieName ) => {
  // TODO: implement step
  cy.get( '.movieCard' )
    .contains( movieName )
    .parent()
    .click();
} );


Then( 'I should not see any screening that har already taken place in the screening list', () => {
  cy.get( '.custom-radio-button' ).each( ( $el, index, $list ) => {
    const text = $el.text()
    cy.log( index )
    cy.log( text )
    cy.log( $list )
    const regex = /(\d{4}-\d{2}-\d{2})/;
    const screeningDate = text.match( regex )[ 1 ];
    const currentDate = new Date();
    cy.log( screeningDate )
    expect( new Date( screeningDate ) ).to.be.greaterThan( currentDate );
  })
  } );
 