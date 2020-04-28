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

var template = '\n            <header>\n                <h1 id="headerTitle">' + _header.headerContent.headerTitle + '</h1>\n                <h2 id="headerSub">' + _header.headerContent.headerSub + '</h2>\n            </header>\n            <main>\n                <button id="generate-button">Generate</button>\n                <div>\n                    <ul>\n                        <li id="entree">Entree</li>\n                        <li id="salad">Salad</li>\n                        <li id="fruit">Fruit</li>\n                        <li id="drink">Drink</li>\n                        <li id="dessert">Dessert</li>\n                    </ul>\n                </div>\n            </main>\n            <footer>\n                <h3 id="footerTitle">' + _footer.footerContent.footerTitle + '</h3>\n                <p id="footerSub">' + _footer.footerContent.footerSub + '</p>\n            </footer>\n            ';
document.body.innerHTML = template;