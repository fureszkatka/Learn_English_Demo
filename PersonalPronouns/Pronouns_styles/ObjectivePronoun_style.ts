import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        justifyContent: "flex-start",
        alignItems: "center",
        height:  2300,
        width: "100%"
    },
        instructions:{
            color: "#0fff2f",
            fontSize: 20,
            height: 70,
            padding: 10,
            justifyContent: "flex-start",
            alignItems: "center",
        },
        objective_title:{
            color: "#013621",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 22,
            height: 40,
        },
        checkAnswer:{
            color: "#013621",
            backgroundColor: "#0fff2f",
            justifyContent: "center",
            alignItems: "center",
            margin: 5,
            fontSize: 15,
            padding: 10,
            borderRadius: 15
        },
        check_container:{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
        },
            objective_container:{
                backgroundColor: "#c90e6c",
                justifyContent: "flex-start",
                width: "100%",
                padding: 10,
            }, 
                sentence_containers:{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "100%",
                    marginBottom: 5
                },
                sentence_containers3rd:{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "100%",
                    height: 1000,
                    margin: 5
                },
                number:{
                    color: "#c90e6c",
                    backgroundColor: "#130545",
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 18,
                    padding: 10,
                    marginBottom: 5, 
                    height: 40,
                    width: "100%"
                },
                title_language:{
                    color: "#0b1d59",
                    marginBottom: 5,
                    height: 30,
                    fontSize: 15,
                    borderStyle: "dotted",
                    borderBottomWidth: 2,
                    
                },
                    sentence_pairs:{
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        width: "100%",
                    },
                    sentence_pairs3rd:{
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        width: "100%",
                    },
                    objective_hu:{
                        color: "#dcfcdc",
                        fontSize: 20,
                        height: 60,
                    },
                    english_container:{
                        flexDirection: "row",
                        height: 100,
                        width: "100%",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                        objective_en:{
                            color: "#130545",
                            fontSize: 20,
                            height: 30,
                        },
                        objective_en_input:{
                            borderBottomWidth:2,
                            borderBottomColor: "#0fff2f",
                            flex: 1,
                            color: "#130545",
                            fontSize: 20,
                        },
                        link_to_objectivePronouns:{
                            backgroundColor: "#0fff2f",
                            borderRadius: 15,
                            padding: 10
                        },
                    nav_buttons:{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        marginTop: 10
                    }
                })
export default styles