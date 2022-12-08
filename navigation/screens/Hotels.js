import { View, Text,StyleSheet,Image, Dimensions , ScrollView,TextInput} from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux';

import hotelsAction from '../../src/redux/actions/hotelsAction'
import { useEffect } from 'react'


export default function Hotels({navigation}) {
  
  let {getHotels}=hotelsAction
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(getHotels({string:'hotels'}))
  },[])
  const {hotels} = useSelector((state) => state.hotels); 
 
 
  return (
    <ScrollView> 

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#1111'}}>
<TextInput placeholder='Search a hotel' style={{backgroundColor:"#1111", height:40, margin:15, width:250, borderRadius:20, padding:10}}/>      
      {hotels.map((x)=>{
        return(
          <View key={x._id} style={styles.cardContainer}>
            
            <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign:"center"}}>{x.name}</Text>
            <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: x.photo[0],
                    }}
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
    backgroundColor:'#444',
    height:200,
    borderRadius:20,
    margin:10
  },
  tinyLogo: {
    width: deviceWidth -25,
    height: 150,
  },
})