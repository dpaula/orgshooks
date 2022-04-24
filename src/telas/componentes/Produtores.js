import React, { useEffect } from 'react';

import { Text } from 'react-native';

import { carregaProdutores } from '../../services/carregaDados';

export default function Produtores() {

  //useEffect é um método que executa uma função após o componente ser montado
  useEffect(() => {
    const retorno = carregaProdutores();
    console.log(retorno);

  }, []);

  return (
    <Text>Produtores</Text>
  );
}