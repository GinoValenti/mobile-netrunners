import { View, Text,Image, StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import { BASE_URL } from "../../src/api/url"
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()
export default function HotelDetails({route}) {
  const {productID}=route.params
  const {name,photo} = route.params





  return (
    <> 
    <View>
    <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: photo[0],
                    }}
      />
          
      <Text>{name}</Text>
        </View>
         </>
  )
}
const deviceWidth = Math.round(Dimensions.get('window').width)
const deviceHeight = Math.round(Dimensions.get('window').height)
const styles = StyleSheet.create({

  tinyLogo: {
    width: deviceWidth ,
    height: 500,
   
    marginBottom:10
  }
})