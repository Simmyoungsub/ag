import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { TitleComponent } from './title.component';
import { TitleService, UserServiceConfig } from './title.service';

@NgModule({
    imports : [],
    declarations : [TitleComponent],
    exports : [TitleComponent],
    providers : [TitleService,UserServiceConfig]
})

export class TitleModule {
    _userName : string;

    constructor(@Optional() @SkipSelf() config : UserServiceConfig){
        if(config){
            this._userName = config.userName;
        }
    }

    static forRoot(config : UserServiceConfig) : ModuleWithProviders {
        return {
            ngModule : TitleModule,
            providers : [
                {provide : UserServiceConfig, useValue : config}
            ]
        }
    }
}
