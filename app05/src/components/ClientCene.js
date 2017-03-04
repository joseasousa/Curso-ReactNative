import React, { Component } from 'react';
import {
  StyleSheet, 
  StatusBar, 
  View, 
  Text, 
  Image
} from 'react-native';

import NavBAr from './NavBar';

const detalheClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class ClientCene extends Component {

  render() {
    return (
      <View style={styles.backgroun} >
        <StatusBar backgroundColor='#b9c941' />

        <NavBAr back navigator={this.props.navigator} colorBack='#b9c941' />

        <View style={styles.cabecalho}>
          <Image source={detalheClientes} />
          <Text style={styles.txtTitulo}>Nossos Clientes</Text>
        </View>       
        
        <View style={styles.detalheCliente}>
            <Image source={cliente1} />
            <Text style={styles.txtDetalhes}>Sys Caras que mandao bem</Text>
        </View>
        
        <View style={styles.detalheCliente}>
            <Image source={cliente2} />
            <Text style={styles.txtDetalhes}>rsm outros carinhas</Text>        
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
    color: '#b9c941',
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
    alignItems: 'center'
  },
  detalheCliente: {
    padding: 20,
    marginTop: 10
  }
});
