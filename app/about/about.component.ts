import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from '../../module/index';

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
        this._flashMessagesService.push('we were in about');
        this.router.navigate(['/']);
    }
}
