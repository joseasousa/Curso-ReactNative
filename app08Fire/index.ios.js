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
  Alert,
  View
} from 'react-native';
import firebase from 'firebase';


export default class app7Fire extends Component {

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

  cadUser() {
    const email = 'a.sousajose@gmail.com';
    const password = 'senha123654';
    
    const user = firebase.auth();
    user.createUserWithEmailAndPassword(email, password)
    .catch((error) => {      
      Alert.alert(error.code, error.message);
    });
  }  

  checkUserLog() {
    const user = firebase.auth();
    user.onAuthStateChanged(
    ((currentUser) => {
        if (currentUser) {
          Alert.alert('usuario logado');
        } else {
          Alert.alert('usuario logado');
        }
      }));    
  }
  unlogUser() {
     const user = firebase.auth();
     user.signOut();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          cad manolo
        </Text>
        
        <Button 
          title="Cad Dados" 
          color="#841584"
          accessibilityLabel="Cad Dados"
          onPress={() => { this.cadUser(); }}
        />
        <Button 
          title="Check log User" 
          color="#841584"
          accessibilityLabel="Listar Dados"
          onPress={() => { this.checkUserLog(); }}
        />
        <Button 
          title="Log Off" 
          color="#841584"
          accessibilityLabel="Listar Dados"
          onPress={() => { this.unlogUser(); }}
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
