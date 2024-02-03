Feature: Filtering
  As a visitor, I want to be able ........
  so that I know ......

  Background: starting booking
    Given that I am on the start page
  
  Scenario: Booking seats for a screening that har already taken place is not possible
    When I choose a movie "Pulp Fiction" from the list
    Then I should not see any screening that har already taken place in the screening list
