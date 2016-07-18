'use strict';

import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import TextLabel from './text-label';
import Button from './button';
import TodoAddUI from './todo-add-ui';

import {connect} from 'react-redux';

class TODOAdd extends Component {

  navigateToTodoList = () => {
    this.props.navigator.pop();
  }

  addTodo = () => {
    console.log('add to do');
    this.props.addTodo({text: this.todoText});
    this.navigateToTodoList();
  }

  render(){
    return(
      <TodoAddUI
          addTodo = {this.addTodo}
          navigateToTodoList = {this.navigateToTodoList}
      />
    )
  }
}

const styles = StyleSheet.create({
  flexCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

function mapStateToProps(state){
  return {}
}

function mapDispatchToProps(dispatch){
  return {
    addTodo: (text) => {
      dispatch({
        type: 'ADD_TODO',
        text: text.text
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TODOAdd);
