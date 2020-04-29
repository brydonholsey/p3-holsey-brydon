'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import { lunchArray } from './modules/lunch-generator.js'

var Footer = function Footer(footerTitle, footerSub) {
    _classCallCheck(this, Footer);

    this.footerTitle = footerTitle;
    this.footerSub = footerSub;
};

// export let mealEntry = lunchArray[0].entree;


exports.default = Footer;
var footerContent = exports.footerContent = new Footer('For lunch you will be having:', 'mealEntry');