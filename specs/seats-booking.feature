Feature: Seats booking
As a visitor, I want to be able to book seats at a screening 
so that I know I have the seats I want when I go to see the film.

  Scenario: Booking of available seats
    Given that I am on the first page
    And I want to book a seat for a screening 
    When the visitor selects an available seat 
    Then the seat is reserved for the visitor

  Scenario: Booking of already reserved seat
    Given that I am on the first page
    When 
    Then  the system displays an error message

  Scenario: Booking of seats for a specific date
    Given that I am on the first page
    When 
    Then 

  Scenario: Booking of seats from the list of available dates
    Given that I am on the first page
    When 
    Then 

  Scenario: Booking of seats for an already completed screening
    Given that I am on the first page
    When 
    Then  the system displays an error message
