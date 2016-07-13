'use strict';

import {createStore, combineReducers} from 'redux';
import todoReducer from './todo-reducer';

export default function configureStore() {
  
  const rootReducer = combineReducers({
    todoReducer,
  });
  
  const store = createStore(
    rootReducer
  );
  
  return store;
}
