import { View, Text } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
    
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{ fontSize: 32, fontWeight: 'bold'}}>Home Screen</Text>
    </View>
  )
}