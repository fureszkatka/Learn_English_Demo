import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: "center",
        height: 700,
        width: "100%",
    },
    topic_container: {
        width: "90%",
        margin: 20
    },
    topics:{
        backgroundColor: '#d93125',
        color: "white",
        fontSize: 25,
        width: 300,
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 20,
        borderBottomWidth: 5,
        borderBottomColor: '#341161',
        borderRightWidth: 5,
        borderRightColor: '#341161',
    },
})

export default styles