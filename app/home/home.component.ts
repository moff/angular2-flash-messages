import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from '../../module/flash-messages.service';

@Component({
    template: `
        <p>Home Component</p>
        <button (click)='go()'>Go check what it is all about</button>
    `
})
export class HomeComponent {
    constructor(private router: Router,
                private _flashMessagesService: FlashMessagesService) {}
    
    go() {
        this._flashMessagesService.grayOut(true);
        this._flashMessagesService.show('we were at home' + Math.random(), { cssClass: 'alert-success', timeout: 3000, closeOnClick:true });
	    this._flashMessagesService.show("<b>Some HTML here <script>alert(\"0wned\")</script></b>", { cssClass: 'alert-success', timeout: 3000, closeOnClick:true });
        this.router.navigate(['/about']);
    }
}
