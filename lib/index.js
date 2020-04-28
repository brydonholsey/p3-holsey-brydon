'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./main.css');

var _header = require('./modules/header.js');

var _lunchGenerator = require('./modules/lunch-generator.js');

var _footer = require('./modules/footer.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    function App(header, body, footer) {
        _classCallCheck(this, App);

        this.header = header;
        this.body = body;
        this.footer = footer;
    }

    _createClass(App, [{
        key: 'renderTemplate',
        value: function renderTemplate() {}
    }]);

    return App;
}();

var template = '\n<header>\n<h1 id="headerTitle">' + _header.headerContent.headerTitle + '</h1>\n<h2 id="headerSub">' + _header.headerContent.headerSub + '</h2>\n</header>\n<main>\n<div id="lunch-section">\n    <button id="generate-button">Generate</button>\n    <div id="lunch-boxes">\n        <div id="box-one">\n            <img src="images/icon-entree.png" alt="Entree Icon" title="Entree Icon">\n            <p>Entre\xE9</p>\n            <h3 id="entree-type"></h3>\n        </div>\n        <div id="box-two">\n            <img src="images/icon-salad.png" alt="Salad Icon" title="Salad Icon">\n            <p>Salad</p>\n            <h3 id="salad-type"></h3>\n        </div>\n        <div id="box-three">\n            <img src="images/icon-fruit.png" alt="Fruit Icon" title="Fruit Icon">\n            <p>Fruit</p>\n            <h3 id="fruit-type"></h3>\n        </div>\n        <div id="box-four">\n            <img src="images/icon-drink.png" alt="Drink Icon" title="Drink Icon">\n            <p>Drink</p>\n            <h3 id="drink-type"></h3>\n        </div>\n        <div id="box-five">\n            <img src="images/icon-dessert.png" alt="Dessert Icon" title="Dessert Icon">\n            <p>Dessert</p>\n            <h3 id="dessert-type"></h3>\n        </div>\n        \n    </div>\n</div>\n</main>\n<footer>\n<h3 id="footerTitle">' + _footer.footerContent.footerTitle + '</h3>\n<p id="footerSub">' + _footer.footerContent.footerSub + '</p>\n</footer>\n            ';
document.body.innerHTML = template;