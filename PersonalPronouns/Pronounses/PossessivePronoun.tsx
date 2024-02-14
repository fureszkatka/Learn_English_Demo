import React, { Component } from "react";
import {View, Text, ScrollView, Keyboard, TouchableWithoutFeedback, TextInput,TouchableOpacity} from 'react-native';
import styles from "../Pronouns_styles/PossessivePronoun_style" 
import {useNavigation} from '@react-navigation/native';


interface PessessiveProps {
    navigation: {
        navigate: (screenName: string) => void,
    },
}
interface PossessiveState {
    pronouns: {
        mine: string;
        ours: string;
        yours1: string;
        yours2: string;
        his: string;
        hers: string;
        its: string;
        theirs: string;
    }
}  

class PossessivePronoun extends React.Component<PessessiveProps, PossessiveState  > {

    state = {
        pronouns:{
            mine: "",
            ours: "",
            yours1: "",
            yours2: "",
            his: "",
            hers: "",
            its: "",
            theirs: ""
        }
    } as PossessiveState


    handleChange = (name: string, text: string): void => {
        this.setState({
            pronouns: {
                ...this.state.pronouns,
                [name]: text
            }
        })
    }

    navigateToScreen = (screenName: string) => {
        this.props.navigation.navigate(screenName);
    };

    render() {
        return (
            <TouchableWithoutFeedback accessible={false}  onPress={Keyboard.dismiss}>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style ={styles.instructions}>
                            * fill all the sentences with the right pronouns!    
                        </Text>
                        
                            <View style={styles.possessive_container}>
                                <Text style={styles.possessive_title}>Possessive Pronoun </Text>
                                <Text style={styles.number}>1ˢᵗ Person</Text>

                                <View style={styles.sentence_containers}>
                                    
                                    <View style={styles.sentence_pairs}>
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.possessive_hu}>Budapesten élek.</Text>
                                        
                                        <Text style={styles.title_language}>english:</Text>      
                                        <View style={styles.english_container}>
                                            <TextInput 
                                                style={styles.possessive_en_input} 
                                                defaultValue={this.state.pronouns.mine}
                                                onChangeText ={text => this.handleChange("mine", text)}
                                            >
                                            </TextInput>
                                            <Text style={styles.possessive_en}> live in Budapest.</Text>
                                        </View>
                                    </View>
                                    <View style={styles.sentence_pairs}>
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.possessive_hu}> Játtszunk.</Text>
                                        
                                        <Text style={styles.title_language}>english:</Text>
                                        <View style={styles.english_container}>                                        
                                            <TextInput 
                                                style={styles.possessive_en_input} 
                                                defaultValue={this.state.pronouns.ours}
                                                onChangeText ={text => this.handleChange("ours", text)}
                                            >
                                            </TextInput>
                                            <Text style={styles.possessive_en}>play.</Text>
                                        </View>

                                    </View>

                                </View>

                                <Text style={styles.number}>2ⁿᵈ Person</Text>
                                <View style={styles.sentence_containers}>
                                    
                                    <View style={styles.sentence_pairs}>                                
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.possessive_hu}>Van macskád?</Text>
      
                                            <Text style={styles.title_language}>english:</Text> 
                                            <View style={styles.english_container}>
                                                <Text style={styles.possessive_en}>Do </Text>
                                                <TextInput 
                                                    style={styles.possessive_en_input} 
                                                    defaultValue={this.state.pronouns.yours1}
                                                    onChangeText ={text => this.handleChange("yours1", text)}
                                                >
                                                </TextInput>
                                                <Text style={styles.possessive_en}> have a dog?</Text>
                                            </View>
                                    </View>
                                    
                                    <View style={styles.sentence_pairs}>

                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.possessive_hu}>Hol vagytok?</Text>
                                        
                                        <Text style={styles.title_language}>english:</Text> 
                                        <View style={styles.english_container}>
                                            <Text style={styles.possessive_en}>Where are </Text>
                                            <TextInput 
                                                style={styles.possessive_en_input} 
                                                defaultValue={this.state.pronouns.yours2}
                                                onChangeText ={text => this.handleChange("yours2", text)}
                                            >
                                            </TextInput>
                                            <Text style={styles.possessive_en}>?</Text>
                                        </View>
                                    
                                    </View>
                                </View>
                                
                                <Text style={styles.number}>3ʳᵈ Person</Text>
                                <View style={styles.sentence_containers}>
                                    <View style={styles.sentence_pairs}>    
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.possessive_hu}> Ő szeret engem.</Text>
                                    
                                        <Text style={styles.title_language}>english:</Text> 
                                        <View style={styles.english_container}>
                                            <TextInput 
                                                style={styles.possessive_en_input} 
                                                defaultValue={this.state.pronouns.his}
                                                onChangeText ={text => this.handleChange("his", text)}
                                            >
                                            </TextInput>
                                            <Text style={styles.possessive_en}> likes me.</Text>
                                        </View>

                                    </View>
                                    
                                    <View style={styles.sentence_pairs}>
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.possessive_hu}> Szereti a fagyit!</Text>
                                        
                                        <Text style={styles.title_language}>english:</Text> 
                                        <View style={styles.english_container}>                                        
                                            <TextInput 
                                                style={styles.possessive_en_input} 
                                                defaultValue={this.state.pronouns.hers}
                                                onChangeText ={text => this.handleChange("hers", text)}
                                            >
                                            </TextInput>
                                            <Text style={styles.possessive_en}> likes ice creame.</Text>
                                        </View>

                                    </View>

                                    <View style={styles.sentence_pairs}>
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.possessive_hu}> szereti a labdáját.</Text>
                                        
                                        <Text style={styles.title_language}>english:</Text> 
                                        
                                        <View style={styles.english_container}>                                        
                                            <TextInput 
                                                style={styles.possessive_en_input} 
                                                defaultValue={this.state.pronouns.its}
                                                onChangeText ={text => this.handleChange("its", text)}
                                            >
                                            </TextInput>
                                            <Text style={styles.possessive_en}> likes its ball.</Text>
                                        </View>
                                    
                                    </View>

                                    <View style={styles.sentence_pairs}>
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.possessive_hu}>Tom és Jim nem találják a kiutat, eltévedtek.</Text>
                                        
                                        <Text style={styles.title_language}>english:</Text> 
                                        <View style={styles.english_container}>                                    
                                            <Text style={styles.possessive_en}>Tom and Jim are not find the way out, </Text> 
                                            <TextInput 
                                                style={styles.possessive_en_input} 
                                                defaultValue={this.state.pronouns.theirs}
                                                onChangeText ={text => this.handleChange("theirs", text)}
                                            >
                                            </TextInput> 
                                            <Text style={styles.possessive_en}> are lost.</Text>
                                        </View>

                                    </View>
                                </View>
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