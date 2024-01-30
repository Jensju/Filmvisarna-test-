Feature: View of movie trailers
  As a visitor, I want to be able to see trailers for movies to better decide whether/or not they interest me.

  Background:
    Given the user is on the website's home page

  Scenario: Navigate to Movie Details Page

    Then the user should be directed to the movie details page


  Scenario Outline: View Movie Trailers
    When the user look at the trailers videos
    Then the user should open the trailers videos and decide to watch one of the movies
    Examples:
      | Gladiator            |
      | Pulp Fiction         |
      | Interstellar         |
      | Shawshank Redemption |
      | Back to Future       |
      | Schindler's List     |
      | the Usual Suspects   |
      | Happy Gilmore        |

  Scenario: Navigate Back to Home Page
    Then the user click on the "Back" button or a smilar navigation element
    Then the user should be redirected back to the home page