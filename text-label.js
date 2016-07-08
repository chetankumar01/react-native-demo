import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class TextLabel extends Component{
  render(){
    return(
      <Text style={[styles.text, {color: this.props.color}]}>{this.props.label}</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginBottom: 50
  }
})

export default TextLabel;
