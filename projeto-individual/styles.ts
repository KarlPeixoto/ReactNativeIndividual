import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D0D0DC',
        paddingTop: 60,
        paddingHorizontal: 30,

    },
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
    conteudo: {
        marginTop: 80,
        height: 490
    },
    display: {
        height: 370,
        borderTopLeftRadius: 40,
        borderBottomRightRadius: 40,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        overflow: 'hidden',
        boxShadow: 'rgba(0, 0, 0, 0.35) 5px 5px 10px',
    },
    pack: {
        width: 150,
        height: 300,
        alignSelf: 'center',
        marginTop: 15,
        boxShadow: 'rgba(0, 0, 0, 0.35) 5px 5px 10px',
    },
    timer: {
        backgroundColor: '#D0D0DC',
        width: 150,
        height: 50,
        borderRadius: 50,
        marginTop: -25,
        marginLeft: 87,
        boxShadow: 'rgba(0, 0, 0, 0.35) 5px 5px 10px',
    },
    timerBar: {
        width: 100,
        height: 20,
        marginTop: 5,
        marginLeft: 20,
        borderRadius: 50
    },
    pikachu: {
        width: 55,
        height: 55,
        marginTop: -40,
        marginLeft: 100
    },
    timerText: {
        marginTop: -12,
        marginLeft: 32,
        color: '#9390AC'
    },
    hourglass: {
        width: 50,
        height: 62,
        backgroundColor: '#D0D0DC',
        marginTop: -55,
        marginLeft: 155,
        borderRadius: 10,
        boxShadow: 'rgba(0, 0, 0, 0.35) 5px 5px 10px',

    }


    })