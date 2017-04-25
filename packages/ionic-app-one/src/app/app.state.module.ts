import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {
    TestExtensionActions,
    TestExtensionEffects,
    testExtensionReducer
} from 'shared-ngrx';

@NgModule({
    exports: [],
    imports: [
        EffectsModule.run(TestExtensionEffects),
        StoreModule.provideStore({
            testExtension: testExtensionReducer
        }),
        StoreDevtoolsModule.instrumentStore()
    ],
    providers: [
        TestExtensionActions,
        TestExtensionEffects
    ]
})
export class AppStateModule { }

export interface IAppState {
	testExtension: any
}
