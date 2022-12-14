import { View, Text , Image,TextInput,StyleSheet,Dimensions,Alert , ScrollView} from 'react-native'
import { Button } from "@react-native-material/core";
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
   
    console.log(userInfo);
  
    try {
        let res = await dispatch(enter(userInfo))
        console.log(res.data)
        if (res.payload.success) {
            console.log(res);
            Alert.alert("Welcome" + " " + res.payload.response.user.name+"!" + "👋🏻",)
            
     redirect()
        }
        else {
           Alert.alert("Error please enter valid credentials.")
          
        }
    } catch(error) {
        console.log(error.message + 'hola')
    }
    const myToken = await AsyncStorage.getItem('token')
   
}




  return (
    <>
    <ScrollView>
      <View style={styles.container}>
        <Image source={require("./signin2.png")} style={ styles.image }/>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}> Sign in to your account</Text>
      <View style={styles.containerInput}> 
       
        <TextInput  label="email"  onChangeText={value => handleOnChangeText(value,'email')} placeholder='jhon@email.com' style={styles.TextInput}></TextInput>
       
        <TextInput secureTextEntry={true} onChangeText={value => handleOnChangeText(value,'password')} placeholder='Search a hotel' style={styles.TextInput}></TextInput>
        <Button style={{ margin: 20 }}
          title="Sign in"
          color="#B22222"
          onPress={singIn}
        />
      </View>
      </View>
    </ScrollView>

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
},
image:{
  width:deviceWidth,
  height:300,
  marginBottom: -160
}
})