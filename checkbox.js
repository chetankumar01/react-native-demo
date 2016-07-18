import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

class Checkbox extends Component{
  onClick(){
    this.props.onClick(this.props.index)
  }
  render(){
    return (
      <View style={customStyle.alignRow}>
      <TouchableHighlight onPress={this.onClick.bind(this)} style={{marginRight : 10}}>
      {(this.props.isChecked == true) ? <Image style = {customStyle.check} /> : <Image style = {customStyle.uncheck}/>
      }
    </TouchableHighlight>
    <Text>{this.props.text}</Text>
    </View>

    )
  }
}

const customStyle = StyleSheet.create({

    uncheck:{
      width:25,
      height:25,
      borderColor: 'red',
      borderWidth: 2,
    },
    check:{
      width:25,
      height:25,
      backgroundColor: 'red',
      borderWidth: 2,
    },
    alignRow: {
      flexDirection: 'row',
      marginRight : 20
    }
  })

  export default Checkbox;
