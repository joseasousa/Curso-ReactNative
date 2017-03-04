import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';


import MainCene from './src/components/MainCene';
import ClienteCene from './src/components/ClientCene';

export default class app05 extends Component {
  render() {
    return (  
        <Navigator 
        initialRoute={{ id: 'main' }}
        renderScene={(route, navigator) => {
            if (route.id === 'main') {
              return (<MainCene navigator={navigator} />);
            }            
            if (route.id === 'cliente') {
              return (<ClienteCene navigator={navigator} />);
            }
        }} 
        />
    );
  }
}

AppRegistry.registerComponent('app05', () => app05);
