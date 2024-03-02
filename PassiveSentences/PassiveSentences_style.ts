import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        height: 1000,
        width: "100%",
        justifyContent: "flex-start",
    },
    instructions:{
        color: "#E4AC7F",
        fontSize: 20,
        padding: 10,
        width: "100%",
    },
    content:{
        backgroundColor: "#AD2626",
        width: "100%",
        height: "100%",
        padding: 10,
    },
    checkButton:{
        backgroundColor: "#FFB005",
        alignSelf: "flex-end",
        padding: 10
    },
    sentencesContainer:{
        justifyContent: "flex-start",
        flexDirection: "column",
        margin: 10,
        borderBottomWidth: 2,
        padding: 5
    },
    example_sentence:{
        color: "#F7AFAA",
        fontSize: 17,
        alignSelf: 'flex-start',
        fontWeight: "bold",
        marginTop: 5,
    },
    inputs:{
        backgroundColor: "#76F03E",
        color: "#4B2401",
        height: 50,
        fontSize: 20,
        width: 300,
        borderRadius: 15,
        padding: 10,
        marginTop: 5,
    },
    texts:{
        color: "#B9F382",
        fontSize: 17,
        alignSelf: 'flex-start',
        fontWeight: "bold",
        marginTop: 5
    }
})

export default styles