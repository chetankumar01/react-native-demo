'use strict';

import React, { Component } from 'react';
import TODOList from './todo-list';
import {connect} from 'react-redux';
import AddTodoUI from './add-todo-ui';

class AddTodo extends Component {


render(){
    return(
      <AddTodoUI
        addTodo = {this.addTodo}
      />
    )
  }

  addTodo = (text) => {
    this.props.addTodo(text);
    this.props.navigator.pop();
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
