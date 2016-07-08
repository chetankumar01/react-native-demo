import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


import TextLabel from './text-label';
import Button from './button';

import Home from './home';

class NotHome extends Component {

  constructor(){
    super();
    this.state = {
      count: 0
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
      component: Home,
      name: 'Home'
    });
  }

  render(){
    return(
      <View style={styles.flexCenter}>
        <TextLabel label={'Not Home'} color={'red'}/>
        <TextLabel label={this.state.count} color={'black'}/>
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
    justifyContent: 'center'
  }
});

export default NotHome;
