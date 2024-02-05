// Examples:
//     | email | 
//     | test123 |
//     | test@ |
//     | test!gmail.com |
//     | |*****.com |



// When('I select a day that has already passed in the filter by date', () => {
//   // TODO: implement step
//   cy.get( '.filterScreenings' )
//     .then( $el => {
//       const today = new Date( $el.attr( 'value' ) );
//       const yesterday = new Date( today );
//       yesterday.setDate( yesterday.getDate() - 1 );
//       const yesterdayFormatted = yesterday.toISOString().slice( 0, 10 );
//       cy.log( yesterdayFormatted )
//       cy.get( '.filterScreenings' ).type( yesterdayFormatted ).trigger( 'input' );
//     } );
// });


// Then( 'I should not see any screening that har already taken place in the screening list', () => {
//   cy.get( '.choose-screening' ).then( ( $el ) => {
//     cy.log($el)
//     for ( let i = 0; i < $el.length; i++ ) {
//       cy.wrap( $el ).invoke( 'text' ).then( ( text ) => {
    
        // const regex = /(\d{4}-\d{2}-\d{2})/;
        // const screeningDate = text.match( regex )[ 1 ];
        // const currentDate = new Date();
        // // if ( new Date( screeningDate ) < currentDate ) {
        // cy.log( screeningDate )
        // expect( new Date( screeningDate ) ).to.be.greaterThan( currentDate );
//       }
//       )
//       }
//     } );
// } );


 // cy.get( '.choose-screening' ).each( ( $el ) => {
  //   cy.wrap( $el ).find( '.custom-radio-button' ).each( ( $radio ) => {
  //     cy.wrap( $radio ).invoke( 'val' ).then( ( value ) => {
  //       cy.log(value)
  //       // Do something with the value
  //     } );
  //   } );
  // } );
  // cy.get( '.choose-screening .custom-radio-button' ).each( ( $el ) => {
  //   const text = $el.text();
  //   const dateRegex = /\d{4}\/\d{1,2}\/\d{1,2}/g;
  //   const dates = text.match( dateRegex );
  //   expect( dates ).to.not.be.null;
  // } );
// } );
 

// cy.get( '.choose-screening .custom-radio-button' ).each( ( $el ) => {
//   cy.wrap( $el ).invoke( 'text' ).then( ( text ) => {
//     const regex = /(\d{4}-\d{2}-\d{2})/;
//     const screeningDate = text.match( regex )[ 1 ];
//     const currentDate = new Date();
//     if ( new Date( screeningDate ) < currentDate ) {
//       cy.log( screeningDate )
//     }
//   } );
// } );

// Then( 'I should not see any screening that har already taken place in the screening list', () => {
//   let availableScreening = cy.get( '.choose-screening' )
//   let textOfAvailableScreening = $element.text()
  
//   cy.get( '.choose-screening' ).invoke( 'text' ).then( ( text ) => {
//     cy.wrap( text ).as( 'text' );
//     cy.log( 'text' )
//     for ( let i = 0; i < text.length; i++ ) {


//       const regex = /(\d{4}-\d{2}-\d{2})/;
//       const screeningDate = text.match( regex )[ 1 ];
//       const currentDate = new Date();
//       // if ( new Date( screeningDate ) < currentDate ) {
//       cy.log( screeningDate )
//       expect( new Date( screeningDate ) ).to.be.greaterThan( currentDate );
//     }
//   } )
// } );


// When( 'I add {string} pieces of {string} to the cart', ( units, productName ) => {
  
//   units = +units;
  
//   cy.wrap( units ).as( 'units' );
//   // Search for the product using the search field
//   cy.get( '#search' ).type( productName );
  
//   let buyButton = cy.get( '.product' ).contains( productName ).parent().find( 'button' );
  
//   for ( let i = 0; i < units; i++ ) {
//     buyButton.click();
//   }

//   buyButton.then( $element => {
   
//     let textOfBuyButton = $element.text();
//     // remove all non-digits from the text and convert it to a number
//     let price = +textOfBuyButton.replace( /\D/g, '' );
//     // make the price survive as a 'variable' reachable in another step
//     cy.wrap( price ).as( 'pricePerUnit' );
//   } );

// } );

// In order to read 'wrapped' variables using 'this' you MUST USE a traditional
// function, not an arrow function!!! -> See below.

// Then( 'the cart should calculate the sum correctly according to the number of pieces.', function () {
//   cy.get( '#cart .total' ).then( $element => {
//     let textOfCartTotal = $element.text();
//     // remove all non-digits from the text and convert it to a number
//     let total = +textOfCartTotal.replace( /\D/g, '' );
//     let expectedTotal = this.pricePerUnit * this.units;
//     // test that the total from the cart is the expected total
//     // (use expect to compare values, use should for DOM-elements)
//     expect( total ).to.equal( expectedTotal );
//   } );
// } );
