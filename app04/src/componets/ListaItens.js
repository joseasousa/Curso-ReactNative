import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import axios from 'axios';

import Itens from './Itens';


export default class ListaItens extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listItens: []
    };
  }
  
  componentWillMount() {
      axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then(response => this.setState({ listItens: response.data }))
      .catch(() => { console.log('Erooo'); });
  }
  
  
  render() {
    return (
      <ScrollView>
        {
          this.state.listItens.map(item =>  
          <Itens key={item.titulo} item={item} />
        )}
      </ScrollView>
    );
  }
}
