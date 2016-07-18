'use strict';

import React, { Component } from 'react';

import {
  ListView,

} from 'react-native';


import AddToDo from './todo-add';
import AddListComment from './todo-comments';

import {connect} from 'react-redux';

import {toJS} from 'immutable';

import TodoListUI from './todo-list-ui';

class TODOList extends Component {
  constructor(){
    super();
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  navigateToAddTodo = () => {
    this.props.navigator.push({
      component: AddToDo,
    });
  }

  navigateToToDoDetail = (index) =>{
    console.log('test record'+index);
    this.props.navigator.push({
      component: AddListComment,
    });
    }

  render(){
    const dataSource = this.state.dataSource.cloneWithRows(this.props.todoList.toJS());
    return(
      <TodoListUI
          dataSource = {dataSource}
          toggleTodo = {this.props.toggleTodo}
          navigateToAddTodo = {this.navigateToAddTodo}
          navigateToToDoDetail = {this.navigateToToDoDetail}
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
    },
    setTodoSelected: (index) => {
      dispatch({
        type: 'SELECT_TODO',
        index
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TODOList);
