import { View, Text,StyleSheet,Image,ImageBackground, Dimensions ,Button, ScrollView,TextInput} from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux';

import hotelsAction from '../../src/redux/actions/hotelsAction'
import { useEffect } from 'react'
import { useState } from 'react';

export default function Hotels({navigation}) {
  let [searched,setSearched]=useState('')
  let {getHotels}=hotelsAction
  const dispatch= useDispatch()
 
 
  function listen(value){
    
 
  if(value.target.type==="text"){
      setSearched(value.target.value)
  }
}
console.log(searched);
  useEffect(()=>{
    dispatch(getHotels({string:'hotels', valueSearch:searched}))
  },[searched])
  const {hotels} = useSelector((state) => state.hotels); 
 


  return (

    <ScrollView> 

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#fff'}}>

    <ImageBackground source={require("./hotel.jpeg")} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>The best hotels</Text>
    </ImageBackground>
<TextInput onPress={listen} type="text" placeholder='Search a hotel' style={{backgroundColor:"#1111", height:40, margin:15, width:250, borderRadius:20, padding:10}}/>      
      {hotels.map((x)=>{
        return(
          <View key={x._id} style={styles.cardContainer}>
            
            <Text style={{ fontSize: 17, textAlign:"center"}}>{x.name}</Text>
            <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: x.photo[0],
                    }}
      />
            
      <Button
style={styles.button}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
          </View>
          )
        })} 
    </View>
    </ScrollView>
  )
}
const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
  cardContainer:{
    width:deviceWidth -25,
    backgroundColor:'#fff',
    height:250,
    borderRadius:20,
    margin:16,
    
  },
  tinyLogo: {
    width: deviceWidth -25,
    height: 150,
    borderRadius :20,
    marginBottom:10
  },
  image: {
    flex: 1,
    justifyContent: "center",
 
    width:deviceWidth ,
    height:300,
  
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    
  },
  button:{
  borderRadius:20
  }
})