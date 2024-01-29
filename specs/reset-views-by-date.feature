Feature: Reset the filering of views by date
    As a visitor on the webpage I expect to be able to reset my choice of date after an update using the reset button.

    Scenario: Reset the origin date
        Given that I am on the main page
        And have choosen a new viewing date
        When I click on the reset button
        Then the calendar date will return to it's origin state