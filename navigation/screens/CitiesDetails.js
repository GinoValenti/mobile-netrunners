import { View, Text,Image, StyleSheet,Dimensions, ScrollView, Button } from 'react-native'
import React, {useState , useEffect} from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../../src/api/url'

export default function CitiesDetails({route}) {

  const {productID ,title,image, population} = route.params

  let a = productID
  let [itineraries,setItineraries]=useState([])

  useEffect(()=>{
    axios.get(`${BASE_URL}/itinerary`)
    .then(response=>setItineraries(response.data.itineraries))
  },[])

  let itinerarie = itineraries.filter(e=>e.cityId==a)

  let { reactions } = useSelector(store=>store.reaction)

  console.log(reactions);



  return (
    <> 
    <ScrollView>
        <View key={productID}>
            <Image style={styles.tinyLogo} source={{uri: image,}}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.population} >Population</Text>
            <Text style={styles.popnum} >{population} Persons</Text>
            <View style={styles.itineraries}>
                <Text style={styles.textPop} >Popular itineraries in the city</Text>
                {
      itinerarie.length!= 0 ? 
      itinerarie.map((x)=>{
        return(
          <View key={x._id} style={styles.itineraryContainer}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign:"center", margin: 35}}>{x.name}</Text>
            <Image
              style={styles.itineraryPhoto}
              source={{
              uri: x.photo[0],
              }}/>
        </View>
        )
        }) : <Text>Looks like there's no itineraries in this city, yet</Text>
              }  
            </View>
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