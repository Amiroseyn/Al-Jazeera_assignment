const { I } = inject();
const locators = require('./locators');

class HomePage {
  constructor() {
    this.elements = locators; 
  }
}

module.exports = HomePage;
