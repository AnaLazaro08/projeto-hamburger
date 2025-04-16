import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        if (username === 'aluno' && password === 'Senai1234') {
            navigation.navigate('Home');
        } else if (username === 'root' && password === 'root') {
            navigation.navigate('AdminHome');
        } else {
            setErrorMessage('Usuário ou senha incorretos.');
            setTimeout(() => setErrorMessage(''), 2000);
        }
    };

    const handleRegistrer = () => {
        navigation.navigate('Cadastro');
    };

    const handleForgotPassword = () => {
        navigation.navigate('ForgotPassword');
    };

    return (
        <View style={styles.container}>
        /* Balão estilizado */
            <view style={styles.bubbleContainer}>
                <View style={styles.bubble}>
                    <Text style={styles.bubbleText}>Logo</Text>
                    <text style={styles.bubbleText}>Empresa</text>
                </View>
            </view>

        /* Título */
            <text style={styles.title}>Bem-vindo!</text>

            <TextInput
                style={styles.input}
                placeholder="Usuário"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

            <TouchableOpacity onPress={handleRegistrer}>
                <Text style={styles.link}>Cadastre-se</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.link}>Esqueci minha senha</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#F8F4EC',
    },

    bubbleContainer: {
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        top: 30,
        left: 20,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    bubble: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#F8F4EC',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        width: '90%',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 4 },
    },
    bubbleText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
        color: '#3C2415',
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    loginButton: {
        backgroundColor: '#D2691E',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    loginButtonText: {
        color: '#3C2415',
        fontSize: 16,
        fontWeight: 'bold',
    },
    link: {
        color: '#3C2415',
        textAlign: 'center',
        marginTop: 10,
    },
    error: {
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
    },
});