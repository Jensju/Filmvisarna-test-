import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When( 'I choose the screening from the list with date {string}', ( date ) => {
  // TODO: implement step
  cy.get( 'div.accordion-item' )
    .find( '.screening-list' )
    .contains( date )
    .click()
} );


Then('I should see the price of {string} for a seat for {string}', (price, categoryName) => {
  // TODO: implement step 
  cy.get( 'div.ticket-category' )
    .contains( categoryName )
    .parent()
    .find( 'label:last' )
    .invoke( 'text' ).then( ( text ) => {
    const expectedPrice = text.trim();
      cy.log( expectedPrice )
      expect( expectedPrice ).to.equal( price )
  })
});

Then( 'I should see the total price of {string}', ( totalPrice ) => {
  // TODO: implement step
  cy.get( 'p.total-price .total-value' ).invoke( 'text' ).then( ( text ) => {
      const expectedTotalPrice = text.trim();
      cy.log( expectedTotalPrice )
      expect( totalPrice ).to.equal( expectedTotalPrice )
    } )
} );

Then( 'the total price should be calculated correctly and equal to the sum of the ticket prices', () => {
  // TODO: implement step
  let sumRowPrices = 0;
  cy.get( '.ticket-category' ).each( ( $el ) => {
    const $units = $el.find( 'span' ).text().replace( /\D/g, '' );
    const $categoryPrice = $el.find( 'label:last' ).text().replace( /\D/g, '' );

    let rowPrice = $categoryPrice * $units;
    cy.log( rowPrice );
    sumRowPrices += rowPrice;
    cy.log( sumRowPrices );
  } );
  cy.get( 'p.total-price .total-value' ).invoke( 'text' ).then( ( text ) => {
     
    const expectedTotalPrice = text.replace( /\D/g, '' );
      cy.log( expectedTotalPrice )
      assert.equal( expectedTotalPrice, sumRowPrices )
    } )
} );
