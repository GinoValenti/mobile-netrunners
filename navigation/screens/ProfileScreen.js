import React from 'react';
import { Button, TextInput } from "@react-native-material/core";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import usersActions from '../../src/redux/actions/usersActions'

export default function ProfileScreen({navigation}) {

    let dispatch = useDispatch()

    let { logOut } = usersActions

    let { name, photo, token } = useSelector(store => store.usuario)

    function redirect(){
        setTimeout(()=>{
          navigation.navigate("Home")
      },2000)
        
    }

    async function logOutBtn() {
        redirect()
        let res = await dispatch(logOut(token))
        console.log(res);
    }

    console.log(name);
  return (
    <ScrollView style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: photo}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.info}>UX Designer / Mobile developer</Text>
              <Button onPress={logOutBtn} title='Log out' style={{ margin: 20, backgroundColor: 'firebrick'}} />
            </View>
        </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    header:{
      backgroundColor: "firebrick",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    name:{
      fontSize:22,
      color:"#000",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "firebrick",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
  });
  