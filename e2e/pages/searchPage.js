module.exports = function () {
    'use strict';
    // Login page
    var objRepo = require('../resources/objectRepository.json');

    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();

    var googleLogo = objLocator.findLocator(objRepo.searchPage.googleLogo);
    var searchInput = objLocator.findLocator(objRepo.searchPage.searchInput);
    var searchButton = objLocator.findLocator(objRepo.searchPage.searchButton);

    this.openSearchPage = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path);
        return this;
    };

    this.enterSearchKeyword = function (value) {
        inputBoxActions.type(searchInput, value);
        return this;
    };

    this.search = function () {
        buttonActions.click(searchButton);
        return this;
    };

    this.isPageLoaded = function () {
        waitActions.waitForElementIsDisplayed(googleLogo);
        return this;
    };
};