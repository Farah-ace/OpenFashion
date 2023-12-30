import {
  StyleSheet, View, Text, SafeAreaView,
  TextInput, TouchableOpacity, ScrollView,
  Button, Image, ImageBackground
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, ActionBarImage, LogoTitle } from "@react-navigation/native-stack";

import Home from '../screens/Home';


const Stack = createNativeStackNavigator();

export default function AppStack() {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}
