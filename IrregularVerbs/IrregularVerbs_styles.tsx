/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: 1000
    },
    content: {
        justifyContent: 'center',
        width: "100%",
        height: "50%",
        alignItems: 'center',
    },
    instruction: {
        padding: 10,
        margin: 10,
        height: "7%",
        color: '#edabc2',
    },
    labels: {
        color: '#edabc2',
        fontSize: 20,
    },
    currentVerbContainer: {
        flexDirection: 'row',
        justifyContent:"space-between",
        alignItems: "center",
        width: '100%',
        height: "15%",
        padding: 10
    },
    currentVerb: {
        fontSize: 20,
        color: '#30b0ae',
        justifyContent:"center",
        alignItems: "center",
        fontWeight: 'bold',
        width: "40%",
        height: "100%",
        borderBottomWidth: 2,
        borderBottomColor: '#540324',
    },
    showButton: {
        backgroundColor: '#540324',
        padding: 10,
        borderRadius: 15,
        width: 100,
        alignItems: 'center',
        justifyContent: "center"
    },
    inputs_container: {
        backgroundColor: '#360a19',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
        width: '100%',
        height: "100%"
    },
    input_properties: {
        flexDirection: 'column',
        paddingTop: 10,
        width: '70%',
        height: 150,
        alignItems: 'flex-start',
    },
    icon_container: {
        flexDirection: 'column',
        width: '100%',
        alignItems: 'flex-end',
        color: 'white',
        margin: 0,
    },
    rightAnswer:{
        color: "#30b0ae",
        fontSize: 20
        
    },
    first_input: {
        padding: 2,
        margin: 5,
        color: 'white',
        backgroundColor: '#171113',
        borderRadius: 5,
        width: '100%',
        height: 40,
        fontSize: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#edabc2',
        borderLeftWidth: 1,
        borderLeftColor: '#edabc2',
    },
    writeText: {
        backgroundColor: 'white',
        color: 'black',
        width: 200,
    },
    second_input: {
        padding: 2,
        margin: 5,
        color: 'white',
        backgroundColor: '#171113',
        borderRadius: 5,
        width: '100%',
        height: 40,
        fontSize: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#edabc2',
        borderLeftWidth: 1,
        borderLeftColor: '#edabc2',
    },
    third_input: {
        padding: 2,
        margin: 5,
        color: 'white',
        backgroundColor: '#171113',
        borderRadius: 5,
        width: '100%',
        height: 40,
        fontSize: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#edabc2',
        borderLeftWidth: 1,
        borderLeftColor: '#edabc2',
    },

    bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        height: "10%"
    },

    checkAnswer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#30b0ae',
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },

    StartButton: {
        backgroundColor: '#30b0ae',
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        width: 100,
        height: 50,
        color: "white",
        borderRadius: 15,
    },
    NextButton: {
        backgroundColor: '#30b0ae',
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        padding: 10,
        borderRadius: 15,
        height: 50,
        width: 100,
    },
});

export default styles;
