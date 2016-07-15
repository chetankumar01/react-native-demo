'use strict';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,

} from 'react-native';

import Button from './button';

export default function (props){
  return(
    <View style={styles.flexCenter}>
    <TextInput style={styles.textInput}
      onChangeText={(text) => this.todoText = ({text} )}
    />
    <Button buttonText='Submit' onClick={props.navigateToAddTodo} />

    </View>
  )
}
const styles = StyleSheet.create({
  flexCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'skyblue',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 300,
    margin: 50,

  }
});
