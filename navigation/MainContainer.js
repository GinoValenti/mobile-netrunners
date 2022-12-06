import * as React from 'react'

import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from './screens/HomeScreen'
import Cities from './screens/Cities'
import Hotels from './screens/Hotels'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'

const homeName = 'Home'
const citiesName = 'Cities'
const hotelsName = 'Hotels'
const signInName = 'Signin'
const signUpName = 'Signup'

const Tab = createBottomTabNavigator()


export default function MainContainer() {
  return (
    <NavigationContainer>
        <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route})=> ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName 
                let rn = route.name

                if (rn === homeName) {
                    iconName = focused ? 'home' : 'home-outline'
                } else if ( rn === citiesName) {
                    iconName = focused ? 'podium' : 'podium-outline'
                } else if ( rn === hotelsName ){
                    iconName = focused ? 'moon' : 'moon-outline'
                } else if ( rn === signInName) {
                    iconName = focused ? 'people' : 'people-outline'
                } else if ( rn === signUpName) {
                    iconName = focused ? 'person-add' : 'person-add-outline'
                }

                return <Ionicons name={iconName} size={size} color={color}></Ionicons>
                
            },
        })}
        
        tabBarOptions={{
            activeTintColor: 'firebrick',
            inactiveTintColor: 'grey',
            labelStyle: { fontSize: 16 },
        }}
        
        >

            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={citiesName} component={Cities} />
            <Tab.Screen name={hotelsName} component={Hotels} />
            <Tab.Screen name={signInName} component={SignIn} />
            <Tab.Screen name={signUpName} component={SignUp} />

        </Tab.Navigator>
    </NavigationContainer>
  )
}