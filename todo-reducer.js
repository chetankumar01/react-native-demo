'use strict';

const initialState = {
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
}


export default function(state = initialState, action){

  switch(action.type){
    case 'ADD_TODO':
      {
        let newTodo = {
          text: action.text,
          status: false
        };
        state.todoList.push(newTodo);
        return state;
      }

    case 'TOGGLE_TODO':
      {
        let todo = state.todoList[action.index];

        let newTodo = {
          text: todo.text,
          status: !todo.status
        }

        let newTodoList = state.todoList.slice(0);

        newTodoList[action.index] = newTodo;

        state = Object.assign({...state}, {todoList: newTodoList});

        return state;
      }

    default:
      return state
  }
}
