const { I } = inject();

class HomePage {
  constructor() {
    this.elements = {
      logo: "//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]", // Selector for the website header
      skipToMostReadLink: 'a[href="#most-read-container"]', // Selector for the "Skip to Most Read" link
      bypassBlocksMenu: '.bypass-block-links-container', // Selector for the bypass blocks menu
      mostPopular:  '.trending-articles__list' // CSS selector for Most Popular section
    };
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
