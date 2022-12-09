import React, {useState} from 'react';
import {DevSettings} from 'react-native'
import { Button, TextInput } from "@react-native-material/core";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Modal,
  Pressable,
  TouchableOpacity
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import usersActions from '../../src/redux/actions/usersActions'

export default function ProfileScreen({navigation}) {

  const [modalVisible, setModalVisible] = useState(false);

    let dispatch = useDispatch()

    let { logOut } = usersActions

    let { name, photo, token } = useSelector(store => store.usuario)

    function redirect(){
        setTimeout(()=>{
          navigation.navigate("Home")
      },2000)
        
    }

    async function logOutBtn(e) {
        e.preventDefault()
        DevSettings.reload()
        alert('logged out')
        try {
          let res = await dispatch(logOut(token))
          if(res.payload.success) {
            alert('logged out !')
            redirect()
          } else{
            alert('No puedes irte de aqui >:(')
          }
          
        } catch (error) {
          console.log(error);
        }
        console.log(res);
    }

    console.log(name);
  return (
    <ScrollView style={styles.container}>
      <Button title='Edit' onPress={() => setModalVisible(true)} style={styles.editBtn} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
    header:{
      backgroundColor: "firebrick",
      height:200,
    },
    editBtn : {
      position: 'absolute',
      zIndex: 2,
      backgroundColor: 'tomato'
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
  