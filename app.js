import React, { Component } from 'react';

import {
  Navigator
} from 'react-native';


import Home from './home';
import NotHome from './not-home';

class App extends Component {

  renderScene(route, navigator) {
    let Component = route.component;
    return <Component navigator={navigator} />
  }

  render(){
    return(
      <Navigator
          ref='navigator'
          renderScene={this.renderScene.bind(this)}
          initialRoute={{
                        component: Home,
                        name: 'Home',
                        }}
      />
    )
  }
}

export default App;
