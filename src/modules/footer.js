// import { lunchGenerator } from './lunch-generator';

export default class Footer {
    constructor(footerTitle, footerSub) {
        this.footerTitle = footerTitle;
        this.footerSub = footerSub;
        // console.log(lunchGenerator.footerText);
    }

    // addFooterText() {
        
    //     window.onload = () => {
    //         // this.footerText = this.lunchArray;
    //         document.getElementById('button').addEventListener('click', () => {
    //             console.log(lunchGenerator.footerText);
    //         });  
            
    //     }
    // }
}


export const footerContent = new Footer ('For lunch you will having:', 'lunchGenerator');

