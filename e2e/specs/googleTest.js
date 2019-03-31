describe('Google Search Tests execution on' + browser.browserName, function () {

    'use strict';

    var testData = require('../resources/testData.json');

    var searchPage = new pages.searchPage();
    var searchResultPage = new pages.searchResultPage();

    it('Open Google Search page', function () {
        searchPage.openSearchPage(testData.search.baseUrl);
        searchPage.isPageLoaded();
        expect(browser.getCurrentUrl()).toContain(testData.search.baseUrl);
    });

    it('search Abhishek Yadav QA', function () {
        searchPage.enterSearchKeyword(testData.keywords.keyword1).search();
        searchResultPage.isPageLoaded();
        expect(browser.getCurrentUrl()).toContain(testData.keywords.keyword1.replace(new RegExp(" ", 'g'), "+"));
    });

    it('search Hello Selenium', function () {
        searchPage.enterSearchKeyword(testData.keywords.keyword2).search();
        searchResultPage.isPageLoaded("1");
        expect(browser.getCurrentUrl()).toContain(testData.keywords.keyword2.replace(new RegExp(" ", 'g'), "+"));
    });

    it('Open Hello Selenium Result Page', function () {
        searchResultPage.openSearchResultLink();
        expect(browser.getCurrentUrl()).toContain(testData.results.result1);
    });
});
