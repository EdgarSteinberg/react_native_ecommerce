import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/shop/CategoriesScreen';
import ProductsScreen from '../screens/shop/ProductsScreen';
import ProductScreen from '../screens/shop/ProductScreen';
// import { Header } from 'react-native/Libraries/NewAppScreen';
import Header from '../components/header/Header';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const ShopStackNavigation = () => {
    const category = useSelector((state) => state.shopReducer.categorySelected)
    return (
        // <Stack.Navigator
        //  initialRouteName='Categories'
        //  screenOptions={{
        //     header: () => <Header />
        //  }}
        //  >
        <Stack.Navigator
            initialRouteName='Categorias'
            screenOptions={{
                header: ({ route }) => <Header title={'Mundo Geek'} /* subTitle={route.name} */ subTitle={category}  />
            }}
        >

            <Stack.Screen name='Categorias' component={CategoriesScreen} />
            <Stack.Screen name='Productos' component={ProductsScreen} />
            <Stack.Screen name='Producto' component={ProductScreen} />

        </Stack.Navigator>
    )
}

export default ShopStackNavigation;