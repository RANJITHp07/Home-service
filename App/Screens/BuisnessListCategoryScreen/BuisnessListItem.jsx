import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../../utils/color'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BuisnessListItem({buisness}) {
    const navigation=useNavigation()
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.push('buisness-detail',{
        buisness:buisness
    })}>
      <Image style={styles.containerImage} source={{uri: buisness.image[0].url}}/>
      <View style={styles.subContainer}>
        <Text style={{fontFamily:'outfit',color:color.GRAY,fontSize:15}}>{buisness.contactPerson[0].toUpperCase()+ buisness.contactPerson.slice(1,buisness.contactPerson.length).toLowerCase()}</Text>
        <Text style={{fontFamily:'outfit-bold',fontSize: 19}}>{buisness.name[0].toUpperCase()+ buisness.name.slice(1,buisness.name.length).toLowerCase()}</Text>
        <Text style={{fontFamily:'outfit',fontSize: 15}}><Entypo name="location-pin" size={24} color={color.PRIMARY} />{buisness.address}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    container:{
      padding:10,
      backgroundColor:color.WHITE,
      marginBottom:10,
      display:'flex',
      flexDirection: 'row',
      gap:10,
      borderRadius:10
    },
    subContainer:{
     display:'flex',
     gap:5
    },
    containerImage: {
        width:100,
        height:100,
        borderRadius: 10
    }
})