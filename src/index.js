import './main.css';
import { headerContent } from './modules/header.js'
import { lunchArray } from './modules/lunch-generator.js'
import { footerContent } from './modules/footer.js'

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
                <button id="generate-button">Generate</button>
                <div>
                    <ul>
                        <li id="entree">Entree</li>
                        <li id="salad">Salad</li>
                        <li id="fruit">Fruit</li>
                        <li id="drink">Drink</li>
                        <li id="dessert">Dessert</li>
                    </ul>
                </div>
            </main>
            <footer>
                <h3 id="footerTitle">${footerContent.footerTitle}</h3>
                <p id="footerSub">${footerContent.footerSub}</p>
            </footer>
            `;
document.body.innerHTML = template;

