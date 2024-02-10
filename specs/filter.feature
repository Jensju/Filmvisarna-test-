Feature: Filtering
As a visitor, I would like to be able to select movies by date, 
by title and by available seats 
so that I don't waste my time searching for irrelevant screenings

  Background: start page
    Given that I am on the start page
  
  Scenario: Booking seats for a screening that har already taken place is not possible
    When I choose the movie titled "Pulp Fiction"
    Then I should not see any screening that har already taken place in the screening list

  Scenario: Search for screening that will take place in a month
    When I am selecting a date one month in advance in the calendar
    Then screenings that will take place earlier than the selected date should not be displayed


  Scenario: Booking more seats than there are in the cinema hall
    Given I choose the movie titled "Pulp Fiction"
    And I choose the session "Onsdag, 2024-01-17, 18:00" from the list
    And I press on the button "Gå vidare" in the date box
    And I choose "1" "Vuxen" seats
    And I press on the button "Gå vidare" in the number of seats box
    When I check how many seats the cinema has and go back to select one more "Vuxen" seat
    Then I should not be able to go to the next stage of the booking when I click the submit button "Gå vidare"


  Scenario: Booking more seats than are available in the cinema hall
    Given I choose the movie titled "Interstellar"
    And I choose the session "Fredag, 2024-01-26, 18:00" from the list
    And I press on the button "Gå vidare" in the date box
    And I choose "1" "Vuxen" seats
    And I press on the button "Gå vidare" in the number of seats box
    When I check how many available seats the cinema has and go back to select one more "Vuxen" seat
    Then I should not be able to go to the next stage of the booking when I click the submit button "Gå vidare"
