// import { lunchArray } from './modules/lunch-generator.js'

export default class Footer {
    constructor(footerTitle, footerSub) {
        this.footerTitle = footerTitle;
        this.footerSub = footerSub;
    }
}

// export let mealEntry = lunchArray[0].entree;
export const footerContent = new Footer ('For lunch you will be having:', 'mealEntry');
