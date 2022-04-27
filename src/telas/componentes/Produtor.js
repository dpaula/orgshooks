import React, { useState } from 'react';

import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

import Estrelas from '../../componentes/Estrelas';

export default function Produtor({ nome, imagem, distancia, estrelas }) {
  const [selecionado, setSelecionado] = useState(false);

  return (
    <TouchableOpacity
      style={estilos.cartao}
      onPress={() => { setSelecionado(!selecionado) }}>
      <Image style={estilos.imagem} source={imagem} accessibilityLabel={nome} />
      <View style={estilos.informacoes}>
        <View>
          <Text style={estilos.nome}>{nome}</Text>
          <Estrelas
            quantidade={estrelas}
            editavel={selecionado}
            grande={selecionado} />
        </View>
        <Text style={estilos.distancia}>{distancia}</Text>
      </View>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: '#F6F6F6',
    //marginVertical é definido para que o cartão tenha um espaço entre os cartões, 8px acima e abaixo, dando 16px de espaço entre os cartões
    marginVertical: 8,
    //marginHorizontal é definido para que o cartão tenha um espaço entre os cartões
    marginHorizontal: 16,
    borderRadius: 8,
    //flexDirection é definido para que o cartão tenha uma orientação de coluna, um componente do lado do outro
    flexDirection: 'row',

    //Adicionando sombra ao 
    //Android
    elevation: 4,
    //iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginVertical: 16,
    marginLeft: 16,
  },
  informacoes: {
    //flex 1 é definido para que o conteudo do cartão ocupe todo o espaço disponivel
    flex: 1,
    flexDirection: 'row',
    //justifyContent é definido para que tenha um espaçamento entre o nome e a distancia
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  nome: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distancia: {
    fontSize: 12,
    lineHeight: 20,
  }
});