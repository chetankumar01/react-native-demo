'use strict';

import {createStore, combineReducers} from 'redux';
import todoReducer from './todo-reducer';
import todoCommentReducer from './todo-comment-reducer';

export default function configureStore() {

  const rootReducer = combineReducers({
    todoReducer,todoCommentReducer
  });

  const store = createStore(
    rootReducer
  );

  return store;
}
