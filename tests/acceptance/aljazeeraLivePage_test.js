const { I } = inject();
const { expect } = require('chai');
const LivePage = require('../page_objects/AlJazeeraLivePage');

Feature('Al-Jazeera Live Player Test');

// Scenario 1: validate Player is visible in Livestream Player
Scenario('Verify Livestream Player is visible', async () => {
    try {
      I.amOnPage('/live');
      const livePage = new LivePage();
      const result = await livePage.isPlayerVisible();

      expect(result).to.be.true;
    
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
  
    await livePage.waitForSwitchPlayerButtonVisible();
    const result = await livePage.isSwitchPlayerButtonVisible();

    expect(result).to.be.true;
  } catch (error) {
    console.error('The "Switch Player" button is not visible on the page:', error);
    throw error;
  }
}).tag('@live');
