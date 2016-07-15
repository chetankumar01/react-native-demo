'use strict';
import React from 'react';
import {View, ListView, StyleSheet} from 'react-native';

import TextLabel from './text-label';
import Button from './button';
import Checkbox from './checkbox';


export default function(props){

  function renderTodo(todo, sectionId, rowId){
    return <Checkbox text={todo.text} onClick={props.toggleTodo} isChecked={todo.status} index={rowId} />
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
