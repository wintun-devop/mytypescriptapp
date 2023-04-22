import React,{memo,useEffect,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const BlogScreen = () =>{
    return (
        <View style={styles.container}>
          <Text>Blog Screen</Text>
          <StatusBar style="auto" />
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

export default memo(BlogScreen);
