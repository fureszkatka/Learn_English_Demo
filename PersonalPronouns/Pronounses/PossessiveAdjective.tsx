import React, { Component } from "react";
import {View, Text, ScrollView, Keyboard, TouchableWithoutFeedback, TextInput,TouchableOpacity} from 'react-native';
import styles from "../Pronouns_styles/PossessiveAdjective_style" 
import {useNavigation} from '@react-navigation/native';

interface PossessiveAdjectiveProps{
    navigation: {
        navigate: (screenName: string) => void,
    },
}

interface PossessiveAdjectiveState {
    pronouns:{
        my: string;
        our: string;
        your1: string;
        your2: string;
        his: string;
        her: string;
        its: string;
        their: string;
    }
}

class PossessiveAdjective extends React.Component<PossessiveAdjectiveProps, PossessiveAdjectiveState> {

    state = {
        pronouns: {
            my: "",
            our: "",
            your1: "",
            your2: "",
            his: "",
            her: "",
            its: "",
            their: ""
        }
    } as PossessiveAdjectiveState


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
                        
                            <View style={styles.possessiveAdjective_container}>
                                <Text style={styles.possessiveAdjective_title}>possessiveAdjective </Text>
                                <Text style={styles.number}>1ˢᵗ Person</Text>

                                <View style={styles.sentence_containers}>
                                    
                                    <View style={styles.sentence_pairs}>
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.possessiveAdjective_hu}>Budapesten élek.</Text>
                                        
                                        <Text style={styles.title_language}>english:</Text>      
                                        <View style={styles.english_container}>
                                            <TextInput 
                                                style={styles.possessiveAdjective_en_input} 
                                                defaultValue={this.state.pronouns.my}
                                                onChangeText ={text => this.handleChange("my", text)}
                                            >
                                            </TextInput>
                                            <Text style={styles.possessiveAdjective_en}> live in Budapest.</Text>
                                        </View>
                                    </View>
                                    <View style={styles.sentence_pairs}>
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.possessiveAdjective_hu}> Játtszunk.</Text>
                                        
                                        <Text style={styles.title_language}>english:</Text>
                                        <View style={styles.english_container}>                                        
                                            <TextInput 
                                                style={styles.possessiveAdjective_en_input} 
                                                defaultValue={this.state.pronouns.our}
                                                onChangeText ={text => this.handleChange("our", text)}
                                            >
                                            </TextInput>
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
                                                <TextInput 
                                                    style={styles.possessiveAdjective_en_input} 
                                                    defaultValue={this.state.pronouns.your1}
                                                    onChangeText ={text => this.handleChange("your1", text)}
                                                >
                                                </TextInput>
                                                <Text style={styles.possessiveAdjective_en}> have a dog?</Text>
                                            </View>
                                    </View>
                                    
                                    <View style={styles.sentence_pairs}>

                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.possessiveAdjective_hu}>Hol vagytok?</Text>
                                        
                                        <Text style={styles.title_language}>english:</Text> 
                                        <View style={styles.english_container}>
                                            <Text style={styles.possessiveAdjective_en}>Where are </Text>
                                            <TextInput 
                                                style={styles.possessiveAdjective_en_input} 
                                                defaultValue={this.state.pronouns.your2}
                                                onChangeText ={text => this.handleChange("your2", text)}
                                            >
                                            </TextInput>
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
                                            <TextInput 
                                                style={styles.possessiveAdjective_en_input} 
                                                defaultValue={this.state.pronouns.his}
                                                onChangeText ={text => this.handleChange("his", text)}
                                            >
                                            </TextInput>
                                            <Text style={styles.possessiveAdjective_en}> likes me.</Text>
                                        </View>

                                    </View>
                                    
                                    <View style={styles.sentence_pairs}>
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.possessiveAdjective_hu}> Szereti a fagyit!</Text>
                                        
                                        <Text style={styles.title_language}>english:</Text> 
                                        <View style={styles.english_container}>                                        
                                            <TextInput 
                                                style={styles.possessiveAdjective_en_input} 
                                                defaultValue={this.state.pronouns.her}
                                                onChangeText ={text => this.handleChange("her", text)}
                                            >
                                            </TextInput>
                                            <Text style={styles.possessiveAdjective_en}> likes ice creame.</Text>
                                        </View>

                                    </View>

                                    <View style={styles.sentence_pairs}>
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.possessiveAdjective_hu}> szereti a labdáját.</Text>
                                        
                                        <Text style={styles.title_language}>english:</Text> 
                                        
                                        <View style={styles.english_container}>                                        
                                            <TextInput 
                                                style={styles.possessiveAdjective_en_input} 
                                                defaultValue={this.state.pronouns.its}
                                                onChangeText ={text => this.handleChange("its", text)}
                                            >
                                            </TextInput>
                                            <Text style={styles.possessiveAdjective_en}> likes its ball.</Text>
                                        </View>
                                    
                                    </View>

                                    <View style={styles.sentence_pairs}>
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.possessiveAdjective_hu}>Tom és Jim nem találják a kiutat, eltévedtek.</Text>
                                        
                                        <Text style={styles.title_language}>english:</Text> 
                                        <View style={styles.english_container}>                                    
                                            <Text style={styles.possessiveAdjective_en}>Tom and Jim are not find the way out, </Text> 
                                            <TextInput 
                                                style={styles.possessiveAdjective_en_input} 
                                                defaultValue={this.state.pronouns.their}
                                                onChangeText ={text => this.handleChange("their", text)}
                                            >
                                            </TextInput> 
                                            <Text style={styles.possessiveAdjective_en}> are lost.</Text>
                                        </View>

                                    </View>
                                </View>
                            </View>
                            <View style={styles.nav_buttons}>
                                <TouchableOpacity style={styles.link_to_possessiveAdjectivePronouns} onPress={() => this.navigateToScreen("possessiveAdjectivePronoun")}>
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