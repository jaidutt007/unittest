var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config =
{
	useAllAngular2AppRoots: true,
	// seleniumAddress: 'http://localhost:4444/wd/hub',
	directConnect: true,
	allScriptsTimeout: 60000,
	maxSessions: 1,
	multiCapabilities:
	[
		{
			browserName: "chrome"
		}/*,
		{
			browserName: "firefox"
		},
		{
			browserName: "internet explorer"
		}*/
	],
	onPrepare: function ()
	{
		global.common = require('../Conf/common.json');
		global.object = require('../TestData/Objects.json');
		global.genericfunctions = new(require('../Functions/generic-Functions'))();
		global.testData = require('../TestData/TestData.json');
		global.helperfunctions =  new(require('../Functions/helper-Functions'))();
		this.cf = new (require('../Functions/conf-Functions'))();
		// Override the timeout for webdriver.
		browser.driver.manage().timeouts().implicitlyWait(60000);
		browser.driver.manage().window().maximize();
		//jasmine.getEnv().addReporter(this.cf.addScreenShots);
		jasmine.getEnv().addReporter(this.cf.ConsoleReporter);
		jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'TestReport',
				takeScreenshots: true,
				takeScreenshotsOnlyOnFailures: true
      })
    );
	},
	framework: 'jasmine2',
	suites:
	{
		all: ['../TestSpecs/*.js']
	},
	jasmineNodeOpts:
	{
		defaultTimeoutInterval: 500000
	}
};
