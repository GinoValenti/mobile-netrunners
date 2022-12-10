import { View, Text ,ImageBackground,StyleSheet, Image ,Dimensions,ScrollView} from 'react-native'
import React from 'react'
import Carrusel from "../../src/components/Carrusel"
export default function HomeScreen({navigation}) {

  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ImageBackground source={require('./waves-home.png')}>
      <ScrollView> 
        <View style={{alignItems:'center'}} >
          <Text style={{fontSize: 25, fontWeight:'bold'}}>Welcome</Text>
          <Text style={{fontSize: 25, fontWeight:'bold'}}>to <Text style={{color: 'firebrick'}} >MyItinerary</Text></Text>
          <Text style={{fontSize: 18, color: 'grey', margin: 20}} >Hope you are well today </Text>
          <Image style={{height: 400, width: 300}} source={require('./Journey-bro.png')} />
        </View>

      <Text style={styles.texto}>Find your perfect vacation</Text>
      <Carrusel/>
      </ScrollView>
    </ImageBackground>
    </View>
  )
}
const deviceWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({
  image:{
height:400,
width:deviceWidth
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    
  },texto:{
    color: "black",
    fontSize: 22,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  }
})