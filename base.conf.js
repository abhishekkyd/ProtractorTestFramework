module.exports = {
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  allScriptsTimeout: 120000,
  getPageTimeout: 180000,
  maxSessions: 1,

  baseUrl: 'https://www.helloselenium.com',

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    onComplete: null,
    // If true, display spec names.
    isVerbose: false,
    // If true, print colors to the terminal.
    showColors: true,
    // If true, include stack traces in failures.
    includeStackTrace: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 120000
  }
};
