import { Injectable } from '@angular/core';
import { FlashMessage } from './flash-message';
import { FlashMessageInterface } from './flash-message.interface';

@Injectable()
export class FlashMessagesService {
  activate: () => void;
  
  push(text?: string, cssClass?: string): void {
      let message = new FlashMessage(text, cssClass);
      this.messages.push(message);
  }
  
  messages: FlashMessageInterface[] = [];
}
