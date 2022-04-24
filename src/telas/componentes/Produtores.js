import React, { useEffect, useState } from 'react';

import { Text } from 'react-native';

import { carregaProdutores } from '../../services/carregaDados';

export default function Produtores() {
  //useState retorna um array com duas posições: 
  //o primeiro elemento é o valor inicial do estado, o segundo é uma função para atualizar o valor do estado
  //sempre deve ser o primeiro a ser declarado na função
  const [titulo, setTitulo] = useState('');

  //useEffect é um método que executa uma função após o componente ser montado
  useEffect(() => {
    const retorno = carregaProdutores();
    setTitulo(retorno.titulo);

  }, []);

  return (
    <Text>{titulo}</Text>
  );
}