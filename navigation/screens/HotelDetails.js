import { View, Text,Image, StyleSheet,Dimensions,ScrollView } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import { BASE_URL } from "../../src/api/url"
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Show from '../../src/components/Show'

const Tab = createBottomTabNavigator()
export default function HotelDetails({route}) {
  const {productID}=route.params
  let [shows,setShows]=useState([])
  const {name,photo,capacity} = route.params
let a = productID

useEffect (()=>{
  axios.get(`${BASE_URL}/show`)
  .then(response=>setShows(response.data.show))
},[])

let show=shows.filter(e=>e.hotelId==a)
console.log(show);
  return (
    <> 
    <ScrollView> 


    <View>
    <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: photo[0],
                    }}
      />
          
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.texto}>This hotel has a capacity of {capacity}</Text>
      {show.map(e=><Show  name={e?.name} image={e?.photo} description={e?.description} idShow= {e?._id}/>) }           
        </View>
    </ScrollView>
         </>
  )
}
const deviceWidth = Math.round(Dimensions.get('window').width)
const deviceHeight = Math.round(Dimensions.get('window').height)
const styles = StyleSheet.create({

  tinyLogo: {
    width: deviceWidth ,
    height: 500,
   
  
  } , text: {
    color: "black",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    
  },
   texto: {
    color: "grey",
    fontSize: 15,
    lineHeight: 84,
   
    textAlign: "center",
    
  },
})