// ButtomTab Package
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import tab to combine navigation
import { HomeTab,BlogTab,VideoTab } from "./AppStackNavigations";
// Route
import Routes from "..";

// export type MainTabParamList = {
//     HomeTab:undefined
//     BlogTab:undefined
//     VideoTab:undefined
// }

const MainTab = createBottomTabNavigator();

export const MainTabNavigations = () =>{
    return (
        <MainTab.Navigator
        initialRouteName={Routes.HomeTab}
        >
            <MainTab.Screen 
            name={Routes.HomeTab}
            component={HomeTab}
            options={{headerShown:false}}
            />
            <MainTab.Screen 
            name={Routes.BlogTab}
            component={BlogTab}
            options={{headerShown:false}}
            />
            <MainTab.Screen 
            name={Routes.VideoTab}
            component={VideoTab}
            options={{headerShown:false}}
            />
        </MainTab.Navigator> 
    )
}


