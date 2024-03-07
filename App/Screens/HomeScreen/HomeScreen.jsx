import { View, ScrollView } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import Latest from './Latest'

export default function HomeScreen() {
  return (
    <ScrollView>
    <View>
      <Header/>
      <View style={{padding: 20}}>      
      <Slider/>
      <Categories/>
      <Latest/>
      </View>

    </View>
    </ScrollView>
  )
}