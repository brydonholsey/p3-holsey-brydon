import './main.css';
import './modules/header.js';

class App {

    constructor() {
        this.renderTemplate();
    }

    renderTemplate() {
        const template = `
            <header>
                <h1 id="headerTitle"></h1>
                <h2 id="headerSub"></h2>
            </header>
            <main>
                <button id="generate-button">Generate</button>
                <div>
                    <ul>
                        <li id="entree">Entreé</li>
                        <li id="salad">Salad</li>
                        <li id="fruit">Fruit</li>
                        <li id="drink">Drink</li>
                        <li id="dessert">Dessert</li>
                    </ul>
                </div>
            </main>
            <footer>
                <h3 id="footerTitle"></h3>
                <p id="footerSub"></p>
            </footer>
            `;
            document.body.innerHTML = template;

    }
};

