Feature: Cancel bookings
As a visitor, I would like to be able to cancel my booking 
so I don't have to occupy a seat.

  Scenario: User cancels all their active bookings
    Given that I am on the main page
    When I logg in in my account
    And I enter "test.yev@gmail.com" into email field
    And I enter "Test1234!" into password field
    And I press "logga in" button
    When I cancel all my active bookings
    Then I should not see any active bookings
