import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        height: 700,
        width: "100%",
        justifyContent: "flex-start",
    },
    instructions:{
        color: "#7FE4BD",
        fontSize: 20,
        padding: 10,
        width: "100%",
    },
    content:{
        backgroundColor: "#108568",
        width: "100%",
        height: "100%",
        padding: 10
    },
    button_container:{
        flexDirection: "row",
        borderRadius: 15,
        justifyContent: "flex-end",
    },
    getNounButton:{
        fontSize: 20,
        color: "white",
        backgroundColor: "#3BCA0F",
        borderRadius: 15,
        padding: 10,
        marginBottom: 20
    },
    checkNounButton:{
        backgroundColor: "#ACCF12",
        color: "#262E05",
        alignSelf: "center",
        fontSize: 20,
        width: 120,
        borderRadius: 15,
        padding: 10,
        marginBottom: 20,
        marginLeft: 10
    },
    nextNounButton:{
        backgroundColor: "#ACCF12",
        color: "#262E05",
        alignSelf: "center",
        fontSize: 20,
        width: 120,
        borderRadius: 15,
        padding: 10,
        marginBottom: 20,
    },
    current_container:{
        backgroundColor: "#ACCF1246",
        padding: 10,
        width: "100%",
        marginBottom: 10,
        borderRadius: 15
    },
    curreNounTitle:{
        color: "#BEF3B9",
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10        
    },
    curreNoun:{
        color: "#16FF01",
        fontSize: 25
    },
    task_properties:{
        flexDirection: "column"
    },
    inputs:{
        backgroundColor: "#3EE4F0",
        color: "#16FF01",
        height: 50,
        fontSize: 20,
        margin: 5,
        width: 300,
        borderRadius: 15,
        padding: 5
    },
    texts:{
        backgroundColor: "#21CC68",
        color: "#07362c",
        margin: 10,
        fontSize: 17,
        borderRadius: 15,
        padding: 5,
        alignSelf: 'flex-start'

    }
})

export default styles