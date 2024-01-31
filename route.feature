  Testing Unique URL/Route
  As a visitor i want to be able to share site information with the
  unique url for each and every page on the website.

  Scenario: Unique URL for Each Page
    Given the user is exploring various pages on the website
    When they navigate to different sections like home, about us, or contact
    Then each section should be represented by a unique and descriptive URL

  Scenario: Bookmark Reliability for Specific Pages
    Given a user has previously bookmarked a certain page on the website
    When they access the website later using this bookmark
    Then they should be directly taken to the correct page, with the content and layout preserved as during the initial visit

  Scenario: Accurate URL Updates on Page Navigation
    Given the user is actively navigating through the site
    When they move from one page to another
    Then the URL should update seamlessly to reflect the new page, ensuring accuracy and efficiency
