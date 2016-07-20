'use strict';
import {Map,List,fromJS} from 'immutable';
/*
   To use imutable object , run npm install imutable
   fromJS ---> imutable object   --> List and Map
   toJS ---->normal javascript object-assign --->Array

 */
import * as TodoActions from './todo-action';
import * as CommentActions from './comment-action';

const initialState = fromJS({
  //now its no more array , it changes to LIst
  todoList: [
    {
      text: 'get redux state to component',
      status: true,
      commentCount:0
    },
    {
      text: 'toggle this one using action',
      status: false,
      commentCount:0
    }
  ]
});


export default function(state = initialState, action){
  switch(action.type){
    case TodoActions.ADD_TODO:
      {
        let newTodo = fromJS({
          text: action.text,
          status: false
        });
        let newTodoList = state.get('todoList').push(newTodo);
        // let newTodoList = state.todoList.slice(0);
        // newTodoList.push(newTodo)

        return state.set('todoList',newTodoList);
        // return Object.assign({...state}, {todoList: newTodoList});
      }

    case TodoActions.TOGGLE_TODO:
      {
        let todo = state.get('todoList').get(action.index);
        todo = todo.set('status', !todo.get('status'));
        let newTodoList = state.get('todoList').set(action.index, todo);
        return state.set('todoList', newTodoList);
      }

    case CommentActions.ADD_COMMENT:
      {
        let todo = state.get('todoList').get(action.index);
        todo = todo.set('commentCount', todo.get('commentCount')+1);
        let newTodoList = state.get('todoList').set(action.index, todo);
        return state.set('todoList', newTodoList);
      }

    case CommentActions.DELETE_COMMENT:
      {
        let todo = state.get('todoList').get(action.todoIndex);
        todo = todo.set('commentCount', todo.get('commentCount')-1);
        let newTodoList = state.get('todoList').set(action.todoIndex, todo);
        return state.set('todoList', newTodoList);
      }

    default:
      return state
  }
}
