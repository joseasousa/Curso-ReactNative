import React, { Component } from 'react';
import {
  StyleSheet, 
  StatusBar, 
  View, 
  Text, 
  Image
} from 'react-native';

import NavBAr from './NavBar';

const servico = require('../imgs/menu_servico.png');


export default class ServicoCene extends Component {

  render() {
    return (
       <View style={styles.backgroun} >
        <StatusBar backgroundColor='#19d1c8' />

        <NavBAr back navigator={this.props.navigator} colorBack='#19d1c8' />

        <View style={styles.cabecalho}>
          <Image source={servico} />         
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
    color: '#19d1c8',
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
