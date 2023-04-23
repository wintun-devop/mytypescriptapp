// React
import React,{memo} from "react";

// React Native
import { 
    StyleSheet, 
    View, 
    Text,
    TouchableOpacity, 
    TextInput, 
    Image,
    Dimensions
} from 'react-native';


interface TopNavigationProps{
navigationTitle:string
}

const TopNavigation:React.FC<TopNavigationProps>=({
navigationTitle
})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.navTitle}>{navigationTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'green',
        marginTop:30 
    },
    navTitle:{
        fontSize:20,
        textAlign: 'center',
        marginTop:10
    }
})

export default memo(TopNavigation);