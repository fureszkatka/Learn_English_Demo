import React, { Component } from "react";
import { Text, TouchableWithoutFeedback,ScrollView, View, Keyboard, RefreshControl, TouchableOpacity } from "react-native";
import styles from "./Superlatives_style";
import { TextInput } from "react-native-gesture-handler";
import { superlatives } from './Superlative_data.json';

interface SuperlativesState {
    adjective: {name: string, isRight: boolean,text: string,},
    comparative: {name: string, isRight: boolean, text: string,},
    superlative: {name: string, isRight: boolean, text: string,},
    isChecking: boolean,
    isStarted: boolean,
    refreshing: boolean,
    currentNoun: number | null
}


export default class Superlatives extends Component<SuperlativesState> {
  
    state = {
        adjective: {
            text: "",
            name: "adjective",
            isRight: false
        },
        comparative: {
            text: "",
            name: "adjective",
            isRight: false
        },
        superlative: {
            text: "",
            name: "adjective",
            isRight: false
        },
        isRight: false,
        isChecking: false,
        isStarted: false,
        refreshing: false,
        currentNoun: null,

    } as SuperlativesState

    onRefresh = () => {
        this.setState({ 
            refreshing: true, 
        });
        setTimeout(() => {
          this.setState({ 
            adjective: "",
            comparative: "",
            superlative: "",
            isRight: false,
            isChecking: false,
            isStarted: false,
            refreshing: false,
            currentNoun: null,
        });
        }, 1000);
    };

  
    handleChange1 = (text: string): void => {
        
        this.setState({
            adjective: {...this.state.adjective, text: text}
        })
    }

    handleChange2 = (text: string): void => {
        
        this.setState({
            comparative: {...this.state.comparative, text: text}
        })
    }

    handleChange3 = (text: string): void => {
        
        this.setState({
            superlative: {...this.state.superlative, text: text}
        })
    }

    getNoun = () => {
        this.setState({
            isStarted: true
        })

        const randomIndex = Math.floor(Math.random() * superlatives.length);

        this.setState({
            currentNoun: randomIndex,
        });
    }
  
    nextNoun = () => {
        const randomIndex = Math.floor(Math.random() * superlatives.length);

        this.setState({
            currentNoun: randomIndex,
        });
    }

    checkNoun = () =>{
        this.setState({
            isChecking: true
        })
        if ( superlatives[this.state.currentNoun!].adjective === this.state.adjective.text ) {
            
            this.setState({
                adjective: {...this.state.adjective, isRight: true}
            });
        }

        if ( superlatives[this.state.currentNoun!].adjective === this.state.comparative.text) {
            
            this.setState({
                comparative: {...this.state.comparative, isRight: true}
            });
        }

        if (superlatives[this.state.currentNoun!].superlative === this.state.superlative.text) {
            
            this.setState({
                superlative: {...this.state.superlative, isRight: true}
            });
        }
            
    }

    render() {
    return ( 
        <TouchableWithoutFeedback accessible={false}  onPress={Keyboard.dismiss}>
            <ScrollView 
                refreshControl={
                <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}/>}
            >
                <View style = {styles.container}>
                    <Text style={styles.instructions}>
                        *Please fill in the boxes with the right nouns!
                    </Text>

                    <View style={styles.content}>

                        <View style={styles.button_container}>
                            { !this.state.isStarted 
                                ?
                                (   
                                    <TouchableOpacity onPress={this.getNoun}>
                                        <Text style={styles.getNounButton}>Get me a noun!</Text>
                                    </TouchableOpacity>
                                )
                                :
                                (   
                                    <>
                                        <TouchableOpacity onPress={this.nextNoun}>
                                            <Text style={styles.nextNounButton}>Next</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={this.checkNoun}>
                                        <Text style={styles.checkNounButton}>Check</Text>
                                        </TouchableOpacity>
                                    </>
                                )
                            }
                        </View>

                        <View style={styles.current_container}>

                            <Text style={styles.curreNounTitle}>Curent noun:</Text>

                            <Text style={styles.curreNoun}>
                                { this.state.currentNoun ? 
                                    superlatives[this.state.currentNoun].adjective :
                                    ""
                                }
                            </Text>
                        </View>

                        <View style={styles.task_properties}>
                            <Text style={styles.curreNounTitle}>Adjective</Text>
                            <TextInput 
                                autoCapitalize='none'
                                style={{
                                    backgroundColor: "#ACCF1246", 
                                    color: !this.state.isChecking ? "#A6FF01" : (this.state.adjective.isRight ? "green" : "red"),  
                                    borderRadius: 15,
                                    height: 60,
                                    fontSize: 20 
                                }}
                                defaultValue={this.state.adjective.text}
                                onChangeText={(text) => this.handleChange1(text)}
                            />
                        </View>
                        <View style={styles.task_properties}>
                            <Text style={styles.curreNounTitle}>Comparative</Text>
                            <TextInput 
                                autoCapitalize='none'
                                style={{
                                    backgroundColor: "#ACCF1246", 
                                    color: !this.state.isChecking ? "#A6FF01" : (this.state.comparative.isRight ? "#01FF2B" : "#CA3434"),  
                                    borderRadius: 15,
                                    height: 60,
                                    fontSize: 20,
                                }}
                                defaultValue={this.state.comparative.text}
                                onChangeText={(text) => this.handleChange2(text)}
                            />
                        </View>

                        <View style={styles.task_properties}>
                            <Text style={styles.curreNounTitle}>Superlative</Text>
                            <TextInput
                                autoCapitalize='none'
                                style={{
                                    backgroundColor: "#ACCF1246", 
                                    color: !this.state.isChecking ? "#A6FF01" : (this.state.superlative.isRight ? "green" : "red"),  
                                    borderRadius: 15,
                                    height: 60,
                                    fontSize: 20
                                }} 
                                defaultValue={this.state.superlative.text}
                                onChangeText={(text) => this.handleChange3(text)}
                            />
                        </View>
                    </View>

                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
        )
    }
}
