function Catalog() {
    this._modalFilter = $('#modalFilter');
    this._searchContainer = $('#search-container');
    this._search = $('#search');
}

Catalog.prototype._btnFilterClickHandler = function () {
    this._searchContainer.wrapInner(this._search);

};

Catalog.prototype._bindEvents = function () {
    this._modalFilter.on('shown.bs.modal', this, function (event) {
        Catalog.prototype._btnFilterClickHandler.apply(event.data, [this]);
    });
};

Catalog.prototype.apply = function () {
    this._bindEvents();
};