import 'react-native-gesture-handler'
import * as React from 'react'
import MainContainer from './navigation/MainContainer'
import { Provider } from 'react-redux';
import { store } from './src/redux/store'
import {  ScrollView } from 'react-native';
export default function App() {
  return (
    <Provider store={store}> 

      <MainContainer/>
      
    </Provider>
  )
}