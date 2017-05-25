module.exports = function () {

    //mouse move on a element
    this.mouseMove = function (element) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                browser.actions().mouseMove(element).perform();
                return this;
            });
        }
    };

    //mouse up on a element
    this.mouseUp = function (element) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                browser.actions().mouseUp(element).perform();
                return this;
            });
        }
    };

    //mouse down on a element
    this.mouseDown = function (element) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                browser.actions().mouseDown(element).perform();
                return this;
            });
        }
    };
};
