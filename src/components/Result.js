import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente Result recebe os dados calculados via props: imc, classificacao, pesoMinimo e pesoMaximo
const Result = ({ imc, classificacao, pesoMinimo, pesoMaximo }) => {
  return (
    // Container para exibir os resultados
    <View style={styles.resultadoContainer}>
      {/* Exibe o valor do IMC */}
      <Text style={styles.resultadoTexto}>Seu IMC é: {imc}</Text>
      {/* Exibe a classificação do IMC */}
      <Text style={styles.resultadoTexto}>Classificação: {classificacao}</Text>
      {/* Exibe o intervalo de peso ideal para a altura fornecida */}
      <Text style={styles.resultadoTexto}>
        Peso ideal entre {pesoMinimo}kg e {pesoMaximo}kg
      </Text>
    </View>
  );
};

// Estilos aplicados ao componente Result
const styles = StyleSheet.create({
  resultadoContainer: {
    marginTop: 16,
    backgroundColor: 'rgb(26, 32, 14)',
    padding: 12,
    borderRadius: 8,
  },
  resultadoTexto: {
    fontSize: 16,
    marginBottom: 4,
    color: 'rgb(245, 245, 220)',
  },
});

export default Result;