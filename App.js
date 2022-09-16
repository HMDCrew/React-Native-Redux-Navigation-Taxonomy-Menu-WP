import 'react-native-gesture-handler';
import React, { Component } from 'react'
import AppNavigation from './navigation'
import { store } from './store';
import { Provider } from 'react-redux';


export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  };
};