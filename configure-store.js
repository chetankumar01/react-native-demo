'use strict';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import todoReducer from './todo-reducer';
import commentReducer from './comment-reducer';
import thunk from 'redux-thunk';

export default function configureStore() {

  const rootReducer = combineReducers({
    todoReducer,commentReducer
  });

  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

  return store;
}
