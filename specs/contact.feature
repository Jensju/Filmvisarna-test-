Check the ”Kontakta" Form
  As a visitor, i want to be able to contact the cinema


  Scenario: Verify that the "Kontakta" form is displayed and interactive
    Given the user is on the home page
    And the user click on "Kontakta" page
    When the page is fully loaded
    Then a "Kontakta oss" form should be displayed with fields for name, email, and message
    And each field should be interactive, allowing user input


