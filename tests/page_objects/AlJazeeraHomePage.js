const { I } = inject();
const locators = require('./locators');

class HomePage {
  constructor() {
    this.elements = locators; 
  }

  // Method to click on the empty space left of the logo
  clickEmptySpaceLeftOfLogo() {
    I.click(this.elements.logo); // Click on the logo to activate the empty space
  }

  // Method to click on "Skip to Most Read" link in the bypass blocks menu
  skipToMostRead() {
    this.openBypassBlocksMenu();
    I.click(this.elements.skipToMostReadLink);
  }

  // Method to open the bypass blocks menu by tab navigation
  openBypassBlocksMenu() {
    I.pressKey(['Tab']); // Navigate backwards to trigger bypass blocks menu
  }
}

module.exports = HomePage;
