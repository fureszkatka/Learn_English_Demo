import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import styles from './Menu_style';
import { ScrollView } from 'react-native-gesture-handler';


const MenupersonalPronouns = ({navigation}: any) => {
    const navigateToScreen = (screenName: string) => {
        navigation.navigate(screenName);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.topic_container}  onPress={() => navigateToScreen('SubjectivePronoun')}>
                    <Text style={styles.SubjectivePronoun}>Subjective Pronouns (alanyi)</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.topic_container} onPress={() => navigateToScreen('ObjectivePronoun')}>
                    <Text style={styles.ObjectivePronoun}>Objective Pronouns (tárgyi)</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.topic_container} onPress={() => navigateToScreen('PossessiveAdjective')}>
                    <Text style={styles.PossessiveAdjective}>Possessive Adjectives (birtkos 1.)</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.topic_container} onPress={() => navigateToScreen('PossessivePronoun')}>
                    <Text style={styles.PossessivePronoun}>Possessive Pronouns (birtokos 2.)</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.topic_container} onPress={() => navigateToScreen('ReflexivePronoun')}>
                    <Text style={styles.ReflexivePronoun} >Reflexive Pronouns (visszaható)</Text>
                </TouchableOpacity>
                
            </View>
        </ScrollView>
    );
};
export default MenupersonalPronouns