function Default() {

}


Default.prototype.apply = function () {

    if ($.fancybox !== undefined) {
        $.fancybox.defaults.loop = true;
    }
};