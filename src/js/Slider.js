function Slider() {
    this._slider = $("[data-slider]");
}
Slider.prototype._applyPlugins = function () {
    this._slider.slick({
        arrows: false,
        dots: true,
        lazyLoad: 'ondemand',
        adaptiveHeight: false
    });
}
Slider.prototype.apply = function () {
    this._applyPlugins();
};