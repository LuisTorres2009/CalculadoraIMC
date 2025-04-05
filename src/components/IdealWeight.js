// Função que calcula o intervalo de peso ideal baseado na altura
const calcularPesoIdeal = (altura) => {
  // Calcula o peso mínimo ideal com IMC 18.5 (limite inferior da faixa normal)
  const pesoMinimo = (18.5 * altura * altura).toFixed(1); // arredonda para 1 casa decimal

  // Calcula o peso máximo ideal com IMC 24.9 (limite superior da faixa normal)
  const pesoMaximo = (24.9 * altura * altura).toFixed(1); // arredonda para 1 casa decimal

  // Retorna um objeto com os dois valores calculados
  return { pesoMinimo, pesoMaximo };
};

export default calcularPesoIdeal;