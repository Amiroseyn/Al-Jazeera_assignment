const { I } = inject();
const { Verify } = require('crypto');
const HomePage = require('../page_objects/AlJazeeraHomePage');


Feature("Testing Al-Jazeera home page's most read section");

//Scenario 1: on Desktop make sure the "Most Read" section is appearing.
Scenario('Verify "Most Read" section is visible', async () => {

  // Navigate to the homepage
  I.amOnPage('/');

  // Create an instance of HomePage
  const homePage = new HomePage();

  // Wait for the most read section to appear
  const areElementsVisible = I.seeElement(homePage.elements.mostPopular);
  if (!areElementsVisible) {
    throw new Error('No elements with class "trending-articles" are visible');
  }
}).tag('@desktop');

//Scenario 2: on Desktop make sure the "Most Popular" section has 10 posts.
Scenario('Verify the number of <li> items in <ol> element', async () => {
  // Navigate to the webpage
  I.amOnPage('/');

  // Wait for the <ol> element with class 'trending-articles__list' to appear
  const olSelector = '.trending-articles__list';
 I.waitForElement(olSelector);

  // Count the number of <li> items within the <ol> element
  const liCount = await I.grabNumberOfVisibleElements(`${olSelector} > li`);

  // Assert that the number of <li> items is exactly 10
  const expectedLiCount = 10;
  if (liCount !== expectedLiCount) {
    throw new Error(`Expected ${expectedLiCount} <li> items but found ${liCount}`);
  }
}).tag('@desktop');

// // Scenario 3: on Mobile make sure that the "Most Popular" section is not appearing.
// Scenario('Verify "Most Popular" section is NOT visible on Mobile', async () => {
//   // Set viewport size to emulate a mobile device
//   mobile({
//     device: 'iPhone X', // Specify a mobile device (e.g., iPhone X)
//     orientation: 'portrait', // Set orientation (portrait or landscape)
//   });

//   // Navigate to the homepage
//   I.amOnPage('/');

//   // Create an instance of HomePage
//   const homePage = new HomePage();

//   // Check if the "Most Popular" section is NOT visible
//   const areElementsVisible = await I.seeElement(homePage.elements.mostPopular, { timeout: 5000, state: 'hidden' });
//   if (areElementsVisible) {
//     throw new Error('The "Most Popular" section should not be visible on mobile');
//   }
// }).tag('@mobile');

Scenario('Verify "Most Popular" section is NOT visible on Mobile', (I) => {
  // Set viewport size to emulate a mobile device (e.g., iPhone X)
  const mobileViewport = { width: 375, height: 812 }; // iPhone X viewport size
  I.resizeWindow(mobileViewport.width, mobileViewport.height);

  // Navigate to the webpage
  I.amOnPage('/');

  // Check if the "Most Popular" section is NOT visible
  const isElementVisible = I.seeElement('.trending-articles', { state: 'hidden' });
  if (isElementVisible) {
    throw new Error('The "Most Popular" section should not be visible on mobile');
  }
}).tag('@mobile');


//Scenario 4: on Desktop make sure bypass block menu item for "Most Read" is working (accessibility)
Scenario('Verify "Skip to Most Read" functionality', async () => {

  // Navigate to the homepage
  I.amOnPage('/');

  // Create an instance of HomePage
  const homePage = new HomePage();

  // Wait for the bypass blocks menu to appear
  I.waitForVisible(homePage.elements.bypassBlocksMenu)

  // Click on the empty space left of the logo to activate the bypass blocks menu
  homePage.clickEmptySpaceLeftOfLogo();

  // Trigger "Skip to Most Read" functionality
  homePage.skipToMostRead();

  // NOT SURE IF THIS IS NECESSARY to check the auto scroll ??????
  // Wait for 'Most Popular' section appears after auto scroll
  I.waitForVisible(homePage.elements.mostPopular, 5);

  const currentUrl = await I.grabCurrentUrl();
  if (!currentUrl.includes('#most-read-container')) {
    throw new Error('URL should contain "#most-read-container"');
  }
}).tag('@desktop');
