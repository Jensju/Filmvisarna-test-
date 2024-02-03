Feature: See reserved seats live 

As a visitor, I want to see live/directly on the screen when seats are booked, 
when I'm selecting seats at a screening so I don't think I can still book something someone else has already booked.

  Background:
    Given The user is at the home page

  Scenario: Navigate to Movie Details Page on the base of day you are selecting

    Then The user decides the day to see the movie details
    And The user clicks to the time of the movie
    When The user selects and clicks a valid date-time with the language of the movie
    Then The user clicks to "Gå vidare" button
    And The user clicks to related segments
    And The user clicks to "Gå vidare"
    Then The user can see that how many reserved seats live in the screen


  Scenario: Navigate Back to Home Page
    Then the user click on the "Back" button or a smilar navigation element.
    Then the user should be redirected back to the home page.