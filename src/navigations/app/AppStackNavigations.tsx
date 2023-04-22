// react and react native stack componetns
import React from "react";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
// import Screen
import HomeScreen from "../../screens/app/HomeScreen";
import VideoScreen from "../../screens/app/VideoScreen";
import BlogScreen from "../../screens/app/BlogScreen";
// Route
import Routes from "..";


const AppStack = createNativeStackNavigator();

// Main Home Tab
export const HomeTab = () =>{
    <AppStack.Navigator
    initialRouteName={Routes.Home}
    >
        <AppStack.Screen 
        name={Routes.Home}
        component={HomeScreen}
        />
    </AppStack.Navigator>

}


export const BlogTab = () =>{
    <AppStack.Navigator>
        <AppStack.Screen 
        name={Routes.Blog}
        component={BlogScreen}
        />
    </AppStack.Navigator>
}

export const VideoTab = () => {
    <AppStack.Navigator>
        <AppStack.Screen 
        name={Routes.Vide}
        component={VideoScreen}
        />
    </AppStack.Navigator>
}