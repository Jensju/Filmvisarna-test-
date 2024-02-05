Feature: LogInNegative

    If i login using an inocrrect password or non existant account i should not be able to log in

  Scenario: LogInNegative
    Given that i am on the start page
    And I am on the log in page
    When I fill in my account details incorrectly using "testMejlFilmtestarna@testMejl12345.com" and "NotMyPassword123"
    Then I should not login