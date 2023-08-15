import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import RecordScreen from './Screens/RecordScreen';
import { View } from 'react-native-web';


export default function App() {
  
  return (
    <View style={styles.container}>
       <HomeScreen/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
 
});
