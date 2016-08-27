import { Component, OnInit } from '@angular/core';
import { FlashMessage } from './flash-message';
import { FlashMessagesService } from './flash-messages.service';
import { FlashMessageInterface } from './flash-message.interface';

@Component({
  selector: 'flash-messages',
  template: `
      <div id="flashMessages" class="flash-messages {{classes}}">
          <div class="flash-message {{message.cssClass}}" *ngFor='let message of messages'>
              <p>{{message.text}}</p>
          </div> 
      </div>
      <div *ngIf='!messages.length'>No flash messages</div>
  `,
  styles: ['#flashMessages {opacity: 0;}']
})
export class FlashMessagesComponent implements OnInit {
    private _defaults = {
        text: 'default message',
        cssClass: ''
    };

    text: string;
    messages: FlashMessageInterface[] = [];

    private _flashMessagesElement: any;

    constructor(private _flashMessagesService: FlashMessagesService) {
        this._flashMessagesService.push = this.push.bind(this);
    }

    ngOnInit() {
        this._flashMessagesElement = document.getElementById('flashMessages');
    }
    
    push(text?: string, cssClass?: string): void {
        let message = new FlashMessage(text, cssClass);
        this.messages.push(message);
        this._show();
    }

    private _show() {
        this._flashMessagesElement.style.opacity = 1;
        this._flashMessagesElement.style.zIndex = 9999;
        window.setTimeout(() => this._hide(), 2500);
    }

    private _hide() {
        this._flashMessagesElement.style.opacity = 0;
        window.setTimeout(() => { 
            this._flashMessagesElement.style.zIndex = 0;
            this.messages = [];
        }, 400);
    }
}
