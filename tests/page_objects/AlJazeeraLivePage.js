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

    async waitForAdVisible() {
        I.waitForVisible(this.elements.adSelector);
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
}

module.exports = LivePage;
