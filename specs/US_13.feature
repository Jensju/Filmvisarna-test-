
Feature: View of movie trailers
As a visitor, I want to be able to see trailers for movies to better decide whether they interest me or not.


  Scenario Outline: View Movie Trailers
    Given The user is on the home page
    Then The user clicks to time of the "Gladiator"
    Then The user clicks the red button in the video to see the trailer
    Then The user clicks on the "Back" button or a smilar navigation element
    Then The user clicks to time of the "Star Wars: Episode V - The Empire Strikes Back"
    Then The user clicks the red button in the video to see the trailer
    Then The user clicks on the "Back" button or a smilar navigation element
    Then The user clicks to time of the "Schindler's List"
    Then The user clicks the red button in the video to see the trailer
    Then The user clicks on the "Back" button or a smilar navigation element
    Then The user clicks to time of the "Shawsbank Redemption"
    Then The user clicks the red button in the video to see the trailer
    Then The user clicks on the "Back" button or a smilar navigation element
    Then The user clicks to time of the "Happ Gilmore"
    Then The user clicks the red button in the video to see the trailer
    Then The user clicks on the "Back" button or a smilar navigation element



  Scenario: Navigate Back to Home Page
    Then The user should be redirected back to the home page.