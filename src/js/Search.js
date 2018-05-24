function Search() {
    this._multiSelect = $('select[multiple]');
}

Search.prototype._applyPlugins = function () {
    this._multiSelect.multiselect({
        dropRight: true,
        buttonClass: 'form-control',
        buttonContainer: '<div class="custom-multiselect-group" />',
        includeSelectAllOption: true,
        selectAllText: 'Выбрать все',
        nonSelectedText: 'Выберите хотя бы один из пунктов',
        buttonText: function(options, select) {
            if (options.length === 0) {
                return 'Не выбран ни один пункт ...';
            } else {
                var labels = [];
                options.each(function () {
                    if ($(this).attr('label') !== undefined) {
                        labels.push($(this).attr('label'));
                    }
                    else {
                        labels.push($(this).html());
                    }
                });
                return labels.join(', ') + '';
            }
        },
        templates: {
            li: '<li class="dropdown-item"><a href="javascript:void(0);"><label></label></a></li>',
        }
    });
};

Search.prototype.apply = function () {
    this._applyPlugins();
};