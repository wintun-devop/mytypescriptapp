import React,{memo,useEffect,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const HomeScreen = () =>{
    return (
        <View style={styles.container}>
          <Text>Home Screen</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'tomato',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default memo(HomeScreen);



