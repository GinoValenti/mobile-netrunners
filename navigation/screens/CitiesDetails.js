import { View, Text,Image, StyleSheet,Dimensions } from 'react-native'
import React from 'react'

export default function CitiesDetails({route}) {
  const {productID}=route.params
  
  const {title,image} = route.params

  return (
    <> 
        <View>
            <Image style={styles.tinyLogo} source={{uri: image,}}/>
            <Text>{title}</Text>
        </View>
    </>
  )
}


const deviceWidth = Math.round(Dimensions.get('window').width)


const styles = StyleSheet.create({
  tinyLogo: {
    width: deviceWidth ,
    height: 500,
    marginBottom:10
  }
})