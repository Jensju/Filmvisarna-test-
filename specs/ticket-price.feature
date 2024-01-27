Feature: Ticket price
As a visitor, I would like to be able to book tickets with different prices,
 so that I can take advantage of the lower prices for senior citizens and children


  Scenario: Book a ticket with a senior citizen discount
    Given I am on the ticket booking page
    When I select the senior citizen option
    And I click on the "Book" button
    Then I should see the ticket confirmation 
    And the ticket price should be 120 kr

  Scenario: Book a ticket with a child discount
    Given I am on the ticket booking page
    When I select the child option
    And I click on the "Book" button
    Then I should see the ticket confirmation 
    And the ticket price should be 80 kr

  Scenario: The total price is calculated correctly when booking multiple tickets
    Given I am on the ticket booking page
    When I select multiple tickets
    And I click on the "Book" button
    Then I should see the ticket confirmation
    And the total price should be calculated correctly and equal to the sum of the ticket prices
