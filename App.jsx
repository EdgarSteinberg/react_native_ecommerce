import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Header from './src/components/header/Header';
import CategoriesScreen from './src/screens/CategoriesScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import { useState, useEffect } from 'react';
import { useFonts } from 'expo-font'; // Expo Fonts
import * as SplashScreen from 'expo-splash-screen';  // Expo Fonts

SplashScreen.preventAutoHideAsync();  // Expo Fonts


export default function App() {
  const [categorySelected, setcategorySelected] = useState('');

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
    <>

      <Header title='App Mobile' />

      <StatusBar style="light" />

      {
        categorySelected ? (

          <ProductsScreen category={categorySelected} />
        ) : (

          <CategoriesScreen setcategorySelected={setcategorySelected} />
        )

      }


    </>
  );
}

const styles = StyleSheet.create({

});
