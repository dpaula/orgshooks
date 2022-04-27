import React from 'react';

import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import estrela from '../../assets/estrela.png';
import estrelaCinza from '../../assets/estrelaCinza.png';

export default function Estrela({ onPress,
  desabilitada = true,
  preenchida,
  grande = false, }) {
  const estilos = estilosFuncao(grande);

  return <TouchableOpacity
    onPress={onPress}
    disabled={desabilitada}>
    <Image
      source={preenchida ? estrela : estrelaCinza}
      style={estilos.estrela}
    />
  </ TouchableOpacity>
}

const estilosFuncao = (grande) => StyleSheet.create({
  estrela: {
    width: grande ? 34 : 12,
    height: grande ? 34 : 12,
    marginRight: 2,
  },
});