import {View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './Styles/Present_Menu_style';


const Present_Menu = ({navigation}: any) => {
    const navigateToScreen = (screenName: string) => {
        navigation.navigate(screenName);
    };

    const image = {uri: 'https://digwallpapers.com/wallpapers/full/7/c/1/86463-3840x2160-purple-and-blue-background-desktop-4k.jpg'};


    return (
        <ScrollView>
            <ImageBackground source={image} style={{flexDirection: "column",width: "100%", height: "100%"}} blurRadius={5}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.topic_container}  onPress={() => navigateToScreen('PresentSimple')}>
                        <Text style={styles.topics}>Present Simple</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.topic_container}  onPress={() => navigateToScreen('PresentContinuous')}>
                        <Text style={styles.topics}>Present Continuous</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.topic_container}  onPress={() => navigateToScreen('PresentPerfectSimple')}>
                        <Text style={styles.topics}>Present Perfect Simple</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.topic_container}  onPress={() => navigateToScreen('PresentPerfectContinuous')}>
                        <Text style={styles.topics}>Present Perfect Continuous</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ScrollView>
    );
};
export default Present_Menu