const { I } = inject();
const { assert, error } = require('console');
const HomePage = require('../page_objects/AlJazeeraHomePage');

Feature("Testing Al-Jazeera home page's most popular section");

// Scenario 1: on Desktop make sure the "Most Popular" section is appearing.
Scenario('Verify "Most Popular" section is visible', async () => {
  try {
    I.amOnPage('/');
    const homePage = new HomePage();
    homePage.isMostPopularVisible();
  } catch (error) {
    console.error("Failed to verify visibility of the Most Popular section on Desktop:", error);
    throw error;
  }
}).tag('@desktop');

// Scenario 2: on Desktop make sure the "Most Popular" section has 10 posts.
Scenario('Verify the number of <li> items in <ol> element', async () => {
  try {
    I.amOnPage('/');
    const homePage = new HomePage();
    await homePage.waitForMostPopularVisible();
    const liCount = await I.grabNumberOfVisibleElements(`${homePage.elements.mostPopular} > li`);
    if (liCount !== 10) {
      throw new Error(`Expected 10 <li> items but found ${liCount}`);
    }
  } catch (error) {
    console.error("Failed to verify the correct number of posts in the Most Popular section:", error);
    throw error;
  }
}).tag('@desktop');

// Scenario 3: on Mobile make sure that the "Most Popular" section is not appearing.
Scenario('Verify "Most Popular" section is NOT visible on Mobile', async () => {
  try {
    I.resizeWindow(375, 812); // iPhone X viewport size
    I.amOnPage('/');
    const homePage = new HomePage();
    homePage.noMostPopularMobile();
  } catch (error) {
    console.error("Error occurred in verifying the visibility of the Most Popular section on Mobile:", error);
    throw error;
  }
}).tag('@mobile');

// Scenario 4: on Desktop verify bypass block menu item for "Most Read" is working (accessibility)
Scenario('Verify "Skip to Most Read" functionality', async () => {
  try {
    I.amOnPage('/');
    const homePage = new HomePage();
    homePage.waitForBypassMenuVisible();
    homePage.clickEmptySpaceLeftOfLogo();
    homePage.skipToMostRead();
    homePage.waitForMostPopularVisible();
    const currentUrl = await I.grabCurrentUrl();
    I.seeInCurrentUrl('#most-read-container');
  } catch (error) {
    console.error("Failed to verify the 'Skip to Most Read' functionality:", error);
    throw error;
  }
}).tag('@desktop');
