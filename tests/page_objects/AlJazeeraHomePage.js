const { I } = inject();
const locators = require('./locators');

class HomePage {
  constructor() {
    this.elements = locators; 
  }

  async isMostPopularVisible() {
    const visibleElements = await I.grabNumberOfVisibleElements(this.elements.mostPopular);
    return visibleElements > 0;
  }

  async waitForMostPopularVisible() {
    I.waitForElement(this.elements.mostPopular, 30);
  }

  async noMostPopularMobile() {
    try {
      I.dontSeeElement(this.elements.mostPopular);
      return true;
    } catch (error) {
      return false;
    }
  }

  async waitForBypassMenuVisible() {
    I.waitForVisible(this.elements.bypassBlocksMenu, 30);
    }

  async clickEmptySpaceLeftOfLogo() {
    I.click(this.elements.logo); 
  }

  async skipToMostRead() {
    this.openBypassBlocksMenu();
    I.click(this.elements.skipToMostReadLink);
  }

  async openBypassBlocksMenu() {
    I.pressKey(['Tab']); 
  }
}

module.exports = HomePage;
