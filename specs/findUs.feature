  Feature: Check the ”Hitta hit" Section in the Footer  
   As a visitor, I want to be able to find the cinema.
  
  
  Scenario: Verify the presence and content of the "Hitta hit" section in the footer
    Given the user is on the homepage
    When the user scrolls to the bottom of the page
    Then a section titled "Hitta hit" should be present in the footer
    And this section should contain address details, possibly a map or directions
