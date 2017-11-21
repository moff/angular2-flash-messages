import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { FlashMessagesModule } from '../module/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        FlashMessagesModule.forRoot()
    ],
    providers: [
        appRoutingProviders
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
