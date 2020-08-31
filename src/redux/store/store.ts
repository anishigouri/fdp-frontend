import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loginReducer } from '../ducks/login';
import { pilotReducer } from '../ducks/pilot';

export const rootReducer = combineReducers({
  loginReducer,
  pilotReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
export default store;

export type RootState = ReturnType<typeof rootReducer>;
