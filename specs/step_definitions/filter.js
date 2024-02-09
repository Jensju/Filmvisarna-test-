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
    cy.log( currentDate )
    expect( new Date( screeningDate ) ).to.be.greaterThan( currentDate );
  })
  } );
 
  
When( 'I check how many seats the cinema has and go back to select one more {string} seat', ( categoryName ) => {
  // TODO: implement step
  cy.get( '.default-seat' ).then( ( seats ) => {
    const totalNumberSeats = seats.length
    cy.wrap( totalNumberSeats ).as( 'totalNumberSeats' );
    cy.log( totalNumberSeats )

    cy.get( '.accordion-header' ).contains( '2. Biljettyp och antal' ).find( '.restart-button' ).click()

    let buyButton = cy.get( '.ticket-category' ).contains( categoryName ).parent().should( 'be.visible' ).find( 'button' ).contains( '+' )
    for ( let i = 0; i < totalNumberSeats; i++ ) {
      buyButton.click();
    }
  } )
} );


When( 'I check how many available seats the cinema has and go back to select one more {string} seat', ( categoryName ) => {
  // TODO: implement step
  cy.get( '.default-seat.available-seat' ).then( ( seats ) => {
    const totalNumberSeats = seats.length
    cy.wrap( totalNumberSeats ).as( 'totalNumberSeats' );
    cy.log( totalNumberSeats )

    cy.get( '.accordion-header' ).contains( '2. Biljettyp och antal' ).find( '.restart-button' ).click()

    let buyButton = cy.get( '.ticket-category' ).contains( categoryName ).parent().should( 'be.visible' ).find( 'button' ).contains( '+' )
    for ( let i = 0; i < totalNumberSeats; i++ ) {
      buyButton.click();
    }
  } )
} ); 

Then( 'I should not be able to go to the next stage of the booking when I click the submit button {string}', ( buttonName ) => {
  // TODO: implement step
  cy.get( 'div.price-component' )
    .contains( buttonName )
    .click()
  cy.get( 'div.theater-container' ).should( 'not.be.visible' );
} );


When( 'I am selecting a date one month in advance in the calendar', () => {
  // TODO: implement step
  cy.get( '.filterScreenings' )
    .then( $el => {
      const today = new Date();
      const nextMonth = new Date( today.getFullYear(), today.getMonth() + 1, today.getDate() );
      const nextMonthFormatted = nextMonth.toISOString().slice( 0, 10 );
      cy.log( nextMonthFormatted )
      cy.get( '.filterScreenings' ).type( nextMonthFormatted ).trigger( 'input' );
    } );
} );


Then( 'screenings that will take place earlier than the selected date should not be displayed for selection', () => {
  cy.get( '.underline.text-center' ).each( ( $el, index, $list) => {
    const text = $el.text()
    const regex = /(\d{4}-\d{2}-\d{2})/;
    const screeningDate = text.match( regex )[ 1 ];
    const today = new Date();
    const searchingDate = new Date( today.getFullYear(), today.getMonth() + 1, today.getDate() );
    const searchingDateFormatted = searchingDate.toISOString().slice( 0, 10 );
    cy.log( screeningDate ) 
    cy.log( searchingDateFormatted )
    expect( new Date( screeningDate ) ).to.be.greaterThan( new Date( searchingDateFormatted ) );
  } )
} );

