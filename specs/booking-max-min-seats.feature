Feature: Bookning of max and min number of available seats
  As a visitor on the webpage I expect to be able to select as a minimum one ticket and as a maximum the amount of seats still remaing unbooked

Background: 
  Given that I am on the land page
  And that I have choosen the first movie in the list
  And choosed the first avalible viewing date

Scenario: 
  When I leave my choice to zero
  And click tyhe accept button
  Then I expect no action

Scenario: 
  When I add one ticket
  And click the accept button
  And choose a free seat in the movie saloon
  Then I expect an e-mail form to confirm my booking

  Scenario:
    When I add all available seats
    And click the accept button
    And choose all the free seat in the movie saloon
    Then I expect an e-mail form to confirm my booking

  Scenario:
    When I add all seats in the movie theater
    And click the accept button
    And choose all the seat in the movie saloon
    Then I expect an e-mail form to confirm my booking
