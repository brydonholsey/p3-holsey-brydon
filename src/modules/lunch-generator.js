
class LunchGenerator {
    constructor () {
        this.lunchArray = [
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
        
    }
//randomizes lunches
    sorting() {
        for (let i = this.lunchArray.length -1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const k = this.lunchArray[i]
            this.lunchArray[i] = this.lunchArray[j]
            this.lunchArray[j] = k
          }
    }
 //inserts text from 'sorting' function on button click    
    addText() {
        window.onload = () => {
            document.getElementById('button').addEventListener('click', () => {
                this.sorting();
                document.getElementById('entree-type').innerHTML = this.lunchArray[0].entree; 
                document.getElementById('salad-type').innerHTML = this.lunchArray[0].salad; 
                document.getElementById('fruit-type').innerHTML = this.lunchArray[0].fruit; 
                document.getElementById('drink-type').innerHTML = this.lunchArray[0].drink; 
                document.getElementById('dessert-type').innerHTML = this.lunchArray[0].dessert; 
            });  
            
        }
    }
}

export const lunchGenerator = new LunchGenerator();