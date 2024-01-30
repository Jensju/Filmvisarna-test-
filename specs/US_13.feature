Feature: View of movie trailers
  As a visitor, I want to be able to see trailers for movies to better decide whether/or not they interest me.

  Background:
    Given the user is on the website's home page

  Scenario: Navigate to Movie Details Page

    And The user can see the movie alternatives for determined days and times
    When The user can see the trailer of the movie 


  Scenario Outline: View Movie Trailers
    When The user can select one of the day and a movie under selected day
    Then The user should be directed to the movie details page
    Then The user should open the trailers videos and decide to watch one of the movies
    Examples:
      | Back to the Future   |
      | Pulp Fiction         |
      | Gladiator            |
      | Star Wars: Episode V -The Empire Strikes Back |

  Scenario: Navigate Back to Home Page
    Then The user click on the "Back" button or a smilar navigation element
    Then The user should be redirected back to the home page.