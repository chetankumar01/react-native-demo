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
      <TouchableHighlight onPress={this.onClick.bind(this)}>
      <View style={customStyle.alignRow}>
      {(this.props.isChecked == true) ?
        <Image style = {customStyle.check}
          //source = {require('./image/check/check.png')
          />
      :
        <Image style = {customStyle.uncheck}/>
      }
      <Text>{this.props.text}</Text>
      </View>
    </TouchableHighlight>

    )
  }
}

const customStyle = StyleSheet.create({

    uncheck:{
      width:25,
      height:25,
      borderColor: 'red',
      borderWidth: 2,
      marginRight :20,
      marginBottom :20,


    },
    check:{
      width:25,
      height:25,
      backgroundColor: 'red',
      marginRight :20,
      marginBottom :20,
    },
    alignRow: {
      flexDirection: 'row'
    }


  })

  export default Checkbox;
