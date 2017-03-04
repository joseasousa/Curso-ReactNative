import React, { Component } from 'react';
import {
  StyleSheet, 
  StatusBar, 
  View, 
  Text, 
  Image
} from 'react-native';

import NavBAr from './NavBar';

const empresa = require('../imgs/menu_empresa.png');


export default class EpresaCene extends Component {

  render() {
    return (
       <View style={styles.backgroun} >
        <StatusBar backgroundColor='#ec7148' />

        <NavBAr back navigator={this.props.navigator} colorBack='#ec7148' />

        <View style={styles.cabecalho}>
          <Image source={empresa} />         
          <Text style={styles.txtTitulo}>Contatos</Text> 
        </View>   

        <View style={styles.detalheContatos}>
         <Text style={styles.txtDetalhes}>Empresa de manolagem</Text>
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
    color: '#ec7148',
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
