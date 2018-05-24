function Agents() {
    this._phoneBtns = $('[data-phone]');
}

Agents.prototype._btnPhoneClickHandler = function (target) {
    var $this = $(target);
    $this.addClass('d-none');

    var additional_class = '';
    if ($this.hasClass('d-block')) {
        additional_class += ' d-block ';
    }
    if ($this.hasClass('btn-lg')) {
        additional_class += ' btn-lg ';
    }
    var phoneNumber = $this.data('phone');
    var btnLinkPhone = $("<a class='btn" + additional_class + " btn-success' role='button' href='tel:+7" + phoneNumber.split('-')[0] + "'>+7 " + phoneNumber + "</a>");
    $this.after(btnLinkPhone);
};

Agents.prototype._bindEvents = function () {
    this._phoneBtns.on('click', this, function (event) {
        Agents.prototype._btnPhoneClickHandler.apply(event.data, [this]);
    });
};

Agents.prototype.apply = function () {
    this._bindEvents();
};