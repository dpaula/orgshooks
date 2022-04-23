import React from 'react';

import {Text, View, Image, StyleSheet} from 'react-native';

import logo from '../../../assets/logo.png';

//importando um método que foi exportado do arquivo src/mocks/produtores.js
import {carregaTopo} from '../../services/carregaDados';

//transformando a classe em um componente do react
class Topo extends React.Component {

  atualizaTopo(){
    const retorno = carregaTopo();
    console.log(retorno);
  }

  componentDidMount() {
    // console.log('Componente Topo foi montado');
    this.atualizaTopo();
  }

  render() {
    return (
      <View style={estilos.topo}>
        <Image source={logo} style={estilos.imagem} />
        <Text style={estilos.boasVindas}>Olá Fernando</Text>
        <Text style={estilos.legenda}>Encontre os melhores produtoes</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 42,
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Topo;
