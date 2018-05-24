// getCookie(), setCookie(), deleteCookie()


// возвращает cookie если есть или undefined
function getCookie(name) {

    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
};

// уcтанавливает cookie
function setCookie(name, value, props) {

    props = props || {}

    var exp = props.expires

    if (typeof exp == "number" && exp) {

        var d = new Date()

        d.setTime(d.getTime() + exp * 1000)

        exp = props.expires = d

    }

    if (exp && exp.toUTCString) { props.expires = exp.toUTCString() }

    value = encodeURIComponent(value)

    var updatedCookie = name + "=" + value

    for (var propName in props) {

        updatedCookie += "; " + propName

        var propValue = props[propName]

        if (propValue !== true) { updatedCookie += "=" + propValue }
    }

    document.cookie = updatedCookie

};

// удаляет cookie
function deleteCookie(name) {

    setCookie(name, null, { expires: -1 })

};

Array.prototype.inArray = function (comparer) {
    for (var i = 0; i < this.length; i++) {
        if (comparer(this[i])) return true;
    }
    return false;
};
Array.prototype.pushIfNotExist = function (element, comparer) {
    if (!this.inArray(comparer)) {
        this.push(element);
    }
};