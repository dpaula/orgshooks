import React from 'react';

import { Image, StyleSheet } from 'react-native';

import estrela from '../../assets/estrela.png';
import estrelaCinza from '../../assets/estrelaCinza.png';

export default function Estrelas({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false
}) {

  return <Image source={estrela} style={estilos.estrela} />
}

const estilos = StyleSheet.create({
  estrela: {
    width: 12,
    height: 12,
  }
});