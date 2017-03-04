import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View  
} from 'react-native';

const btnVolt = require('../imgs/btn_voltar.png');

export default class NavBar extends Component {
  render() {
    if (this.props.back) {
      return (
        <View 
        style={[styles.barraTitle, 
          { backgroundColor: this.props.colorBack }]} 
        >
        <TouchableHighlight
        onPress={() => {
          this.props.navigator.pop();
        }}
        >
        <Image source={btnVolt} />
        </TouchableHighlight>
        
        <Text style={styles.title}>
          ATM Consultoria
        </Text>
      </View>
      );
    }
    return (
      <View style={styles.barraTitle} >      
        <Text style={styles.title}>
          ATM Consultoria
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  barraTitle: {
    backgroundColor: '#ccc',
    padding: 10,
    height: 60,
    flexDirection: 'row'
  },
  title: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000'
  }
});
