Feature: Fail to Create Account

    As a user i want the site to not allow to make an account if my email is already used for an account

  Scenario: email already taken
    Given that i am on the start page
    And I am on the account creation menu
    When I fill in account creation details using, my email has already been used "testMejlFilmtestarna@testMejl12345.com" as my email and "Test123456123456" as my password
    Then i should not be able to make an account

  