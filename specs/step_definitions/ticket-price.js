import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When( 'I choose the screening from the list with date {string}', ( date ) => {
  // TODO: implement step
  cy.get( 'div.accordion-item' )
    .should( 'be.visible' )
    .find( '.screening-list' )
    .contains(date)
    .click({force:true})
} );


Then('I should see the price of {string} for a seat for {string}', (price, categoryName) => {
  // TODO: implement step 
  cy.get( 'div.ticket-category' )
    .contains( categoryName )
    .parent()
    .should( 'be.visible' )
    .find( 'label:last' )
    .should( 'be.visible' )
    .invoke( 'text' ).then( ( text ) => {
    const expectedPrice = text.trim();
      cy.log( expectedPrice )
      expect( expectedPrice ).to.equal( price )
  })
});

Then('I should see the total price of {string}', (totalPrice) => {
  // TODO: implement step
  cy.get( 'p.total-price' )
    .should( 'be.visible' )
    .find( '.total-value' )
    .invoke( 'text' ).then( ( text ) => {
    const expectedTotalPrice = text.trim();
  cy.log( expectedTotalPrice )
  expect( totalPrice ).to.equal( expectedTotalPrice )
 } )
});

Then('I should get the booking confirmation message contains the ticket price {string}', (a) => {
  // TODO: implement step

});

Then('the total price should be calculated correctly and equal to the sum of the ticket prices', () => {
  // TODO: implement step
  cy.get( 'div.ticket-category' )
    .should( 'be.visible' )
    .find( 'label:last' )
    .should( 'be.visible' )
    .then( ( $rowPrice ) => {

 let sumRowPrice = 0
   for ( let i = 0; i < $rowPrice.length; i++ ) {
   sumRowPrice += parseFloat( $rowPrice[ i ].innerText )
 cy.log( sumRowPrice )
      }
  cy.get( 'p.total-price' )
   .should( 'be.visible' )
   .find( '.total-value' )
   .invoke( 'text' ).then( ( text ) => {

     const expectedTotalPrice = text.trim()
     cy.log( expectedTotalPrice )
     
  expect( expectedTotalPrice ).to.equal( sumRowPrice )
   } )
 })       
});
