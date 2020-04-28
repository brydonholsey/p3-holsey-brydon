'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Header = function Header(headerTitle, headerSub) {
    _classCallCheck(this, Header);

    this.headerTitle = headerTitle;
    this.headerSub = headerSub;
};

var headerContent = exports.headerContent = new Header('Are You Hungry?', 'click the button below to generate your lunch');