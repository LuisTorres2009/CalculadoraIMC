import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import Result from './Result';
import obterClassificacao from './Classification';
import calcularPesoIdeal from './IdealWeight';

const FormIMC = () => {
  // Estados para armazenar os dados inseridos pelo usuário e os resultados dos cálculos
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');
  const [pesoMinimo, setPesoMinimo] = useState(null);
  const [pesoMaximo, setPesoMaximo] = useState(null);

  // Função executada ao clicar no botão "Calcular IMC"
  const calcularIMC = () => {
    if (peso && altura) {
      // Converte altura para metros (usuário digita em cm)
      const alturaMetros = parseFloat(altura) / 100;

      // Calcula o IMC: peso / (altura²)
      const imcCalculado = parseFloat(peso) / (alturaMetros * alturaMetros);

      // Formata o IMC com 2 casas decimais
      const imcFormatado = imcCalculado.toFixed(2);
      setImc(imcFormatado); // Armazena o IMC calculado

      // Obtém a classificação do IMC usando a função importada
      setClassificacao(obterClassificacao(imcCalculado));

      // Calcula o peso ideal com base na altura e atualiza os estados
      const { pesoMinimo, pesoMaximo } = calcularPesoIdeal(alturaMetros);
      setPesoMinimo(pesoMinimo);
      setPesoMaximo(pesoMaximo);
    }
  };

  return (
    <View style={styles.formContainer}>
      {/* Campo para inserir o peso */}
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        placeholderTextColor="rgb(245, 245, 220)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      {/* Campo para inserir a altura */}
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        placeholderTextColor="rgb(245, 245, 220)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      {/* Botão que dispara o cálculo do IMC */}
      <Button title="Calcular IMC" onPress={calcularIMC} color="rgb(26, 32, 14)" />

      {/* Campo que exibe os resultados se o IMC tiver sido calculado */}
      {imc && (
        <Result
          imc={imc}
          classificacao={classificacao}
          pesoMinimo={pesoMinimo}
          pesoMaximo={pesoMaximo}
        />
      )}
    </View>
  );
};

// Estilos do formulário
const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'rgb(34, 43, 19)',
    padding: 16,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: 'rgb(245, 245, 220)',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
    color: 'white',
  },
});

export default FormIMC;
