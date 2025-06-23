import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import pokemon from '../../../assets/International_Pokémon_logo.svg.png'

export function Login() {
    return (
        <View style={styles.container}>
            <Image style={styles.imagem} source={pokemon} />
            <Text style={styles.textoGrande}>Entre na sua conta do Clube de Treinadores de Pokemon</Text>
        </View>
    )
}