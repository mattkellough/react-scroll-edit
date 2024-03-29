'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var pushHash = function pushHash(hash) {
    hash = hash ? hash.indexOf('#') === 0 ? hash : '#' + hash : '';

    if (history.pushState) {
        var loc = window.location;
        history.pushState(null, null, hash ? loc.pathname + loc.search + hash : // remove hash
        loc.pathname + loc.search);
    } else {
        location.hash = hash;
    }
};

var getHash = function getHash() {
    return window.location.hash.replace(/^#/, '');
};

var filterElementInContainer = function filterElementInContainer(container) {
    return function (element) {
        return container.contains ? container != element && container.contains(element) : !!(container.compareDocumentPosition(element) & 16);
    };
};

var scrollOffset = function scrollOffset(c, t) {
    return c === document ? t.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) : getComputedStyle(c).position !== 'static' ? t.offsetTop : t.getBoundingClientRect().top + c.scrollTop;
};

var scrollXOffset = function scrollXOffset(c, t) {
    return c === document ? t.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : getComputedStyle(c).position !== 'static' ? t.offsetLeft : t.getBoundingClientRect().left + c.scrollLeft;
};

exports.default = {
    pushHash: pushHash,
    getHash: getHash,
    filterElementInContainer: filterElementInContainer,
    scrollOffset: scrollOffset,
    scrollXOffset: scrollXOffset
};