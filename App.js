import 'react-native-gesture-handler'
import * as React from 'react'
import MainContainer from './navigation/MainContainer'
import { Provider } from 'react-redux';
import { store } from './src/redux/store'

import {  ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';
import HotelDetails from './navigation/screens/HotelDetails';
import userActions from './src/redux/actions/userAction';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()


export default function App() {
 

  const Stack = createStackNavigator();
  return (
    <Provider store={store}> 

      <MainContainer/>
      
    </Provider>
  )
}