import { View, Text } from 'react-native'
import React from 'react'
import Carrusel from "../../src/components/Carrusel"
export default function HomeScreen({navigation}) {
    
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Carrusel></Carrusel>
    </View>
  )
}
