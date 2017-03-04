/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Text, View, Button} from 'react-native';

export default class app03 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      escolhaUsuario: ''
    }
  }
  jokenpo(escolhaUsuario){
    this.setState({
      escolhaUsuario: escolhaUsuario
    });
  }

  render() {
    return (
      <View>
        <Text>Escolha do computador</Text>
        <Text>Escolha do usuário : {this.state.escolhaUsuario}</Text>
        <Text>Resultado</Text>
        <Button title="Pedra" onPress={ () => {this.jokenpo('pedra')}}/>
        <Button title="Papel" onPress={ () => {this.jokenpo('papel')}}/>
        <Button title="Tesoura" onPress={ () => {this.jokenpo('tesoura')}}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('app03', () => app03);
