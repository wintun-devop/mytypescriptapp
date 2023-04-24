import React,{memo,useEffect,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions,Button } from 'react-native';
// import components
import TopNavigation from '../../components/app/TopNavigation';
import Routes from '../../navigations';

interface HomeScreenProps{
  navigation:any,
  route:any
}

const HomeScreen:React.FC<HomeScreenProps> = ({
navigation,
route
}) =>{
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
          <TopNavigation 
          navigationTitle="WinTunBlog"
          />
      </View>
      <View style={styles.body}>
      <Button
      onPress={()=>{navigation.navigate(Routes.BlogPage)}}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
/>
         
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



