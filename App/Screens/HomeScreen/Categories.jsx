import { View, Text,StyleSheet,FlatList, ActivityIndicator,Image, TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react'
import GlobalApi from '../../utils/GlobalApi'
import Heading from '../../Component/Heading'
import color from '../../utils/color'
import { useNavigation } from '@react-navigation/native'

export default function Categories() {
    const [categories,setCategories]=useState([])
    const navigation=useNavigation()
    useEffect(()=>{
        getCategories()
    },[])

    const getCategories=()=>{
        GlobalApi.getCategories().then((res)=>{
            setCategories(res.categories)
        }).catch((err)=>{
            console.log(err)
        })
    }

    //rendering the categories
    const renderItem = ({ item,index }) =>(
        <TouchableOpacity style={styles.container} onPress={()=>navigation.push('buisness-list',{category:item.name})}>
        <View style={styles.iconContainer}>
          <Image source={{uri:item?.icon?.url}} style={{width:30, height:30}}  />
        </View>
        <Text style={{textAlign:'center' ,marginTop: 5}}>{item.name}</Text>
        </TouchableOpacity>
      );
  return (
    <View style={{marginTop: 10}}>
     <Heading text={'Categories'} isViewAll={true}/>
     {
        categories.length===0? 
        <ActivityIndicator size="large" color={color.PRIMARY} style={{marginVertical:10}}/>
        :
        <FlatList
      data={categories}      
      numColumns={4}
      showsHorizontalScrollIndicator={false}      
      renderItem={renderItem}    
      keyExtractor={item => item.id}  
    />
      }
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItem: 'center',
        marginTop: 20,
    },
    iconContainer:{
        borderRadius: 99,
        padding: 17,
        backgroundColor: color.LIGHT_GRAY,
        alignItems: 'center',
        marginHorizontal: 15
    }
})