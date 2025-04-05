import { Text, StyleSheet } from 'react-native';

// Componente funcional chamado Title, responsável por exibir o título do app
const Title = () => {
    return (
        // Exibe o texto com o estilo definido em styles.title
        <Text style={styles.title}>Calculadora de IMC</Text>
    );
};

// Define os estilos usados no componente Title
const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#F5F5DC',
        marginBottom: 24,
    },
});

export default Title;