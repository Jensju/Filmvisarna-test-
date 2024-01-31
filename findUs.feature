  Testing the ”Hitta hit" Section in the Footer  
   As a visitor, I want to be able to find the cinema.
  
  
  Scenario: Verify the presence and content of the ’Hitta hit' section in the footer
    Given the user is on the homepage
    When the user scrolls to the bottom of the page
    Then a section titled ’Hitta hit' should be present in the footer
    And this section should contain address details, possibly a map or directions

  Scenario: Check functionality of the ’Hitta hit' link
    Given the 'Find Us' section is present in the footer
    When the user clicks on ’ dsd'
    Then the user should be taken to a page or section with information on how to find the company/location


  Scenario: Accessibility of ’Hitta hit' section for different devices
    Given the user accesses the homepage on a mobile device
    When the user navigates to the footer
    Then the 'Find Us' section should be easily viewable and interactive on the smaller screen