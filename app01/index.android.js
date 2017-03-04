/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Text, View, Alert} from 'react-native';

import {Button} from 'react-native-elements';

export default class Randon01 extends Component {
  render() {
    const click = () => {
      const numero = Math.floor(Math.random() * 10);
      Alert.alert('Numero', numero.toString());
    };

    return (
      <View >
        <Text >
          Numeros Aleatorios
        </Text>
        <Button
          
                   title='OK'
          onPress={click}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('Randon01', () => Randon01);
