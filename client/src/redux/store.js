import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'; // Thunk middleware for Redux
import { bicycleReducer } from './reducers/bicycleReducer';
import { alertsReducer } from './reducers/alertsReducer';

const composeEnhancers = composeWithDevTools({
  
});

const rootReducer = combineReducers({
    bicycleReducer,
    alertsReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;