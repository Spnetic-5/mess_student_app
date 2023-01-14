import 'react-native-gesture-handler'
import {StatusBar} from 'expo-status-bar'
import React, {useEffect, useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

// pages
import HomeScreen from './screens/HomeScreen'
import AddDetailsScreen from './screens/AddDetailsScreen'
import UpdateScreen from './screens/UpdateScreen'
import QRGenScreen from './screens/QRGenScreen'
import MenuScreen from './screens/MenuScreen'
import Dashboard from './screens/Dashboard'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

const Stack = createStackNavigator()

export default function App() {
  const globalScreenOptions = {
    headerShown: false,
  }
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='AddDetails' component={AddDetailsScreen} />
        <Stack.Screen name='QRGen' component={QRGenScreen} />
        <Stack.Screen name='Update' component={UpdateScreen} />
        <Stack.Screen name='Menu' component={MenuScreen} />
        <Stack.Screen name='Dashboard' component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
