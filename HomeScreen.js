// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function HomeScreen() {
    return(
        <View style={styles.container}>
            <text>Home screen</text>
            <text style={styles.header}>Notícias de Hoje</text>
            <FlatList
            data={newsData}
            renderItem={({ item }) => <NewsItem item={item} />}
            keyExtractor={item => item.id}
            />
        </View>
    );
}

//simulação de dados de noticias 
const newsData = [
    {id: '1', title: 'Ultimas notícias sobre tecnologia', description:'Novidades e avanços no mundo da tecnologia.'},
    {id: '2', title: 'Mercado financeiro em alta', description:'Análise do desempenho do mercado financeiro.'},
    {id: '3', title: 'Dicas de viajem para o verão', description:'melhores destinos e dicas para aproveitar o verão.'},
    {id: '4', title: 'Nova atualização de software disponível', description:'detalhes sobre a mais recente  versão de software.'},
];

const NewsItem = ({ item }) => (
    <View style={styles.newsItem}>
        <text style={styles.title}>{item.title}</text>
        <text style={styles.description}>{item.description}</text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingTop: 40,//espaço para o status bar
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    newsItem: {
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        color: '#555'
    },
});
