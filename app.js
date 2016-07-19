import React, { Component } from 'react';

import {
  Navigator
} from 'react-native';


import TodoList from './todo-list';

class App extends Component {

  renderScene(route, navigator) {
    let Component = route.component;
    return <Component navigator={navigator} route={route}/>
  }

  render(){
    return(
      <Navigator
          ref='navigator'
          renderScene={this.renderScene.bind(this)}
          initialRoute={{
                        component: TodoList
                        }}
      />
    )
  }
}

export default App;
