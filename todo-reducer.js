'use strict';

import {Map, List, fromJS} from 'immutable';

const initialState = fromJS({
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
})


export default function(state = initialState, action){

  switch(action.type){
    case 'ADD_TODO':
      {
        let newTodo = fromJS({
          text: action.text,
          status: false
        });
        
        let newTodoList = state.get('todoList').push(newTodo);

        return state.set('todoList', newTodoList);

      }

    case 'TOGGLE_TODO':
      {
        let todo = state.get('todoList').get(action.index);
        todo = todo.set('status', !todo.get('status'));
        
        let newTodoList = state.get('todoList').set(action.index, todo);
        
        return state.set('todoList', newTodoList);
      }

    default:
      return state
  }
}
