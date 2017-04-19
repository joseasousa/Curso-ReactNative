import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

const formLogin = props => (
  <View style={{ flex: 1, padding: 10 }}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 25 }}>
        WhatsApp Clone
      </Text>
    </View>
    <View style={{ flex: 2 }}>
      <TextInput
        style={{ fontSize: 20, height: 45 }}
        value={props.nome}
        placeholder="E-mail"
      />
      <TextInput style={{ fontSize: 20, height: 45 }} placeholder="Senha" />
      <TouchableHighlight onPress={() => Actions.formCadastro()}>
        <Text style={{ fontSize: 20 }}>
          Ainda não tem cadastro? Cadastre-se
        </Text>
      </TouchableHighlight>
    </View>
    <View style={{ flex: 2 }}>
      <Button title="Acessar" color="#115E54" onPress={() => false} />
    </View>
  </View>
);

const mapStateToProps = state => ({
  email: state.AutentificacaoReducer.email,
  senha: state.AutentificacaoReducer.senha,
  nome: state.AutentificacaoReducer.nome
});

export default connect(mapStateToProps, null)(formLogin);