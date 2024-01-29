Feature: Check "Om oss" in the footer

Scenario: User checks the "Om oss" link in the footer
    Given the user is on the website's home page
    When the user scrolls to the footer section
    Then the user should see a link labeled "Om oss"
    When the user clicks on the "Om oss" link
    Then the user should be directed to the "Om oss" (About Us) page
    And the user should see relevant information about the company or organization