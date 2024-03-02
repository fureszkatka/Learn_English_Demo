import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        height: 1000,
        width: "100%",
        justifyContent: "flex-start",
    },
    instructions:{
        color: "pink",
        fontSize: 20,
        padding: 10
    },
    content:{
        backgroundColor: "#A16F11",
        width: "100%",
        padding: 10
    },
    sentence_container:{
        justifyContent: "center",
        flexWrap: "wrap",
        width: '100%',
        borderBottomColor: "#362307",
        borderBottomWidth: 2
    },
    inputs:{
        backgroundColor: "#E4F03E",
        color: "#07362c",
        height: 50,
        fontSize: 20,
        margin: 5,
        width: 300,
        borderRadius: 15,
        padding: 5
    },
    texts:{
        backgroundColor: "#DAAF3A",
        color: "#362307",
        margin: 10,
        fontSize: 17,
        borderRadius: 15,
        padding: 5,
        alignSelf: 'flex-start'

    }
})

export default styles