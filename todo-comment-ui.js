'use strict';

import React from 'react';
import {View, ListView, StyleSheet} from 'react-native';

import TextLabel from './text-label';
import Button from './button';
import Checkbox from './checkbox';

export default function(props){

  function renderTodo (comment, sectionId, rowId){
    return  <View style={{flexDirection: 'row', marginBottom:10}}>
      <Text> {comment} </Text>
      </View>
  }

  //render equivalent
  return(
    <View style={styles.flexCenter}>
      <View>
        <TextLabel label={props.selectedIndex} color={'green'}/>
        <Checkbox text={comment} onClick={props.toggleTodo} isChecked={todo.status} index={rowId}></Checkbox>

        <View style={{flex: 1}}>
          <ListView
              dataSource = {props.dataSource}
              renderRow = {renderTodo}
          />
        </View>
        <Button buttonText='Add Comment' onClick={props.navigateToTodoList} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  flexCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
