import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%",
        width: "100%"
    },
    instructions:{
        color: "#d4db67",
        fontSize: 15,
        margin: 10,
        height: "5%",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    pronouns_container:{
        backgroundColor: "#86bd28",
        height: "100%",
        width: "100%",
        padding: 10,
    },
    subjective_container:{
        backgroundColor: "#3e753e"
    },
    subjective:{
        color: "#f4f7c3",
        fontSize: 20,
        borderBottomWidth:5,
        borderBottomColor: "#86bd28",
        padding: 10
    },
    subjective_hu:{
        color: "#dcfcdc",
        fontSize: 20
    },
    subjective_en:{
        color: "#abedab",
        fontSize: 20
    },
    number:{
        color: "#d4db67",
        backgroundColor: "#0c380c",
        fontSize: 18,
        padding: 10,
        borderBottomWidth:5,
        borderBottomColor: "#86bd28",
    },
    sentence:{
        justifyContent: "center",
        padding: 10,
        borderBottomWidth:5,
        borderBottomColor: "#86bd28",
    }
})
export default styles