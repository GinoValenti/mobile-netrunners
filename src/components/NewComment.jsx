import { View, Text,TextInput } from 'react-native'
import React from 'react'

export default function NewComment() {



  return (
    <View>
      <TextInput placeholder='Leave a comment' style={{backgroundColor:"#1111", height:40, margin:15, width:400, borderRadius:20, padding:10}}></TextInput>
    </View>
  )
}