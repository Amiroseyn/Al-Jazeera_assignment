const { I } = inject();
const locators = require('./locators');

class LivePage {
  constructor() {
    this.elements = locators; 
  }
}

module.exports = LivePage;
