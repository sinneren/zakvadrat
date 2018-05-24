function Map(options) {
    this._modalFilter = $('#modalFilter');
    this._search = $('#search');
    this._searchContainer = $('#search-container');
    this._mapOptions = $.extend({
        selector: 'map-container',
        coords: [55.76, 37.64],
        zoom: 10,
        addedIds: [],
        data: [],
        controls: ['zoomControl']
    }, options);
}
Map.prototype._btnFilterClickHandler = function () {
    this._searchContainer.wrapInner(this._search);
};
Map.prototype._applyPlugins = function () {
    ymaps.ready(init);
    var map;
    var options = this._mapOptions;
    var placemarks = {
        "type": "FeatureCollection",
        "features": [
            {
                "type":"Feature",
                "id":0,
                "geometry":{
                    "type":"Point",
                    "coordinates": [
                        55.765229, 37.618254
                    ]
                },
                "properties":{
                    "title":"4-ком квартира для вас",
                    "balloonContent":"Содержимое балуна",
                    "clusterCaption":"Дом 1",
                    "hintContent":"Текст подсказки",
                    "cost":"10 000",
                    "metro":"Тимирязевская",
                    "address": "ул. Кремлевская, 12",
                    "link" : "object.html",
                    "pic": "flat/komnata-sanktpeterburg-prospekt-energetikov-270014103-1.jpg",
                    "currency": "руб."
                }
            },
            {
                "type":"Feature",
                "id":1,
                "geometry":{
                    "type":"Point",
                    "coordinates": [
                        55.814621, 37.586840
                    ]
                },
                "properties":{
                    "title":"4-ком квартира для вас",
                    "balloonContent":"Содержимое балуна",
                    "clusterCaption":"Дом 1",
                    "hintContent":"Текст подсказки",
                    "cost":"10 000",
                    "metro":"Тимирязевская",
                    "address": "ул. Кремлевская, 12",
                    "link" : "object.html",
                    "pic": "flat/komnata-sanktpeterburg-prospekt-energetikov-270014104-1.jpg",
                    "currency": "руб."
                }
            },
            {
                "type": "Feature",
                "id": 2,
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        55.814621, 37.586840
                    ]
                },
                "properties": {
                    "title": "4-ком квартира для вас",
                    "balloonContent": "Содержимое балуна",
                    "clusterCaption": "Дом 1",
                    "hintContent": "Текст подсказки",
                    "cost": "10 000",
                    "metro": "Тимирязевская",
                    "address": "ул. Кремлевская, 12",
                    "link": "object.html",
                    "pic": "flat/komnata-sanktpeterburg-prospekt-energetikov-270014104-1.jpg",
                    "currency": "руб."
                }
            },
            {
                "type": "Feature",
                "id": 3,
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        55.814621, 37.586840
                    ]
                },
                "properties": {
                    "title": "4-ком квартира для вас",
                    "balloonContent": "Содержимое балуна",
                    "clusterCaption": "Дом 1",
                    "hintContent": "Текст подсказки",
                    "cost": "10 000",
                    "metro": "Тимирязевская",
                    "address": "ул. Кремлевская, 12",
                    "link": "object.html",
                    "pic": "flat/komnata-sanktpeterburg-prospekt-energetikov-270014104-1.jpg",
                    "currency": "руб."
                }
            },
            {
                "type": "Feature",
                "id": 4,
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        55.814621, 37.586840
                    ]
                },
                "properties": {
                    "title": "4-ком квартира для вас",
                    "balloonContent": "Содержимое балуна",
                    "clusterCaption": "Дом 1",
                    "hintContent": "Текст подсказки",
                    "cost": "10 000",
                    "metro": "Тимирязевская",
                    "address": "ул. Кремлевская, 12",
                    "link": "object.html",
                    "pic": "flat/komnata-sanktpeterburg-prospekt-energetikov-270014104-1.jpg",
                    "currency": "руб."
                }
            },
            {
                "type": "Feature",
                "id": 5,
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        55.814621, 37.586840
                    ]
                },
                "properties": {
                    "title": "4-ком квартира для вас",
                    "balloonContent": "Содержимое балуна",
                    "clusterCaption": "Дом 1",
                    "hintContent": "Текст подсказки",
                    "cost": "10 000",
                    "metro": "Тимирязевская",
                    "address": "ул. Кремлевская, 12",
                    "link": "object.html",
                    "pic": "flat/komnata-sanktpeterburg-prospekt-energetikov-270014104-1.jpg",
                    "currency": "руб."
                }
            },
            {
                "type": "Feature",
                "id": 6,
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        55.814621, 37.586840
                    ]
                },
                "properties": {
                    "title": "4-ком квартира для вас",
                    "balloonContent": "Содержимое балуна",
                    "clusterCaption": "Дом 1",
                    "hintContent": "Текст подсказки",
                    "cost": "10 000",
                    "metro": "Тимирязевская",
                    "address": "ул. Кремлевская, 12",
                    "link": "object.html",
                    "pic": "flat/komnata-sanktpeterburg-prospekt-energetikov-270014104-1.jpg",
                    "currency": "руб."
                }
            },
            {
                "type":"Feature",
                "id":7,
                "geometry":{
                    "type":"Point",
                    "coordinates": [
                        55.814621, 37.586840
                    ]
                },
                "properties":{
                    "title":"4-ком квартира для вас",
                    "balloonContent":"Содержимое балуна",
                    "clusterCaption":"Дом 2",
                    "hintContent":"Текст подсказки",
                    "cost":"10 000",
                    "metro":"Тимирязевская",
                    "address": "ул. Кремлевская, 12",
                    "link" : "object.html",
                    "pic": "flat/komnata-sanktpeterburg-prospekt-energetikov-270014316-1.jpg",
                    "currency": "руб."
                }
            }
        ]
    }

    function init() {
        map = new ymaps.Map(options.selector, {
            center: options.coords,
            zoom: options.zoom,
            data: options.data,
            controls: options.controls
        });
        var bounder = ymaps.util.bounds;
        var clusterIcons = [
            {
                //href: '/img/cluster.svg',
                href: '',
                size: [30, 30],
                offset: [-15, -15]
            }
        ];
        /*Placemark*/
        var customClusterIconLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="cluster-icon">$[properties.geoObjects.length]</div>'
        );
        var customPlacemarkLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="placemark-icon"></div>'
        );
        /*Balloon*/
        var customBalloonLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="balloon-wrapper">$[[options.contentLayout]]</div>', {
                build: function () {
                    this.constructor.superclass.build.call(this);
                    this._$element = $('.balloon-wrapper', this.getParentElement());
                    this.applyElementOffset();
                    this._$element
                        .find('.balloon__close')
                        .on('click', $.proxy(this.onCloseClick, this));
                },
                clear: function () {
                    this._$element.find('.balloon__close').off('click');
                    this.constructor.superclass.clear.call(this);
                },
                onSublayoutSizeChange: function () {
                    customBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);
                    if (!this._isElement(this._$element)) {
                        return;
                    }
                    this.applyElementOffset();
                    this.events.fire('shapechange');
                },
                applyElementOffset: function () {
                    this._$element.css({
                        left: 0,
                        top: 0
                    });
                },
                onCloseClick: function (e) {
                    e.preventDefault();
                    this.events.fire('userclose');
                },
                getShape: function () {
                    if (!this._isElement(this._$element)) {
                        return customBalloonLayout.superclass.getShape.call(this);
                    }
                    var position = this._$element.position();

                    return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                        [position.left, position.top],
                        [
                            position.left + this._$element[0].offsetWidth,
                            position.top + this._$element[0].offsetHeight + 30
                        ]
                    ]
                    ));
                },
                _isElement: function (element) {
                    return element && element[0];
                }
            }
        );
        var customBalloonContentLayout = ymaps.templateLayoutFactory.createClass([
            '<div class="balloon-overlay"> \
                <div class="offer-cards-container"> \
                    <div class="offer-cards"> \
                        <div class="balloon__close"> \
                            <i class="fa fa-close"></i> \
                        </div> \
                        <a href="{{ properties.link }}" class="offer-card__pic"> \
                            <img src="{{ properties.pic }}" alt="" /> \
                            <div class= "offer-card__badges"> \
                                <span class="badge bg-success badge-pill text-white">Эксклюзив</span> \
                                <span class="badge bg-primary badge-pill text-white">Горячее предложение</span> \
                            </div> \
                        </a> \
                        <div class="offer-card__info"> \
                            <div class="offer-card__title">{{ properties.title }}</div> \
                            <div class="offer-card__price text-primary">{{ properties.cost }} {{ properties.currency }}</div> \
                            <div class="offer-card__pirce-meter text-secondary"> \
                                <small>50 980 руб./м²</small> \
                            </div> \
                            <dl class="offer-card__list"> \
                                <dd> \
                                    {{ properties.square }} м² \
                                </dd> \
                                <dd> \
                                    {{ properties.address }} \
                                </dd> \
                                <dd> \
                                    {{ properties.rooms }} \
                                </dd> \
                            </dl> \
                        </div> \
                        <div class="offer-card__compare"> \
                            <div class="custom-checkbox checkbox-diff-label"> \
                                <label class="checkbox-label"> \
                                    <input type="checkbox" class="checkbox-input" /> \
                                    <svg role="img" width="16" height="16" class="checkbox-icon checkbox-unchecked"> \
                                        <use xlink:href="/img/ui-sprite.svg#checkbox-false"></use> \
                                    </svg> \
                                    <svg role="img" width="16" height="16" class="checkbox-icon checkbox-checked"> \
                                        <use xlink:href="/img/ui-sprite.svg#checkbox-true"></use> \
                                    </svg> \
                                    <span class="checkbox-label-unchecked">Сравнить</span> \
                                    <span class="checkbox-label-checked">Убрать из сравнения</span> \
                                </label> \
                            </div> \
                        </div> \
                    </div> \
                </div> \
            </div>'
        ].join('')
        );
        /*Cluster*/
        var customClusterBalloonLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="balloon-wrapper">$[[options.contentLayout]]</div>', {
                build: function () {
                    this.constructor.superclass.build.call(this);
                    this._$element = $('.balloon-wrapper', this.getParentElement());
                    this.applyElementOffset();
                    this._$element
                        .find('.balloon__close')
                        .on('click', $.proxy(this.onCloseClick, this));
                },
                clear: function () {
                    this._$element.find('.balloon__close').off('click');
                    this.constructor.superclass.clear.call(this);
                },
                onSublayoutSizeChange: function () {
                    customBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);
                    if (!this._isElement(this._$element)) {
                        return;
                    }
                    this.applyElementOffset();
                    this.events.fire('shapechange');
                },
                applyElementOffset: function () {
                    this._$element.css({
                        left: 0,
                        top: 0
                    });
                },
                onCloseClick: function (e) {
                    e.preventDefault();
                    this.events.fire('userclose');
                },
                getShape: function () {
                    if (!this._isElement(this._$element)) {
                        return customBalloonLayout.superclass.getShape.call(this);
                    }
                    var position = this._$element.position();

                    return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                        [position.left, position.top],
                        [
                            position.left + this._$element[0].offsetWidth,
                            position.top - 145
                        ]
                    ]
                    ));
                },
                _isElement: function (element) {
                    return element && element[0];
                }
            }
        );
        var customClusterBalloonContentLayout = ymaps.templateLayoutFactory.createClass([
            '<div class="balloon-cluster-wrapper">',
                '<div class="balloon__close"><i class="fa fa-close"></i></div>',
                '{% for geoObject in properties.geoObjects %}',
                    '<a href="javascript:void(0);" class="offer-cluster" data-placemarkid="{{ geoObject.id }}">',
                        '<div class="offer-cluster-title">{{ geoObject.properties.title }}</div>',
                        '<div class="offer-cluster-price">{{ geoObject.properties.cost }} {{ geoObject.properties.currency }}</div>',
                        '<div class="offer-cluster-address">{{ geoObject.properties.address }}</div>',
                    '</a>',
                '{% endfor %}',
            '</div>'
        ].join('')
        );

        /*Map controls and events*/
        map.behaviors.disable('scrollZoom');
        map.behaviors.disable('multiTouch');

        /*Object manager and clusterization*/
        var objectManager = new ymaps.ObjectManager({
            clusterize: true,
            clusterDisableClickZoom: false,
            clusterOpenBalloonOnClick: true,
            clusterBalloonLayout: customClusterBalloonLayout,
            clusterBalloonContentLayout: customClusterBalloonContentLayout,
            clusterBalloonPanelMaxMapArea: 0,
            clusterBalloonContentLayoutWidth: 278,
            clusterBalloonOffset: [-213, -408],

        });
        objectManager.objects.options.set({
            iconLayout: customPlacemarkLayout,
            iconShape: {
                type: 'Rectangle',
                coordinates: [
                    [0, 0], [30, 30]
                ],
            },
            iconOffset: [-15, -15],
            balloonLayout: customBalloonLayout,
            balloonContentLayout: customBalloonContentLayout,
            balloonPanelMaxMapArea: 0,
            balloonOffset: [-213, -408],
            balloonCloseButton: false,
            open: function() {
                console.log('cl')
            }
        });
        objectManager.clusters.options.set({
            clusterIcons: clusterIcons,
            clusterIconContentLayout: customClusterIconLayout,
        });

        // var jqxhr = $.getJSON(options.objectsUrl + map.getBounds().join(), {
        //     format: 'json'
        // })
        //     .done(function (json) {
        //         $.each(json.items, function (i, item) {
        //             var placemark = {
        //                 type: 'Feature',
        //                 id: i,
        //                 geometry: {
        //                     type: 'Point',
        //                     coordinates: item,
        //                 },
        //                 properties: {
        //                     placemarkId: i
        //                 }
        //             };

        //             placemarks.features.pushIfNotExist(placemark, function (e) {
        //                 return e.id === placemark.id;
        //             });
        //         });

        //         objectManager.add(placemarks);
        //         map.geoObjects.add(objectManager);
        //         $(options.container).prepend('<div id="map-counter" class="map-counter"></div>');
        //         $(options.counterContainer).text('Показано ' + placemarks.features.length + ' из ' + json.total);
        //     });
        objectManager.add(placemarks);
        map.geoObjects.add(objectManager);
        // Moving map
        map.events.add('boundschange', function () {
            // var jqxhr = $.getJSON(options.objectsUrl + map.getBounds().join(), {
            //     format: 'json'
            // })
            //     .done(function (json) {
            //         $.each(json.items, function (i, item) {
            //             var placemark = {
            //                 type: 'Feature',
            //                 id: i,
            //                 geometry: {
            //                     type: 'Point',
            //                     coordinates: item,
            //                 },
            //                 properties: {
            //                     placemarkId: i
            //                 }
            //             };

            //             placemarks.features.pushIfNotExist(placemark, function (e) {
            //                 return e.id === placemark.id;
            //             });
            //         });
            //         objectManager.add(placemarks);
            //         //map.geoObjects.add(objectManager);
            //         $(options.counterContainer).text('Показано ' + placemarks.features.length + ' из ' + json.total);
            //     });
        });
        // Check data
        function hasBalloonData(objectId) {
            return objectManager.objects.getById(objectId).properties.balloonContent;
        }
        // Get object by id and set to collection
        function setBalloonData(objectId) {
            if (!hasBalloonData(objectId)) {
                var jqxhrObjectData = $.getJSON(options.detailsUrl + objectId, {
                    format: 'json'
                })
                    .done(function (json) {
                        var object = objectManager.objects.getById(objectId);
                        object.properties = {
                            address: json[objectId].name,
                            pic: json[objectId].photo,
                            balloonContentBody: json[objectId].name
                        }
                        var objectState = objectManager.getObjectState(objectId);
                        if (!objectState.isClustered) {
                            objectManager.objects.balloon.open(objectId);
                        } else {
                            objectManager.clusters.balloon.open(objectState.cluster.id);
                        }
                    });
            }
        };
        objectManager.objects.events.add('click', function (e) {
            var objectId = e.get('objectId');
            setBalloonData(objectId);
        });
        objectManager.clusters.events.add('click', function (e) {
            var objectId = e.get('objectId');
        });
        //Monitor cluster changes
        var activeObjectMonitor = new ymaps.Monitor(objectManager.clusters.state);
        activeObjectMonitor.add('activeObject', function () {
            var objectId = activeObjectMonitor.get('activeObject').id;
            setBalloonData(objectId);
        });
    }
};

Map.prototype._bindEvents = function () {
    this._modalFilter.on('shown.bs.modal', this, function (event) {
        Map.prototype._btnFilterClickHandler.apply(event.data, [this]);
    });
};

Map.prototype.apply = function () {
    this._applyPlugins();
    this._bindEvents();
};