function Default() {
    this._dropdownSearchBox = $('.dropdown-search-box');
    this._dropdownSearchInput = $('.search-box > .form-control');
}

Default.prototype._searchBoxInputHandler = function (target) {
    var search_value = $(target).val();
    var list_result = this._dropdownSearchBox.find('.result');
    if (search_value.length > 1) {
        list_result.hide();
        list_result.filter(':contains("' + search_value + '")').show();
    } else {
        list_result.show();
    }
};

Default.prototype._bindEvents = function () {
    this._dropdownSearchInput.on('keyup', this, function (event) {
        Default.prototype._searchBoxInputHandler.apply(event.data, [this]);
    });
};

Default.prototype.apply = function () {
    if ($.fancybox !== undefined) {
        $.fancybox.defaults.loop = true;
    }
    this._bindEvents();
};