'use strict';

import {createStore, combineReducers} from 'redux';
import todoReducer from './todo-reducer';
import commentReducer from './comment-reducer';

export default function configureStore() {

  const rootReducer = combineReducers({
    todoReducer,commentReducer
  });

  const store = createStore(
    rootReducer
  );

  return store;
}
