Feature: Ticket price
As a visitor, I would like to be able to book tickets with different prices,
 so that I can take advantage of the lower prices for senior citizens and children

Background: starting booking
    Given that I am on the start page
    And I choose the film "Gladiator" in "21:00" on "Söndag, 2024-02-11" from the list of screenings
    When I press on the button "Gå vidare" in the date box


  Scenario: Choose a ticket with a pensioner discount
    Then I should see the price of "120kr" for a seat for pensioners "Pensionär, 65+"
    And I choose "1" "Pensionär, 65+" seats
    And I should see the total price of "120kr"
    And I press on the button "Gå vidare" in the number of seats box
    And I choose "1" available seats
    And I press on the button "Gå vidare" in the seats box
    And I enter my email "test.yev@gmail.com" in the input field in the confirmation box
    And I press on the button "Boka"
    And I confirm the booking and press on the button "Boka"
    And I should get and the booking confirmation message contains the ticket price "120kr"
   
    
  Scenario: Book a ticket with a child discount
    Then I should see the price of "80kr" for a seat for children "Barn, (0-12 år)"
    And I choose "1" "Barn, (0-12 år)" seats
    And I should see the total price of "80kr"
    And I press on the button "Gå vidare" in the number of seats box
    And I choose "1" available seats
    And I press on the button "Gå vidare" in the seats box
    And I enter my email "test.yev@gmail.com" in the input field in the confirmation box
    And I press on the button "Boka"
    And I confirm the booking and press on the button "Boka"
    And I should get and the booking confirmation message contains the ticket price "80kr"
    

  Scenario: The total price is calculated correctly when booking multiple tickets
    And I choose "1" "Pensionär, 65+" seats
    And I choose "1" "Barn, (0-12 år)" seats
    And I choose "2" "Vuxen" seats
    Then I should see the total price of "480kr"
    And the total price should be calculated correctly and equal to the sum of the ticket prices
    And I choose "4" available seats 
    And I press on the button "Gå vidare" in the seats box
    And I enter my email "test.yev@gmail.com" in the input field in the confirmation box
    And I press on the button "Boka"
    And I confirm the booking and press on the button "Boka"
    And I should get and the booking confirmation message contains the ticket price "480kr"

    
