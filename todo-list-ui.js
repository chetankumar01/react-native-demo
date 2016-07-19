'use strict';
import React from 'react';
import {View, ListView, StyleSheet} from 'react-native';

import TextLabel from './text-label';
import Button from './button';
import Checkbox from './checkbox';


export default function(props){
  let indexNo = 0;

  function dummyComment(index){
    props.comment(Number(index))
  }

  function renderTodo(todo, sectionId, rowId){
    let commentObj = props.commentList.find( (commentObj) => {return commentObj.get('index') === parseInt(rowId)});
    let list = commentObj.get('comments');

    return <View style={{  flexDirection: 'row'}}>
      <Checkbox text={todo.text} onClick={props.toggleTodo} isChecked={todo.status} index={rowId} />
      <Button
        buttonText='Comment' onClick={dummyComment.bind(this, rowId)}
        style={{  width:25, height:25,}}
         />
         <TextLabel label= {list.size} color='yellow'/>

     </View>
  }

  return(
    <View style={styles.flexCenter}>
        <TextLabel label={'List of To dos'} color={'red'}/>
        <View style={{flex: 1}}>
          <ListView
              dataSource = {props.dataSource}
              renderRow = {renderTodo}
          />
        </View>
        <Button buttonText='Add to do' onClick={props.navigateToAddTodo} />
    </View>
  )
}

const styles = StyleSheet.create({
  flexCenter: {
    backgroundColor: 'skyblue',
    marginTop:15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
