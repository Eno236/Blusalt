Feature: Test Client Side Delay Page

  Scenario: User waits for client side delay and verifies message
    Given I open the client side delay page
    When I click the button to load the message
    Then I should see the message displayed
