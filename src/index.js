import './main.css';
import { headerContent } from './modules/header.js'
import { lunchArray } from './modules/lunch-generator.js'
import { footerContent } from './modules/footer.js'
import EntreeImage from './images/icon-entree.png'

class App {
    constructor(header, body, footer) {
        this.header = header;
        this.body = body;
        this.footer = footer;
    }

    renderTemplate() {
        
      }
}


const template = `
<header>
<h1 id="headerTitle">${headerContent.headerTitle}</h1>
<h2 id="headerSub">${headerContent.headerSub}</h2>
</header>
<main>
<div id="lunch-section">
    <div id="generate-button"><button id="button">Generate</button></div>
    <div id="lunch-boxes">
        <div id="box-one">
            <img src=./images/icon-entree.png alt="Entree Icon" title="Entree Icon">
            <p>Entreé</p>
            <h3 id="entree-type">${lunchArray[0].entree}</h3>
        </div>
        <div id="box-two">
            <img src="../images/icon-salad.png" alt="Salad Icon" title="Salad Icon">
            <p>Salad</p>
            <h3 id="salad-type">${lunchArray[0].salad}</h3>
        </div>
        <div id="box-three">
            <img src="../images/icon-fruit.png" alt="Fruit Icon" title="Fruit Icon">
            <p>Fruit</p>
            <h3 id="fruit-type">${lunchArray[0].fruit}</h3>
        </div>
        <div id="box-four">
            <img src="../images/icon-drink.png" alt="Drink Icon" title="Drink Icon">
            <p>Drink</p>
            <h3 id="drink-type">${lunchArray[0].drink}</h3>
        </div>
        <div id="box-five">
            <img src="../images/icon-dessert.png" alt="Dessert Icon" title="Dessert Icon">
            <p>Dessert</p>
            <h3 id="dessert-type">${lunchArray[0].dessert}</h3>
        </div>
        
    </div>
</div>
</main>
<footer>
<h3 id="footerTitle">${footerContent.footerTitle}</h3>
<p id="footerSub">${footerContent.footerSub}</p>
</footer>
            `;
document.body.innerHTML = template;

