'use strict';

export  function toggleTodo(index){
  return{
    type: 'TOGGLE_TODO',
    index
  }
}
