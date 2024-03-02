import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, ScrollView, RefreshControl, View, Keyboard, TextInput, TouchableOpacity } from "react-native";
import styles from './PassiveSentences_style'

interface PassiveSentencesState{
    refreshing: boolean,
    passives: Array<{active: string, passive: string, text:string, isTrue: boolean}>,
    isChecking: boolean
} 


export default class PasiveSentences extends Component<{}, PassiveSentencesState> {

    state = {
        refreshing: false,
        passives: [
            {active: "They are building this building, right now.", passive: "This building is made by them.",          text: "", isTrue: false},
            {active: "The hunter killed the lion.",                 passive: "The lion was killed by the hunter.",      text: "", isTrue: false},
            {active: "Someone has cleaned the windows.",            passive: "The windows have been cleaned.",          text: "", isTrue: false},
            {active: "I gave him a book for his birthday.",         passive: "He was given a book for his birthday.",   text: "", isTrue: false},
        ],
        isChecking: false
    } as PassiveSentencesState


    onRefresh = () => {
        this.setState({ 
            refreshing: true, 
        });
        setTimeout(() => {
          this.setState({ 
            refreshing: false,
            passives: [
                {active: "They are building this building, right now.", passive: "This building is made by them.",          text: "", isTrue: false},
                {active: "The hunter killed the lion.",                 passive: "The lion was killed by the hunter.",      text: "", isTrue: false},
                {active: "Someone has cleaned the windows.",            passive: "The windows have been cleaned.",          text: "", isTrue: false},
                {active: "I gave him a book for his birthday.",         passive: "He was given a book for his birthday.",   text: "", isTrue: false},
            ],
            isChecking: false
        });
        }, 1000);
    };

    handleChange = (index: number, text: string) : void => {
        this.setState({
            passives: this.state.passives.map((passive, i) => 
                i == index ? {...passive, text: text} : passive
            )
        })
    }
  
    checkAnswer = () =>{

        this.setState({
            passives: this.state.passives.map((passive) =>({
                    ...passive,
                    isRight: passive.text.toLowerCase() === passive.passive.toLocaleLowerCase()
                })),
            isChecking: true
        })
    }
  
    render() {
        return (
            <TouchableWithoutFeedback accessible={false}  onPress={Keyboard.dismiss}>
                <ScrollView 
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh}
                        />
                    }
                >       
                    <View style={styles.container}>
                        <Text style={styles.instructions}>
                            * Please fill make the sentecnces passive.
                        </Text>
                        <View style={styles.content}>
                            <TouchableOpacity onPress={this.checkAnswer}>
                                <Text style={styles.checkButton}>Check answers</Text>
                            </TouchableOpacity>
                            {this.state.passives.map((passive, index) => 
                                <View key={index} style={styles.sentencesContainer}>
                                    <Text style={styles.texts}>Active</Text>
                                    <Text 
                                        style={styles.example_sentence}>
                                            {passive.active}
                                    </Text>
                                    <Text style={styles.texts}>Passive</Text>
                                    <TextInput
                                        defaultValue={passive.text}
                                        onChangeText={text => this.handleChange(index,text)}
                                        style={{
                                            color: this.state. isChecking ? (passive.isTrue ? "green" : "red") : "#4B2401",
                                            backgroundColor: "#76F03E",
                                            height: 50,
                                            fontSize: 20,
                                            width: 300,
                                            borderRadius: 15,
                                            padding: 10,
                                            marginTop: 5,
                                        }}
                                    />
                                </View>
                            )}
                        </View>
                    </View>
                </ScrollView>
                
            </TouchableWithoutFeedback>
        )
    }
}