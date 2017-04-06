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
import { FlashMessagesModule } from 'angular2-flash-messages';
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

That should be enough if you use Webpack to bundle JavaScript.

Otherwise you'll have to edit `systemjs.config.js` to set correct path, e.g.:

```
// below you can see an example of map and packages sections in systemjs.config.js

System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
        // other
        'angular2-flash-messages':    'npm:angular2-flash-messages',
        // other
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
        // other
        "angular2-flash-messages": {
            main: 'index.js',
            defaultExtension: 'js'
        },
        // other
    }
});
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
        // 2nd parameter is optional. You can pass object with options.
        this._flashMessagesService.show('We are in about component!', { cssClass: 'alert-success', timeout: 1000 });
    }
}

```

By default flash message is visible for 2.5 seconds and then deleted. You can pass second argument and specify for how long flash message should be visible, e.g.:

```
// flash message will be visible for 1 second
this._flashMessagesService.show('We are in about component!', { timeout: 1000 });

```

You can specify CSS class for flash message div-element, e.g.:

```
// set CSS-class for wrapper div of flash message
this._flashMessagesService.show('We are in about component!', { cssClass: 'your-css-class' });

```

You can show multiple flash messages, e.g.:

```
this._flashMessagesService.show('Success!', { cssClass: 'alert-success' } );
this._flashMessagesService.show('Failure!', { cssClass: 'alert-danger' } );

```

Also you can gray out everything except your flash messages, e.g.:

```
this._flashMessagesService.grayOut(true); // turn on gray out feature
this._flashMessagesService.grayOut(false); // turn off gray out feature

```

By default gray out is disabled.

Notice! You have to add some CSS to see gray out in action, e.g.:
```
#grayOutDiv
{
    background-color: #333;
    opacity: 0.7;
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    overflow: hidden;
    z-index: 9999;
}

.flash-message
{
    z-index: 10000;
    position: relative;
}

```

## Feedback

Please [leave your feedback](https://github.com/moff/angular2-flash-messages/issues) if you have noticed any issues or have a feature request.

## License

The repository code is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
