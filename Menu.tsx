import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const MenuScreen = ({navigation}: any) => {
    const navigateToScreen = (screenName: any) => {
        navigation.navigate(screenName);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigateToScreen('Irregular Verbs')}>
                <Text style={styles.Irregular_verb}>Irregular Verbs</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateToScreen('Personal Pronouns')}>
                <Text style={styles.Personal_Pronouns}>Personal Pronouns</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'column',
        borderRadius: 25,
    },
    Irregular_verb: {
        backgroundColor: '#30b0ae',
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10,
        padding: 10,
        borderRadius: 20,
        borderBottomWidth: 5,
        borderBottomColor: '#1d5247',
        borderRightWidth: 5,
        borderRightColor: '#1d5247',
    },
    Personal_Pronouns:{
        backgroundColor: '#86bd28',
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10,
        padding: 10,
        borderRadius: 20,
        borderBottomWidth: 5,
        borderBottomColor: '#1d5247',
        borderRightWidth: 5,
        borderRightColor: '#1d5247',
    }
});

export default MenuScreen;
