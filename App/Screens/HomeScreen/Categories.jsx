import { View, Text,StyleSheet,FlatList, ActivityIndicator,Image } from 'react-native'
import React,{useEffect, useState} from 'react'
import GlobalApi from '../../utils/GlobalApi'
import Heading from '../../Component/Heading'
import color from '../../utils/color'

export default function Categories() {
    const [categories,setCategories]=useState([])
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
        <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image source={{uri:item?.icon?.url}} style={{width:30, height:30}}  />
        </View>
        <Text style={{textAlign:'center' ,marginTop: 5}}>{item.name}</Text>
        </View>
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