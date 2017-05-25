module.exports = function () {
    'use strict';
    // Login page
    var objRepo = require('../resources/objectRepository.json');

    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();

    this.openSearchResultLink = function (value) {
        var result = objLocator.findLocator(objRepo.searchPage.result, value);
        buttonActions.click(result);
        return this;
    };

    this.isPageLoaded = function (value) {
        var result = objLocator.findLocator(objRepo.searchPage.result, value);
        waitActions.waitForElementIsDisplayed(result);
        return this;
    };
};