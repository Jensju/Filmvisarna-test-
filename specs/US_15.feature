
Feature: Cancel a booking 
As a user, I want to be able to cancel a future booking so that I don't take up space for someone else.
   
    
  Scenario: Navigate to "Mina bokningar" web page after logging in
    Given the user is on the home page
    When the user clicks to symbolized button at the right top side of website
    And the user clicks sign in button 
    And the user logs in with the "email" adress and "password"
    And the user clicks submit button "Logga in"
    And the user can click to cancel button
    Then the user can click to "Avboka" button in the next process for canceling booking


