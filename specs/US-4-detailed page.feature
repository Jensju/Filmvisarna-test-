Feature: Movie Details Page
    As a user, I want to go to a details page for a specifik movie 
    So that I can acces more information about the (image, trailer, description, cast, director etc.)


   Scenario Outline: View Movie Information
    Given the user is on the home page
    And  The user click on the movie titled "<movie>"
    Then The user should be directed to the movie details page
    When The user look at the page content
    Then The user should see the following "<information>"
    Examples:
    |information |
    |Movie image | 
    |trailer     | 
    |description |
    |Genre       |
    |Cast        |
    |director    |

   Scenario: Navigate Back to Home Page
    Then  The user click on the "Back" button or a smilar navigation element
    Then  The user should be redirected back to the home page 

