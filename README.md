📱 **Projeto: Calculadora IMC (Índice de Massa Corporal)**


ㅤ

📝 **Descrição Geral**

Este projeto consiste no desenvolvimento de um aplicativo mobile chamado Calculadora de IMC, criado utilizando React Native com suporte do Expo. O app permite que o usuário insira seu peso (em kg) e altura (em cm), e o app calcula seu IMC (Índice de Massa Corporal), a classificação de acordo com a OMS e o intervalo de peso ideal com base na altura fornecida e depois exibe essas informações. O objetivo do projeto é aplicar, de forma prática, os conceitos de criação de componentes, manipulação de estado, lógica de programação e estilização em interfaces móveis.


ㅤ

🎯 **Objetivos do Projeto**

  O projeto Calculadora de IMC teve como principal objetivo colocar em prática os conhecimentos adquiridos no desenvolvimento de aplicativos mobile utilizando React Native e Expo. A ideia foi construir um app funcional que permitisse ao usuário inserir seu peso e altura para obter, de forma automática, seu Índice de Massa Corporal (IMC), além da classificação conforme as faixas da Organização Mundial da Saúde e o intervalo de peso ideal com base na altura informada.
  
  Durante o desenvolvimento, buscou-se aprender a estruturar corretamente um projeto em React Native, separando a lógica em componentes reutilizáveis, como os responsáveis pelo cálculo do IMC, classificação e peso ideal. A manipulação dos dados foi feita com o uso do hook useState, permitindo capturar e atualizar dinamicamente as informações inseridas pelo usuário.
  
  Outro objetivo importante foi aplicar lógica de programação no cálculo matemático do IMC e na definição de condições para identificar a classificação correspondente. Também foi implementado o cálculo do peso ideal com base nos limites saudáveis de IMC (entre 18.5 e 24.9). A estilização da interface foi feita com o uso do StyleSheet, priorizando uma aparência agradável e uma boa experiência para o usuário. Foram utilizadas cores contrastantes, cantos arredondados, espaçamentos adequados e uma imagem de fundo para tornar o visual mais moderno e atrativo.
  
  Com isso, o projeto permitiu trabalhar não apenas os conceitos técnicos da programação mobile, mas também boas práticas de organização, clareza na apresentação dos dados e foco na usabilidade. Além disso, serviu como uma oportunidade para treinar o uso do GitHub, entender melhor o funcionamento do Expo, e reforçar o raciocínio lógico aplicado a situações reais.


ㅤ

⚙️ **Funcionamento do Código da Calculadora de IMC**

O aplicativo Calculadora de IMC foi desenvolvido utilizando React Native com o suporte do Expo. Seu funcionamento está dividido em componentes, organizando a lógica e a interface de forma clara e modular.


1. **App.js**: Este é o ponto de entrada do aplicativo. Ele importa e exibe dois componentes principais: Title (responsável por mostrar o título do app) e FormIMC (que contém os campos de entrada e lógica de cálculo). Além disso, define uma imagem de fundo para melhorar a aparência visual da aplicação.

2. **Title.js**: Um componente simples que exibe o título "Calculadora de IMC" centralizado e estilizado.

3. **FormIMC.js**: Este é o componente principal de interação com o usuário. Ele contém:

- Campos de entrada (TextInput) para o usuário digitar o peso e a altura.
- Um botão (Button) para iniciar o cálculo.
- Um bloco condicional que exibe os resultados somente após o cálculo.
- A função calcularIMC, que:
  - Converte a altura de centímetros para metros.
  - Calcula o IMC com a fórmula: peso dividido pela altura ao quadrado.
  - Chama a função obterClassificacao para retornar a faixa correspondente ao IMC.
  - Chama a função calcularPesoIdeal para retornar o intervalo ideal de peso com base na altura.

4. **Classification.js**: Contém uma função que recebe o valor do IMC e retorna a classificação correspondente com base nas faixas definidas pela Organização Mundial da Saúde (OMS), como "Peso normal", "Sobrepeso", "Obesidade grau 1", entre outros.

5. **IdealWeight.js**: Contém a lógica para calcular o peso ideal. Com base na altura informada, calcula o peso mínimo e máximo da faixa considerada saudável (IMC entre 18.5 e 24.9).

6. **Result.js**: Responsável por exibir os resultados de forma organizada e estilizada. Ele mostra o valor do IMC calculado, a classificação correspondente e o intervalo de peso ideal para a altura do usuário.

**Resumo do fluxo:**

O usuário digita seu peso e altura → Pressiona o botão de cálculo → O app calcula o IMC → Classifica o resultado → Mostra o intervalo de peso ideal → Exibe tudo isso na tela de forma amigável e clara.


ㅤ

📥 **Como baixar ou clonar o projeto**

**Requisitos:**
- Ter o Node.js instalado (https://nodejs.org/pt)
- Ter o Expo CLI instalado globalmente (npm install -g expo-cli)

**Instalação**
- git clone https://github.com/LuisTorres2009/CalculadoraIMC.git
- cd CalculadoraIMC
- npm install
- npx expo start --tunnel
