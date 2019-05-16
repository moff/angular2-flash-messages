import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FlashMessage } from './flash-message';
import { FlashMessagesService } from './flash-messages.service';
import { FlashMessageInterface } from './flash-message.interface';

@Component({
  selector: 'flash-messages',
  template: `
      <div id="flashMessages" class="flash-messages">
          <div id="grayOutDiv" *ngIf='_grayOut && messages.length'></div>
          <div class="alert flash-message {{message.cssClass}}" [ngClass]="{'alert-dismissible':message.showCloseBtn}" [style.cursor]="message.closeOnClick?'pointer':'inherit'" *ngFor='let message of messages' (click)="alertClicked(message)">
              <button *ngIf="message.showCloseBtn" type="button" class="close" data-dismiss="alert" aria-label="Close" (click)="close(message)"><span aria-hidden="true">&times;</span></button>
              <div [innerHTML]="message.text"></div>
          </div> 
      </div>
  `
})
export class FlashMessagesComponent implements OnInit {
    private _defaults = {
        text: 'default message',
        closeOnClick: false,
        showCloseBtn: false,
        cssClass: ''
    };

    text: string;
    messages: FlashMessageInterface[] = [];
    classes: string = '';
    _grayOut: boolean = false;

    constructor(private _flashMessagesService: FlashMessagesService, private _cdRef: ChangeDetectorRef) {
        this._flashMessagesService.show = this.show.bind(this);
        this._flashMessagesService.grayOut = this.grayOut.bind(this);
    }

    ngOnInit() {}
    
    show(text?: string, options = {}): void {
        
        let defaults = {
          timeout: 2500,
          closeOnClick: false,
          showCloseBtn: false,
          cssClass: '',
          text: "default message"
        };
        
        for (var attrname in options) { (<any>defaults)[attrname] = (<any>options)[attrname]; }
        
        let message = new FlashMessage(text, defaults.cssClass, defaults.closeOnClick, defaults.showCloseBtn);

        message.timer = window.setTimeout(() => {
            this._remove(message);
            this._cdRef.detectChanges();
        }, defaults.timeout);

        this.messages.push(message);
        this._cdRef.detectChanges();
    }

    close(message:FlashMessage): void {
            clearTimeout(message.timer);
            this._remove(message);
            this._cdRef.detectChanges();
    }

    alertClicked(message:FlashMessage): void {
      if(message.closeOnClick){
        this.close(message);
      }
    }
    
    grayOut(value = false) {
        this._grayOut = value;
    }

    private _remove(message: FlashMessageInterface) {
        this.messages = this.messages.filter((msg) => msg.id !== message.id);
    }
}
