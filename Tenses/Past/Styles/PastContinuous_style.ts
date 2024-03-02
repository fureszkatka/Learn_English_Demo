import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        height: 1000,
        width: "100%",
        justifyContent: "flex-start",
    },
    instructions:{
        color: "#3EF056",
        fontSize: 20,
        padding: 10
    },
    content:{
        backgroundColor: "#32A73F",
        width: "100%",
        padding: 10
    },
    sentence_container:{
        justifyContent: "center",
        flexWrap: "wrap",
        width: '100%',
        borderBottomColor: "#054115",
        borderBottomWidth: 2
    },
    inputs:{
        backgroundColor: "#3EF056",
        color: "#07362c",
        height: 50,
        fontSize: 20,
        margin: 5,
        width: 300,
        borderRadius: 15,
        padding: 5
    },
    texts:{
        backgroundColor: "#6FDF43",
        color: "#07360F",
        margin: 10,
        fontSize: 17,
        borderRadius: 15,
        padding: 5,
        alignSelf: 'flex-start'

    }
})

export default styles