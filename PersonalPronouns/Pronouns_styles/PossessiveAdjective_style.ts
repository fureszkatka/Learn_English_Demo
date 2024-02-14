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
            color: "#d4db67",
            fontSize: 20,
            height: 70,
            padding: 10,
            justifyContent: "flex-start",
            alignItems: "center",
        },
        possessiveAdjective_title:{
            color: "#f4f7c3",
            fontSize: 22,
            borderBottomWidth:5,
            borderBottomColor: "#853601",
            height: 40,
            width: "100%",
            marginBottom: 10
        },
            possessiveAdjective_container:{
                backgroundColor: "#baab00",
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
                    color: "#d4db67",
                    backgroundColor: "#853601",
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 18,
                    padding: 10,
                    marginBottom: 10,
                    height: 40,
                    width: "100%"
                },
                title_language:{
                    color: "#570308",
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
                    possessiveAdjective_hu:{
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
                        possessiveAdjective_en:{
                            color: "#1f8703",
                            fontSize: 20,
                            height: 30,
                        },
                        possessiveAdjective_en_input:{
                            borderBottomWidth:2,
                            borderBottomColor: "#1f8703",
                            flex: 1,
                            color: "#853601",
                            fontSize: 20,
                        },
                        link_to_possessiveAdjectivePronouns:{
                            backgroundColor: "#1f8703",
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