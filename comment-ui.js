'use strict';
import React from 'react';
import {View, ListView, StyleSheet,TextInput} from 'react-native';

import TextLabel from './text-label';
import Button from './button';


export default function(props){
  let commentText = '';

  function renderTodo(todo, sectionId, rowId){ //Listview UI
    return  <TextLabel label={todo}index={rowId}  />
  }

  function getCommentText(){
    props.addComment(commentText)
  }

  return(
    <View style={styles.flexCenter}>
      <TextLabel label={props.heading}/>
        <ListView 
            dataSource = {props.dataSource}
            renderRow = {renderTodo}
        />

        <TextInput style={[styles.textInput]}
          onChangeText={(text) => commentText = (text)}
        />

      <View style={{flexDirection: 'row'}}>
          <Button buttonText='Add' onClick={getCommentText} />
          <Button buttonText='Back' onClick={props.navigateToAddTodo} />
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  flexCenter: {
    backgroundColor: 'skyblue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:15,

  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 300,
    margin: 50,

  }
});
