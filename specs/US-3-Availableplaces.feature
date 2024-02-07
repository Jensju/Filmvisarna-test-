Feature: Check available places
    As a user, I want to be able to see available seats in a salon on a specific 
    viewing so that I can determine if there are seats left that are interesting to me.

    Background: 
    Given the user is on the home page
    

    Scenario: the user selects a "Sample Movie" and a movie showtime.
    When  user selects "Sample Movie" and "show time" and then clicks on the button "Gå vidare"
    And the user selects the "Biljettyp" and "antal" and clicks on the button "Gå vidare"
    And the system displays the available "Ledig plats" for the selected showtime.
    And  the user clicks on one of the "Ledig plats".
    Then  the user verify that "Ledig plats" are visible.

    Scenario: the user selects a "Sample Movie" and showtime, but all seats are occupied.
    When the user selects sample movie and show time and then clicks on the submit button
    And the user selects the "Biljettyp" and "antal" and clicks on the button "Gå vidare". 
    And the system notifies that all seats are "Upptagen plats".
    Then the user verify that no seats are visible.
