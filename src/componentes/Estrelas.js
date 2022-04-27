import React, { useState} from 'react';

import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import estrela from '../../assets/estrela.png';
import estrelaCinza from '../../assets/estrelaCinza.png';

export default function Estrelas({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false
}) {
  const [quantidade, setQuantidade] = useState(quantidadeAntiga);
  const estilos = estilosFuncao(grande);

  const RenderEstrelas = () => {
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <TouchableOpacity 
        key={i}
        onPress={() => { setQuantidade(i + 1)}} 
        disabled={!editavel}>
          <Image
            source={i < quantidade ? estrela : estrelaCinza}
            style={estilos.estrela}
          />
        </ TouchableOpacity>
      );
    }

    return listaEstrelas;
  }

  return (
    <View style={estilos.estrelas}>
      <RenderEstrelas />
    </View>
  );
}

const estilosFuncao = (grande) => StyleSheet.create({
  estrela: {
    width: grande ? 34 : 12,
    height: grande ? 34 : 12,
    marginRight: 2,
  },
  estrelas: {
    flexDirection: 'row',
  }
});