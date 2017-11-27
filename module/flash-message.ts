import { FlashMessageInterface } from './flash-message.interface';

export class FlashMessage implements FlashMessageInterface {
    static nextId = 0;
    
    id: number = (FlashMessage.nextId++);
    text: string = 'default text';
    cssClass: string = '';
    closeOnClick: boolean = false;
    showCloseBtn: boolean = false;
    timer: number;
    
    constructor(text?: string, cssClass?: string, closeOnClick?: boolean, showCloseBtn?: boolean) {
        if (text) this.text = text;
        if (cssClass) this.cssClass = cssClass;
        if (closeOnClick) this.closeOnClick = closeOnClick;
        if (showCloseBtn) this.showCloseBtn = showCloseBtn;
    }
}
