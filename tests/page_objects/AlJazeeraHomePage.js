const { I } = inject();
const locators = require('./locators');

class HomePage {
  constructor() {
    this.elements = locators; 
  }

  async isMostPopularVisible() {
    I.seeElement(this.elements.mostPopular);
  }

  async waitForMostPopularVisible() {
    I.waitForElement(this.elements.mostPopular);
  }

  async noMostPopularMobile() {
  I.dontSeeElement(this.elements.mostPopular);
  }

  async waitForBypassMenuVisible() {
    I.waitForVisible(this.elements.bypassBlocksMenu);
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
