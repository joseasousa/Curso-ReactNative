import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';


import MainCene from './src/components/MainCene';
import ClienteCene from './src/components/ClientCene';
import ContatoCene from './src/components/ContatosCene';
import EmpresaCene from './src/components/EmpresaCene';
import ServicoCene from './src/components/Servico.js';

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
            if (route.id === 'contato') {
              return (<ContatoCene navigator={navigator} />);
            }
            if (route.id === 'empresa') {
              return (<EmpresaCene navigator={navigator} />);
            }
             if (route.id === 'servico') {
              return (<ServicoCene navigator={navigator} />);
            }
        }} 
        />
    );
  }
}

AppRegistry.registerComponent('app05', () => app05);
