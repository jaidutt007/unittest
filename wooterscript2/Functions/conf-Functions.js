var JasmineConsoleReporter = require('jasmine-console-reporter');

var confFunctions = function()
{
  this.ConsoleReporter = new JasmineConsoleReporter
  ({
		colors: 1,           // (0|false)|(1|true)|2
		cleanStack: 1,       // (0|false)|(1|true)|2|3
		verbosity: 4,        // (0|false)|1|2|(3|true)|4
		listStyle: 'indent', // "flat"|"indent"
		activity: false
	});

	this.addScreenShots = new function ()
  {
		this.specDone = function (result) {
			if (result.status === "failed") {
				browser.takeScreenshot().then(function (png) {
					allure.createAttachment('Screenshot', function () {
						return new Buffer(png, 'base64')
					}, 'image/png')();
				})
			}
		};
	};
};
module.exports = confFunctions;
