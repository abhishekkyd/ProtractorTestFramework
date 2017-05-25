module.exports = function () {

    //wait till specified time
    this.wait = function (value) {
        browser.sleep(value | 2000);
    };

    //wait for element is displayed
    this.waitForElementIsDisplayed = function (element) {
        if (typeof element !== 'undefined') {
            browser.wait(function () {
                return element.isDisplayed();
            }, waitTimeout | 60000);
        }
    };

    //wait for element is not present
    this.waitForElementIsNotDisplayed = function (element) {
        if (typeof element !== 'undefined') {
            browser.wait(function () {
                return !element.isDisplayed();
            }, waitTimeout | 60000);
        }
    };
};
