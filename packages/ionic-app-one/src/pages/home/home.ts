import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { IAppState } from '../../app/app.state.module';
import { TestExtensionActions } from 'shared-ngrx';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(
        private navCtrl: NavController,
        private store: Store<IAppState>) {
        this.store.dispatch(new TestExtensionActions().fireTestAction());
    }

}
