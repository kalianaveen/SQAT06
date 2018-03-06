Feature: Test Figure1 signup
  In order to test
  As a developer
  I want to write automated test cases

    Scenario: Invalid signup
    Given I go to figure1 website for invalid signup
    When I type Username invalid signup
    Then I should see invalid signup result

    Scenario: Valid signup
    Given I go to figure1 website for valid signup
    When I type Username valid signup
    Then I should see result valid signup

    Scenario: Login to confirm signup
    Given I go to figure1 website to confirm signup
    When I type email address and password
    Then I should see account confirmation page