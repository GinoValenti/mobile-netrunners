import { View, Text , Image,TextInput,StyleSheet,Dimensions,Alert , Button} from 'react-native'
import React from 'react'
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import userActions from '../../src/redux/actions/userAction'
export default function Signin({navigation}) {
  let { logged,token,id} = useSelector(store => store.usuario)

  console.log(logged);
  let {enter,enterAgain}=userActions
 const dispatch = useDispatch()


  const [userInfo, setUserInfo] = useState({
    email:'',
    password:'',


  });
  const { email, pass } = userInfo;
  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value.trim() });
  };
  function redirect(){
    setTimeout(()=>{
      navigation.navigate("Home")
  },2000)
    
  }
  async function singIn(event) {
    event.preventDefault()
   
  
    try {
        let res = await dispatch(enter(userInfo))
        console.log(res.data)
        if (res.payload.success) {
            console.log(res);
            Alert.alert("god")
            
     redirect()
        }
        else {
           Alert.alert("q haces")
        }
    } catch(error) {
        console.log(error.message)
    }
    const myToken = await AsyncStorage.getItem('token')
   
}




  return (
    <>
    <View style={styles.container}>
<Image source={require("./signin2.png")} style={ styles.image }/>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}> Sign in to your account</Text>
      <View style={styles.containerInput}> 
<Text style={styles.subtitlee}>email</Text>
<TextInput  label="email"  onChangeText={value => handleOnChangeText(value,'email')} placeholder='jhon@email.com' style={styles.TextInput}> </TextInput>
<Text   style={styles.subtitlee}>password</Text>
<TextInput secureTextEntry={true} onChangeText={value => handleOnChangeText(value,'password')} placeholder='password' style={styles.TextInput}> </TextInput>
      <Button style={styles.button}
        title="Sign in"
        color="#B22222"
        onPress={singIn}
      />
      </View>
    </View>
       </>
  )
}
const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:"#f1f1f1",
  alignItems:"center",
  justifyContent:"center",

},title:{
  fontSize:70,
  color:"#181818",
  fontWeight:"bold",
  marginTop:100
},subtitle:{
  fontSize:20,
  color:"gray",
},subtitlee:{
  fontSize:12,
  marginTop:10,
  marginLeft:9,
  color:"gray",
},TextInput:{

 
  padding:10,
  width:deviceWidth -55,
  height:50,
  borderRadius:30,
  marginTop:20,
  backgroundColor:"#fff",
  marginBottom:10
},containerInput:{
  
  marginBottom:105,

},
image:{
width:deviceWidth,
height:200,

}
})