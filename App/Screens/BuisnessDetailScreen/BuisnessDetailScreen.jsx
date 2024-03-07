import { View, Text, Image, StyleSheet,ScrollView, TouchableOpacity,Modal } from 'react-native'
import React,{useState} from 'react'
import {useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import color from '../../utils/color';
import { Entypo } from '@expo/vector-icons';
import Heading from '../../Component/Heading';
import PhotoScreen from './PhotoScreen';
import BookingModal from './BookingModal';

export default function BuisnessDetailScreen() {
    const param=useRoute().params;
    const navigation=useNavigation()
    const [buisness,setBuisness]=useState(param.buisness)
    const[isRead,setIsRead]=useState(false)
    const [showModal,setShowModal]=useState(false)
  return buisness && (
    <View>
    <ScrollView style={{height:'91%'}}>
    <View>
      <Image source={{uri:buisness.image[0].url}} style={{width:'100%', height: 300}}/>
      <AntDesign name="arrowleft" size={24} color="white" style={styles.arrowIcon} onPress={()=>navigation.goBack()}/>
      <View style={{padding: 20}}>
        <Text style={{fontFamily:'outfit-bold', fontSize:25}}>{buisness?.name}</Text>
        <View style={{display:'flex', flexDirection:'row',alignItems:'center',gap:10,marginTop: 10, color:color.PRIMARY}}>
        <Text style={{color:color.PRIMARY,fontSize:18}}>{buisness?.contactPerson}</Text>
        <Text style={{backgroundColor: "#AC5DFE",padding:5 , borderRadius:3}}>{buisness.category.name}</Text>
        </View>
        <Text style={{marginTop: 10,fontSize:17, fontFamily:'outfit', color:color.GRAY}}><Entypo name="location-pin" size={20} color={color.PRIMARY} /> {buisness.address}</Text>
        <View style={{borderWidth:0.4, borderColor:color.GRAY,marginVertical:20}}></View>

        <View>
          <Heading text={'About'}/>
          <Text style={{fontFamily:'outfit', lineHeight:28,color:color.GRAY, fontSize:16}} numberOfLines={isRead? 20 : 5}>{buisness.about}</Text>
          <Text style={{fontFamily:'outfit', color:color.PRIMARY,fontSize:16}} onPress={()=>setIsRead(!isRead)}>{isRead ? "Read Less..." : "Read More..."}</Text>
        </View>
      <View style={{marginTop:20}}>
      <PhotoScreen images={buisness.image}/>
      </View>
      
      </View>
    </View>
    </ScrollView>
    <View style={{display: 'flex',flexDirection: 'row',gap:5 , margin:8}}>
      <TouchableOpacity style={styles.messageBtn}>
       <Text style={{textAlign: 'center'}}>Message</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bookingBtn} onPress={()=>setShowModal(true)}>
       <Text style={{textAlign: 'center',color:color.WHITE}}>Book Now</Text>
      </TouchableOpacity>
    </View>
    <Modal animationType='slide' visible={showModal}>
      <BookingModal hideModal={()=>setShowModal(false)}/>
    </Modal>
    </View>
  )
}


const styles=StyleSheet.create({
    arrowIcon:{
        position: 'absolute',
        zIndex:10,
        padding: 10,
        paddingTop: 30
    },
    messageBtn:{
      padding:15,
      backgroundColor: color.WHITE,
      borderWidth:1,
      borderColor:color.PRIMARY,
      borderRadius:99,
      flex:1
    },
    bookingBtn:{
      padding:15,
      backgroundColor: color.PRIMARY,
      color:color.WHITE,
      borderRadius:99,
      flex:1
    }
})