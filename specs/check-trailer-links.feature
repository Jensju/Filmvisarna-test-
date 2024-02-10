Feature: Check linked trailers
  As a visitor you should be able to watch a movie trailer linked to youtube before your decide to book a ticket.

  Background: 
    Given that I am on the start page

  Scenario Outline: click on the "<movie>" poster and then choose the youtube preview to maintain that the trailer exist
    When I have choosen the "<movie>" poster in the list
    Then the trailer should appear

    Examples:
      | movie |
      | 1     |
      | 2     |
      | 3     |
      | 4     |
      | 5     |
     
