Feature: See reserved seats live 
  As a visitor, I want to be able to see reserved seats live after clicking planned day's movie

  Background:
    Given The user is on the website's home page

  Scenario: Navigate to Movie Details Page on the base of day you are selecting

    Then The user decides the day and clicks to the day's movie
    And The user clicks to the time of the movie
    When The user selects the date and time and the language of the movie
    Then The user clicks to "Gå vidare" segment
    And The user selects to related segments and clicks to "Gå vidare"
    Then The user can see that how many reserved seats live in the screen


  Scenario: Navigate Back to Home Page
    Then the user click on the "Back" button or a smilar navigation element
    Then the user should be redirected back to the home page.