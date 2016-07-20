'use strict';

import {Map,List,fromJS} from 'immutable';
import * as CommentActions from './comment-action';

const initialState = fromJS({
  //now its no more array , it changes to LIst
  commentList:[]
});


export default function(state = initialState, action){
  switch(action.type){
    case CommentActions.ADD_COMMENT:
      {
        let commentList = state.get('commentList');
        let existingCommentObj = commentList.findEntry( (commentObj) => {return commentObj.get('index') === (action.index)});
        if(existingCommentObj){
          let comments = existingCommentObj[1].get('comments').push(action.text);
          let updatedCommentObj = existingCommentObj[1].set('comments', comments);
          commentList = commentList.set(existingCommentObj[0], updatedCommentObj);
        }else{
          let newCommentObj = fromJS({index: action.index, comments: [action.text]});
          commentList = commentList.push(newCommentObj);
        }
        state = state.set('commentList', commentList);
        //increment the comment count
        return state;
      }

    case CommentActions.DELETE_COMMENT:
      {
        let totalCommentList = state.get('commentList');
        let commentList = totalCommentList.findEntry( (commentObj) => {return commentObj.get('index') === (action.todoIndex)});
        let comments = commentList[1].get('comments');
        comments = comments.delete(action.commentindex);
        let updatedCommentObj = commentList[1].set('comments', comments);
        totalCommentList = totalCommentList.set(commentList[0], updatedCommentObj);
        state = state.set('commentList', totalCommentList);
        //decrement the comment count
        return state;
      }

    default:
      return state
  }
}
