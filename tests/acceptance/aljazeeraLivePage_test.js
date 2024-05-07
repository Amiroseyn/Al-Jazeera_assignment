const { I } = inject();
const LivePage = require('../page_objects/AlJazeeraLivePage');

Feature('Al-Jazeera Live Player Test');

// Scenario 1: validate Player is visible in Livestream Player
Scenario('Verify Livestream Player is visible', async () => {
    try {
      I.amOnPage('/live');
      const livePage = new LivePage();
      const playerSelector = livePage.elements.playerSelector;
      const adVisible = await I.grabNumberOfVisibleElements(livePage.elements.adSelector) > 0;

      if (adVisible) {
        I.wait(6);
        const adStillVisible = await I.grabNumberOfVisibleElements(livePage.elements.adSelector) > 0;
        if (adStillVisible) {
          I.click(livePage.elements.skipAdButtonSelector);
        I.wait(2);
        }
      }

      I.waitForVisible(playerSelector);
      I.seeElement(playerSelector);

    } catch (error) {
      console.error('Error occurred during Livestream Player verification:', error);
      throw error;
    }
  }).tag('@live');

// Scenario 2: validate Switch Player button is visible in Livestream Player
Scenario('Verify Switch Player button is visible in Livestream Player', async () => {
  try {
    I.amOnPage('/live');
    const livePage = new LivePage();
    const switchPlayer = livePage.elements.switchPlayer;
  
    I.waitForVisible(switchPlayer);
    I.seeElement(switchPlayer); // Asserts the visibility of the Switch Player button
  } catch (error) {
    console.error('The "Switch Player" button is not visible on the page:', error);
    throw error;
  }
}).tag('@live');
