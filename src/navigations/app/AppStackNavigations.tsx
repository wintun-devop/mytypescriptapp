// react and react native stack componetns
import React from "react";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
// import Screen
import HomeScreen from "../../screens/app/HomeScreen";
import VideoScreen from "../../screens/app/VideoScreen";
import BlogScreen from "../../screens/app/BlogScreen";
import BlogPageScreen from "../../screens/app/BlogPageScreen";
// Route
import Routes from "..";


const AppStack = createNativeStackNavigator();

// Main Home Tab
export const HomeTab = ({}) =>{
    return(
        <AppStack.Navigator
        initialRouteName={Routes.Home}
        >
            <AppStack.Screen 
            name={Routes.Home}
            component={HomeScreen}
            options={{headerShown:false}}
            />
            <AppStack.Screen 
            name={Routes.BlogPage}
            component={BlogPageScreen}
            options={{headerShown:false}}
            />
        </AppStack.Navigator>
    )
}


export const BlogTab = ({}) =>{
    return(
    <AppStack.Navigator>
        <AppStack.Screen 
        name={Routes.Blog}
        component={BlogScreen}
        options={{headerShown:false}}
        />
    </AppStack.Navigator>
    )
}

export const VideoTab = ({}) => {
    return(
    <AppStack.Navigator>
        <AppStack.Screen 
        name={Routes.Vide}
        component={VideoScreen}
        options={{headerShown:false}}
        />
    </AppStack.Navigator>
    )
}