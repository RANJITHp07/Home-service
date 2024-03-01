import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-react'
import color from '../../utils/color'
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
    const {user,loading}=useUser()
  return user && (
    <View style={styles.container}>
     <View style={styles.profileMainContainer}>
      <View style={styles.profileContainer}>
        <Image source={{uri:user?.imageUrl}}  style={styles.userImage}/>
        <View>
        <Text style={{color:color.WHITE}}>Welcome</Text>
        <Text style={{color:color.WHITE, fontSize:20,fontFamily: 'outfit'}}>{user.fullName}</Text>
      </View>
      </View>
      <Feather name="bookmark" size={24} color={color.WHITE} />
      </View>
      <View style={styles.searchBar}>
        <TextInput style={styles.inputField} placeholder='Search'/>
        <View style={styles.serachIcon}>
      <FontAwesome name="search" size={24} color={color.PRIMARY} />
      </View>
      </View>
    </View>
  )
}


const styles=StyleSheet.create({
    container:{
          padding:20,
          paddingTop:40,
          backgroundColor: color.PRIMARY,
          borderBottomLeftRadius:25,
          borderBottomRightRadius: 25,
          gap:10
    },
    profileMainContainer:{
       display: 'flex',
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems:'center'
    },
    profileContainer:{
          display: 'flex',
          flexDirection: 'row',
          alignItems:'center',
          gap: 10

    },
    inputField:{
        padding:8,
        backgroundColor: color.WHITE,
        borderRadius: 8,
        fontSize: 16,
        width: '85%'
    },
    searchBar:{
      display:'flex',
      flexDirection: 'row',
      alignItems:'center',
      marginTop: 20,
      gap:10
    },
    serachIcon:{
       backgroundColor: color.WHITE,
       borderRadius: 8,
       padding: 10
    },
     userImage: {
        width:45,
        height:45,
        borderRadius: 99
     }
})