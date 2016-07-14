'use strict';

import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import TextLabel from './text-label';
import Button from './button';

import {connect} from 'react-redux';

class TODOAdd extends Component {

  navigateToTodoList = () => {
    this.props.navigator.pop();
  }

  addTodo = () => {
    this.props.addTodo({text: this.todoText});
    this.navigateToTodoList();
  }


  render(){
    return(
      <View style={styles.flexCenter}>
        <TextLabel label={'Add new TODO'} color={'red'}/>
        <TextInput
            style={{width : 300, height: 50, borderColor: 'red', borderWidth: 1, alignItems:'center'}}
            
            onChangeText={(text) => this.todoText = text}

        />
        <Button buttonText='Add' onClick={this.addTodo} />
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
