Feature: Verify Dynamic Table

  Scenario: Find CPU Usage for Chrome
    Given I open the dynamic table page
    When I find Chrome's CPU value
    Then I should see a valid CPU value displayed
