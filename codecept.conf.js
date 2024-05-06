const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/acceptance/*_test.js',
  output: "./reports",
  helpers: {
    WebDriver: {
      url: 'https://aljazeera.com/',
      browser: 'chrome'
    }
  },
  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': {
      mobileEmulation: {
        deviceName: 'iPhone X'
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