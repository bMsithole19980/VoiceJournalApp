import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import HomeScreen from './Screens/HomeScreen';
import RecordScreen from './Screens/RecordScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  MaterialIcons } from '@expo/vector-icons';
//import AudioControl from './Screens/AudioControl';
import 'react-native-gesture-handler'
import AudioControl from './Screens/AudioControl';
const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
   <NavigationContainer>
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: 'FFF',
      tabBarStyle:{
        backgroundColor: '#808080',
        borderTopColor: '#BABABA'

      }
    }}
    tabBarOptions={{
      showLabele: false
    }}>
      <Tab.Screen
      name='Home'
      component={RecordScreen}
      options={{
        tabBarIcon:({color})=>(
          <MaterialIcons
          name='home'
          size={24}
          color={color}/>
        )
      }}>
      </Tab.Screen>
      <Tab.Screen
      name='Audio'
      component={AudioControl}
      options={{
        tabBarIcon:({color})=>(
          <MaterialIcons
          name='mic-external-on'
          size={24}
          color={color}/>
        )
      }}>
      </Tab.Screen>


    </Tab.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
 
});


