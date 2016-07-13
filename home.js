import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


import TextLabel from './text-label';
import Button from './button';
import Checkbox from './checkbox';

import NotHome from './not-home';
import TODOList from './todoList';

class Home extends Component {

  constructor(){
    super();
    this.state = {
      count: 0,
      isChecked:true,
      text:"checked",
      selectedData:[]

    };
  }

  incrementCount = () => {
    this.setState({count: this.state.count + 1})
  }

  decrementCount = () => {
    this.setState({count: this.state.count - 1})
  }

  switchRoute = () => {
    this.props.navigator.replace({
      component: NotHome,
      name: 'Not Home'
    });
  }

checkboxClick = () => {
  if (this.state.isChecked === true ){
    this.setState({text:'checked', isChecked:false})
  }else{
    this.setState({text:'notChecked' ,isChecked:true})
    }
}

todoList = () => {
  this.props.navigator.push({
    component:TODOList,
    name:'TO DO List....'
  });
}



  render(){
    return(
      <View style={styles.flexCenter}>
        <TextLabel label={'Home'} color={'red'}/>
        <TextLabel label={this.state.count} color={'black'}/>
        <Button buttonText='To Do List' onClick={this.todoList} />
        <Button buttonText={'Increment It'} onClick={this.incrementCount} />
        <Button buttonText={'Decrement It'} onClick={this.decrementCount} />
        <Button buttonText={'Change Route'} onClick={this.switchRoute} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flexCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

});

export default Home;
