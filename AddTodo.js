'use strict';

import React, { Component } from 'react';
import TODOList from './todo-list';
import {connect} from 'react-redux';
import AddTodoUI from './add-todo-ui';

import * as TodoActions from './todo-action';

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

export default connect(mapStateToProps, {...TodoActions})(AddTodo);
