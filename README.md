# Angular 2 flash messages module

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](http://opensource.org/licenses/MIT)

This is a simple module that provides component and service for showing flash messages.

## Requirements
- [NPM](https://npmjs.org/) - Node package manager


## Installation

- run `npm install angular2-flash-messages --save`
- import `FlashMessagesModule` in your app's main module `app.module.ts`, e.g.:

```
// other imports
// ...
import { FlashMessagesModule } from '../module/index';
// ...

@NgModule({
    imports: [
        // other imports
        // ...
        FlashMessagesModule,
        // ...
    ]
})

```

## Usage

Place flash messages component selector in a template, for example in `AppComponent`:

```
import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
        <flash-messages></flash-messages>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {}
```

Import FlashMessagesService and show flash message in any component, e.g.:

```
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    template: `
        <p>About Component</p>
    `
})
export class AboutComponent implements OnInit {
    constructor(private _flashMessagesService: FlashMessagesService) {}
    
    ngOnInit() {
        // 1st parameter is a flash message text
        // 2nd parameter is a CSS class for flash message div
        this._flashMessagesService.show('We are in about component!', 'alert-success');
    }
}

```

Flash message is visible for 2.5 seconds and then deleted.

You can show multiple flash messages, e.g.:

```
this._flashMessagesService.show('We are in about component!', 'alert-success');
this._flashMessagesService.show('But something went wrong!', 'alert-danger');

```

## Feedback

Please [leave your feedback](https://github.com/moff/angular2-flash-messages/issues) if you have noticed any issues or have a feature request.

## License

The repository code is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
