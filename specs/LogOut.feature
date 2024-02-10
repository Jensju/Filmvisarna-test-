Feature: Log Out
  As a user i should be able to log out form my account

  Scenario: Log Out
    Given that i am on the start page
    And I am logged in using "test.yev@gmail.com" and "Test1234!"
    When I click the log out button
    Then I should log out