import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        boxShadow: '0px 5px 3px -4px rgba(0, 0, 0, 0.3)'
    },
    title: {
        color: '#404040',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 30

    },
    perfil: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginLeft: 45,
        marginTop: 20,
        borderColor: '#01E16E',
        borderWidth: 3
    },
    nivel: {
        marginLeft: 57,
        color: '#9390AC'
    },
    botoes: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    botoesEsq: {
        width: 30,
        height: 30,
        marginLeft: 15,
        marginTop: 30,
        borderRadius: 50,
        boxShadow: 'rgba(0, 0, 0, 0.35) 5px 5px 10px'
    },
    botaoDir: {
        backgroundColor: '#D0D0DC',
        width: 100,
        height: 30,
        borderRadius: 50,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        marginTop: 35,
        marginLeft: -10,
        boxShadow: 'rgba(0, 0, 0, 0.35) 5px 5px 10px',
    },
    botaoDImg: {
        width: 25,
        height: 25,
        alignSelf: 'flex-end',
        marginRight: 5,
        marginTop: 4,
        tintColor: '#404040'
    },
    snorlax: {
        width: 35,
        height: 45,
        marginLeft: 20,
        marginTop: -35
    },
})