/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Itens,
  View
} from 'react-native';

export default class app04 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Itens style={styles.welcome}>
          Welcome to React Native!
        </Itens>
        <Itens style={styles.instructions}>
          To get started, edit index.ios.js
        </Itens>
        <Itens style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Itens>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('app04', () => app04);
