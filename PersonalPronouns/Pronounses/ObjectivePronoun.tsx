import React, { Component } from "react";
import {View, Text, ScrollView, Keyboard, TouchableWithoutFeedback, TextInput,TouchableOpacity} from 'react-native';
import styles from "../Pronouns_styles/ObjectivePronoun_style" 
import {useNavigation} from '@react-navigation/native';


interface ObjectiveProps{
    navigation: {
        navigate: (screenName: string) => void,
    }
}
interface ObjectiveState {
    pronouns:{
        me: string;
        us: string;
        you1: string;
        you2: string;
        him: string;
        her: string;
        it: string;
        them: string;
    } 
}

class ObjectivePronoun extends React.Component<ObjectiveProps,ObjectiveState> {

    state = {
        pronouns:{
            me: "",
            us: "",
            you1: "",
            you2: "",
            him: "",
            her: "",
            it: "",
            them: ""
        }
    } as ObjectiveState


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
                        
                            <View style={styles.objective_container}>
                                <Text style={styles.objective_title}>Objective </Text>
                                <Text style={styles.number}>1ˢᵗ Person</Text>

                                <View style={styles.sentence_containers}>
                                    
                                    <View style={styles.sentence_pairs}>
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.objective_hu}>Budapesten élek.</Text>
                                        
                                        <Text style={styles.title_language}>english:</Text>      
                                        <View style={styles.english_container}>
                                            <TextInput 
                                                style={styles.objective_en_input} 
                                                defaultValue={this.state.pronouns.me}
                                                onChangeText ={text => this.handleChange("me", text)}
                                            >
                                            </TextInput>
                                            <Text style={styles.objective_en}> live in Budapest.</Text>
                                        </View>
                                    </View>
                                    <View style={styles.sentence_pairs}>
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.objective_hu}> Játtszunk.</Text>
                                        
                                        <Text style={styles.title_language}>english:</Text>
                                        <View style={styles.english_container}>                                        
                                            <TextInput 
                                                style={styles.objective_en_input} 
                                                defaultValue={this.state.pronouns.us}
                                                onChangeText ={text => this.handleChange("us", text)}
                                            >
                                            </TextInput>
                                            <Text style={styles.objective_en}>play.</Text>
                                        </View>

                                    </View>

                                </View>

                                <Text style={styles.number}>2ⁿᵈ Person</Text>
                                <View style={styles.sentence_containers}>
                                    
                                    <View style={styles.sentence_pairs}>                                
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.objective_hu}>Van macskád?</Text>
      
                                            <Text style={styles.title_language}>english:</Text> 
                                            <View style={styles.english_container}>
                                                <Text style={styles.objective_en}>Do </Text>
                                                <TextInput 
                                                    style={styles.objective_en_input} 
                                                    defaultValue={this.state.pronouns.you1}
                                                    onChangeText ={text => this.handleChange("you1", text)}
                                                >
                                                </TextInput>
                                                <Text style={styles.objective_en}> have a dog?</Text>
                                            </View>
                                    </View>
                                    
                                    <View style={styles.sentence_pairs}>

                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.objective_hu}>Hol vagytok?</Text>
                                        
                                        <Text style={styles.title_language}>english:</Text> 
                                        <View style={styles.english_container}>
                                            <Text style={styles.objective_en}>Where are </Text>
                                            <TextInput 
                                                style={styles.objective_en_input} 
                                                defaultValue={this.state.pronouns.you2}
                                                onChangeText ={text => this.handleChange("you2", text)}
                                            >
                                            </TextInput>
                                            <Text style={styles.objective_en}>?</Text>
                                        </View>
                                    
                                    </View>
                                </View>
                                
                                <Text style={styles.number}>3ʳᵈ Person</Text>
                                <View style={styles.sentence_containers}>
                                    <View style={styles.sentence_pairs}>    
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.objective_hu}> Ő szeret engem.</Text>
                                    
                                        <Text style={styles.title_language}>english:</Text> 
                                        <View style={styles.english_container}>
                                            <TextInput 
                                                style={styles.objective_en_input} 
                                                defaultValue={this.state.pronouns.him}
                                                onChangeText ={text => this.handleChange("him", text)}
                                            >
                                            </TextInput>
                                            <Text style={styles.objective_en}> likes me.</Text>
                                        </View>

                                    </View>
                                    
                                    <View style={styles.sentence_pairs}>
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.objective_hu}> Szereti a fagyit!</Text>
                                        
                                        <Text style={styles.title_language}>english:</Text> 
                                        <View style={styles.english_container}>                                        
                                            <TextInput 
                                                style={styles.objective_en_input} 
                                                defaultValue={this.state.pronouns.her}
                                                onChangeText ={text => this.handleChange("her", text)}
                                            >
                                            </TextInput>
                                            <Text style={styles.objective_en}> likes ice creame.</Text>
                                        </View>

                                    </View>

                                    <View style={styles.sentence_pairs}>
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.objective_hu}> szereti a labdáját.</Text>
                                        
                                        <Text style={styles.title_language}>english:</Text> 
                                        
                                        <View style={styles.english_container}>                                        
                                            <TextInput 
                                                style={styles.objective_en_input} 
                                                defaultValue={this.state.pronouns.it}
                                                onChangeText ={text => this.handleChange("it", text)}
                                            >
                                            </TextInput>
                                            <Text style={styles.objective_en}> likes its ball.</Text>
                                        </View>
                                    
                                    </View>

                                    <View style={styles.sentence_pairs}>
                                        <Text style={styles.title_language}>magyar:</Text>  
                                            <Text style={styles.objective_hu}>Tom és Jim nem találják a kiutat, eltévedtek.</Text>
                                        
                                        <Text style={styles.title_language}>english:</Text> 
                                        <View style={styles.english_container}>                                    
                                            <Text style={styles.objective_en}>Tom and Jim are not find the way out, </Text> 
                                            <TextInput 
                                                style={styles.objective_en_input} 
                                                defaultValue={this.state.pronouns.them}
                                                onChangeText ={text => this.handleChange("them", text)}
                                            >
                                            </TextInput> 
                                            <Text style={styles.objective_en}> are lost.</Text>
                                        </View>

                                    </View>
                                </View>
                            </View>
                            <View style={styles.nav_buttons}>
                                <TouchableOpacity style={styles.link_to_objectivePronouns} onPress={() => this.navigateToScreen("SubjecivePronoun")}>
                                    <Text style={{color: "black"}}>Subjective Pronouns</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.link_to_objectivePronouns} onPress={() => this.navigateToScreen("PossessiveAdjective")}>
                                    <Text style={{color: "black"}}>Possessive Adjective</Text>
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

    return <ObjectivePronoun {...props} navigation={navigation} />;
}