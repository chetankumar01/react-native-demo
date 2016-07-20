'use strict';

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const ADD_TODO = 'ADD_TODO';

export  function toggleTodo(index){
  return{
    type: TOGGLE_TODO,
    index
  }
}

export  function addTodo(text){
  return{
    type: ADD_TODO,
    text
  }
}
