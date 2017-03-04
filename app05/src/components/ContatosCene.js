import React, { Component } from 'react';
import {
  StyleSheet, 
  StatusBar, 
  View, 
  Text, 
  Image
} from 'react-native';

import NavBAr from './NavBar';

const contatos = require('../imgs/menu_contato.png');


export default class ClientCene extends Component {

  render() {
    return (
      <View style={styles.backgroun} >
        <StatusBar backgroundColor='#61bd8c' />

        <NavBAr back navigator={this.props.navigator} colorBack='#61bd8c' />

        <View style={styles.cabecalho}>
          <Image source={contatos} />         
          <Text style={styles.txtTitulo}>Contatos</Text> 
        </View>   

        <View style={styles.detalheContatos}>
         <Text style={styles.txtDetalhes}>TEL (11)1234-1234</Text>
        <Text style={styles.txtDetalhes}>CEL (11)1234-1234</Text>     
        <Text style={styles.txtDetalhes}>EMAIL: email@mail.com</Text>     
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({  
    backgroun: {
    flex: 1,
    backgroundColor: '#fff'
  },
  txtTitulo: {
    color: '#61bd8c',
    fontSize: 30,
    marginLeft: 10,
    marginTop: 25
  }, 
  txtDetalhes: {
     fontSize: 15,
     marginLeft: 20
  },
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    padding: 20
  },
  detalheContatos: {
    padding: 20,
    marginTop: 10
  }
});
