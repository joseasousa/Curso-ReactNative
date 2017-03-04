/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, 
  StyleSheet, 
  Text, 
  Button,
  TextInput,
  View
} from 'react-native';
import firebase from 'firebase';

export default class app7Fire extends Component {

    constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA1hWfIz6W6WwdmoMRglcafhYZ4liV-JGo',
      authDomain: 'react-a7412.firebaseapp.com',
      databaseURL: 'https://react-a7412.firebaseio.com',
      storageBucket: 'react-a7412.appspot.com',
      messagingSenderId: '527913862234'
    };
    firebase.initializeApp(config);
  }

  savarDados(value) {
    const database = firebase.database();
    database.ref('pontuacao').set(value);
    this.setState({ text: '' });
  } 

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TextInput  
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => this.setState({ text })}
        value={this.state.text} 
        />
        <Button 
          title="Salvar Dados" 
          color="#841584"
          accessibilityLabel="Salvar Dados"
          onPress={() => { this.savarDados(this.state.text); }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('app7Fire', () => app7Fire);
