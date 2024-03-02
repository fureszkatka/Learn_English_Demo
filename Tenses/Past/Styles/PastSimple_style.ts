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
    button_container:{
        backgroundColor: "#21C284",
        padding: 10,
        alignSelf: "flex-end",
        borderRadius: 15
    },
    check_button:{
        fontSize: 16,
        color: "#07362c"
    },
    content:{
        backgroundColor: "#10856d",
        width: "100%",
        padding: 10
    },
    sentence_container:{
        justifyContent: "center",
        flexWrap: "wrap",
        width: '100%',
        borderBottomColor: "#07362c",
        borderBottomWidth: 2
    },
    inputs:{
        backgroundColor: "#3ef0cc",
        color: "#07362c",
        height: 50,
        fontSize: 20,
        margin: 5,
        width: 300,
        borderRadius: 15,
        padding: 5
    },
    texts:{
        backgroundColor: "#21ccaa",
        color: "#07362c",
        margin: 10,
        fontSize: 17,
        borderRadius: 15,
        padding: 5,
        alignSelf: 'flex-start'

    }
})

export default styles