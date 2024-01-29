Feature: Create Account
  As a user, I want to be able to create an account from Account creation Menu

  Scenario: Creating an Account
    Given that i am on the start page
    And I am on the account creation menu
    When I fill in account creation details
    Then I should be able to create an account