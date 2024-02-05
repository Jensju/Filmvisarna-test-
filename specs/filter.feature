Feature: Filtering
As a visitor, I would like to be able to select movies by date, 
by title and by available seats 
so that I don't waste my time searching for irrelevant screenings

  Background: starting booking
    Given that I am on the start page
  
  Scenario: Booking seats for a screening that har already taken place is not possible
    When I choose a movie "Pulp Fiction" from the list
    Then I should not see any screening that har already taken place in the screening list

  Scenario: Booking more seats than there are in the cinema hall
    Given I select the first available screening from the list
    And I select the first available time from the list
    And I press on the button "Gå vidare" in the date box
    When I choose "1" "Vuxen" seats
    And I press on the button "Gå vidare" in the number of seats box
    And I check how many seats the cinema has and go back to select one more "Vuxen" seat
    Then I do not go to the next stage of the booking when I click the submit button "Gå vidare"


  Scenario: Booking more seats than are available in the cinema hall
    Given I select the first available screening from the list
    And I select the first available time from the list
    And I press on the button "Gå vidare" in the date box
    When I choose "1" "Vuxen" seats
    And I press on the button "Gå vidare" in the number of seats box
    And I check how many available seats the cinema has and go back to select one more "Vuxen" seat
    Then I do not go to the next stage of the booking when I click the submit button "Gå vidare"
