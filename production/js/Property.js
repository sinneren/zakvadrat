function Property(options) {
    this._propertyImage = $('.property__photos-link');
    this._mapOptions = $.extend({
        selector: 'property-map',
        coords: [55.76, 37.64],
        zoom: 14,
        data: [],
        controls: [],
        title: ''
    }, options);
}

Property.prototype._applyPlugins = function () {
    ymaps.ready(init);
    var map;
    var options = this._mapOptions;

    function init() {
        map = new ymaps.Map(options.selector, {
            center: options.coords,
            zoom: options.zoom,
            data: options.data,
            controls: options.controls
        });

        placemark = new ymaps.Placemark(map.getCenter(), {
            hintContent: options.title,
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/img/map-mark.svg',
            iconImageSize: [34, 44],
            iconImageOffset: [-17, -44]
        }),

        /*Map controls and events*/
        map.behaviors.disable('scrollZoom');
        map.behaviors.disable('multiTouch');

        map.geoObjects.add(placemark);
    }
};
Property.prototype.apply = function () {
    this._applyPlugins();
};