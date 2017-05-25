var config = require('../base.conf.js');
var htmlScreenshotReport = require('protractor-jasmine2-screenshot-reporter');
var htmlReporter = require('protractor-jasmine2-html-reporter');
var reporter = require('jasmine-reporters');

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

    // Configure html reporter for failures
    return browser.getCapabilities().then(function (cap) {
        jasmine.getEnv().addReporter(new htmlReporter({
                savePath: 'reports/' + cap.get('browserName') + '/',
                reportTitle: "Test Results",
                filePrefix: 'report'
            })
        );
    });
};

module.exports = config;