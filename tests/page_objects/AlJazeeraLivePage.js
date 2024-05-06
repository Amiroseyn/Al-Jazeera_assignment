const { I } = inject();

class HomePage {
  constructor() {
    this.elements = {
      switchPlayer: '//button[@id="liveStreamPlayerHelpButton"]' // Selector for the Switch Player button
    };
  }
}

module.exports = HomePage;
