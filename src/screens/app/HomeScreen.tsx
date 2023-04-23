import React,{memo,useEffect,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
// import components
import TopNavigation from '../../components/app/TopNavigation';

const HomeScreen = () =>{
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
          <TopNavigation 
          navigationTitle="WinTunBlog"
          />
      </View>
      <View style={styles.body}>
         
         
      </View>
     
    </View>
  )
      
}


const styles = ({
  container:{
      flex:1,
      backgroundColor: 'darkgray',
  },
  navigation:{
      flex:1,
      // backgroundColor:'yellow',
      height: Dimensions.get('screen').height-720

  },
  body:{
      flex:7,
      justifyContent: 'center',
      alignItems:'center',
      // backgroundColor:'red'
  },
  footer:{
      flex:1,
      backgroundColor:'green'
  }
});

export default memo(HomeScreen);



