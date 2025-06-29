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
        marginTop: 45,
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
    },
    buttonLoja: {
        backgroundColor: '#D0D0DC',
        width: 150,
        height: 120,
        marginTop: 25,
        marginLeft: 170,
        borderTopLeftRadius: 40,
        borderBottomRightRadius: 40,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        boxShadow: 'rgba(0, 0, 0, 0.35) 5px 5px 10px',

    },
    lojaText1: {
        backgroundColor: '#D0D0DC',
        width: 120,
        height: 35,
        borderRadius: 50,
        marginTop: -20,
        boxShadow: 'rgba(0, 0, 0, 0.35) 5px 5px 10px',
        color: '#00012',
        fontSize: 12,
        textAlign: 'center',
    },
    exclamacao: {
        width: 20,
        height: 20,
        marginLeft: 140,
        marginTop: -20
    },
    lojaImg: {
        width: 50,
        height: 50,
        tintColor: '#9390AC',
        alignSelf: 'center',
        marginTop: 5
    },
    lojaText2: {
        alignSelf: 'center',
        marginTop: 10,
        color: '#9390AC'
    },
    buttonEscolha: {
        backgroundColor: '#D0D0DC',
        width: 150,
        height: 120,
        marginTop: -120,
        borderTopLeftRadius: 40,
        borderBottomRightRadius: 40,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        boxShadow: 'rgba(0, 0, 0, 0.35) 5px 5px 10px',
    },
    escolhaImg: {
        width: 55,
        height: 55,
        alignSelf: 'center',
        marginTop: 5
    },
    chanseyBox: {
        backgroundColor: 'red',
        width: 120,
        height: 35,
        borderRadius: 50,
        marginTop: -20,
        boxShadow: 'rgba(0, 0, 0, 0.35) 5px 5px 10px',
    },
    chansey: {
        width: 50,
        height: 50,
        marginTop: -7,
        marginLeft: -5
    },
    escolhaText1: {
        marginTop: -40,
        textAlign: 'right',
        fontSize: 10,
        color: '#fff'
    },
    escolhaText2: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#9390AC'
    },
    hearts: {
        width: 50,
        height: 20,
        marginTop: 90,
        marginLeft: 50,
        tintColor: '#F28705',
        borderColor: '#F28705',
        borderWidth: 2,
        borderRadius: 50
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    botoesFooter: {
        width: 30,
        height: 30,
        marginTop: 120,
        tintColor: '#404040',
    },
    botaoMissao: {
        width: 30,
        height: 30,
        marginLeft: 290.9,
        marginTop: 20,
        borderRadius: 10,
        boxShadow: 'rgba(0, 0, 0, 0.35) 5px 5px 10px',
        alignContent: 'center'
    },
    textMissao: {
        marginTop: 5,
        marginLeft: 290,
        color: '#9390AC',
        fontSize: 8.5,
        fontWeight: 'bold'
    }

})