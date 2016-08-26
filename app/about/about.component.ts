import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
        <p>About Component</p>
        <button (click)='go()'>Go home</button>
    `
})
export class AboutComponent {
    constructor(private router: Router) {}
    
    go() {
        this.router.navigate(['/']);
    }
}
