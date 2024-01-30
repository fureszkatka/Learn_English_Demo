import React, { Component } from "react";
import {View, Text, ScrollView, Keyboard, TouchableWithoutFeedback, TextInput,TouchableOpacity} from 'react-native';
import styles from "../Pronouns_styles/SubjectivePronoun_style" 



interface SubjectivePronounState {

}

class SubjectivePronoun extends React.Component<{},SubjectivePronounState > {
    render() {
        return (
            <TouchableWithoutFeedback accessible={false}  onPress={Keyboard.dismiss}>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style ={styles.instructions}>
                            * fill all the sentences with the right pronouns!    
                        </Text>
                        
                        <View style = {styles.pronouns_container}>
                            <View style={styles.subjective_container}>
                                <Text style={styles.subjective}>Subjective (alanyi)</Text>

                                <Text style={styles.number}>1ˢᵗ Person</Text>
                                <View style={styles.sentence}>
                                    <Text style={styles.subjective_hu}>Budapesten élek.</Text>
                                    <TextInput style={styles.subjective_en} value={"I live in Budapest"} ></TextInput>
                                    <Text style={styles.subjective_hu}>Budapesten élek.</Text>
                                    <TextInput style={styles.subjective_en} value={"I live in Budapest"}></TextInput>
                                </View>

                                <Text style={styles.number}>2ⁿᵈ Person</Text>
                                <View style={styles.sentence}>
                                    <Text style={styles.subjective_hu}>Budapesten élek.</Text>
                                    <TextInput style={styles.subjective_en} value={"I live in Budapest"}></TextInput>
                                    <Text style={styles.subjective_hu}>Budapesten élek.</Text>
                                    <TextInput style={styles.subjective_en} value={"I live in Budapest"}></TextInput>
                                </View>
                                
                                <Text style={styles.number}>3ʳᵈ Person</Text>
                                <View style={styles.sentence}>
                                    <Text style={styles.subjective_hu}>Budapesten élek.</Text>
                                    <TextInput style={styles.subjective_en} value={"I live in Budapest"}></TextInput>
                                    <Text style={styles.subjective_hu}>Budapesten élek.</Text>
                                    <TextInput style={styles.subjective_en} value={"I live in Budapest"}></TextInput>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>              
            </TouchableWithoutFeedback>
        )
    }
}


export default SubjectivePronoun