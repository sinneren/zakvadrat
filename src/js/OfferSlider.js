function OfferSlider() {
    this._offersSlider = $("[data-offers]");
}
OfferSlider.prototype._applyPlugins = function () {
    this._offersSlider.slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        lazyLoad: 'progressive',
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}
OfferSlider.prototype.apply = function () {
    this._applyPlugins();
};