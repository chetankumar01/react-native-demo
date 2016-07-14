'use strict';

import React, { Component } from 'react';

import {
  ListView,

} from 'react-native';


import AddToDo from './todo-add';

import {connect} from 'react-redux';

import {toJS} from 'immutable';

  import TodoCommentListUI from './todo-comment-ui';

class TODOList extends Component {
  constructor(){
    super();
    this.state = {
      comment : ''
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  navigateToTodoList = () => {
    this.props.addTodoComment({todo: this.todoText, comment: this.state.comment});
    this.props.navigator.pop();
  }

  render(){
    const dataSource = this.state.dataSource.cloneWithRows(this.props.commentList.toJS());
    return(
      <View>

      <TodoCommentListUI
          dataSource = {dataSource}
          navigateToAddTodo = {this.navigateToTodo}
      />
      </View>
    )
  }
}

function mapStateToProps(state){
  return {
    todoList: state.todoReducer.get('commentList')
  }
}

function mapDispatchToProps(dispatch){
  return {
    toggleTodo: (index) => {
      dispatch({
        type: 'ADD_COMMENT',
        todo: this.state.comment
        text : this.state.comment
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TODOList);
