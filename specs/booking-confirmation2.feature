Feature: Booking confirmation
  As a visitor, I would like to receive a confirmation of booking,
  containing selected seat numbers, which film and date/time,
  with a unique, hard-to-guess, booking number
  so that I remember my booking
  and can give the booking number to the cinema during my visit.
   
   
  Scenario: A logged-in user receives a confirmation message after booking
    Given that I am on the start page
    Given I logg in in my account
    And I enter "test.yev@gmail.com" into email field
    And I enter "Test1234!" into password field
    And I press "logga in" button
    And I go to the start page
    When I choose the movie titled "Happy Gilmore"
    And I choose the session "Söndag, 2024-01-14, 20:00" from the list
    And I press on the button "Gå vidare" in the date box
    And I choose "1" "Vuxen" seats
    And I press on the button "Gå vidare" in the number of seats box
    And I choose "1" available seat
    And I press on the button "Gå vidare" in the seats box
    And I enter my email "test.yev@gmail.com" in the input field in the confirmation box
    And I press on the button "Boka"
    And I confirm the booking and press on the button "Boka"
    Then I should see a booking confirmation message
    And the confirmation should contain selected seat numbers, the movie title "Happy Gilmore", date "2024-01-14", time "20:00" and booking number
        