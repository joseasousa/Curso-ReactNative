/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const img = require('./imgs/logo.png');

export default class Frases02 extends Component {
  numeroAleatorio = () => {
    let numero = Math.random();
    numero = Math.floor(5 * numero);
    const frases = [];
    frases[0] = 'O trabalho não é ruim. Ruim é ter de trabalhar!';
    frases[1] = 'A culpa é minha e eu coloco ela em quem eu quiser!';
    frases[2] = 'Existem três jeitos de fazer as coisas: o jeito certo, o jeito errado, e o meu jeito, que é igual ao jeito errado, só que mais rápido.';
    frases[3] = 'Bem, ele pode ter todo o dinheiro do mundo, mas tem uma coisa que ele não pode comprar... Um dinossauro!';
    frases[4] = 'Bem, ele pode ter todo o dinheiro do mundo, mas tem uma coisa que ele não pode comprar... Um dinossauro!';

    Alert.alert(frases[numero]);
  }
  
  render() {
    return (
      <View style={Estilos.principal}>
       <Image source={img} />        
        <TouchableOpacity 
        style={Estilos.botao} 
        onPress={this.numeroAleatorio} >
        <Text style={Estilos.textoBotao}>Frase do dia</Text>          
        </TouchableOpacity >
      </View>
    );
  }

}

const Estilos = StyleSheet.create({
  principal: {    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: '#fff'
  }
});

AppRegistry.registerComponent('Frases02', () => Frases02);
