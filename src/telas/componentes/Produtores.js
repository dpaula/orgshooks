import React, { useEffect, useState } from 'react';

import { Text, FlatList, StyleSheet } from 'react-native';

import Produtor from './Produtor';

import { carregaProdutores } from '../../services/carregaDados';

export default function Produtores({ topo: Topo }) {
  //useState retorna um array com duas posições: 
  //o primeiro elemento é o valor inicial do estado, o segundo é uma função para atualizar o valor do estado
  //sempre deve ser o primeiro a ser declarado na função
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  //useEffect é um método que executa uma função após o componente ser montado
  useEffect(() => {
    const retorno = carregaProdutores();
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
    console.log("CARREGADOOOOO!!");

  }, []);

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