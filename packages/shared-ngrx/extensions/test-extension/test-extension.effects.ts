import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { TestExtensionActions } from './test-extension.actions';
import "rxjs/add/operator/map";

@Injectable()
export class TestExtensionEffects {
    constructor(
        private actions$: Actions
    ) {}

    @Effect() getVacancies$ = this.actions$
        .ofType(TestExtensionActions.TEST_ACTION)
        .switchMap(action => Observable.of('Hellow World'));

}
