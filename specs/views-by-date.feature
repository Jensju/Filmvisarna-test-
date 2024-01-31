Feature: Filtering of views by date
  As a visitor on the webpage I expect to be able to select a specific start date for viewing upcoming movies to choose from and then make a choice from the film listed.

  Scenario Outline: Choose a specific "<date>" from the date field
    Given that I am on the main page
    And choose a date in the calendar
    When I click the "<date>" in the calendar
    Then I expect the viewing of the movie list to be updated

      | date       |
      | 2024-02-01 |
      | 2024-02-12 |
      | 2024-02-25 |
      | 2024-03-01 |
      | 2024-02-15 |