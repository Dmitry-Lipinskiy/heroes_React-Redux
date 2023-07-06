import { legacy_createStore as createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import { filters } from '../reducers';
import { heroes } from '../reducers';

export const store = createStore(
  combineReducers({ heroes, filters }),
  compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);