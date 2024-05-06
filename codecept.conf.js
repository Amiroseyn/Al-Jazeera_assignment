const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/acceptance/*_test.js',
  output: "./reports",
  helpers: {
    WebDriver: {
      url: process.env.BASE_URL || 'https://aljazeera.com/',
      browser: 'chrome'
    }
  },
  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': {
      mobileEmulation: {
        deviceName: 'iPhone X' // Set your desired device here
      }
    }
  }],
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './reports/allure-results'
    }
  },
  include: {
    I: './tests/acceptance/steps_file.js',
    aljazeeraHomePage: './tests/acceptance/aljazeeraHomePage_test.js',
    aljazeeraLivePage: './tests/acceptance/aljazeeraLivePage_test.js'
  },
    bootstrap: null,
  mocha: {},
  name: 'Al-Jazeera_assignment'
}