'use strict';

// const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

module.exports.config = {
  framework: 'jasmine2',

  seleniumAddress: 'http://localhost:4444/wd/hub',

  // highlightDelay: 300,

  specs: ['spec.js'],

  multiCapabilities: [
    {
      browserName: 'chrome'
    }
  ],

  onPrepare() {
    browser.driver.manage().window().setSize(1400, 900);
    browser.driver.manage().window().maximize();

    //   jasmine.getEnv().addReporter(new SpecReporter({
    //     displayFailuresSummary: true,
    //     displayFailedSpec: true,
    //     displayPendingSpec: true,
    //     displaySuiteNumber: true,
    //     displaySpecDuration: true,
    //     colors: {
    //       success: 'green',
    //       failure: 'red',
    //       pending: 'yellow'
    //     },
    //     prefixes: {
    //       success: '✓ ',
    //       failure: '✗ ',
    //       pending: '* '
    //     }
    //   }));
    // },

    jasmineNodeOpts: {
      onComplete: null,
        isVerbose: true,
          showColors: true,
            includeStackTrace: true,
              defaultTimeoutInterval: 30000, // wait time in ms before test fails
                print: function () { } // to print Jasmine results
    },

    params: {
      baseUrl: 'https://wooter.co/',

        user: {
        email: 'jaityagi2k8@gmail.com',
          password: '123456'
      }
    }
  };
