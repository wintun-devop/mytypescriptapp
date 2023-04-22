import { SafeAreaProvider,SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { MainTabNavigations } from "./navigations/app";

const Root = ()=>{
    return(
        <SafeAreaProvider>
            <NavigationContainer>
                <MainTabNavigations />
            </NavigationContainer>
        </SafeAreaProvider>
        
    )
}

export default Root;