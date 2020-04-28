'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.footerContent = exports.Footer = undefined;

var _lunchGenerator = require('./modules/lunch-generator.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Footer = exports.Footer = function Footer(footerTitle, footerSub) {
    _classCallCheck(this, Footer);

    this.footerTitle = footerTitle;
    this.footerSub = footerSub;
};

var footerLunch = _lunchGenerator.lunchArray;

console.log(footerLunch);

var footerContent = exports.footerContent = new Footer('For lunch you will be having:');