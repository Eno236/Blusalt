Feature: Interact with Shadow DOM

  Scenario: Verify Shadow DOM content
    Given I open the shadow dom page
    When I access the shadow dom element
    Then I should verify its text
