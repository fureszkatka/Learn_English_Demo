import React, { Component } from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard, RefreshControl } from "react-native";
import styles from "./Styles/PresentSimple_style";
import { TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";


interface PresentSimpleState {
    sentences : Array<{sample: string, text: string, isRight: boolean }>,
    checking: boolean,
    refreshing: boolean
}

export default class PresentSimple extends Component<PresentSimpleState> {
    state = {
        sentences: [
            {
                sample: "is doing",
                text: "",
                isRight: false,
            },
            {
                sample: "doesn't like",
                text: "",
                isRight: false,
            },
            {
                sample: "Does it",
                text: "",
                isRight: false,
            },
            {
                sample: "are having",
                text: "",
                isRight: false,
            },
        ],
        checking: false,
        refreshing: false

    } as PresentSimpleState

    handleChange = (name: string, text: string): void => {
        this.setState({
            sentences: this.state.sentences.map((sentence) =>
                sentence.sample == name ? {...sentence, text: text} : sentence
            )
        })
    }


    onRefresh = () => {
        this.setState({ 
            refreshing: true, 
        });
        setTimeout(() => {
        this.setState({ 
            sentences: [
                {
                    sample: "is doing",
                    text: "",
                    isRight: false,
                },
                {
                    sample: "doesn't like",
                    text: "",
                    isRight: false,
                },
                {
                    sample: "Does it",
                    text: "",
                    isRight: false,
                },
                {
                    sample: "are having",
                    text: "",
                    isRight: false,
                },
            ],
            refreshing: false, 
            checking: false
        });
        }, 1000);
    };

    checkAnswer =()=>{
        this.setState({
            sentences: 
                this.state.sentences.map((sentence) =>({
                    ...sentence,
                    isRight: sentence.text.toLowerCase() === sentence.sample
                })),
            checking: true,
        })
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
                    <View style={styles.container}>
                        <Text style={styles.instructions}>
                            * fill the blanks with the correct form of tenses
                        </Text>

                        <View style={styles.content}>
                            
                            <TouchableOpacity onPress={()=> this.checkAnswer()} style={styles.button_container}>
                                <Text style={styles.check_button}>Check Answers</Text>
                            </TouchableOpacity>

                            <View style={styles.sentence_container}>
                                <Text style={styles.texts}>He (do)</Text>
                                {this.state.checking 
                                    ?
                                    (<TextInput 
                                        onChangeText = { (text) => this.handleChange(this.state.sentences[0].sample, text)}
                                        defaultValue = {this.state.sentences[0].text}
                                        style = {{
                                            color: this.state.sentences[0].isRight ? "green" : "red",
                                            backgroundColor: "#AF3EF0",
                                            height: 50,
                                            fontSize: 20,
                                            margin: 5,
                                            width: 300,
                                            borderRadius: 15,
                                            padding: 5  
                                        }}
                                    />)
                                    :
                                    (<TextInput 
                                        onChangeText = { (text) => this.handleChange(this.state.sentences[0].sample, text)}
                                        defaultValue={this.state.sentences[0].text}
                                        style={styles.inputs}
                                    />)
                                }
                                <Text style={styles.texts}>his homework, right now.</Text>
                            </View>

                            <View style={styles.sentence_container}>
                                <Text style={styles.texts}>She (not like)</Text>
                                {this.state.checking ?
                                    (<TextInput 
                                        onChangeText = { (text) => this.handleChange(this.state.sentences[1].sample, text)}
                                        defaultValue = {this.state.sentences[1].text}
                                        style = {{
                                            color: this.state.sentences[1].isRight ? "green" : "red",
                                            backgroundColor: "#AF3EF0",
                                            height: 50,
                                            fontSize: 20,
                                            margin: 5,
                                            width: 300,
                                            borderRadius: 15,
                                            padding: 5  
                                        }}
                                    />)
                                    :
                                    (<TextInput 
                                        onChangeText = { (text) => this.handleChange(this.state.sentences[1].sample, text)}
                                        defaultValue={this.state.sentences[1].text}
                                        style={styles.inputs}
                                    />)
                                }
                                <Text style={styles.texts}>apple.</Text>
                            </View>

                            <View style={styles.sentence_container}>
                            {this.state.checking 
                                    ?
                                    (<TextInput 
                                        onChangeText = { (text) => this.handleChange(this.state.sentences[2].sample, text)}
                                        defaultValue = {this.state.sentences[2].text}
                                        style = {{
                                            color: this.state.sentences[2].isRight ? "green" : "red",
                                            backgroundColor: "#AF3EF0",
                                            height: 50,
                                            fontSize: 20,
                                            margin: 5,
                                            width: 300,
                                            borderRadius: 15,
                                            padding: 5  
                                        }}
                                    />)
                                    :
                                    (<TextInput 
                                        onChangeText = { (text) => this.handleChange(this.state.sentences[2].sample, text)}
                                        defaultValue={this.state.sentences[2].text}
                                        style={styles.inputs}
                                    />)
                                }
                                <Text style={styles.texts}>(taste) good?</Text>
                            </View>

                            <View style={styles.sentence_container}>
                                <Text style={styles.texts}>They (have)</Text>
                                {this.state.checking 
                                    ?
                                    (<TextInput 
                                        onChangeText = { (text) => this.handleChange(this.state.sentences[3].sample, text)}
                                        defaultValue = {this.state.sentences[3].text}
                                        style = {{
                                            color: this.state.sentences[3].isRight ? "green" : "red",
                                            backgroundColor: "#AF3EF0",
                                            height: 50,
                                            fontSize: 20,
                                            margin: 5,
                                            width: 300,
                                            borderRadius: 15,
                                            padding: 5  
                                        }}
                                    />)
                                    :
                                    (<TextInput 
                                        onChangeText = { (text) => this.handleChange(this.state.sentences[3].sample, text)}
                                        defaultValue={this.state.sentences[3].text}
                                        style={styles.inputs}
                                    />)
                                }
                                <Text style={styles.texts}>a good time.</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        );
    }
}
