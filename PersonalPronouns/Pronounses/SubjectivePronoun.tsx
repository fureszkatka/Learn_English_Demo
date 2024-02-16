import React, { Component,useState } from "react";
import {
    View, 
    Text, 
    ScrollView, 
    Keyboard, 
    TouchableWithoutFeedback, 
    TextInput,
    TouchableOpacity,
    RefreshControl
} from 'react-native';
import styles from "../Pronouns_styles/SubjectivePronoun_style" 
import {useNavigation} from '@react-navigation/native';

interface SubjectiveProps {
    navigation: {
        navigate: (screenName: string) => void,
    },
}

interface SubjectiveState {
    pronouns: Array<{name: string, text: string, isRight: boolean }>,
    refreshing: boolean;
    checking: boolean;
}


class SubjectivePronoun extends React.Component<SubjectiveProps, SubjectiveState > {

    state = {
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
    } as SubjectiveState

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
                {name: "i", text:"", isRight: false },
                {name: "we", text:"", isRight: false},
                {name: "you1", text:"", isRight: false},
                {name: "you2", text:"", isRight: false},
                {name: "he", text:"", isRight: false},
                {name: "she", text:"", isRight: false},
                {name: "it", text:"", isRight: false},
                {name: "they", text:"", isRight: false},
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
                        <View style={styles.subjective_container}>
                            <View style={styles.check_container}>
                                <Text style={styles.subjective_title}>Subjective Pronouns</Text>
                                <TouchableOpacity 
                                    onPress={()=>this.checkAnswer()}>
                                    <Text style={styles.checkAnswer}>
                                        check answers
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.sentence_containers}>
                                <Text style={styles.number}>1ˢᵗ Person</Text>

                                <View style={styles.sentence_pairs}>
                                    <Text style={styles.title_language}>magyar:</Text>  
                                        <Text style={styles.subjective_hu}>Budapesten élek.</Text>
                                    
                                    <Text style={styles.title_language}>english:</Text>      
                                    <View style={styles.english_container}>
                                        
                                        { this.state.checking ?
                                            (<TextInput 
                                                style={{
                                                    color: this.state.pronouns[0].isRight ? "green" : "red",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#d0ff00",
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
                                                    color: "#d0ff00",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#d0ff00",
                                                    flex: 1,
                                                    fontSize: 20
                                                }} 
                                                defaultValue={this.state.pronouns[0].text}
                                                onChangeText ={text => this.handleChange(this.state.pronouns[0].name, text)}
                                            >
                                            </TextInput>)
                                        }
                                        <Text style={styles.subjective_en}> live in Budapest.</Text>
                                    </View>
                                </View>
                                <View style={styles.sentence_pairs}>
                                    <Text style={styles.title_language}>magyar:</Text>  
                                        <Text style={styles.subjective_hu}> Játtszunk.</Text>
                                    
                                    <Text style={styles.title_language}>english:</Text>
                                    <View style={styles.english_container}>                                        
                                    { this.state.checking ?
                                            (<TextInput 
                                                style={{
                                                    color: this.state.pronouns[1].isRight ? "green" : "red",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#d0ff00",
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
                                                    color: "#d0ff00",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#d0ff00",
                                                    flex: 1,
                                                    fontSize: 20
                                                }} 
                                                defaultValue={this.state.pronouns[1].text}
                                                onChangeText ={text => this.handleChange(this.state.pronouns[1].name, text)}
                                            >
                                            </TextInput>)
                                        }
                                        <Text style={styles.subjective_en}>play.</Text>
                                    </View>

                                </View>

                            </View>

                            
                            <View style={styles.sentence_containers}>
                                <Text style={styles.number}>2ⁿᵈ Person</Text>

                                <View style={styles.sentence_pairs}>                                
                                    <Text style={styles.title_language}>magyar:</Text>  
                                        <Text style={styles.subjective_hu}>Van macskád?</Text>
    
                                        <Text style={styles.title_language}>english:</Text> 
                                        <View style={styles.english_container}>
                                            <Text style={styles.subjective_en}>Do </Text>
                                            { this.state.checking ?
                                            (<TextInput 
                                                style={{
                                                    color: this.state.pronouns[2].isRight ? "green" : "red",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#d0ff00",
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
                                                    color: "#d0ff00",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#d0ff00",
                                                    flex: 1,
                                                    fontSize: 20
                                                }} 
                                                defaultValue={this.state.pronouns[2].text}
                                                onChangeText ={text => this.handleChange(this.state.pronouns[2].name, text)}
                                            >
                                            </TextInput>)
                                        }
                                            <Text style={styles.subjective_en}> have a dog?</Text>
                                        </View>
                                </View>
                                
                                <View style={styles.sentence_pairs}>

                                    <Text style={styles.title_language}>magyar:</Text>  
                                        <Text style={styles.subjective_hu}>Hol vagytok?</Text>
                                    
                                    <Text style={styles.title_language}>english:</Text> 
                                    <View style={styles.english_container}>
                                        <Text style={styles.subjective_en}>Where are </Text>
                                        { this.state.checking ?
                                            (<TextInput 
                                                style={{
                                                    color: this.state.pronouns[3].isRight ? "green" : "red",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#d0ff00",
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
                                                    color: "#d0ff00",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#d0ff00",
                                                    flex: 1,
                                                    fontSize: 20
                                                }} 
                                                defaultValue={this.state.pronouns[3].text}
                                                onChangeText ={text => this.handleChange(this.state.pronouns[3].name, text)}
                                            >
                                            </TextInput>)
                                        }
                                        <Text style={styles.subjective_en}>?</Text>
                                    </View>
                                
                                </View>
                            </View>
                            
                            
                            <View style={styles.sentence_containers3rd}>
                                <Text style={styles.number}>3ʳᵈ Person</Text>
                                
                                <View style={styles.sentence_pairs3rd}>    
                                    <Text style={styles.title_language}>magyar:</Text>  
                                        <Text style={styles.subjective_hu}> Ő szeret engem.</Text>
                                
                                    <Text style={styles.title_language}>english:</Text> 
                                    <View style={styles.english_container}>
                                    { this.state.checking ?
                                            (<TextInput 
                                                style={{
                                                    color: this.state.pronouns[4].isRight ? "green" : "red",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#d0ff00",
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
                                                    color: "#d0ff00",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#d0ff00",
                                                    flex: 1,
                                                    fontSize: 20
                                                }} 
                                                defaultValue={this.state.pronouns[4].text}
                                                onChangeText ={text => this.handleChange(this.state.pronouns[4].name, text)}
                                            >
                                            </TextInput>)
                                        }
                                        <Text style={styles.subjective_en}> likes me.</Text>
                                    </View>

                                </View>
                                
                                <View style={styles.sentence_pairs3rd}>
                                    <Text style={styles.title_language}>magyar:</Text>  
                                        <Text style={styles.subjective_hu}> Szereti a fagyit!</Text>
                                    
                                    <Text style={styles.title_language}>english:</Text> 
                                    <View style={styles.english_container}>                                        
                                    { this.state.checking ?
                                            (<TextInput 
                                                style={{
                                                    color: this.state.pronouns[5].isRight ? "green" : "red",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#d0ff00",
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
                                                    color: "#d0ff00",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#d0ff00",
                                                    flex: 1,
                                                    fontSize: 20
                                                }} 
                                                defaultValue={this.state.pronouns[5].text}
                                                onChangeText ={text => this.handleChange(this.state.pronouns[5].name, text)}
                                            >
                                            </TextInput>)
                                        }
                                        <Text style={styles.subjective_en}> likes ice creame.</Text>
                                    </View>

                                </View>

                                <View style={styles.sentence_pairs3rd}>
                                    <Text style={styles.title_language}>magyar:</Text>  
                                        <Text style={styles.subjective_hu}> szereti a labdáját.</Text>
                                    
                                    <Text style={styles.title_language}>english:</Text> 
                                    
                                    <View style={styles.english_container}>                                        
                                    { this.state.checking ?
                                            (<TextInput 
                                                style={{
                                                    color: this.state.pronouns[6].isRight ? "green" : "red",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#d0ff00",
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
                                                    color: "#d0ff00",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#d0ff00",
                                                    flex: 1,
                                                    fontSize: 20
                                                }} 
                                                defaultValue={this.state.pronouns[6].text}
                                                onChangeText ={text => this.handleChange(this.state.pronouns[6].name, text)}
                                            >
                                            </TextInput>)
                                        }
                                        <Text style={styles.subjective_en}> likes its ball.</Text>
                                    </View>
                                
                                </View>

                                <View style={styles.sentence_pairs3rd}>
                                    <Text style={styles.title_language}>magyar:</Text>  
                                        <Text style={styles.subjective_hu}>Tom és Jim nem találják a kiutat, eltévedtek.</Text>
                                    
                                    <Text style={styles.title_language}>english:</Text> 
                                    <View style={styles.english_container}>                                    
                                        <Text style={styles.subjective_en}>Tom and Jim can't find the way out, </Text> 
                                        { this.state.checking ?
                                            (<TextInput 
                                                style={{
                                                    color: this.state.pronouns[7].isRight ? "green" : "red",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#d0ff00",
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
                                                    color: "#d0ff00",
                                                    borderBottomWidth:2,
                                                    borderBottomColor: "#d0ff00",
                                                    flex: 1,
                                                    fontSize: 20
                                                }} 
                                                defaultValue={this.state.pronouns[7].text}
                                                onChangeText ={text => this.handleChange(this.state.pronouns[7].name, text)}
                                            >
                                            </TextInput>)
                                        }
                                        <Text style={styles.subjective_en}> are lost.</Text>
                                    </View>
                                </View>
                            </View>
                        </View>  
                        <View style={styles.nav_buttons}>
                            <TouchableOpacity style={styles.link_to_subjectivePronouns} onPress={() => this.navigateToScreen("ReflexivePronoun")}>
                                <Text style={{color: "black"}}>Reflexive Pronouns</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.link_to_subjectivePronouns} onPress={() => this.navigateToScreen("ObjectivePronoun")}>
                                <Text style={{color: "black"}}>Objective Pronouns</Text>
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

    return <SubjectivePronoun {...props} navigation={navigation} />;
}