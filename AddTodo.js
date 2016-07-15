'use strict';

import React, { Component } from 'react';
import TODOList from './todo-list';
import {connect} from 'react-redux';
import AddTodoUI from './add-todo-ui';

class AddTodo extends Component {


render(){
    return(
      <AddTodoUI
      navigateToAddTodo = {this.navigateToAddTodo}

      />
    )
  }

  navigateToAddTodo = () => {
    this.props.addTodo(props.todoText);
    this.props.navigator.pop({
      component:TODOList,
      name:'TODOList'//identifire
    });
  }

}


function mapStateToProps(state){
  return {
  }
}

function mapDispatchToProps(dispatch){
  return {
    addTodo: (text) => {
        dispatch({
        type: 'ADD_TODO',
        text
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTodo);
