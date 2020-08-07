import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { loginReducer } from '../ducks/loginReducer';

const rootReducer = combineReducers({
  login: loginReducer,
});

const store = createStore(rootReducer, devToolsEnhancer({}));
export default store;
