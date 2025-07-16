import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./AuthStackNavigator";
import TabNavigator from "./TabNavigator";
import { useSelector } from "react-redux";


const MainNavigator = () => {
    const userEmail = useSelector((state) => state.userReducer.userEmail);

    return (
        <NavigationContainer>
            {
                userEmail ? <TabNavigator /> : <AuthStackNavigator />
            }
        </NavigationContainer>
    )
}

export default MainNavigator;