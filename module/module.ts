import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule }            from '@angular/common';
import { FlashMessagesComponent }    from './flash-messages.component';
import { FlashMessagesService }    from './flash-messages.service';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ FlashMessagesComponent ],
    exports:      [ FlashMessagesComponent ],
    providers:    [ ]
})
export class FlashMessagesModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: FlashMessagesModule,
            providers: [FlashMessagesService]
        }
    }
}
