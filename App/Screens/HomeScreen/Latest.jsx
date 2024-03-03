import { View, Text,TouchableOpacity,FlatList, ActivityIndicator,Image } from 'react-native'
import React,{useEffect, useState} from 'react'
import GlobalApi from '../../utils/GlobalApi'
import color from '../../utils/color'
import Heading from '../../Component/Heading'

export default function Latest() {
    const [latest,setLatest]=useState([])
    useEffect(()=>{
        getSliders()
    },[])

    const getSliders=()=>{
        GlobalApi.getLatest().then((res)=>{
            setLatest(res.buisnessLists)
        }).catch((err)=>{
            console.log(err)
        })
    }

     // rendering the items of the slider
    const renderItem = ({ item }) => (
        <TouchableOpacity style={{marginRight:20, padding:10, backgroundColor: color.WHITE}}>
          <Image source={{uri:item?.image[0].url}} style={{width:270 , height:150}} />
          <Text style={{fontFamily:'outfit-medium', fontSize:17, marginTop: 10}}>{item.name}</Text>
          <Text style={{fontFamily:'outfit', fontSize:15}}>{item.contactPerson[0].toUpperCase()+item.contactPerson.slice(1,item.contactPerson.length).toLowerCase()}</Text>
          <Text style={{color:color.PRIMARY}}>{item.category.name}</Text>
        </TouchableOpacity>
      );
  return (
    <View style={{marginTop: 20}}>
      <Heading  text={'Latest Business'}/>
      {
        latest.length===0? 
        <ActivityIndicator size="large" color={color.PRIMARY} style={{marginVertical:10}}/>
        :
        <FlatList
      data={latest}      
      horizontal={true}    
      showsHorizontalScrollIndicator={false}      
      renderItem={renderItem}    
      keyExtractor={item => item.id}  
    />
      }
      
    </View>
  )
}