'use strict';

import {Map, List, fromJS} from 'immutable';

const initialState = fromJS({
  commentList: [
    {
      index : 0,
      comments: [
        'render this guy',
        'start adding comments'
      ],
    }
  ]
})


export default function(state = initialState, action){

  switch(action.type){
    case 'ADD_COMMENT':
      {
        todo :action.text;
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
