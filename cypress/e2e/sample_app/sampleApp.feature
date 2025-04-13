Feature: Sample App Login

  Scenario: Successful login
    Given I open the sample app page
    When I enter username and password
    And I click the login button
    Then I should see a successful login message
