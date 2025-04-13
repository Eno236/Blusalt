Feature: File Upload

  Scenario: Upload a file successfully
    Given I open the file upload page
    When I upload a file
    Then I should see the uploaded file name
