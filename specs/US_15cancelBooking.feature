
Feature: Cancel a booking 
As a user, I want to be able to cancel a future booking so that I don't take up space for someone else.


  Background: 
    Given the user is at the start page
    

  Scenario: Navigate to "Mina bokningar" web page after logging in

    Then the user clicks to symbolized button at the right top side of website
    Then the user clicks to the "Logga in" button 
    And the user logs in with the "email" adress and "password"
    Given the user clicks to "Logga In" button
    Given the user can click to "Avboka" button
    Then the user can click to "Avboka" button in the next process for canceling booking


  Scenario: Navigate Back to Home Page
    Then the user should be redirected back to home page.