Feature: Filtering
As a visitor, I would like to be able to select movies by date, 
by title and by available seats 
so that I don't waste my time searching for irrelevant screenings

  Background: starting booking
    Given that I am on the start page
  
  Scenario: Booking seats for a screening that har already taken place is not possible
    When I choose a movie "Pulp Fiction" from the list
    Then I should not see any screening that har already taken place in the screening list

