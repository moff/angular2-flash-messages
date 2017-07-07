import { FlashMessageInterface } from './flash-message.interface';

export class FlashMessage implements FlashMessageInterface {
    static nextId = 0;
    
    id: number = (FlashMessage.nextId++);
    text: string = 'default text';
    cssClass: string = '';
    closeOnClick: boolean = false;
    timer: number;
    
    constructor(text?: string, cssClass?: string, closeOnClick?:boolean) {
        this.text = text;
        this.cssClass = cssClass;
        this.closeOnClick = closeOnClick;
    }
}
