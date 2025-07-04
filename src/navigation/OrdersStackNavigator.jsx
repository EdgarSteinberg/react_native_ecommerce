import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrdersScreen from '../screens/orders/OrdersScreen';
import Header from "../components/header/Header";

const Stack = createNativeStackNavigator();

const OrdersStackNavigator = () => {

    return(
        <Stack.Navigator
            initialRouteName="Orden"
            screenOptions={{
                header : ({route}) => <Header title='Mundo Geek' subTitle={route.name} />
            }}
        >
            <Stack.Screen name="Orden" component={OrdersScreen} />
        </Stack.Navigator>
    )
}

export default OrdersStackNavigator;