import React, { useEffect, useState } from 'react';

import { Text, FlatList } from 'react-native';

import { carregaProdutores } from '../../services/carregaDados';

export default function Produtores() {
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

  }, []);

  return (
    <FlatList
      //data é um array de objetos que será exibido na tela
      data={lista}
      //renderItem é uma funcao que recebe qual atributo será exibido da lista
      renderItem={({ item: { nome } }) => <Text>{nome}</Text>}
      //ListHeaderComponent é uma função que será exibida no topo da lista
      ListHeaderComponent={() => <Text>{titulo}</Text>} />
  );
}