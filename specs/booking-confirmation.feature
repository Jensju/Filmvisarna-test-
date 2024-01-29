Feature: Booking confirmation
As a visitor, I would like to receive a confirmation of booking, 
containing selected seat numbers, which film and date/time, 
with a unique, hard-to-guess, booking number 
so that I remember my booking 
and can give the booking number to the cinema during my visit.

  Background: booking seats
    Given that I am on the start page
    And I logg in in my account
    And I enter "test.yev@gmail.com" into email field
    And I enter "Test1234!" into password field
    And I press "logga in" button
    When I select the first available screening from the list
    And I select the first available time from the list
    And I press on the button "Gå vidare" in the date box
    And I choose "2" "Vuxen" seats
    And I press on the button "Gå vidare" in the number of seats box
    And I choose "2" available seat
    And I press on the button "Gå vidare" in the seats box
    
    

  Scenario: A non-logged in visitor receives a confirmation message after booking
    Given I logg out of my account 
    When I enter my email "test.yev@gmail.com" in the input field in the confirmation box
    And I press on the button "Boka"
    And I confirm the booking and press on the button "Boka"
    Then I should see a confirmation of booking message
    And the confirmation message should contain selected seat numbers, which film and date/time and unique booking number
 
  Scenario: A logged-in user receives a confirmation message after booking 
    When I enter my email "test.yev@gmail.com" in the input field in the confirmation box
    And I press on the button "Boka"
    And I confirm the booking and press on the button "Boka"
    Then I should see a confirmation of booking message 
    And the confirmation message should contain selected seat numbers, which film and date/time and unique booking number

  Scenario: Visitor does not receive a confirmation after booking
    When I enter my email "test.yev@gmail.com" in the input field in the confirmation box
    And I press on the button "Boka"
    And I confirm the booking and press on the button "Boka"
    Then I should not see a confirmation of booking message
    
  Scenario: A logged-in user receives a confirmation message when entering non-user email while booking seats
    When I enter my email "test.yev@gmail.com" in the input field in the confirmation box
    And I press on the button "Boka"
    And I confirm the booking and press on the button "Boka"
    Then I should see a confirmation of booking message
    And the confirmation message should contain selected seat numbers, which film and date/time and unique booking number

 