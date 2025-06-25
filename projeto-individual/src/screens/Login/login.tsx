import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles'
import pokemon from '../../../assets/International_Pokémon_logo.svg.png'
import eye from '../../../assets/eye.png'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

 export type StackParamList = {
    Home: undefined;

};

type LoginNavigationProp = NativeStackNavigationProp<StackParamList>;

export function Login() {
const navigation = useNavigation<LoginNavigationProp>();
    
    return (
        <View style={styles.container}>
            <Image style={styles.imagem} source={pokemon} />
            <Text style={styles.textoGrande}>Entre na sua conta do Clube de Treinadores de Pokemon</Text>
            <TextInput style={styles.input} placeholder='Nome de usuário' placeholderTextColor='#9390AC' />
            <TextInput 
            style={styles.input} placeholder='Senha' placeholderTextColor='#9390AC' secureTextEntry={true}
            />
            <Image style={styles.eye} source={eye} />
            <Text style={styles.textoProblema}>Problemas ao fazer o Login?</Text>
            <TouchableOpacity onPress={() => navigation.replace('Home')}>
                <Text style={styles.buttonEntrar}>Entrar</Text>
            </TouchableOpacity>
            <Text style={styles.textoConta}>Você já tem uma conta?</Text>
            <TouchableOpacity>
                <Text style={styles.buttonCriar}>Criar conta</Text>
            </TouchableOpacity>
            <Text style={styles.textoPokemon1}>©2025 Pokémon.</Text>
            <Text style={styles.textoPokemon2}>©1995 - 2025 Nintendo/Creatures Inc./GAME FREAK inc. TM, ®NINTENDO</Text>
        </View>
    )
}