import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { useFonts } from 'expo-font'; // Expo Fonts
import * as SplashScreen from 'expo-splash-screen';  // Expo Fonts
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';


SplashScreen.preventAutoHideAsync();  // Expo Fonts

export default function App() {

  const [loaded, error] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf')

  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


  return (
    < NavigationContainer >

      <StatusBar style="light" />
      <TabNavigator />
      
    </NavigationContainer >
  )
}

const styles = StyleSheet.create({

});
