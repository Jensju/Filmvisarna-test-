
Feature: Cancel a booking 
  As a visitor, I want to be able to cancel a booking.

  Background: 
    Given The user is on the website's home page
    And The user logs in with the registered e-mail adress and password.

  Scenario: Navigate to "Mina bokningar" web page after logging in

    Then The user loggs in by username and password
    And The user clicks to "Bokningar" link under upper right link/box
    When The user can see the booking history under "Bokningshistorik"
    Then The user can cancel a booking 



  Scenario: Navigate Back to Home Page
    Then the user click on the "Back" button 3 times for main website
    Then the user should be redirected back to the home page.