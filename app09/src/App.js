import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import Routes from './Routes';
import reducers from './reducers';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA1hWfIz6W6WwdmoMRglcafhYZ4liV-JGo',
      authDomain: 'react-a7412.firebaseapp.com',
      databaseURL: 'https://react-a7412.firebaseio.com',
      projectId: 'react-a7412',
      storageBucket: 'react-a7412.appspot.com',
      messagingSenderId: '527913862234'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Routes />
      </Provider>
    );
  }
}
