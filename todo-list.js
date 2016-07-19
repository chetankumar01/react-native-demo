'use strict';

import React, { Component } from 'react';
import {toJS} from 'immutable';
import {ListView} from 'react-native';
import {connect} from 'react-redux';

import TodoListUI from './todo-list-ui';
import AddTodo from './AddTodo';
import commentScreen from './comment-screen'
class TODOList extends Component {
  constructor(){

      super();
      this.state = {
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        }),
      };
    }

  comment = (index,commentText) => {
    this.props.navigator.push({
      component:commentScreen,
      indexNo : index,
      commentText:commentText
    });
  }

  navigateToAddTodo = () => {
    this.props.navigator.push({
      component:AddTodo,
    });
  }


  render(){
    const dataSource = this.state.dataSource.cloneWithRows(this.props.todoList.toJS())
    return(
      <TodoListUI
        dataSource = {dataSource}
        toggleTodo = {this.props.toggleTodo}
        navigateToAddTodo = {this.navigateToAddTodo}
        comment = {this.comment}
        />
    )
  }
}

function mapStateToProps(state){
  return {
    todoList: state.todoReducer.get('todoList')
  }
}

function mapDispatchToProps(dispatch){
  return {
    toggleTodo: (index) => {
      dispatch({
        type: 'TOGGLE_TODO',
        index
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TODOList);
