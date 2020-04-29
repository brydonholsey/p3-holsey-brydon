'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// export default class LunchGenerator {
//     constructor(lunchOptions) {
//         this.lunchOptions = lunchOptions;

//     }
// }


// export const entreeType = document.getElementById('entree-type');

var LunchGenerator = function () {
    function LunchGenerator() {
        _classCallCheck(this, LunchGenerator);

        this.lunchArray = [{
            entree: 'Burger',
            salad: 'Caesar',
            fruit: 'Apple',
            drink: 'Iced Tea',
            dessert: 'Brownie'
        }, {
            entree: 'PB & J',
            salad: 'Frisee',
            fruit: 'Grapes',
            drink: 'Water',
            dessert: 'Cookie'
        }, {
            entree: 'Fish',
            salad: 'Garden',
            fruit: 'Peach',
            drink: 'Lemonade',
            dessert: 'Ice Cream'
        }, {
            entree: 'Turkey Club',
            salad: 'Macaroni Salad',
            fruit: 'Watermellon',
            drink: 'Beer',
            dessert: 'Pudding'
        }, {
            entree: 'Chicken',
            salad: 'Caprese',
            fruit: 'Orange',
            drink: 'Wine',
            dessert: 'Cake'
        }, {
            entree: 'Pasta',
            salad: 'Cucumber + Tomato',
            fruit: 'Canteloupe',
            drink: 'Arnold Palmer',
            dessert: 'Blueberry Pie'
        }, {
            entree: 'Steak',
            salad: 'Green Bean',
            fruit: 'Strawberries',
            drink: 'Spritzer',
            dessert: 'Pund Cake'
        }, {
            entree: 'Ham + Cheese',
            salad: 'Garden Salad',
            fruit: 'Pear',
            drink: 'Coffee',
            dessert: 'Shortcake'
        }, {
            entree: 'Escargot',
            salad: 'Arugula',
            fruit: 'Blueberries',
            drink: 'Martini',
            dessert: 'Creme Brulee'
        }, {
            entree: 'Chicken Curry',
            salad: 'Orzo + Corn',
            fruit: 'Pineapple',
            drink: 'Mai Thai',
            dessert: 'Oreos'
        }];
    }

    _createClass(LunchGenerator, [{
        key: 'sorting',
        value: function sorting() {
            for (var i = this.lunchArray.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * i);
                var k = this.lunchArray[i];
                this.lunchArray[i] = this.lunchArray[j];
                this.lunchArray[j] = k;
            }
        }
    }, {
        key: 'addText',
        value: function addText() {
            var _this = this;

            window.onload = function () {
                document.getElementById('button').addEventListener('click', function () {
                    _this.sorting();
                    console.log(_this.lunchArray[0]);
                    document.getElementById('entree-type').innerHTML = _this.lunchArray[0].entree;
                    document.getElementById('salad-type').innerHTML = _this.lunchArray[0].salad;
                    document.getElementById('fruit-type').innerHTML = _this.lunchArray[0].fruit;
                });
            };
        }
    }]);

    return LunchGenerator;
}();

var lunchGenerator = exports.lunchGenerator = new LunchGenerator();

// button.addEventListener('click', sorting);
// button.addEventListener('click', addText);

// export const lunchIcons = [
// {
// entreeImage: '/images/icon-entree.png'
// }
// ];