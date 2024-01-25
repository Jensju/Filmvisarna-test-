Feature: LoggedIn Feature

    I should see a variety of features when logged in

  Scenario: UserFeatures
    Given That i am on the start page
    And I am logged in
    When I open user features
    Then i should have access to user features