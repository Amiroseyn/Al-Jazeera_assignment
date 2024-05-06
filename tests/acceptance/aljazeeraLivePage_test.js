const { I } = inject();
const HomePage = require('../page_objects/AlJazeeraLivePage');

Feature('Al-Jazeera Live Player Test');

// Scenario 1: validate Player is visible in Livestream Player
Scenario('Verify Livestream Player is visible', async () => {
  try {
    I.amOnPage('https://aljazeera.com/live');
    const homePage = new HomePage();
    const playerSelector = homePage.elements.playerSelector;
  
    I.waitForVisible(playerSelector, 17);
    I.seeElement(playerSelector);
    I.seeElementInDOM(playerSelector); // Confirm element is in the DOM and visible
  } catch (error) {
    console.error('The Video Player is not visible on the page:', error);
    throw error; // Ensure test fails and error is reported
  }
}).tag('@live');

// Scenario 2: validate Switch Player button is visible in Livestream Player
Scenario('Verify Switch Player button is visible in Livestream Player', async () => {
  try {
    I.amOnPage('https://aljazeera.com/live');
    const homePage = new HomePage();
    const switchPlayer = homePage.elements.switchPlayer;
  
    I.waitForVisible(switchPlayer);
    I.seeElement(switchPlayer); // Asserts the visibility of the Switch Player button
  } catch (error) {
    console.error('The "Switch Player" button is not visible on the page:', error);
    throw error; // Ensure test fails and error is reported
  }
}).tag('@live');
