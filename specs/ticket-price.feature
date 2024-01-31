Feature: Ticket price
As a visitor, I would like to be able to book tickets with different prices,
 so that I can take advantage of the lower prices for senior citizens and children

Background: starting booking
    Given that I am on the start page
    When I choose the film "Gladiator" in "21:00" on "Söndag, 2024-02-11" from the list of screenings
    And I choose the screening from the list with date "Söndag, 2024-02-11, 21:00"
    And I press on the button "Gå vidare" in the date box


  Scenario: Book a ticket with a discount for pensioners
    Then I should see the price of "120 kr" for a seat for "Pensionär, 65+"
    And I choose "1" "Pensionär, 65+" seats
    And I should see the total price of "120 kr"
    
      
  Scenario: Book a ticket with a discount for children
    Then I should see the price of "80 kr" for a seat for "Barn, (0-12 år)"
    And I choose "1" "Barn, (0-12 år)" seats
    And I should see the total price of "80 kr"
    

  Scenario: The total price is calculated correctly when booking multiple tickets
    And I choose "1" "Pensionär, 65+" seats
    And I choose "1" "Barn, (0-12 år)" seats
    And I choose "2" "Vuxen" seats
    Then I should see the total price of "480 kr"
    And the total price should be calculated correctly and equal to the sum of the ticket prices
   

    
