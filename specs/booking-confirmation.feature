Feature: Booking confirmation
As a visitor, I would like to receive a confirmation of booking, 
containing selected seat numbers, which film and date/time, 
with a unique, hard-to-guess, booking number 
so that I remember my booking 
and can give the booking number to the cinema during my visit.


  Scenario: Visitor receives a confirmation message after booking
    Given the visitor has selected a seat number
    And the visitor has selected a film and date/time
    When the visitor completes the booking process
    Then the visitor should receive a confirmation message with a unique booking number

  Scenario: Non-logged in visitor receives a confirmation message after booking
    And the visitor has selected a film and date/time
    When the visitor completes the booking process
    Then the visitor should receive a confirmation email with a unique booking number

  Scenario: Visitor does not receive a confirmation after booking
    Given the visitor has selected a seat number
    And the visitor has selected a film and date/time
    When the visitor completes the booking process
    Then the visitor should not receive a confirmation email or message

  Scenario: Visitor receives a confirmation with incorrect details
    Given the visitor has selected a seat number
    And the visitor has selected a film and date/time
    When the visitor completes the booking process
    Then the visitor should receive a confirmation with correct details
