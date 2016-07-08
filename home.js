import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


import TextLabel from './text-label';
import Button from './button';

import NotHome from './not-home';

class Home extends Component {

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
      component: NotHome,
      name: 'Not Home'
    });
  }

  render(){
    return(
      <View style={styles.flexCenter}>
        <TextLabel label={'Home'} color={'red'}/>
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

export default Home;
