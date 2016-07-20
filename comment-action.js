export  function addComment(text,index){
  return {
    type: 'ADD_COMMENT',
    text,
    index
  }
}


export  function deleteComment(commentindex,todoIndex){
  return {
    type:'DELETE_COMMENT',
    commentindex,
    todoIndex,
  }
}
