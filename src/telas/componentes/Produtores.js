import React from 'react';

import { Text, FlatList, StyleSheet } from 'react-native';

import Produtor from './Produtor';

import useProdutores from '../../hooks/useProdutores';

export default function Produtores({ topo: Topo }) {
  const [titulo, lista] = useProdutores();

  const topoLista = () =>
    <>
      <Topo />
      <Text style={estilos.titulo}>{titulo}</Text>
    </>

  return (
    <FlatList
      //data é um array de objetos que será exibido na tela
      data={lista}
      //renderItem é uma funcao que recebe qual atributo será exibido da lista
      renderItem={({ item }) => <Produtor {...item} />}
      //keyExtractor é uma funcao que recebe um objeto e retorna uma string que será utilizada como chave para cada item da lista
      keyExtractor={({ nome }) => nome}
      //ListHeaderComponent é uma função que será exibida no topo da lista
      ListHeaderComponent={topoLista} />
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  }
});