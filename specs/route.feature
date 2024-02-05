Feature: Check unique URL/Route
  As a visitor i want to be able to share site information with the
  unique url for each and every page on the website.


  Scenario Outline: Scenario Outline name: Unique URL for Each Page
    Given the user is exploring various pages on the website
    When they navigate by clicking on a link with the href to "<URL>" 
    Then the URL should change to "<URL>" 

    Examples:
        | URL | 
        | / |  
        | /om-oss|
        | /kontakt|
