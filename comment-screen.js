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

// .get('text')
  render(){
    let indexNo = this.props.route.indexNo
    let todoText = this.props.todoList.get(indexNo)
    console.log(todoText.get('text'));
    console.log(todoText.get('status'));
    
    let commentObj = this.props.list.find( (commentObj) => {return commentObj.get('index') === (indexNo)});
    let list = commentObj.get('comments');
    const dataSource = this.state.dataSource.cloneWithRows(list.toJS())
    return(
      <CommentUI
        heading = {todoText}
        indexNo = {indexNo}
        dataSource = {dataSource}
        navigateToAddTodo = {this.navigateToAddTodo}
        addComment = {this.addComment}
        toggleTodo = {this.props.toggleTodo}

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

function mapDispatchToProps(dispatch){
  return {
    addComment: (text,index) => {
      dispatch({
        type: 'ADD_COMMENT',
        text,
        index
      })
    },
    toggleTodo: (index) => {
      dispatch({
        type: 'TOGGLE_TODO',
        index
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(commentScreen);
