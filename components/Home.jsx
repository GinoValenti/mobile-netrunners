import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Carrusel from './Carrusel'


export default function Home() {
  return (
    <View style={styles.container}>
      <Image></Image>
      <Text style={styles.title}>MyTinerary</Text>
      <Carrusel/>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title : {
        flex : 1,
        color: '#000',
        width : 1000,
        fontSize : 30,
        margin: 20,
    },
})