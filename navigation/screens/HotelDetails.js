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
          
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.population}> Capacity </Text>
      <Text style={styles.popnum} >{capacity} guests</Text>
      {show.map(e=><Show  name={e?.name} image={e?.photo} description={e?.description} idShow= {e?._id}/>) }           
        </View>
    </ScrollView>
         </>
  )
}
const deviceWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({

  tinyLogo: {
    width: deviceWidth ,
    height: 300,
    marginBottom:10
  },
  title: {
    textAlign: 'center',
    fontSize : 40,
    fontWeight : '700',
    letterSpacing : 3
  },
  itineraryContainer: {
    backgroundColor: '#F8F9F9'
  },
  population: {
    textAlign: 'center',
    color: 'firebrick',
    fontSize: 18,
    fontWeight: '600'
  },
  itineraryPhoto: {
    height: 250,
    width: deviceWidth,
    marginBottom: 30
  },
  popnum: {
    textAlign: 'center'
  },
  itineraries: {
    marginTop: 40,

  },
  textPop: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 19,
  }
})