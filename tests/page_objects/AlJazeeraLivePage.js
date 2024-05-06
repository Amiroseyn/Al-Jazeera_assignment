const { I } = inject();

class HomePage {
  constructor() {
    this.elements = {
      playerSelector: '.aj-video-player', // Selector for the video player
      switchPlayer: '//button[@id="liveStreamPlayerHelpButton"]' // Selector for the Switch Player button
    };
  }
}

module.exports = HomePage;
