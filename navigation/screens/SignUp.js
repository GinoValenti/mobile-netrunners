import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native'
import React, { useState, useEffect} from 'react'
import * as ImagePicker from 'expo-image-picker'
import { Button, TextInput } from "@react-native-material/core";
import { useDispatch } from 'react-redux';
import userActions from '../../src/redux/actions/usersActions'

export default function Signup({navigation}) {
    

  let dispatch = useDispatch()

  let { newUser } = userActions

  let role = 'user'
  
  // Image Picker

  const [photo, setImage] = useState(null);

  async function createNewUser() {

    let data = {name , lastname, age, email, password, photo, role}
    console.log(data);

    try {
      let res = await dispatch(newUser(data))
      if (res.payload.success){
        alert('te registraste papu')
      } else {
        alert('masha triste')
      }
    } catch (error) {
      console.log(error.message);
    }

  }

  const [name, setName] = useState('')
  const [lastname, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  console.log(name);

  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View>
    <ImageBackground source={require('./wallpaper.jpg')}>
      <Text style={styles.welcome} >Welcome !</Text>
      <ScrollView style={styles.formContainer} >
        <TextInput onChangeText={setName} style={styles.inputUp} color='firebrick' placeholder='Name'  />
        <TextInput onChangeText={setLastName} style={styles.inputUp} color='firebrick' placeholder='LastName'   />
        <TextInput onChangeText={setAge} style={styles.inputUp} color='firebrick' placeholder='Age'  />
        <TextInput onChangeText={setEmail} style={styles.inputUp} color='firebrick' placeholder='Email'  />
        <TextInput onChangeText={setPassword} style={styles.inputUp} color='firebrick' secureTextEntry={true} placeholder='Password'  />
        <Button title='pick photo' onPress={pickImage} style={{margin: 30, backgroundColor: 'firebrick'}} />
        <Button title='Sign up' onPress={createNewUser} style={{margin: 20 , backgroundColor: 'firebrick'}} />
        <Button title='Sign up' onPress={createNewUser} style={{margin: 20 , backgroundColor: 'firebrick'}} />
      </ScrollView>
    </ImageBackground>
    </View>


  )
}

const styles = StyleSheet.create({
  welcome : {
    fontSize: 35,
    fontWeight: 'bold',
    letterSpacing: 3,
    textAlign: 'center'
  },
  formContainer : {
    margin: 20,
    borderRadius: 20
  },
  inputUp: {
    margin: 16,
    borderRadius: 15
  }
})
