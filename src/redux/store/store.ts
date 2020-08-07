import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { loginReducer } from '../ducks/login';

const rootReducer = combineReducers({
  login: loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, devToolsEnhancer({}));
export default store;
