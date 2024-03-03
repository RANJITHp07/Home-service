import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import React from 'react'
import BuisnessListCategory from '../Screens/BuisnessListCategoryScreen/BuisnessListCategory';
import BuisnessDetailScreen from '../Screens/BuisnessDetailScreen/BuisnessDetailScreen';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="buisness-list" component={BuisnessListCategory} />
      <Stack.Screen name="buisness-detail" component={BuisnessDetailScreen} />
    </Stack.Navigator>
  )
}