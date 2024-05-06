Feature: Testing Most Read section on Al Jazeera homepage

  Scenario: Verify "Most Read" section appears on desktop
    Given I navigate to the Al Jazeera homepage
    When I view the webpage on a desktop device
    Then I should see the "Most Read" section displayed

  Scenario: Verify "Most Read" section has 10 posts on desktop
    Given I navigate to the Al Jazeera homepage
    When I view the "Most Read" section on a desktop device
    Then I should see exactly 10 posts in the "Most Read" section

  Scenario: Verify "Most Read" section does not appear on mobile
    Given I navigate to the Al Jazeera homepage
    When I view the webpage on a mobile device
    Then I should not see the "Most Read" section displayed

  Scenario: Verify bypass block menu for "Most Read" is working on desktop
    Given I navigate to the Al Jazeera homepage
    When I activate the bypass block menu and select "Skip to Most Read"
    Then the URL should include "/#most-read-container" indicating navigation to "Most Read" section
