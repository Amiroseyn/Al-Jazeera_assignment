const { I } = inject();
const { Verify } = require('crypto');
const HomePage = require('../page_objects/AlJazeeraLivePage');


Feature('Al-Jazeera Live Player Test');

// Scenario 1: validate Player is visible in Livestream Player
Scenario('Validate Player is visible in Livestream Player', async () => {
  // Open Al-Jazeera live Player URL
  I.amOnPage('https://aljazeera.com/live');

  // Defining the player class in HTML
  const playerSelector = '.aj-video-player';

  // Wait for the player to be visible
  I.waitForVisible(playerSelector, 17);

  // Check if the player element is visible
  I.seeElement(playerSelector);
  I.seeElementInDOM(playerSelector); 
//   const isElementsVisible = playerSelector
  if (!playerSelector) {
    throw new Error('The Video Player is not visible on the page');
  }
}).tag('@amir');

// Scenario 2: validate Switch Player button is visible in Livestream Player
Scenario('Validate "Switch Player" button is visible in Livestream Player', async () => {
    // Open Al-Jazeera live Player URL
    I.amOnPage('https://aljazeera.com/live'); // This is not consistant with the other test ?????

    // Create an instance of HomePage
    const homePage = new HomePage()
  
    // Defining the player class in HTML
    // this might be useful:  <button id='liveStreamPlayerHelpButton'> .....  <span class="live-stream-player__player-issue"> ???
    const switchPlayer = homePage.elements.switchPlayer;
  
    // Wait for the player to be visible
    I.waitForVisible(switchPlayer, 17);
  
    // Check if the player element is visible
    I.seeElement(switchPlayer);
    I.seeElementInDOM(switchPlayer); // Do I need this ?????
    if (!switchPlayer) {
      throw new Error('The "Switch Player" button is not visible on the page');
    }
  }).tag('@amir');
