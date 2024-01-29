Feature: Seats booking
As a visitor, I want to be able to book seats at a screening 
so that I know I have the seats I want when I go to see the film.

  Background: starting booking
 Given that I am on the start page

  Scenario: Booking of available seats
    And I select the first available screening from the list
    And I select the first available time from the list
    And I press on the button "Gå vidare"
    When I choose "2" "Vuxen" seats
    And I press on the button "Gå vidare"
    Then I should be able to choose "2" available seats
    And I should be able to press on the button "Gå vidare"
    And I should see the booking confirmation box

  Scenario: Booking of already reserved seat
    And I choose the film "Gladiator" in "21:00" on "Söndag, 2024-02-11" from the list of screening
    And I press on the button "Gå vidare"
    And I choose "2" "Vuxen" seats
    And I press on the button "Gå vidare"
    And I choose "2" available seat
    And I press on the button "Gå vidare"
    And I enter my email "test.yev@gmail.com" in the input field in the confirmation box
    And I press on the button "Boka"
    And I confirm the booking and press on the button "Boka"
    And I click on the button "Startsida"
    And I choose the film "Gladiator" in "21:00" on "Söndag, 2024-02-11" from the list of screening
    And I press on the button "Gå vidare"
    And I choose "1" "Vuxen" seats
    And I press on the button "Gå vidare"
    When I choose "1" reserved seats
    And I press on the button "Gå vidare"
    Then I should get error message 
    

  Scenario: Booking of seats for an already completed screening
    And I select a day that has already passed in the filter by date "01.03.2024"
    And I choose the film "Gladiator" in "18:00" on "Onsdag, 2024-01-03" from the list of screening
    When I press on the button "Gå vidare"
    Then  the system displays an error message


  
