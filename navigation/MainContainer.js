import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Stack = createStackNavigator();
import { useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HotelDetails from './screens/HotelDetails';
import CitiesDetails from './screens/CitiesDetails'
import HomeScreen from './screens/HomeScreen'
import Cities from './screens/Cities'
import Hotels from './screens/Hotels'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage'
const homeName = 'Home'
const citiesName = 'Cities'
const hotelsName = 'Hotels'
const signInName = 'Sign in'
const signUpName = 'Signup'
import userActions from '../src/redux/actions/userAction';
const Tab = createBottomTabNavigator()


export default function MainContainer() {

   
   

    let { logged,name, id} = useSelector(store => store.usuario)
    console.log(id);
    let signUp 
    logged ? signUp = "Signup" : signUp = ""
    let signIn
    logged ? signIn = "Sign in" : signIn = ""
  return (
    
    <>
    <NavigationContainer>
        <Tab.Navigator 
       
        screenOptions={({route})=> ({
            tabBarButton: [
                "HotelDetails",
                signUp,signIn,
                "City"
              ].includes(route.name)
                ? () => {
                    return null;
                  }
                : undefined,
            tabBarIcon: ({focused, color, size}) => {
                let iconName 
                let rn = route.name

                if (rn === homeName) {
                    iconName = focused ? 'home' : 'home-outline'
                    size = focused ? 35 : 25
                } else if ( rn === citiesName) {
                    iconName = focused ? 'podium' : 'podium-outline'
                    size = focused ? 35 : 25
                } else if ( rn === hotelsName ){
                    iconName = focused ? 'moon' : 'moon-outline'
                    size = focused ? 35 : 25
                } else if ( rn === signInName) {
                    iconName = focused ? 'people' : 'people-outline'
                    size = focused ? 35 : 25
                } else if ( rn === signUpName) {
                    iconName = focused ? 'person-add' : 'person-add-outline'
                    size = focused ? 35 : 25
                }

                return <Ionicons name={iconName} size={size} color={color}></Ionicons>
                
            },
            tabBarActiveTintColor: 'firebrick',
            tabBarInactiveTintColor: '#fff',
            tabBarLabelStyle: { paddingBottom: 10, fontSize: 10, color: '#fff' },
            tabBarStyle: { backgroundColor: '#292929', height: 70, padding: 10}
        })}
        
        >

            <Tab.Screen name={homeName} component={HomeScreen}/>
           <Tab.Screen name="HotelDetails" component={HotelDetails}  options={{unmountOnBlur: true}} ></Tab.Screen>
         
            <Tab.Screen name="City" component={CitiesDetails}/>
            <Tab.Screen name={citiesName} component={Cities} />
            <Tab.Screen name={hotelsName} component={Hotels} />
            
        
            <Tab.Screen name={signInName} component={SignIn} />
            
            <Tab.Screen name={signUpName} component={SignUp} />

        </Tab.Navigator>
    </NavigationContainer>



     </>
  )
}