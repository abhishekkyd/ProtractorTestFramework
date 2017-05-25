module.exports = function () {

    //verify checkbox is checked
    this.isCheckboxChecked = function (element) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                    element.isSelected().then(function () {
                        return this;
                    });
                });
            });
        }
    };

    //verify radio button is selected
    this.isRadioButtonSelected = function (element) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(function () {
                element.isEnabled().then(function () {
                    element.isSelected().then(function () {
                        return this;
                    });
                });
            });
        }
    };
};
