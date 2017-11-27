import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from '../../module/flash-messages.service';

@Component({
    template: `
        <p>About Component</p>
        <button (click)='go()'>Go home</button>
    `
})
export class AboutComponent {
    constructor(private router: Router,
                private _flashMessagesService: FlashMessagesService) {}
    
    go() {
        this._flashMessagesService.grayOut(false);
        this._flashMessagesService.show('we were in about' + Math.random(), { cssClass: 'alert-danger', showCloseBtn:true });
        this.router.navigate(['/']);
    }
}
