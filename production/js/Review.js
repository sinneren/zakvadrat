function Review() {
    this._reviewSlider = $("[data-reviews]");
}

Review.prototype._applySlider = function () {
    this._reviewSlider.slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        lazyLoad: 'progressive',
        adaptiveHeight: true
    });
}
Review.prototype.apply = function () {
    this._applySlider();
};