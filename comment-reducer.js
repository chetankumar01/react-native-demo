'use strict';
import {Map,List,fromJS} from 'immutable';
const initialState = fromJS({  //now its no more array , it changes to LIst
  commentList:[
    {
      index : 0,
      comments : ['hello', 'test']
    },
    {
      index : 1,
      comments : ['hello 1', 'test 1']
    }
  ]
});


export default function(state = initialState, action){
  switch(action.type){
    case 'ADD_COMMENT':
      {
        let commentList = state.get('commentList')
        let existingCommentObj = commentList.findEntry( (commentObj) => {return commentObj.get('index') === (action.index)});
        if(existingCommentObj){
          let comments = existingCommentObj[1].get('comments').push(action.text);
          let updatedCommentObj = existingCommentObj[1].set('comments', comments);
          commentList = commentList.set(existingCommentObj[0], updatedCommentObj)
        }
        else{
          let newCommentObj = fromJS({index: action.index, comments: [action.text]});
          commentList = commentList.push(newCommentObj);
        }
        state = state.set('commentList', commentList)
        console.log(state.toJS())
        return state;
      }

    default:
      return state
  }
}