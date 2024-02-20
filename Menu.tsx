import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';

const MenuScreen = ({navigation}: any) => {
    const navigateToScreen = (screenName: any) => {
        navigation.navigate(screenName);
    };

    const image = {uri: 'https://www.hdwallpapers.in/thumbs/2021/purple_dark_green_optical_fiber_glare_thread_black_background_4k_hd_dark_green-t2.jpg'};

    return (
        <ImageBackground source={image} style={{flexDirection: "column",width: "100%", height: "100%"}} blurRadius={2}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigateToScreen('Irregular Verbs')}>
                    <Text style={styles.Irregular_verb}>Irregular Verbs</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('Personal Pronouns')}>
                    <Text style={styles.Personal_Pronouns}>Personal Pronouns</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('TensesMenu')}>
                    <Text style={styles.Tenses_Menu}>Tenses</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'column',
        borderRadius: 25,
        height: '100%'
    },
    Irregular_verb: {
        backgroundColor: '#30b0ae',
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10,
        padding: 10,
        borderRadius: 20,
        borderBottomWidth: 5,
        borderBottomColor: '#0d3c57',
        borderRightWidth: 5,
        borderRightColor: '#0d3c57',
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
    },
    Tenses_Menu:{
        backgroundColor: '#30b0ae',
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10,
        padding: 10,
        borderRadius: 20,
        borderBottomWidth: 5,
        borderBottomColor: '#0d3c57',
        borderRightWidth: 5,
        borderRightColor: '#0d3c57',
    }
});

export default MenuScreen;
