'use strict';
import React from 'react';
import {View, ListView, StyleSheet,TextInput} from 'react-native';

import TextLabel from './text-label';
import Button from './button';
import Checkbox from './checkbox';
import ButtonSmall from './button-small'

export default function(props){

  let commentText = '';

  function deleteComment(commentIndex,todoIndex){
    props.deleteComment(Number(commentIndex),Number(todoIndex))
  }

  function renderTodo(todo, sectionId, rowId){ //Listview UI
    return <View style={{ flexDirection: 'row'}} >
      <TextLabel label={todo}index={rowId} />
      <ButtonSmall  buttonText='X' onClick = {deleteComment.bind(this,rowId,props.indexNo)} />
     </View>
    }

  function getCommentText(){
    props.addComment(commentText)
  }

  return(
    <View style={styles.flexCenter}>
      < Checkbox text={props.heading.get('text')} isChecked={props.heading.get('status')} onClick={props.toggleTodo} index={props.indexNo}  />

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
