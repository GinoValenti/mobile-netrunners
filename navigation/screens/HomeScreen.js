import { View, Text ,ImageBackground,StyleSheet ,Dimensions,ScrollView} from 'react-native'
import React from 'react'
import Carrusel from "../../src/components/Carrusel"
export default function HomeScreen({navigation}) {
  const image = { uri: "https://enjoyworkandtravel.com/wp-content/uploads/2022/03/hawaiii-1024x653.jpg" }; 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
<ScrollView> 

<ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}></Text>
    </ImageBackground>
    <Text style={styles.texto}>Find your perfect vacation</Text>
      <Carrusel></Carrusel>
</ScrollView>
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