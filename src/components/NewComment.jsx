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
      

 Alert.alert("Comment sent!")
    
     }else{
 Alert.alert("Error please send a valid comment.")
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
  logged == false ?<Text style={styles.errorSing}  >Sing in to comment</Text>:
    <View  style={styles.commnetContainere}>
      <TextInput onChangeText={listen} placeholder='Leave a comment' style={{backgroundColor:"#1111",width:300, height:40, margin:15,  borderRadius:20, padding:10}}></TextInput>
            <Text onPress={Submit} style={styles.textButton}>Send</Text>
  
       
    </View>
  )
}const styles = StyleSheet.create({
  commnetContainere:{
flex:1,
  },errorSing:{
textAlign:"center",
fontSize: 16,
margin:20
  },
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
    color: 'black',
    textAlign:"center",
    position:'absolute',
left:350,
top:20
    
},
})