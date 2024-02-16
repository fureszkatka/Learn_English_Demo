import React, { Component } from "react";
import {View, Text, ScrollView, Keyboard, TouchableWithoutFeedback, TextInput, TouchableOpacity, RefreshControl} from 'react-native';
import styles from "../Pronouns_styles/PossessiveAdjective_style" 
import {useNavigation} from '@react-navigation/native';

interface PossessiveAdjectiveProps{
    navigation: {
        navigate: (screenName: string) => void,
    },
}

interface PossessiveAdjectiveState {
    pronouns: Array<{name: string, text: string, isRight: boolean }>,
    refreshing: boolean;
    checking: boolean;    
}

class PossessiveAdjective extends React.Component<PossessiveAdjectiveProps, PossessiveAdjectiveState> {

    state={
        pronouns: [
            {name: "i", text:"", isRight: true },
            {name: "we", text:"", isRight: true},
            {name: "you1", text:"", isRight: true},
            {name: "you2", text:"", isRight: true},
            {name: "he", text:"", isRight: true},
            {name: "she", text:"", isRight: true},
            {name: "it", text:"", isRight: true},
            {name: "they", text:"", isRight: true},
        ],
            refreshing: false,
            checking: false
    } as PossessiveAdjectiveState

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
                {name: "my", text:"", isRight: false },
                {name: "our", text:"", isRight: false},
                {name: "your1", text:"", isRight: false},
                {name: "your2", text:"", isRight: false},
                {name: "his", text:"", isRight: false},
                {name: "her", text:"", isRight: false},
                {name: "its", text:"", isRight: false},
                {name: "their", text:"", isRight: false},
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
                            * fill all the sentences with the right pronouns!    
                        </Text>
                        
                            <View style={styles.possessiveAdjective_container}>
                                <Text style={styles.possessiveAdjective_title}>possessiveAdjective </Text>
                                <Text style={styles.number}>1ˢᵗ Person</Text>

                                <View style={styles.sentence_containers}>
                                    
