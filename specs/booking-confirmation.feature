Feature: Booking confirmation
As a visitor, I would like to receive a confirmation of booking, 
containing selected seat numbers, which film and date/time, 
with a unique, hard-to-guess, booking number 
so that I remember my booking 
and can give the booking number to the cinema during my visit.

  Background: start page
    Given that I am on the start page
  Scenario: A logged-in user receives a confirmation message when entering non-user email while booking seats
    Given I logg in in my account
    And I enter "test.yev@gmail.com" into email field
    And I enter "Test1234!" into password field
    And I press "logga in" button
    And I go to the start page
    When I choose the film "Star Wars: Episode V - The Empire Strikes Back" in "21:00" on "Fredag, 2024-10-25" from the list of screenings
    And I choose the session "Fredag, 2024-10-25, 21:00" from the list
    And I press on the button "Gå vidare" in the date box
    And I choose "3" "Vuxen" seats
    And I press on the button "Gå vidare" in the number of seats box
    And I choose "3" available seat
    And I press on the button "Gå vidare" in the seats box
    When I enter my email "test1234567890@gmail.com" in the input field in the confirmation box
    And I press on the button "Boka"
    And I confirm the booking and press on the button "Boka"
    Then I should see a booking confirmation message
    And the confirmation message should contain selected seat numbers, which film, date and unique booking number

    
  Scenario: A non-logged in visitor receives a confirmation message after booking
    When I choose the film "Star Wars: Episode V - The Empire Strikes Back" in "21:00" on "Fredag, 2024-10-25" from the list of screenings
    And I choose the session "Fredag, 2024-10-25, 21:00" from the list
    And I press on the button "Gå vidare" in the date box
    And I choose "1" "Vuxen" seats
    And I press on the button "Gå vidare" in the number of seats box
    And I choose "1" available seat
    And I press on the button "Gå vidare" in the seats box
    And I enter my email "test.yev@gmail.com" in the input field in the confirmation box
    And I press on the button "Boka"
    And I confirm the booking and press on the button "Boka"
    Then I should see a booking confirmation message
    And the confirmation message should contain selected seat numbers, which film, date and unique booking number
 
  Scenario: A logged-in user receives a confirmation message after booking 
    Given I logg in in my account
    And I enter "test.yev@gmail.com" into email field
    And I enter "Test1234!" into password field
    And I press "logga in" button
    And I go to the start page
    When I choose the film "Star Wars: Episode V - The Empire Strikes Back" in "21:00" on "Fredag, 2024-10-25" from the list of screenings
    And I choose the session "Fredag, 2024-10-25, 21:00" from the list
    And I press on the button "Gå vidare" in the date box
    And I choose "1" "Vuxen" seats
    And I press on the button "Gå vidare" in the number of seats box
    And I choose "1" available seat
    And I press on the button "Gå vidare" in the seats box
    And I enter my email "test.yev@gmail.com" in the input field in the confirmation box
    And I press on the button "Boka"
    And I confirm the booking and press on the button "Boka"
    Then I should see a booking confirmation message
    And the confirmation message should contain selected seat numbers, which film, date and unique booking number

    
  


