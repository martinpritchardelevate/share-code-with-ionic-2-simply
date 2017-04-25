import { ActionReducer, Action } from '@ngrx/store';
import { TestExtensionActions } from './test-extension.actions';

export const testExtensionReducer: ActionReducer<any> = (state: any = {}, action: Action) => {
    switch (action.type) {
        case TestExtensionActions.TEST_ACTION:
            console.log("%c'TEST action fired from 'shared-code'", "background: yellow; font-size: large");
            return state;
        default:
            return state;
    }
}
