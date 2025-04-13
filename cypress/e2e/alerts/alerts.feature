Feature: Handle Browser Alerts

  Scenario: Verify alert is shown
    Given I open the alerts page
    When I click the alert button
    Then I should see an alert message
