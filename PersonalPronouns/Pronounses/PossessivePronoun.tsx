import React, { Component } from "react";
import {View, Text, ScrollView, Keyboard, TouchableWithoutFeedback, TextInput,TouchableOpacity, RefreshControl} from 'react-native';
import styles from "../Pronouns_styles/PossessivePronoun_style" 
import {useNavigation} from '@react-navigation/native';


interface PessessiveProps {
    navigation: {
        navigate: (screenName: string) => void,
    },
}
interface PossessiveState {
    pronouns: Array<{name: string, text: string, isRight: boolean, huSentence: string }>,
    refreshing: boolean;
    checking: boolean;
}


class PossessivePronoun extends React.Component<PessessiveProps, PossessiveState  > {

    state = {
        pronouns: [
            {name: "mine", text:"", isRight: true, huSentence: "Ez a maci az enyém!"},
            {name: "ours", text:"", isRight: true, huSentence: "Ezek a játékok a mieink." },
            {name: "yours1", text:"", isRight: true, huSentence: "Ez a tiéd." },
            {name: "yours2", text:"", isRight: true, huSentence: "Ezek a tieid." },
            {name: "his", text:"", isRight: true, huSentence: "Ez a kefe az az övé / fiú." },
            {name: "hers", text:"", isRight: true, huSentence: "Ez a kés az övé / lány." },
            {name: "its", text:"", isRight: true, huSentence: "Ez a labda az övé / kutya." },
            {name: "theirs", text:"", isRight: true, huSentence: "Ez a pia az övék." },
        ],
        refreshing: false,
        checking: false
    } as PossessiveState

    handleChange = (name: string, text: string): void => {
        this.setState({
            pronouns: this.state.pronouns.map((pronoun) =>
                pronoun.name == name ? {...pronoun, text: text} : pronoun
            )
        })
    }

    onRefresh = () => {
        this.setState({ 
            refreshing: true, 
        });
        setTimeout(() => {
          this.setState({ 
            pronouns: [
                {name: "mine", text:"", isRight: true, huSentence: "Ez a maci az enyém!"},
                {name: "ours", text:"", isRight: true, huSentence: "Ezek a játékok a mieink." },
                {name: "yours", text:"", isRight: true, huSentence: "Ez a tiéd." },
                {name: "yours", text:"", isRight: true, huSentence: "Ezek a tieid, Pete és Jene." },
                {name: "his", text:"", isRight: true, huSentence: "Ez az autó az övé / fiú." },
                {name: "her", text:"", isRight: true, huSentence: "Ez a kés az övé / lány." },
                {name: "its", text:"", isRight: true, huSentence: "Az ő labdája pöttyös / kutya." },
                {name: "theirs", text:"", isRight: true, huSentence: "Ez a pia az övék." }
            ],
            refreshing: false, 
            checking: false
        });
        }, 1000);
    };

    checkAnswer = () => {
        this.setState({
            pronouns: 
                this.state.pronouns.map((pronoun) =>({
                    ...pronoun,
                    isRight: pronoun.text.toLowerCase() === pronoun.name
                }))
                ,
            checking: true
        });
    };
    navigateToScreen = (screenName: string) => {
        this.props.navigation.navigate(screenName);
    };

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
                        <Text style ={styles.instructions}>
                            fill all the sentences with the right pronouns!    
                        </Text>
                        
                            <View style={styles.possessive_container}>
                                
                            <View style={styles.check_container}>
                                <Text style={styles.possessive_title}>Possessive Pronoun </Text>
                                <TouchableOpacity 
                                    onPress={()=>this.checkAnswer()}>
                                    <Text style={styles.checkAnswer}>
                                        check answers
                                    </Text>
                                </TouchableOpacity>
                            </View>
                                
                                {this.state.pronouns.map((pronoun, i) =>
                                    <View key = {i} style={styles.sentence_pairs}>
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.possessive_hu}>{pronoun.huSentence}</Text>
                                        
                                        <Text style={styles.title_language}>english pronoun:</Text>      
                                        <View style={styles.english_container}>
                                            
                                            { this.state.checking ?
                                                (<TextInput 
                                                    autoCapitalize='none'
                                                    style={{
                                                        color: pronoun.isRight ? "green" : "red",
                                                        borderBottomWidth:2,
                                                        borderBottomColor: "#06d1ce",
                                                        flex: 1,
                                                        fontSize: 20
                                                    }} 
                                                    defaultValue={pronoun.text}
                                                    onChangeText ={text => this.handleChange(pronoun.name, text)}
                                                >
                                                </TextInput>)
                                                :
                                                (<TextInput 
                                                    autoCapitalize='none'
                                                    style={{
                                                        color: "#06d1ce",
                                                        borderBottomWidth:2,
                                                        borderBottomColor: "#06d1ce",
                                                        flex: 1,
                                                        fontSize: 20
                                                    }} 
                                                    defaultValue={pronoun.text}
                                                    onChangeText ={text => this.handleChange(pronoun.name, text)}
                                                >
                                                </TextInput>)
                                            }
                                        </View>
                                    </View>
                                )}
                               
                            </View>
                            <View style={styles.nav_buttons}>
                                <TouchableOpacity style={styles.link_to_possessivePronouns} onPress={() => this.navigateToScreen("PossessiveAdjective")}>
                                    <Text style={{color: "black"}}>Subjective Adjective</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.link_to_possessivePronouns} onPress={() => this.navigateToScreen("SubjectivePronoun")}>
                                    <Text style={{color: "black"}}>Subjective Pronouns</Text>
                                </TouchableOpacity>
                            </View>
                        
                    </View>
                    </ScrollView>
            </TouchableWithoutFeedback>
        )
    }
}

export default function(props: any) {
    const navigation = useNavigation();

    return <PossessivePronoun {...props} navigation={navigation} />;
}