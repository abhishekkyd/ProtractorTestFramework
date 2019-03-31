var config = require('../base.conf.js');
var jasmineReporters = require('jasmine-reporters');
var htmlReporter = require('protractor-html-reporter-2');
var fs = require('fs-extra');

waitTimeout = 120000;

config.specs = [
    'global.js',
    'specs/googleTest.js',
];

config.onPrepare = function () {
	browser.getCapabilities().then(function (cap) {
		browser.browserName = cap.get('browserName');
		console.log('browserName:', browser.browserName);
	});
	// Default window size
	browser.driver.manage().window().maximize();
	// Default implicit wait
	browser.manage().timeouts().implicitlyWait(60000);
	// Angular sync for non angular apps
	browser.ignoreSynchronization = true;

	fs.emptyDir('./reports/xml/', function (err) {
		//console.log(err);
	});
	
	browser.getCapabilities().then(function (cap) {
		fs.emptyDir('./reports/' + cap.get('browserName') + '/screenshots', function (err) {
			//console.log(err);
		});
	});

	jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
		consolidateAll: true,
		savePath: './reports/xml/',
		filePrefix: 'xmlresults'
	}));

	jasmine.getEnv().addReporter({
		specDone: function (result) {
			browser.getCapabilities().then(function (caps) {
				var browserName = caps.get('browserName');

				browser.takeScreenshot().then(function (png) {
					var stream = fs.createWriteStream('./reports/' + browserName + '/screenshots/' + browserName + '-' + result.fullName + '.png');
					stream.write(new Buffer(png, 'base64'));
					stream.end();
				});
			});
		}
	});
};

config.onComplete = function () {
	var browserName, browserVersion;
	var capsPromise = browser.getCapabilities();

	capsPromise.then(function (caps) {
		browserName = caps.get('browserName');
		browserVersion = caps.get('version');
		platform = caps.get('platform');

		testConfig = {
			reportTitle: 'Protractor Test Execution Report',
			outputPath: './reports/',
			outputFilename: 'ProtractorTestReport',
			screenshotPath: browserName + '/screenshots',
			testBrowser: browserName,
			browserVersion: browserVersion,
			modifiedSuiteName: false,
			screenshotsOnlyOnFailure: false,
			testPlatform: platform
		};
		new htmlReporter().from('./reports/xml/xmlresults.xml', testConfig);
	});
};

module.exports = config;