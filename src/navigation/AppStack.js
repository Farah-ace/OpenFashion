import {
  StyleSheet, View, Text, SafeAreaView,
  TextInput, TouchableOpacity, ScrollView,
  Button, Image, ImageBackground
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, ActionBarImage, LogoTitle } from "@react-navigation/native-stack";

import Home from '../screens/Home';
import Header from '../components/Header';


const Stack = createNativeStackNavigator();




export default function AppStack() {
  const logoText = 'Open Fashion';
  const menuIcon = '../assets/icons/menu-icon.png';
  const searchIcon = '../assets/icons/search-icon.png';
  const cartIcon = '../assets/icons/cart-icon.png';
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='='
          component={Home}
          options={{
            headerRight: () => <Header
              menuIcon={require(menuIcon)}
              logoText={logoText}
              searchIcon={require(searchIcon)}
              cartIcon={require(cartIcon)} />
            // ,headerLeft:()=> <Header/>
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

}
