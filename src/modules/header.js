export default class Header {
    constructor(headerTitle, headerSub) {
        this.headerTitle = headerTitle;
        this.headerSub = headerSub;
    }
}

export const headerContent = new Header ('Are You Hungry?', 'click the button below to generate your lunch')

console.log (headerContent)