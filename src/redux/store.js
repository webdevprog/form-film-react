import { createStore, combineReducers } from 'redux';
import filmReducer from './film-reducers';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    filmPage: filmReducer,
    form: formReducer.plugin({
        film: (state, action) => { // <------ 'account' is name of form given to reduxForm()
          switch(action.type) {
            case 'ACCOUNT_SAVE_SUCCESS':
              return undefined;       // <--- blow away form data
            default:
              return state;
          }
        }
      })
});

const store = createStore(reducers);
window.store = store;
export default store;