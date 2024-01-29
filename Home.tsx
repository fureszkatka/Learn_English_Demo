import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#30b0ae',
    padding: 10,
    flexDirection: 'column',
    height: '100%',
  },
  menu_Point: {
    fontFamily: 'Quicksand_300Light',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
