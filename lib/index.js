'use strict';

require('./main.css');

var _header = require('./modules/header.js');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App(lunchApp) {
    _classCallCheck(this, App);

    this.lunchApp = lunchApp;
};

;

var template = '\n            <header>\n                <h1 id="headerTitle"></h1>\n                <h2 id="headerSub"></h2>\n            </header>\n            <main>\n                <button id="generate-button">Generate</button>\n                <div>\n                    <ul>\n                        <li id="entree">Entre\xE9</li>\n                        <li id="salad">Salad</li>\n                        <li id="fruit">Fruit</li>\n                        <li id="drink">Drink</li>\n                        <li id="dessert">Dessert</li>\n                    </ul>\n                </div>\n            </main>\n            <footer>\n                <h3 id="footerTitle"></h3>\n                <p id="footerSub"></p>\n            </footer>\n            ';
document.body.innerHTML = template;