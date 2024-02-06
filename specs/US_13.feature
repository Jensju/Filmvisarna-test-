Feature: View of movie trailers
  As a visitor, I want to be able to see trailers for movies to better decide whether they interest me or not.

  Background:
    Given the user is on the home page

  Scenario Outline: View Movie Trailers
    When the user clicks to time of the "<movie>"
    And the trailer of the movies can be visable
    And the user clicks on the "Back" button or a similar navigation element

    Examples:
      | movie |
      | 1     |
      | 2     |
      | 3     |
      | 4     |
      | 5     |