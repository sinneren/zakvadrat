function Search() {
    this._multiSelect       = $('select[multiple]');
    this._search            = $('#search');
    this._filterContainers  = $('[data-container]');
    this._filterDealControl = $('[data-control="type_deal"]');
    this._filterTypeControl = $('[data-control="type_realty"]');
    this._filterLabelSquare = $('[data-label="square"]');
    this._dropdownPrice     = $('#dropdownPrice');
}
Search.prototype._filterControlHandler = function () {
    var trigger_type_name = this._filterTypeControl.find(':selected').data('trigger');
    var trigger_deal_name = this._filterDealControl.find(':selected').data('trigger');
    var hidden_class_name = 'd-none';
    var filter_matrix = {
        apartment: {
            sell: ['type_object', 'rooms', 'floors', 'type_building'],
            rent: ['type_rent', 'rooms', 'floors', 'type_building'],
            exc:  ['type_object', 'rooms', 'floors', 'type_building']
        },
        room: {
            sell: ['rooms', 'floors', 'type_building'],
            rent: ['type_rent', 'rooms', 'floors', 'type_building'],
            exc:  ['rooms', 'floors', 'type_building']
        },
        house: {
            sell: ['type_object', 'city_distance'],
            rent: ['type_object', 'city_distance', 'type_rent'],
            exc:  ['type_object', 'city_distance']
        },
        land: {
            sell: ['type_land', 'city_distance'],
            rent: ['type_land', 'city_distance'],
            exc:  ['type_land', 'city_distance']
        },
        garage: {
            sell: ['type_object', 'security'],
            rent: ['type_object', 'security'],
            exc:  ['type_object', 'security']
        },
        commerce: {
            sell: ['type_object'],
            rent: ['type_object'],
            exc:  ['type_object']
        },
    };

    if (trigger_deal_name.length > 0 && trigger_type_name.length > 0) {
        changeContainersHandler(filter_matrix[trigger_type_name][trigger_deal_name], hidden_class_name);
    } else {
        returnDefault(this, hidden_class_name);
    }

    function returnDefault (instance, className) {
        instance._filterContainers.addClass(className);
    }

    function changeContainersHandler (containers_name_array, class_name) {
        $('[data-container]').addClass(class_name);
        containers_name_array.map(function (item) {
            $('[data-container="' + item + '"]').removeClass(class_name);
        });
    }
};

Search.prototype._changeSquareLabel = function (target, marker) {
    var labels = {
        default: 'м²',
        land: 'Соток'
    };

    this._filterLabelSquare.text(labels[marker]);
};

Search.prototype._dropDownChangeText = function (target) {
    $(target).parent().parent().find('.dropdown-toggle').text($(target).text())
};

Search.prototype._bindEvents = function () {
    this._filterDealControl.on('change', this, function (event) {
        Search.prototype._filterControlHandler.apply(event.data, [this]);
    });
    this._filterTypeControl.on('change', this, function (event) {
        Search.prototype._filterControlHandler.apply(event.data, [this]);

        if ($(this).find(':selected').data('trigger') === 'land') {
            Search.prototype._changeSquareLabel.apply(event.data, [this, 'land']);
        } else {
            Search.prototype._changeSquareLabel.apply(event.data, [this, 'default']);
        }
    });

    /*Defaults*/
    this._filterDealControl.trigger('change');
    this._filterTypeControl.trigger('change');

    this._dropdownPrice.parent().find('.dropdown-item').on('click', this, function (event) {
        Search.prototype._dropDownChangeText.apply(event.data, [this]);
    });
};
Search.prototype._applyPlugins = function () {
    this._multiSelect.multiselect({
        buttonClass: 'form-control',
        buttonContainer: '<div class="custom-multiselect-group" />',
        disableIfEmpty: true,
        dropRight: false,
        filterPlaceholder: 'Поиск',
        includeSelectAllOption: true,
        maxHeight: 300,
        nonSelectedText: 'Выберите хотя бы один из пунктов',
        selectAllText: 'Выбрать все',
        templates: {
            li: '<li class="dropdown-item"><a href="javascript:void(0);"><label></label></a></li>',
        },
        buttonText: function(options, select) {
            if (options.length === 0) {
                if ($(select).attr('placeholder').length > 0) {
                    return $(select).attr('placeholder');
                } else {
                    return 'Не выбран ни один пункт ...';
                }
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
        }
    });
};

Search.prototype.apply = function () {
    this._applyPlugins();
    this._bindEvents();
};