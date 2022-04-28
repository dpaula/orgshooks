import React, { useReducer, useMemo } from 'react';

import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

import Estrelas from '../../componentes/Estrelas';

const distanciaEmMetros = (distancia) => {
  return `${distancia}m`;
}

export default function Produtor({ nome, imagem, distancia, estrelas }) {
  //useReducer é hook que dado o estado atual, ação e um reducer, retorna um novo estado
  const [selecionado, inverterSelecionado] = useReducer(
    (selecionado) => !selecionado,
    false);

  //useMemo é um hook que guarda o resultado de uma função para ser usado posteriormente
  // e só atualiza quando o valor de algum dos parâmetros mudar
  const distanciaTexto = useMemo(
    () => distanciaEmMetros(distancia),
    [distancia]);

  return (
    <TouchableOpacity
      style={estilos.cartao}
      onPress={inverterSelecionado}>
      <Image style={estilos.imagem} source={imagem} accessibilityLabel={nome} />
      <View style={estilos.informacoes}>
        <View>
          <Text style={estilos.nome}>{nome}</Text>
          <Estrelas
            quantidade={estrelas}
            editavel={selecionado}
            grande={selecionado} />
        </View>
        <Text style={estilos.distancia}>{distanciaTexto}</Text>
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