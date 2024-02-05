Feature: Check my Bookings
  As a User, I should be able to check my bookings while logged in

  Scenario: Check Bookings
    Given that i am on the start page
    And I am logged in using "test.yev@gmail.com" and "Test1234!"
    When I check bookings
    Then I should see my bookings