import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    imagem: {
        width: 300,
        height: 110,
        alignSelf: 'center',
        marginTop: 100
    },
    textoGrande: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        fontFamily: 'comic sans ms'
    },
    input: {
        backgroundColor: '#252526',
        borderRadius: 10,
        margin: 10
    },
    eye: {
        width: 30,
        height: 30,
        marginLeft: 330,
        marginTop: -45,
        tintColor: '#9390AC',
    },
    textoProblema: {
        textAlign: 'center',
        marginTop: 20,
        color: '#049DD9'
    },
    buttonEntrar: {
        backgroundColor: '#3FB047',
        marginTop: 20,
        borderRadius: 10,
        width: 350,
        height: 50,
        alignSelf: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#fff'
    },
    textoConta: {
        textAlign: 'center',
        marginTop: 50
    },
    buttonCriar: {
        backgroundColor: '#fff',
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#3FB047',
        width: 350,
        height: 50,
        alignSelf: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#3FB047'
    },
    textoPokemon1: {
        textAlign: 'center',
        marginTop: 20,
        color: '#9390AC'
    },
    textoPokemon2: {
        textAlign: 'center',
        color: '#9390AC'
    }

})