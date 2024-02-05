Feature: Seats booking
  As a visitor, I want to be able to book seats at a screening 
  so that I know I have the seats I want when I go to see the film.

  Background: starting booking
    Given that I am on the start page


  Scenario: Booking of available seats
    Given I select the first available screening from the list
    And I select the first available time from the list
    And I press on the button "Gå vidare" in the date box
    When I choose "1" "Vuxen" seats
    And I press on the button "Gå vidare" in the number of seats box
    Then I should be able to choose "1" available seats
    And I should be able to press on the button "Gå vidare" in the seats box
    And I should see the booking confirmation box


  Scenario: Booking of already occupied seat is not possible
    Given I choose the film "Star Wars: Episode V - The Empire Strikes Back" in "21:00" on "Fredag, 2024-10-25" from the list of screenings
    And I choose the session "Fredag, 2024-10-25, 21:00" from the list
    And I press on the button "Gå vidare" in the date box
    And I choose "1" "Vuxen" seats
    And I press on the button "Gå vidare" in the number of seats box
    And I choose "1" available seat
    And I press on the button "Gå vidare" in the seats box
    And I enter my email "test.yev@gmail.com" in the input field in the confirmation box
    And I press on the button "Boka"
    And I confirm the booking and press on the button "Boka"
    And I go to the start page
    And I choose the film "Star Wars: Episode V - The Empire Strikes Back" in "21:00" on "Fredag, 2024-10-25" from the list of screenings
    And I choose the session "Fredag, 2024-10-25, 21:00" from the list
    And I press on the button "Gå vidare" in the date box
    And I choose "1" "Vuxen" seats
    And I press on the button "Gå vidare" in the number of seats box
    When I choose "1" reserved seats
    Then I should get an alert message that I need to choose an available seat "Välj säten innan du fortsätter"


  Scenario: Booking seats is not possible if visitor enter an incorrect email address.
    When I choose the film "Gladiator" in "21:00" on "Söndag, 2024-02-11" from the list of screenings
    And I select the first available time from the list
    And I press on the button "Gå vidare" in the date box
    And I choose "1" "Vuxen" seats
    And I press on the button "Gå vidare" in the number of seats box
    And I choose "1" available seat
    And I press on the button "Gå vidare" in the seats box
    And I enter email "test@" in the input field in the confirmation box
    And I press on the button "Boka"
    Then the system displays a message that email is incorrect "Vänligen ange en giltig email"
    And I should not receive a request for a booking confirmation
  
  Scenario: Booking less than one seat
    Given I select the first available screening from the list
    And I select the first available time from the list
    And I press on the button "Gå vidare" in the date box
    When I click on "-" to select less than 1 "Vuxen" seat
    Then I do not go to the next stage of the booking when I click the submit button "Gå vidare"
    

  