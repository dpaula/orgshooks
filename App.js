import React from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';

import Home from './src/telas/index';

function App() {
  return (
    <SafeAreaView style={estilos.tela}>
      <Home />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  tela: {
    //flex 1 é definido para que o conteudo da tela ocupe todo o espaço disponivel
    flex: 1,
  }
});

export default App;
