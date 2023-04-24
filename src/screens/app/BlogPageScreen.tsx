import React from "react";
import {
    View,
    Text,
    SafeAreaView 
} from 'react-native';
import { WebView } from 'react-native-webview';

import { Blogs } from "../../constants";

interface BlogPageScreenPros{
    navigation:any,
    route:any
}


const BlogPageScreen:React.FC<BlogPageScreenPros> = ({
    navigation,
    route
}) =>{
    return(
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
        <WebView 
          source={{ uri: 'https://reactnative.dev/' }} 
        />
      </SafeAreaView>
        </View>
    )
}

const styles = ({
    container:{
        flex:1,
        backgroundColor: 'darkgray',
    },
});

export default BlogPageScreen;