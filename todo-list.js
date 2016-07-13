'use strict';

import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


import TextLabel from './text-label';
import Button from './button';
import Checkbox from './checkbox';

import {connect} from 'react-redux';

class TODOList extends Component {
  navigateToAddTodo = () => {
    this.props.navigator.push({
    });
  }

  toggleTodo = (index) => {
    this.props.toggleTodo(index);
  }
  
  render(){
    return(
      <View style={styles.flexCenter}>
        <TextLabel label={'List of To dos'} color={'red'}/>

        {this.props.todoList.map((todo, index) => {
            return <Checkbox text={todo.text} onClick={this.toggleTodo.bind(this, index)} isChecked={todo.status} index={index} key={index}/>
          })
        }
        <Button buttonText='Add to do' onClick={this.navigateToAddTodo} />
      </View>
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
  return {
    todoList: state.todoReducer.todoList
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
