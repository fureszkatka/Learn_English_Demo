import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        justifyContent: "flex-start",
        alignItems: "center",
        height:  2200,
        width: "100%"
    },
        instructions:{
            color: "#06d1ce",
            fontSize: 20,
            height: 70,
            padding: 10,
            justifyContent: "flex-start",
            alignItems: "center",
        },
        possessive_title:{
            color: "#f4f7c3",
            fontSize: 22,
            borderBottomWidth:5,
            borderBottomColor: "#40090e",
            height: 40,
            width: "100%",
            marginBottom: 10
        },
            possessive_container:{
                backgroundColor: "#c22b3a",
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
                    color: "#c22b3a",
                    backgroundColor: "#40090e",
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
                    color: "#40090e",
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
                    possessive_hu:{
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
                        possessive_en:{
                            color: "#06d1ce",
                            fontSize: 20,
                            height: 30,
                        },
                        possessive_en_input:{
                            borderBottomWidth:2,
                            borderBottomColor: "#06d1ce",
                            flex: 1,
                            color: "#40090e",
                            fontSize: 20,
                        },
                        link_to_possessivePronouns:{
                            backgroundColor: "#06d1ce",
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