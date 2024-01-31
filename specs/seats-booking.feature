Feature: Seats booking
  As a visitor, I want to be able to book seats at a screening 
  so that I know I have the seats I want when I go to see the film.

  Background: starting booking
    Given that I am on the start page

  Scenario: Booking of available seats
    Given I select the first available screening from the list
    And I select the first available time from the list
    And I press on the button "Gå vidare" in the date box
    When I choose "2" "Vuxen" seats
    And I press on the button "Gå vidare" in the number of seats box
    Then I should be able to choose "2" available seats
    And I should be able to press on the button "Gå vidare" in the seats box
    And I should see the booking confirmation box

  Scenario: Booking of already reserved seat
    When I choose the film "Gladiator" in "21:00" on "Söndag, 2024-02-11" from the list of screenings
    And I select the first available time from the list
    And I press on the button "Gå vidare" in the date box
    And I choose "2" "Vuxen" seats
    And I press on the button "Gå vidare" in the number of seats box
    And I choose "2" available seat
    And I press on the button "Gå vidare" in the seats box
    And I enter my email "test.yev@gmail.com" in the input field in the confirmation box
    And I press on the button "Boka"
    And I confirm the booking and press on the button "Boka"
    And I go to the start page
    And I choose the film "Gladiator" in "21:00" on "Söndag, 2024-02-11" from the list of screenings
    And I press on the button "Gå vidare"  in the date box
    And I choose "1" "Vuxen" seats
    And I press on the button "Gå vidare" in the number of seats box
    And I choose "1" reserved seats
    And I press on the button "Gå vidare" in the seats box
    Then I should get an alert message "Välj säten innan du fortsätter"
    
  Scenario: Booking of seats for an already completed screening
    Given I select a day that has already passed in the filter by date "01.03.2024"
    And I choose the film "Gladiator" in "18:00" on "Onsdag, 2024-01-03" from the list of screenings
    When I press on the button "Gå vidare" in the date box
    Then the system displays an alert message

  Scenario: Booking of seats when entering incorrect email address in the comfirmation box
    When I choose the film "Gladiator" in "21:00" on "Söndag, 2024-02-11" from the list of screenings
    And I press on the button "Gå vidare" in the date box
    And I choose "1" "Vuxen" seats
    And I press on the button "Gå vidare" in the number of seats box
    And I choose "1" available seat
    And I press on the button "Gå vidare" in the seats box
    And I enter email "test@" in the input field in the confirmation box
    And I press on the button "Boka"
    Then the system displays a message "Vänligen ange en giltig email"
    And I should not be able to press button "Boka"

  
