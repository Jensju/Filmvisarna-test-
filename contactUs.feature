Testing the ”Kontakta oss" Form
  As a visitor, i want to be able to contact the cinema


  Scenario: Verify that the 'Contact Us' form is displayed and interactive
    Given the user is on the contact page
    When the page is fully loaded
    Then a 'Contact Us' form should be displayed with fields for name, email, and message
    And each field should be interactive, allowing user input

  Scenario: Submit a message through the ’Kontakta oss' form and receive confirmation
    Given the ’kontakta oss' form is visible
    And the user has filled in all required fields correctly
    When the user submits the form
    Then a confirmation message should be displayed
    And ideally, an email confirmation should be sent to the user

  Scenario: Validate error handling in the ’Kontakta oss' form
    Given the user is filling out the 'Contact Us' form
    When the user leaves a required field empty or enters invalid data
    Then an appropriate error message should be displayed
    And the form should not be submitted until all errors are corrected
