import { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../global/color';
import { StyleSheet, useWindowDimensions } from 'react-native';


import CartStackNavigator from './CartStackNavigator'
import OrdersStackNavigator from './OrdersStackNavigator';
import ShopStackNavigator from './ShopStackNavigator'
import ProfileStackNavigator from './ProfileStackNavigator';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const [isLargeScreen, SetIsLargeScreen] = useState(false);

    const { width, height } = useWindowDimensions();
    /* console.log(isLargeScreen) */

    useEffect(() => {
        if (width > height) {
            SetIsLargeScreen(true);
        } else {
            SetIsLargeScreen(false);
        }
    }, [width]);

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar
            }}
        >
            <Tab.Screen name="shop"
                component={ShopStackNavigator}
                options={{
                    tabBarIcon: () => <Icon name="shopping-bag" size={32} />
                }}
            />
            <Tab.Screen name="Cart"
                component={CartStackNavigator}
                options={{
                    tabBarIcon: () => <Icon name="shopping-cart" size={32} />
                }}
            />
            <Tab.Screen name="Orders"
                component={OrdersStackNavigator}
                options={{
                    tabBarIcon: () => <Icon name="tablet" size={32} />
                }}
            />
            <Tab.Screen name="Profil"
                component={ProfileStackNavigator}
                options={{
                    tabBarIcon: () => <Icon name="user" size={32} />
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigator;


const styles = StyleSheet.create({
    tabBar: {
        height: 100,
        backgroundColor: colors.grisOcuro,
        color: colors.white
    }
});