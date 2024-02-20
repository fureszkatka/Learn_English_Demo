import {View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './Styles/Future_Menu_style';


const Future_Menu = ({navigation}: any) => {
    const navigateToScreen = (screenName: string) => {
        navigation.navigate(screenName);
    };

    const image = {uri: 'https://wallpapers.com/images/hd/red-and-blue-smoke-9xqna04loqy0ipg9.jpg'};


    return (
        <ScrollView>
            <ImageBackground source={image} style={{flexDirection: "column",width: "100%", height: "100%"}} blurRadius={5}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.topic_container}  onPress={() => navigateToScreen('FutureSimple')}>
                        <Text style={styles.topics}>Future Simple</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.topic_container}  onPress={() => navigateToScreen('FutureContinuous')}>
                        <Text style={styles.topics}>Future Continuous</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.topic_container}  onPress={() => navigateToScreen('FuturePerfectSimple')}>
                        <Text style={styles.topics}>Future Perfect Simple</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.topic_container}  onPress={() => navigateToScreen('FuturePerfectContinuous')}>
                        <Text style={styles.topics}>Future Perfect Continuous</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ScrollView>
    );
};
export default Future_Menu