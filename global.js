(function() {
  'use strict';

  // Helper functions
  global.clearWithBackspace = function(elementFinder) {
    return elementFinder.getAttribute('value').then(function(value) {
      var backspaces = '',
          length = value.length;
      for (var i = 0; i < length; i++) {
        backspaces += protractor.Key.BACK_SPACE;
      }
      return elementFinder.sendKeys(backspaces);
    });
  };

  /**
   * Provides a place to put common beforeEach functionality.
   */
  global.setUp = function() {
    // Add our custom jasmine matchers
    jasmine.getEnv().currentSpec.addMatchers(matchers.getCustomMatchers());

    // Reset any excluded test-specific console errors.
    global.consoleErrorHandler.resetExcluded();

    // Close any hanging dialogs before running tests
    sdk.closeDialogs();
  };

  /**
   * Provides a place to put common afterEach functionality.
   */
  global.tearDown = function() {
    // Check console.log for errors
    global.consoleErrorHandler.expectNoConsoleErrors();

    // Check for hanging dialogs
    sdk.expectNoDialogs();
  };

  function displayed(elementFinder, optionalTimeout, isDisplayed) {
    browser.driver.wait(function () {
      return elementFinder.isDisplayed().then(function (result) {
        return result === isDisplayed;
      });
    }, optionalTimeout || 60000);
  }

  function present(elementFinder, optionalTimeout, isPresent) {
    browser.driver.wait(function () {
      return elementFinder.isPresent().then(function (result) {
        return result === isPresent;
      });
    }, optionalTimeout || 60000);
  }
  
  global.wait = {
    until: {
      not: {
        present: function (elementFinder, optionalTimeout) {
          return present(elementFinder, optionalTimeout, false);
        }
      },

      displayed: function (elementFinder, optionalTimeout) {
        return displayed(elementFinder, optionalTimeout, true);
      },

      present: function (elementFinder, optionalTimeout) {
        return present(elementFinder, optionalTimeout, true);
      }
    }
  };
}());
