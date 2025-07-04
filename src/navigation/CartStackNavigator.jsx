import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from '../screens/cart/CartScreen';
import Header from "../components/header/Header";

const Stack = createNativeStackNavigator();

const CartStackNavigation = () => {

    return(
        <Stack.Navigator
            initialRouteName="Carrito"
            screenOptions={{
                header: ({route}) => <Header title='Mundo Geek' subTitle={route.name} />
            }}
        >

            <Stack.Screen name="Carrito" component={CartScreen} />
        </Stack.Navigator>
    )
}

export default CartStackNavigation;