import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import color from '../utils/color';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: color.PRIMARY
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen}
       options={{
        tabBarLabel:({color})=>(
            <Text style={{color:color, fontSize:12 , marginTop:-7}}>Home</Text>
        ),
        tabBarIcon: ({color,size})=>(
          <Entypo name="home" size={size} color={color} />
        )
       }}
       />
      <Tab.Screen name="Booking" component={BookingScreen}
      options={{
        tabBarLabel:({color})=>(
            <Text style={{color:color, fontSize:12 , marginTop:-7}}>Booking</Text>
        ),
        tabBarIcon: ({color,size})=>(
          <FontAwesome name="bookmark" size={size} color={color} />
        )
       }}
      
       />
      <Tab.Screen name="Profile" component={ProfileScreen} 
        options={{
        tabBarLabel:({color})=>(
            <Text style={{color:color, fontSize:12 , marginTop:-7}}>Profile</Text>
        ),
        tabBarIcon: ({color,size})=>(
          <Ionicons name="person" size={size} color={color} />
        )
       }}

      />
    </Tab.Navigator>
  )
}
