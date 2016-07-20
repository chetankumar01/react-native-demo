'use strict';

import React, { Component } from 'react';
import {toJS, fromJS} from 'immutable';
import {ListView} from 'react-native';
import {connect} from 'react-redux';

import TODOList from './todo-list';
import CommentUI from './comment-ui';

import * as TodoActions from './todo-action';
import * as CommentActions from './comment-action';

class commentScreen extends Component {
  constructor(){
      super();
      this.state = {
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        }),
      };
    }


  addComment = (text) => {
    if (text !== ""){
      this.props.addComment(text,this.props.route.indexNo);
    }
  }

  navigateToAddTodo = () => {
    this.props.navigator.pop({
      component:TODOList,
    });
  }

  render(){
    console.log(this.props);
    let indexNo = this.props.route.indexNo
    let todoText = this.props.todoList.get(indexNo)
    let commentObj = this.props.list.find( (commentObj) => {return commentObj.get('index') === (indexNo)});
    let list = commentObj ? commentObj.get('comments') : fromJS([]);
    const dataSource = this.state.dataSource.cloneWithRows(list.toJS())
    return(
      <CommentUI
        heading = {todoText}
        indexNo = {indexNo}
        dataSource = {dataSource}
        navigateToAddTodo = {this.navigateToAddTodo}
        addComment = {this.addComment}
        toggleTodo = {this.props.toggleTodo}
        deleteComment = {this.props.deleteComment}
      />
    )
  }
}

function mapStateToProps(state){
  return {
    list: state.commentReducer.get('commentList'),
    todoList: state.todoReducer.get('todoList')
  }
}

export default connect(mapStateToProps, { ...TodoActions, ...CommentActions })(commentScreen);
