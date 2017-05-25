module.exports = function () {

    //select a value from dropdown
    this.select = function (element, value) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                    if (typeof value !== 'undefined') {
                        element.$('[label="' + value + '"]').click();
                    }
                    return this;
                });
            });
        }
    };
};