const { I } = inject();
const locators = require('./locators');

class LivePage {
    constructor() {
        this.elements = locators;
    }

    async waitForPlayerVisible() {
        I.waitForVisible(this.elements.playerSelector);
    }

    async isPlayerVisible() {
        return  I.seeElement(this.elements.playerSelector);
    }

    async isAdVisible() {
        '.videoAdUi'; // return I.seeElement(this.elements.adSelector); would result in an error: Further investigation is needed
    }

    async clickSkipAdButton() {
        I.click(this.elements.skipAdButtonSelector);
    }

    async waitForSwitchPlayerButtonVisible() {
        I.waitForVisible(this.elements.switchPlayer);
    }

    async isSwitchPlayerButtonVisible() {
        return I.seeElement(this.elements.switchPlayer);
    }
    
    async skipAdIfVisible() {
    const adVisible = this.isAdVisible();
    if (adVisible) {
      I.wait(6);
      const adStillVisible = await this.isAdVisible();
      if (adStillVisible) {
        this.clickSkipAdButton();
        I.wait(2);
      }
    }
  }
    
}

module.exports = LivePage;
