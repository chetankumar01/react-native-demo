'use strict';

import React, { Component } from 'react';
import {toJS} from 'immutable';
import {ListView} from 'react-native';
import {connect} from 'react-redux';

import TODOList from './todo-list';
import CommentUI from './comment-ui'

class commentScreen extends Component {
  constructor(){
      super();
      this.state = {
        index:9,
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        }),
      };
    }


  addComment = (text) => {
    this.props.addComment(text,this.props.route.indexNo);
  }

  navigateToAddTodo = () => {
    this.props.navigator.pop({
      component:TODOList,
    });
  }


  render(){
    let commentObj = this.props.list.find( (commentObj) => {return commentObj.get('index') === (this.props.route.indexNo)});
    let list = commentObj.get('comments');
    const dataSource = this.state.dataSource.cloneWithRows(list.toJS())
    return(
      <CommentUI
        heading = {this.props.route.commentText}
        dataSource = {dataSource}
        navigateToAddTodo = {this.navigateToAddTodo}
        addComment = {this.addComment}
      />
    )
  }
}

function mapStateToProps(state){
  return {
    list: state.commentReducer.get('commentList')
  }
}

function mapDispatchToProps(dispatch){
  return {
    addComment: (text,index) => {
      dispatch({
        type: 'ADD_COMMENT',
        text,
        index
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(commentScreen);
