import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Title from './src/components/Title';
import FormIMC from './src/components/FormIMC';

export default function App() {
  // Define as variáveis de estado para IMC e altura
  const [imc, setImc] = useState(0);
  const [altura, setAltura] = useState(0);

  return (
    <ImageBackground
      source={require('./assets/Imagem_de_Fundo.jpg')} // Imagem de fundo do app
      style={styles.background}
      resizeMode="cover" // Ajusta a imagem para cobrir a tela inteira
    >
      <View style={styles.container}>
        <Title /> {/* Componente que exibe o título do app */}

        {/* Componente de formulário onde o usuário insere peso/altura e calcula os resultados */}
        <FormIMC setImc={setImc} setAltura={setAltura} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Garante que o fundo ocupe toda a tela
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
  },
});