Feature: LoggedIn Feature
  As a user, I should see a variety of features when logged in

  Scenario: UserFeatures
    Given that i am on the start page
    And I am logged in using "test.yev@gmail.com" and "Test1234!"
    When I open user features
    Then I should have access to user features