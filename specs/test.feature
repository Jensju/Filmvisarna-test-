Feature: Filtering of views by date
As a visitor on the webpage I expect to be able to select a specific start date for viewing upcoming movies to choose from and then make a choice from the film listed.

Scenario:
  Given that I am on the main page
  When I choose a date in the calendar
  And click the date in the calendar
  Then I expect the viewing of the movie list to be updated