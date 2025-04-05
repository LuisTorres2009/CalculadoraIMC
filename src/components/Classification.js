// Função que recebe o IMC como parâmetro e retorna a classificação correspondente
const obterClassificacao = (imc) => {
  // Verifica em qual faixa o IMC se encaixa e retorna a classificação apropriada
  if (imc < 18.5) return 'Abaixo do peso';
  if (imc < 25) return 'Peso normal';
  if (imc < 30) return 'Sobrepeso';
  if (imc < 35) return 'Obesidade grau 1';
  if (imc < 40) return 'Obesidade grau 2';
  return 'Obesidade grau 3 (obesidade mórbida)';
};

export default obterClassificacao;