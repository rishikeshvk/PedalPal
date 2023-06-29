import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'; // Thunk middleware for Redux
import { bicyclesReducer } from './reducers/bicyclesReducer';
import { alertsReducer } from './reducers/alertsReducer';
import { rentalsReducer } from './reducers/rentalsReducer';

const composeEnhancers = composeWithDevTools({
  
});

const rootReducer = combineReducers({
    bicyclesReducer,
    alertsReducer,
    rentalsReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;