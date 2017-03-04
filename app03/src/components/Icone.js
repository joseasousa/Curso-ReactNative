import React, { Component } from 'react';

import {  
  StyleSheet,
  Text,  
  View,
  Image
} from 'react-native';

class Icone extends Component {
  render() {
    if (this.props.escolha === 'pedra') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={require('../../img/pedra.png')} />
        </View>
      );

    }
    else if (this.props.escolha === 'papel') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={require('../../img/papel.png')} />
        </View>
      );

    }
    else if (this.props.escolha == 'tesoura'){
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={require('../../img/tesoura.png')} />
        </View>
      );

    } else {
      return false;
    }

  }
}

export default Icone;

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  },
  icone: {
    alignItems: 'center',
    marginBottom: 20
  },
  txtJogador: {
    fontSize: 18
  }
});
