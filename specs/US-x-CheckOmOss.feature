Feature: Check "Om oss" in the footer

    Scenario: User checks the "Om oss" link in the footer
    Given the user is on the home page
    When the user scrolls to the footer section
    When the user clicks on the "Om oss" link
    Then the user should be directed to the "Om oss" page
    And the user should see relevant information about the company or organization