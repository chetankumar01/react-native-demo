import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

class Button extends Component{

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
    width: 100,
    backgroundColor: 'red',
    margin: 10,
    padding: 10
  }
})

export default Button;
