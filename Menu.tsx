import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const MenuScreen = ({navigation}: any) => {
  const navigateToScreen = (screenName: any) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateToScreen('Irregular-Verbs')}>
        <Text style={styles.menu_Point}>Irregular Verbs</Text>
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
  menu_Point: {
    backgroundColor: '#30b0ae',
    fontFamily: 'Quicksand_300Light',
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
});

export default MenuScreen;
