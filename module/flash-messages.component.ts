import { Component, OnInit } from '@angular/core';
import { FlashMessage } from './flash-message';
import { FlashMessagesService } from './flash-messages.service';
import { FlashMessageInterface } from './flash-message.interface';

@Component({
  selector: 'flash-messages',
  template: `
      <div id="flashMessages" class="flash-messages {{classes}}">
          <div id="grayOutDiv" *ngIf='_grayOut && messages.length'></div>
          <div class="alert flash-message {{message.cssClass}}" *ngFor='let message of messages'>
              <p>{{message.text}}</p>
          </div> 
      </div>
  `
})
export class FlashMessagesComponent implements OnInit {
    private _defaults = {
        text: 'default message',
        cssClass: ''
    };

    text: string;
    messages: FlashMessageInterface[] = [];
    _grayOut: boolean = false;

    private _flashMessagesElement: any;

    constructor(private _flashMessagesService: FlashMessagesService) {
        this._flashMessagesService.show = this.show.bind(this);
        this._flashMessagesService.grayOut = this.grayOut.bind(this);
    }

    ngOnInit() {
        this._flashMessagesElement = document.getElementById('flashMessages');
    }
    
    show(text?: string, options = {}): void {
        
        let defaults = {
          timeout: 2500,
          cssClass: ''
        };
        
        for (var attrname in options) { defaults[attrname] = options[attrname]; }
        
        let message = new FlashMessage(text, defaults.cssClass);
        this.messages.push(message);
        
        window.setTimeout(() => {
            this._remove(message);
        }, defaults.timeout);
    }
    
    grayOut(value = false) {
        this._grayOut = value;
    }

    private _remove(message: FlashMessageInterface) {
        this.messages = this.messages.filter(function(msg) {
          return msg.text !== message.text;
        });
    }
}
