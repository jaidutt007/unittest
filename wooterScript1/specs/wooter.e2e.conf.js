// An example configuration file.
exports.config = {
  // directConnect: true,
  baseUrl: "https://wooter.co",

  seleniumAddress: "http://localhost:4444/wd/hub",
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['signUp.spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  onPrepare: function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
    browser.driver.manage().window().maximize();
    browser.ignoreSynchronization = true;
    browser.get("https://wooter.co");
    },

};
