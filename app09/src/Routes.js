import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormCadastro from './components/FormCadastro';
import FormLogin from './components/FormLogin';

export default () => (
	<Router>
     <Scene key='formLogin' component={FormLogin} title="Login" />
      <Scene key='formCadastro' component={FormCadastro} title="Cadastro" />
  </Router>
);

