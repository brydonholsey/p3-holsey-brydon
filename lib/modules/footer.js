'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Footer = function Footer(footerTitle, footerSub) {
    _classCallCheck(this, Footer);

    this.footerTitle = footerTitle;
    this.footerSub = footerSub;
};

exports.default = Footer;
var footerContent = exports.footerContent = new Footer('For lunch you will be having:', 'this is just some text');