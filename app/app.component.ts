import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
        <h3>App Component</h3>
        <router-outlet></router-outlet>
        <hr>
        <flash-messages></flash-messages>
    `
})
export class AppComponent {}
