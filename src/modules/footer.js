import { lunchArray } from './modules/lunch-generator.js'

export class Footer {
    constructor(footerTitle, footerSub) {
        this.footerTitle = footerTitle;
        this.footerSub = footerSub;
    }
}

let footerLunch = (lunchArray[0]);

console.log(footerLunch);

export const footerContent = new Footer ('For lunch you will be having:', );
