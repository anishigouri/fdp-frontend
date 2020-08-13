import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer } from '../ducks/login';
import { pilotReducer } from '../ducks/pilot';

export const rootReducer = combineReducers({
  loginReducer,
  pilotReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

export type RootState = ReturnType<typeof rootReducer>;
