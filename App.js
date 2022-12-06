import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import Home from './components/Home';

export default function App() {
  return (
    <>
    <ScrollView>
      <Home/>
    </ScrollView>
    </>
  );
}

