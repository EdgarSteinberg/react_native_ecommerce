import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/LoginScreen";
import Header from "../components/header/Header";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {

    return (
        <Stack.Navigator
            initialRouteName="Carrito"
            screenLayout={{
                header: ({route}) => <Header title='Mundo Geek' subTitle={route.name}/>
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
    )
}