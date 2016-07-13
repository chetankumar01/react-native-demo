import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


import TextLabel from './text-label';
import Button from './button';
import Checkbox from './checkbox';

import Home from './home';

class TODOList extends Component {

  constructor(){
    super();
    this.state = {
      dict : [
        {
          name: 'Saab',
          status:false
        },
        {
          name: 'Volvo',
          status:false
        },
        {
          name: 'BMW',
          status:false
        }
      ]
    };
  }

  checkboxClick = (i) => {
    let todo = this.state.dict[i];
    if (todo.status === true ){
      todo.status = false
    }else{
      todo.status = true
    }
    let newDict = this.state.dict;
    newDict[i] = todo;
    this.setState({dict: newDict})
  }

  submit = () => {
    this.props.navigator.pop({
      component:Home,
      name:'Home'
      
    });
  }

  render(){
    return(
      <View style={styles.flexCenter}>
        <TextLabel label={'List of To do'} color={'red'}/>

        {this.state.dict.map((todo, index) => {
            return <Checkbox text={todo.name} onClick={this.checkboxClick}  isChecked={todo.status} index={index} />
          })
        }
        <Button buttonText='Submit' onClick={this.submit} />

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

export default TODOList;