                                    <View style={styles.sentence_pairs}>
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.possessiveAdjective_hu}>Budapesten élek.</Text>
                                        
                                        <Text style={styles.title_language}>english:</Text>      
                                        <View style={styles.english_container}>
                                        { this.state.checking ?
                                            (<TextInput 
                                                style={{
                                                    color: this.state.pronouns[0].isRight ? "green" : "red",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#1f8703",
                                                    flex: 1,
                                                    fontSize: 20
                                                }} 
                                                defaultValue={this.state.pronouns[0].text}
                                                onChangeText ={text => this.handleChange(this.state.pronouns[0].name, text)}
                                            >
                                            </TextInput>)
                                            :
                                            (<TextInput 
                                                style={{
                                                    color: "#1f8703",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#1f8703",
                                                    flex: 1,
                                                    fontSize: 20
                                                }} 
                                                defaultValue={this.state.pronouns[0].text}
                                                onChangeText ={text => this.handleChange(this.state.pronouns[0].name, text)}
                                            >
                                            </TextInput>)
                                        }
                                            <Text style={styles.possessiveAdjective_en}> live in Budapest.</Text>
                                        </View>
                                    </View>
                                    <View style={styles.sentence_pairs}>
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.possessiveAdjective_hu}> Játtszunk.</Text>
                                        
                                        <Text style={styles.title_language}>english:</Text>
                                        <View style={styles.english_container}>                                        
                                        { this.state.checking ?
                                            (<TextInput 
                                                style={{
                                                    color: this.state.pronouns[1].isRight ? "green" : "red",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#1f8703",
                                                    flex: 1,
                                                    fontSize: 20
                                                }} 
                                                defaultValue={this.state.pronouns[1].text}
                                                onChangeText ={text => this.handleChange(this.state.pronouns[1].name, text)}
                                            >
                                            </TextInput>)
                                            :
                                            (<TextInput 
                                                style={{
                                                    color: "#1f8703",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#1f8703",
                                                    flex: 1,
                                                    fontSize: 20
                                                }} 
                                                defaultValue={this.state.pronouns[1].text}
                                                onChangeText ={text => this.handleChange(this.state.pronouns[1].name, text)}
                                            >
                                            </TextInput>)
                                        }
                                            <Text style={styles.possessiveAdjective_en}>play.</Text>
                                        </View>

                                    </View>

                                </View>

                                <Text style={styles.number}>2ⁿᵈ Person</Text>
                                <View style={styles.sentence_containers}>
                                    
                                    <View style={styles.sentence_pairs}>                                
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.possessiveAdjective_hu}>Van macskád?</Text>
      
                                            <Text style={styles.title_language}>english:</Text> 
                                            <View style={styles.english_container}>
                                                <Text style={styles.possessiveAdjective_en}>Do </Text>
                                                { this.state.checking ?
                                                    (<TextInput 
                                                        style={{
                                                            color: this.state.pronouns[2].isRight ? "green" : "red",
                                                            borderBottomWidth:2,
                                                            borderBottomColor: "#1f8703",
                                                            flex: 1,
                                                            fontSize: 20
                                                        }} 
                                                        defaultValue={this.state.pronouns[2].text}
                                                        onChangeText ={text => this.handleChange(this.state.pronouns[2].name, text)}
                                                    >
                                                    </TextInput>)
                                                    :
                                                    (<TextInput 
                                                        style={{
                                                            color: "#1f8703",
                                                            borderBottomWidth:2,
                                                            borderBottomColor: "#1f8703",
                                                            flex: 1,
                                                            fontSize: 20
                                                        }} 
                                                        defaultValue={this.state.pronouns[2].text}
                                                        onChangeText ={text => this.handleChange(this.state.pronouns[2].name, text)}
                                                    >
                                                    </TextInput>)
                                                }
                                                <Text style={styles.possessiveAdjective_en}> have a dog?</Text>
                                            </View>
                                    </View>
                                    
                                    <View style={styles.sentence_pairs}>

                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.possessiveAdjective_hu}>Hol vagytok?</Text>
                                        
                                        <Text style={styles.title_language}>english:</Text> 
                                        <View style={styles.english_container}>
                                            <Text style={styles.possessiveAdjective_en}>Where are </Text>
                                            { this.state.checking ?
                                            (<TextInput 
                                                style={{
                                                    color: this.state.pronouns[3].isRight ? "green" : "red",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#1f8703",
                                                    flex: 1,
                                                    fontSize: 20
                                                }} 
                                                defaultValue={this.state.pronouns[3].text}
                                                onChangeText ={text => this.handleChange(this.state.pronouns[3].name, text)}
                                            >
                                            </TextInput>)
                                            :
                                            (<TextInput 
                                                style={{
                                                    color: "#1f8703",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#1f8703",
                                                    flex: 1,
                                                    fontSize: 20
                                                }} 
                                                defaultValue={this.state.pronouns[3].text}
                                                onChangeText ={text => this.handleChange(this.state.pronouns[3].name, text)}
                                            >
                                            </TextInput>)
                                        }
                                            <Text style={styles.possessiveAdjective_en}>?</Text>
                                        </View>
                                    
                                    </View>
                                </View>
                                
                                <Text style={styles.number}>3ʳᵈ Person</Text>
                                <View style={styles.sentence_containers}>
                                    <View style={styles.sentence_pairs}>    
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.possessiveAdjective_hu}> Ő szeret engem.</Text>
                                    
                                        <Text style={styles.title_language}>english:</Text> 
                                        <View style={styles.english_container}>
                                        { this.state.checking ?
                                            (<TextInput 
                                                style={{
                                                    color: this.state.pronouns[4].isRight ? "green" : "red",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#1f8703",
                                                    flex: 1,
                                                    fontSize: 20
                                                }} 
                                                defaultValue={this.state.pronouns[4].text}
                                                onChangeText ={text => this.handleChange(this.state.pronouns[4].name, text)}
                                            >
                                            </TextInput>)
                                            :
                                            (<TextInput 
                                                style={{
                                                    color: "#1f8703",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#1f8703",
                                                    flex: 1,
                                                    fontSize: 20
                                                }} 
                                                defaultValue={this.state.pronouns[4].text}
                                                onChangeText ={text => this.handleChange(this.state.pronouns[4].name, text)}
                                            >
                                            </TextInput>)
                                        }
                                            <Text style={styles.possessiveAdjective_en}> likes me.</Text>
                                        </View>

                                    </View>
                                    
                                    <View style={styles.sentence_pairs}>
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.possessiveAdjective_hu}> Szereti a fagyit!</Text>
                                        
                                        <Text style={styles.title_language}>english:</Text> 
                                        <View style={styles.english_container}>                                        
                                        { this.state.checking ?
                                            (<TextInput 
                                                style={{
                                                    color: this.state.pronouns[5].isRight ? "green" : "red",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#1f8703",
                                                    flex: 1,
                                                    fontSize: 20
                                                }} 
                                                defaultValue={this.state.pronouns[5].text}
                                                onChangeText ={text => this.handleChange(this.state.pronouns[5].name, text)}
                                            >
                                            </TextInput>)
                                            :
                                            (<TextInput 
                                                style={{
                                                    color: "#1f8703",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#1f8703",
                                                    flex: 1,
                                                    fontSize: 20
                                                }} 
                                                defaultValue={this.state.pronouns[5].text}
                                                onChangeText ={text => this.handleChange(this.state.pronouns[5].name, text)}
                                            >
                                            </TextInput>)
                                        }
                                            <Text style={styles.possessiveAdjective_en}> likes ice creame.</Text>
                                        </View>

                                    </View>

                                    <View style={styles.sentence_pairs}>
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.possessiveAdjective_hu}> szereti a labdáját.</Text>
                                        
                                        <Text style={styles.title_language}>english:</Text> 
                                        
                                        <View style={styles.english_container}>                                        
                                        { this.state.checking ?
                                            (<TextInput 
                                                style={{
                                                    color: this.state.pronouns[6].isRight ? "green" : "red",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#1f8703",
                                                    flex: 1,
                                                    fontSize: 20
                                                }} 
                                                defaultValue={this.state.pronouns[6].text}
                                                onChangeText ={text => this.handleChange(this.state.pronouns[6].name, text)}
                                            >
                                            </TextInput>)
                                            :
                                            (<TextInput 
                                                style={{
                                                    color: "#1f8703",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#1f8703",
                                                    flex: 1,
                                                    fontSize: 20
                                                }} 
                                                defaultValue={this.state.pronouns[6].text}
                                                onChangeText ={text => this.handleChange(this.state.pronouns[6].name, text)}
                                            >
                                            </TextInput>)
                                        }
                                            <Text style={styles.possessiveAdjective_en}> likes its ball.</Text>
                                        </View>
                                    
                                    </View>

                                    <View style={styles.sentence_pairs}>
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.possessiveAdjective_hu}>Tom és Jim nem találják a kiutat, eltévedtek.</Text>
                                        
                                        <Text style={styles.title_language}>english:</Text> 
                                        <View style={styles.english_container}>                                    
                                            <Text style={styles.possessiveAdjective_en}>Tom and Jim are not find the way out, </Text> 
                                            { this.state.checking ?
                                            (<TextInput 
                                                style={{
                                                    color: this.state.pronouns[7].isRight ? "green" : "red",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#1f8703",
                                                    flex: 1,
                                                    fontSize: 20
                                                }} 
                                                defaultValue={this.state.pronouns[7].text}
                                                onChangeText ={text => this.handleChange(this.state.pronouns[7].name, text)}
                                            >
                                            </TextInput>)
                                            :
                                            (<TextInput 
                                                style={{
                                                    color: "#1f8703",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#1f8703",
                                                    flex: 1,
                                                    fontSize: 20
                                                }} 
                                                defaultValue={this.state.pronouns[7].text}
                                                onChangeText ={text => this.handleChange(this.state.pronouns[7].name, text)}
                                            >
                                            </TextInput>)
                                        }
                                            <Text style={styles.possessiveAdjective_en}> are lost.</Text>
                                        </View>

                                    </View>
                                </View>
                            </View>
                            <View style={styles.nav_buttons}>
                                <TouchableOpacity style={styles.link_to_possessiveAdjectivePronouns} onPress={() => this.navigateToScreen("ObjectivePronoun")}>
                                    <Text style={{color: "black"}}>Subjective Pronouns</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.link_to_possessiveAdjectivePronouns} onPress={() => this.navigateToScreen("PossessivePronoun")}>
                                    <Text style={{color: "black"}}>Possessive Pronoun</Text>
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

    return <PossessiveAdjective {...props} navigation={navigation} />;
}