import { View, Text,TextInput , Alert,Pressable,StyleSheet} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState,useEffect } from 'react'
import commentAction from '../redux/actions/commentAction'
export default function NewComment(props) {
  
   let { token} = useSelector(store => store.usuario)
   let { id,logged,photo} = useSelector(store => store.usuario)
    let userId = id
    console.log(logged);
  let {idShow} = props
  let showId = idShow
  const [comment, setComment] = useState('');
  let {postComments,getAllComments}= commentAction
  let dispatch = useDispatch()
  const dateNow = new Date()
  let date = dateNow.toLocaleDateString(	"en-us")
  async function Submit(event){
    event.preventDefault()
    console.log(event.target.value);
    let data = {comment,showId,date,userId,photo}
    console.log(data);


    try {
      
      
      let res =  await dispatch(postComments({data,token}))
      
     if (res.payload.success){
      

 Alert.alert("comment sent")
    
     }else{
 Alert.alert("??")
      }
     
   
      
} catch (error) {
    console.log(error);
}  

}
let listen=(value)=>{
  setComment(value);
 }
console.log(userId);
  return (
    <View>
      <TextInput onChangeText={listen} placeholder='Leave a comment' style={{backgroundColor:"#1111", height:40, margin:15, width:400, borderRadius:20, padding:10}}></TextInput>
      <Pressable style={styles.buttonCustom}  onPress={Submit}>
            <Text style={styles.textButton}>Send</Text>
        </Pressable>
    </View>
  )
}const styles = StyleSheet.create({
  buttonCustom:{

    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width:130,
    textAlign:"center",
    backgroundColor: '#00bfff',
},
textButton:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
},
})