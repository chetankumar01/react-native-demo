'use strict';

import React from 'react';
import {
  View,
  ListView,
  StyleSheet,
} from 'react-native';

import DetailButton from './detailButton';

import Button from './button';
import Checkbox from './checkbox';
import TextLabel from './text-label';

export default function(props){

function test(){
//  props.setTodoSelected(props.index)
props.navigateToToDoDetail()

}
  function renderTodo (todo, sectionId, rowId){
    return <View style={{flexDirection: 'row', marginBottom:10}}>
      <Checkbox text={todo.text} onClick={props.toggleTodo} isChecked={todo.status} index={rowId}></Checkbox>
      <DetailButton buttonText='Detail' onClick={props.navigateToToDoDetail} index={rowId}></DetailButton>
      </View>
  }

  //render equivalent
  return(
    <View style={styles.flexCenter}>

    <View style = {styles.textCenter}>
      <TextLabel label={'List of To dos'} color={'red'}/>
      </View>
      <View>
        <View style={{flex: 1}}>
          <ListView
              dataSource = {props.dataSource}
              renderRow = {renderTodo}
          />
        </View>
        <View>
          <Button buttonText='Add to do' onClick={props.navigateToAddTodo} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  flexCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCenter: {
    padding : 30,
  }
});
