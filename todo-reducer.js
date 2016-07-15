'use strict';
import {Map,List,fromJS} from 'immutable';
/*
To use imutable object , run npm install imutable
fromJS ---> imutable object   --> List and Map
toJS ---->normal javascript object-assign --->Array

*/
const initialState = fromJS({  //now its no more array , it changes to LIst
  todoList: [
    {
      text: 'get redux state to component',
      status: true
    },
    {
      text: 'toggle this one using action',
      status: false
    }
  ]
});


export default function(state = initialState, action){
  switch(action.type){
    case 'ADD_TODO':
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

    case 'TOGGLE_TODO':
      {
        let todo = state.get('todoList').get(action.index);
        todo = todo.set('status', !todo.get('status'));

        let newTodoList = state.get('todoList').set(action.index, todo);

        return state.set('todoList', newTodoList);


        // let todo = state.todoList[action.index];
        //
        // let newTodo = {
        //   text: todo.text,
        //   status: !todo.status
        // }
        // let newTodoList = state.todoList.slice(0);
        // newTodoList[action.index] = newTodo;
        // state = Object.assign({...state}, {todoList: newTodoList});
        // return state;


      }

    default:
      return state
  }
}
