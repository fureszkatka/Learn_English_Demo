import React, { Component } from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import styles from "./Styles/PastPerfectContinuous_style";
import { TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";


interface PastPerfectContinuousState {
    sentences : Array<{sample: string, text: string, isRight: boolean }>,
}

export default class PastPerfectContinuous extends Component<PastPerfectContinuousState> {
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
        ]
    }


    render() {
        return (
            <TouchableWithoutFeedback accessible={false}  onPress={Keyboard.dismiss}>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.instructions}>
                            * fill the blanks with the correct form of tenses
                        </Text>

                        <View style={styles.content}>
                            
                            <View style={styles.sentence_container}>
                                <Text style={styles.texts}>He (do)</Text>
                                <TextInput 
                                    defaultValue={this.state.sentences[0].text}
                                    style={styles.inputs}
                                />
                                <Text style={styles.texts}>his homework, right now.</Text>
                            </View>

                            <View style={styles.sentence_container}>
                                <Text style={styles.texts}>She (not like)</Text>
                                <TextInput 
                                    defaultValue={this.state.sentences[0].text}
                                    style={styles.inputs}
                                />
                                <Text style={styles.texts}>apple.</Text>
                            </View>

                            <View style={styles.sentence_container}>
                                <TextInput 
                                    defaultValue={this.state.sentences[0].text}
                                    style={styles.inputs}
                                />
                                <Text style={styles.texts}>(taste) good?</Text>
                            </View>

                            <View style={styles.sentence_container}>
                                <Text style={styles.texts}>They (have)</Text>
                                <TextInput 
                                    defaultValue={this.state.sentences[0].text}
                                    style={styles.inputs}
                                />
                                <Text style={styles.texts}>a good time.</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        );
    }
}
