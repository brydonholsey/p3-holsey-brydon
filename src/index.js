class App {

    constructor() {
        this.renderTemplate();
    }

    renderTemplate() {
        const template = 
        <div>
            <header>
                <h1>Are you hungry?</h1>
                <h2>click "generate" below to create your lunch!</h2>
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
                <h3>For lunch you will be having:</h3>
                <p id="lunch-combo"></p>
            </footer>
        </div>

    }
}