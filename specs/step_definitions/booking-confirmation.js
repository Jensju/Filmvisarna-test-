import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the start page', () => {
  cy.visit( '/' );
  cy.viewport(1280, 1600)
});

Given('I logg in in my account', () => {
  // TODO: implement step  
  cy.get( '#basic-nav-dropdown' ).click();
  cy.get( 'a' ).contains( 'Logga in' ).click();
});

Given('I enter {string} into email field', (emailAdress) => {
  // TODO: implement step
  cy.get( 'div.col input[type="email"]' )
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
    .click();
} );

When('I select the first available screening from the list', () => {
  // TODO: implement step
  cy.get( 'div.container div.row button:first' )
    .click()
});

When('I select the first available time from the list', () => {
  // TODO: implement step
  cy.get( 'div.accordion-item' )
    .find( '.screening-list:first' )
    .click()
} );

When( 'I choose the session {string} from the list', (session) => {
  // TODO: implement step
  cy.get( 'div.accordion-item' )
    .find( '.screening-list' )
    .contains(session)
    .click()
} );

When('I press on the button {string} in the date box', (buttonName) => {
  // TODO: implement step
  cy.get( 'div.accordion-item' )
    .contains( buttonName )
    .click()
});

When('I choose {string} {string} seats', (units, categoryName) => {
  // TODO: implement step
  units = + units;
  cy.wrap( units ).as( 'units' );
  let buyButton = cy.get( '.ticket-category' ).contains( categoryName ).parent().should( 'be.visible' ).find( 'button' ).contains( '+' )
  for ( let i = 0; i < units; i++ ) { 
    buyButton.click();
  }
});
  
When('I press on the button {string} in the number of seats box', (buttonName) => {
  // TODO: implement step
  cy.get( 'div.price-component' )
    .contains( buttonName )
    .click()
});

When('I choose {string} available seat', (units) => {
  // TODO: implement step
  // cy.get( '.default-seat.available-seat:first' )
  //   .click()

  // cy.get( '.default-seat.available-seat' )
  //   .click()

  // cy.get( '.default-seat.available-seat' ).each( ( $el, index ) => {
  //   if ( index < units ) {
  //     cy.wrap( $el ).click();
  //   }
  //   })
  // cy.get( '.default-seat.available-seat' ) 
  //   .its( 'length' )
  //   .then( ( length ) => {
  //     cy.log( `Found ${ length } available seats` );
  //     const firstThreeSeats = cy.get( '.default-seat.available-seat' ).slice( 0, units ).click()
  //     // Do something with the first three seats
  //   } );
  cy.get( '.default-seat.available-seat:first' )
    .filter( ( _, el ) => {
      const $el = Cypress.$( el );
      const $nextEls = $el.nextAll( '.default-seat.available-seat' ).slice( 0, units - 1 );
      return $nextEls.length === units - 1 && !$nextEls.find( '.selected-seat' ).length;
    } )
    .eq( 0 )
    // .click( { multiple: true } );
  .click()
  } );

When('I press on the button {string} in the seats box', (buttonName) => {
  // TODO: implement step //div.theater-container .flex-space-between
  cy.get( '.flex-space-between' )
    .find( 'button' )
    .contains(buttonName)
    .click()
});

When( 'I enter my email {string} in the input field in the confirmation box', ( emailAdress ) => {
  // TODO: implement step
  cy.get( '.accordion-body' )
    .find( 'input[type="email"]' )
    .type( emailAdress )
    .click( { force: true } )
});

When('I press on the button {string}', (buttonName) => {
  // TODO: implement step 
  cy.get('.accordion-body')
    .find( 'button' )
    .contains( buttonName )
  .click()
});

When('I confirm the booking and press on the button {string}', (buttonName) => {
  cy.get( '.modal-footer' )
    .find( 'button' )
    .contains( buttonName )
    .click()
});

Then('I should see a confirmation of booking message', () => {
  // TODO: implement step
  cy.url().should( 'eq', 'https://filmvisarna-team5.nodehill.se/bokningsbekraftelse' )
  cy.get( '.row.mx-1.booking-details-container' )
  .should('be.visible')  
    .contains( 'Bokningsdetaljer' )
  . should('be.visible')
});

Then('the confirmation message should contain selected seat numbers, which film, date and unique booking number', () => {
  // TODO: implement step
  cy.get( '.row.mx-1.booking-details-container table' )
    .should( 'be.visible' )
    .should( 'contain', 'Bokningsnummer:' )
    .should( 'contain', 'Film:' )
    .should( 'contain', 'Datum:' )
    .should( 'contain', 'Plats:' )
  //check that each row is not empty and contains a value
  cy.get( '.row.mx-1.booking-details-container table tr' ).each( ( $el ) => {
    cy.wrap( $el ).find( 'td:nth-child(2)' ).should( 'not.be.empty' )
  } )
});


Then('I should not see a confirmation of booking message', () => {
  // TODO: implement step
  cy.url().should( 'not.eq', 'https://filmvisarna-team5.nodehill.se/bokningsbekraftelse' )
  cy.get( '.row.mx-1.booking-details-container' )
    .should( 'not.be.visible' )
});
