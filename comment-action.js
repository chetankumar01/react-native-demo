'use strict';

export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';


export  function addComment(text,index){
  return {
    type: ADD_COMMENT,
    text,
    index
  }
}


export  function deleteComment(commentindex,todoIndex){
  return {
    type:DELETE_COMMENT,
    commentindex,
    todoIndex,
  }
}
