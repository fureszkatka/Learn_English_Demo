import {View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './Tenses_Menu_style'

const Tenses_Menu = ({navigation}: any) => {
    const navigateToScreen = (screenName: string) => {
        navigation.navigate(screenName);
    };

    const image = {uri: 'https://mcdn.wallpapersafari.com/335/92/82/XOVN4y.jpg'};


    return (
            <ScrollView>
                <ImageBackground source={image} style={{flexDirection: "column",width: "100%", height: "100%"}} blurRadius={2}>

                    <View style={styles.container}>
                        <TouchableOpacity style={styles.topic_container}  onPress={() => navigateToScreen('Past_Menu')}>
                            <Text style={styles.Time}>Past</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.topic_container}  onPress={() => navigateToScreen('Present_Menu')}>
                            <Text style={styles.Time1}>Present</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.topic_container}  onPress={() => navigateToScreen('Future_Menu')}>
                            <Text style={styles.Time}>Future</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
        </ScrollView>
    );
};
export default Tenses_Menu