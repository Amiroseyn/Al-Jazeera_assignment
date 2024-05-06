Feature: Testing Most Popular section on Al Jazeera homepage

  Scenario: Verify "Most Popular" section appears on desktop
    Given I navigate to the Al Jazeera homepage
    When I view the webpage on a desktop device
    Then I should see the "Most Popular" section displayed

  Scenario: Verify "Most Popular" section has 10 posts on desktop
    Given I navigate to the Al Jazeera homepage
    When I view the "Most Popular" section on a desktop device
    Then I should see exactly 10 posts in the "Most Popular" section

  Scenario: Verify "Most Popular" section does not appear on mobile
    Given I navigate to the Al Jazeera homepage
    When I view the webpage on a mobile device
    Then I should not see the "Most Popular" section displayed

  Scenario: Verify bypass block menu for "Most Popular" is working on desktop
    Given I navigate to the Al Jazeera homepage
    When I activate the bypass block menu and select "Skip to Most Popular"
    Then the URL should include "/#most-read-container" indicating navigation to "Most Popular" section
