import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()
export default function HotelDetails({route}) {
  const {productID}=route.params

  
  return (
    <> 
    <View>
      <Text>HotelDetails {productID}</Text>
        </View>
         </>
  )
}