import { useState, useEffect } from 'react';

import { carregaProdutores } from '../services/carregaDados';

export default function useProdutores() {
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

  return [titulo, lista];
}

