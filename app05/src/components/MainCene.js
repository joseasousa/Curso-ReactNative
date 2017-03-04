import React, { Component } from 'react';
import {
  StyleSheet, 
  StatusBar, 
  View, 
  TouchableHighlight, 
  Image
} from 'react-native';

import NavBAr from './NavBar';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

export default class MainCena extends Component {

  render() {
    return (
      <View >
        <StatusBar backgroundColor='#ccc' />

        <NavBAr />
        <View style={styles.menu}>

          <View style={styles.logo}>
            <Image source={logo} />
          </View>

          <View style={styles.menuGrup}>
            <TouchableHighlight
            underlayColor={'#b9c941'}
            activeOpacity={0.3}
              onPress={() => {
              this
                .props
                .navigator
                .push({ id: 'cliente' });
            }}
            >
              <Image style={styles.images} source={menuCliente} />
            </TouchableHighlight>

            <TouchableHighlight
            underlayColor={'#b9c941'}
            activeOpacity={0.3}
              onPress={() => {
              this
                .props
                .navigator
                .push({ id: 'contato' });
            }}
            >
              <Image style={styles.images} source={menuContato} />
            </TouchableHighlight>
          </View>
          <View style={styles.menuGrup}>

            <TouchableHighlight
            underlayColor={'#b9c941'}
            activeOpacity={0.3}
              onPress={() => {
              this
                .props
                .navigator
                .push({ id: 'empresa' });
            }}
            >
              <Image style={styles.images} source={menuEmpresa} />
            </TouchableHighlight>

            <TouchableHighlight
            underlayColor={'#b9c941'}
            activeOpacity={0.3}
              onPress={() => {
              this
                .props
                .navigator
                .push({ id: 'servico' });
            }}
            >
              <Image style={styles.images} source={menuServico} />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    marginTop: 30
  },
  menu: {
    alignItems: 'center'
  },
  menuGrup: {
    flexDirection: 'row'
  },
  images: {
    margin: 15
  }
});
