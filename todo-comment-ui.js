'use strict';

import React from 'react';
import {View, ListView, StyleSheet} from 'react-native';

import TextLabel from './text-label';
import Button from './button';
import Checkbox from './checkbox';

export default function(props){

  function renderTodo (todo, sectionId, rowId){
    return  <TextLabel label={todo.text} color={'purple'}/>

  }

  //render equivalent
  return(
    <View style={styles.flexCenter}>
      <View>
        <TextLabel label={props.todo} color={'green'}/>
        <View style={{flex: 1}}>
          <ListView
              dataSource = {props.dataSource}
              renderRow = {renderTodo}
          />
        </View>
        <Button buttonText='Add to do' onClick={props.navigateToTodoList} />
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
