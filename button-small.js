import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

class ButtonSmall extends Component{

  render(){
    return(
      <TouchableHighlight style={styles.button} onPress={this.props.onClick}>
        <Text>{this.props.buttonText}</Text>
      </TouchableHighlight>
    );
  }

}

const styles = StyleSheet.create({
  button: {
    width: 30,
    height:30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:5,
    backgroundColor: 'yellow',
  }
})

export default ButtonSmall;
