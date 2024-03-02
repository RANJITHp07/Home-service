import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Heading({text,isViewAll}) {
  return (
    <View style={styles.container}>
       <Text style={styles.heading}>{text}</Text>
       {
        isViewAll && 
        <Text>View All</Text>
       }
       
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
      display:'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    heading:{
        fontFamily: 'outfit-medium',
        fontSize: 20,
        marginBottom: 5
    },
})