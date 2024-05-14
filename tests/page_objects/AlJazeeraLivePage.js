const { I } = inject();
const locators = require('./locators');

class LivePage {
    constructor() {
        this.elements = locators;
    }

    async waitForPlayerVisible() {
        return I.waitForVisible(this.elements.playerSelector);
    }

    async isPlayerVisible() {
        // return I.seeElement(this.elements.playerSelector);
        const visibleElements = await I.grabNumberOfVisibleElements(this.elements.playerSelector);
        return visibleElements > 0;
    }

    async isAdVisible() {
        return I.waitForElement(this.elements.adSelector); 
    }

    async clickSkipAdButton() {
        return I.click(this.elements.skipAdButtonSelector);
    }

    async waitForSwitchPlayerButtonVisible() {
        return I.waitForVisible(this.elements.switchPlayer);
    }

    async isSwitchPlayerButtonVisible() {
        const visibleElements = await I.grabNumberOfVisibleElements(this.elements.playerSelector);
        return visibleElements > 0;
    }
    
    async skipAdIfVisible() {
        try {
            await I.waitForElement(this.elements.adSelector);
            await I.waitForElement(this.elements.skipAdButtonSelector);
            this.clickSkipAdButton();
        } catch (e) {
        } 
  }
    
}

module.exports = LivePage;
