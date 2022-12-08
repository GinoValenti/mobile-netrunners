import { View, Text,StyleSheet,Image, Dimensions , ScrollView,TextInput, ImageBackground, Button} from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import citiesActions from '../../src/redux/actions/citiesActions'
import { useEffect } from 'react'

export default function Cities({navigation}) {

  // Render cards native
  let [search,setSearched] = useState('')
  let [aproved,setAproved] = useState(true)
  
  
  const dispatch= useDispatch()
  let {getCitiesFilter,getCities}=citiesActions


  const {cities} = useSelector((state) => state.cities);
/* 
 async function get(){
    await dispatch(getCities())
  }

  useEffect(()=>{
    get()
  },[])

  function listen(value) {
      
}  */

let listen=(value)=> {
  setSearched(value)
}

async function get(){
  /* console.log(search)
  await dispatch(getCitiesFilter(search)) */
  try {
    if( typeof getCities== 'function' && aproved){

      await dispatch(getCities('cities'))
      setAproved(false)
  
    }
    else{
      await dispatch(getCitiesFilter(search))
    }
  }  catch (error) {
    console.log(error)
  }
}

useEffect(()=>{
  get()
},[search])


  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ImageBackground source={require('./Cities.jpg')} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Wonderful<Text style={styles.fire}>cities</Text></Text>
      </ImageBackground>
      <TextInput onChangeText={listen} placeholder='Search a city' style={{backgroundColor:"#1111", height:40, margin:15, width:250, borderRadius:20, padding:10}}/>
      {
      cities !== undefined ? 
      cities.map((x)=>{
        return(
          <View key={x._id} style={styles.cardContainer}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign:"center"}}>{x.title}</Text>
            <Image
              style={styles.tinyLogo}
              source={{
              uri: x.image,
              }}/>
                    <Button
        style={styles.button}
          title="Learn More"
          color="firebrick"
          accessibilityLabel="Learn more about this purple button"
          onPress={()=>navigation.navigate("CitiesDetails",{productID: x._id, title:x.title, image:x.image, population: x.population})}
        />
        </View>
        )
        }) : <Image style={styles.textNotFound} source={require("./404.png")}/>
              }  
              </View>
            </ScrollView>

  )
}

const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
  cardContainer:{
    width:deviceWidth -25,
    margin:10
  },
  tinyLogo: {
    width: deviceWidth -25,
    height: 150,
    borderRadius: 20,
    marginBottom:10
  },
  container: {
    flex: 1,
  },
  image:{
    flex: 1,
    height:deviceWidth,
    width:deviceWidth
  },
  button: {
    borderRadius: 20,
  },
  text: {
    flex : 1,
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  fire: {
    color: 'firebrick'
  },
  textNotFound:{
    height:400,
    width:deviceWidth,
    margin:10
    }
})