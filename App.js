import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './components/screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
     <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Pop" component={PopScree} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})