Feature: Filtering of views by date
  As a visitor on the webpage I expect to be able to select a specific start date for viewing upcoming movies to choose from and then make a choice from the film listed.

  Background:
    Given that I am on the start page
    And choose a date in the calendar

  Scenario Outline: Choose a specific "<date>" from the date field
    When I click the "<date>" in the calendar
    When the choice of movie list is updated and I choose the first element
    Then I expect a button to apper to continue to the starting point for making a booking

    Examples:
      | date       |
      | 2024-02-10 |
      | 2024-02-17 |
      | 2024-02-24 |
      | 2024-03-01 |
      | 2024-02-08 |
