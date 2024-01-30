Feature: Check available places
    As a user, I want to be able to see available seats in a salon on a specific 
    viewing so that I can determine if there are seats left that are interesting to me.

    Background: 
    Given the user is on the website's home page
    And  User selects "Sample Movie" and show time and then clicks continue

    Scenario: the user selects a "Sample Movie" and a movie showtime.
    Then the user selects the "ticket type" and "number of tickets" and clicks on the button "Gå Vidare"
    And  the user clicks on a button labeled "Available Seats" or similar.
    Then the system displays the available empty seats for the selected showtime.
    And  the user checks the availability of empty seats and identifies seats of interest.

    Scenario: the user selects a "Sample Movie" and showtime, but all seats are occupied.
    Then the user selects the "ticket type" and "number of tickets" and clicks on the button "Gå Vidare"
    And  the user clicks on a button labeled "Available Seats" or similar.
    Then the system notifies that all seats are occupied.
    And  the user may choose to check another showtime or a different movie for available seats.
