Feature: Check available places

Background: 
Given the user is on the website's home page
And  User selects "Sample Movie" and show time and then clicks continue

Scenario: The user selects a "Sample Movie" and a movie showtime.
Then The user selects the "ticket type" and "number of tickets" and clicks on the continue button.
And  The user clicks on a button labeled "Available Seats" or similar.
Then The system displays the available empty seats for the selected showtime.
And  The user checks the availability of empty seats and identifies seats of interest.

Scenario: The user selects a "Sample Movie" and showtime, but all seats are occupied.
Then The user selects the "ticket type" and "number of tickets" and clicks on the continue button.
And  The user clicks on a button labeled "Available Seats" or similar.
Then The system notifies that all seats are occupied.
And  The user may choose to check another showtime or a different movie for available seats.
