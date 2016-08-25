import { FlashMessageInterface } from './flash-message.interface';

export class FlashMessage implements FlashMessageInterface {
    text: string = 'default text';
    cssClass: string = '';
    
    constructor(text?: string, cssClass?: string) {
        this.text = text;
        this.cssClass = cssClass;
    }
}
