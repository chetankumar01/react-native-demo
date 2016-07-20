'use strict';

import React, { Component } from 'react';
import {toJS} from 'immutable';
import {ListView} from 'react-native';
import {connect} from 'react-redux';

import TodoListUI from './todo-list-ui';
import AddTodo from './AddTodo';
import commentScreen from './comment'
import * as TodoActions from './todo-action'

class TODOList extends Component {
  constructor(){
      super();
      this.state = {
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        }),
      };
    }

  comment = (index) => {
    this.props.navigator.push({
      component:commentScreen,
      indexNo : index,
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
    todoList: state.todoReducer.get('todoList'),
  }
}

export default connect(mapStateToProps, {...TodoActions})(TODOList);
