// export default class LunchGenerator {
//     constructor(lunchOptions) {
//         this.lunchOptions = lunchOptions;
        
//     }
// }

export const lunchArray = [
    {
        entree: 'Burger',
        salad: 'Caesar',
        fruit: 'Apple',
        drink: 'Iced Tea',
        dessert: 'Brownie'
    },
    {
        entree: 'PB & J',
        salad: 'Frisee',
        fruit: 'Grapes',
        drink: 'Water',
        dessert: 'Cookie'
    },
    {
        entree: 'Fish',
        salad: 'Garden',
        fruit: 'Peach',
        drink: 'Lemonade',
        dessert: 'Ice Cream'
    },
    {
        entree: 'Turkey Club',
        salad: 'Macaroni Salad',
        fruit: 'Watermellon',
        drink: 'Beer',
        dessert: 'Pudding'
    },
    {
        entree: 'Chicken',
        salad: 'Caprese',
        fruit: 'Orange',
        drink: 'Wine',
        dessert: 'Cake'
    },
    {
        entree: 'Pasta',
        salad: 'Cucumber + Tomato',
        fruit: 'Canteloupe',
        drink: 'Arnold Palmer',
        dessert: 'Blueberry Pie'
    },
    {
        entree: 'Steak',
        salad: 'Green Bean',
        fruit: 'Strawberries',
        drink: 'Spritzer',
        dessert: 'Pund Cake'
    },
    {
        entree: 'Ham + Cheese',
        salad: 'Garden Salad',
        fruit: 'Pear',
        drink: 'Coffee',
        dessert: 'Shortcake'
    },
    {
        entree: 'Escargot',
        salad: 'Arugula',
        fruit: 'Blueberries',
        drink: 'Martini',
        dessert: 'Creme Brulee'
    },
    {
        entree: 'Chicken Curry',
        salad: 'Orzo + Corn',
        fruit: 'Pineapple',
        drink: 'Mai Thai',
        dessert: 'Oreos'
    }
    
];

export const lunchIcons = [
    {
        entreeImage: '/images/icon-entree.png'
    }
];


const button = document.getElementById('button')
const meal = document.getElementById('entree-type')

function sorting() {
    for (i = lunchArray.length -1; i > 0; i--) {
        j = Math.floor(Math.random() * i)
        k = lunchArray[i]
        lunchArray[i] = lunchArray[j]
        lunchArray[j] = k
      }
}

function addText() {
    meal.innerHTML = lunchArray[0].entree;
}

// button.addEventListener('click', sorting);
// button.addEventListener('click', addText);

