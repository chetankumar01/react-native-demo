'use strict';

import {Map, List, fromJS} from 'immutable';

const initialState = fromJS({
  todo : 'title'
  commentList: [
    {
      text: 'Comment 1',
    },
    {
      text: 'Comment 2',
    }
  ]
})


export default function(state = initialState, action){

  switch(action.type){
    case 'ADD_COMMENT':
      {
        todo :action.
        let newComment = fromJS({
          text: action.text,
        });

        let newTodoList = state.get('commentList').push(newTodo);

        return state.set('commentList', newTodoList);

      }
    default:
      return state
  }
}
