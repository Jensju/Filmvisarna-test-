Feature: Check linked trailers
  As a visitor you should be able to watch a movie trailer linked to youtube before your decide to book a ticket.

  Scenario Outline: click on the <movie> poster and then klick the youtube preview to start the trailer
    Given that I am on the main page
    And that I have choosen the <movie> poster in the list
    When I click on the youtube trailer
    Then the trailer should play

      | movie  |
      | first  |
      | second |
      | third  |
      | forth  |
      | fifth  |
