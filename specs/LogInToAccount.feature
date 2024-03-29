Feature: Log in to Account
  As a user, I want to be able to log into an existing account

  Scenario: Log in
    Given that i am on the start page
    And I am on the log in page
    When I fill in my account details using "test.yev@gmail.com" and "Test1234!"
    Then I should be able to log in