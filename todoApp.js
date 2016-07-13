'use strict';

import React from "react";

import { Provider } from 'react-redux';
import configureStore from './configure-store';

import App from './app';

class TodoApp extends React.Component {
  render () {
    const store = configureStore();
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default TodoApp;
