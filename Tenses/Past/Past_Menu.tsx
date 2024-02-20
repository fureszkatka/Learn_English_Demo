import {View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './Styles/Past_Menu_style';


const Past_Menu = ({navigation}: any) => {
    const navigateToScreen = (screenName: string) => {
        navigation.navigate(screenName);
    };

    const image = {uri: 'https://digwallpapers.com/wallpapers/full/7/c/1/86463-3840x2160-purple-and-blue-background-desktop-4k.jpg'};


    return (
        <ScrollView>
            <ImageBackground source={image} style={{flexDirection: "column",width: "100%", height: "100%"}} blurRadius={5}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.topic_container}  onPress={() => navigateToScreen('PastSimple')}>
                        <Text style={styles.topics}>Past Simple</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.topic_container}  onPress={() => navigateToScreen('PastContinuous')}>
                        <Text style={styles.topics}>Past Continuous</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.topic_container}  onPress={() => navigateToScreen('PastPerfectSimple')}>
                        <Text style={styles.topics}>Past Perfect Simple</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.topic_container}  onPress={() => navigateToScreen('PastPerfectContinuous')}>
                        <Text style={styles.topics}>Past Perfect Continuous</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ScrollView>
    );
};
export default Past_Menu