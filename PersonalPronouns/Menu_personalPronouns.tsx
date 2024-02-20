import {View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import styles from './Menu_style';
import { ScrollView } from 'react-native-gesture-handler';


const MenupersonalPronouns = ({navigation}: any) => {
    const navigateToScreen = (screenName: string) => {
        navigation.navigate(screenName);
    };

    const image = {uri: 'https://w0.peakpx.com/wallpaper/674/994/HD-wallpaper-yellow-green.jpg'};


    return (
        <ScrollView>
            <ImageBackground source={image} style={{flexDirection: "column",width: "100%", height: "100%"}} blurRadius={5}>
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
            </ImageBackground>
        </ScrollView>
    );
};
export default MenupersonalPronouns