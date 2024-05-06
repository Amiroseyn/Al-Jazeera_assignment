Feature: Testing Livestream Player on Al Jazeera Homepage

  Scenario: Verify Livestream Player is visible
    Given I navigate to the Al Jazeera homepage
    When I view the Livestream Player
    Then I should see the Livestream Player displayed

  Scenario: Verify Switch Player button is visible in Livestream Player
    Given I navigate to the Al Jazeera homepage
    When I view the Livestream Player
    Then I should see the Switch Player button in the Livestream Player
