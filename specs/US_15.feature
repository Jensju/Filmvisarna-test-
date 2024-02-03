
Feature: Cancel a booking 
As a user, I want to be able to cancel a future booking so that I don't take up space for someone else.


  Background: 
    Given The user is on the website home page
    

  Scenario: Navigate to "Mina bokningar" web page after logging in

    Then The user clicks to symbolized button at the right top side of website
    Then The user clicks to "Logga in" button 
    Then The user clicks in "E-post" box and write the "E-post"
    And The user clicks in "Lösenord" box and write the "Lösenord"
    And The user logs in with the "e-mail" adress and "password".
    Given The user clicks to "Logga In" button
    And The user clicks to "Bokningar" link under upper right link/box
    When The user can see the booking history under "Bokningsdetaljer"
    Given The user clicks to "Avboka" button


  Scenario: Navigate Back to Home Page
    Then the user click on the "Back" button 2 times to redirect to home page.
    Then the user should be redirected back to the home page.