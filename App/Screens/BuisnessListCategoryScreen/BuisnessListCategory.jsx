import { View, Text,TouchableOpacity,FlatList,} from 'react-native'
import React, { useEffect,useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import GlobalApi from '../../utils/GlobalApi';
import BuisnessListItem from './BuisnessListItem';
import color from '../../utils/color';

export default function BuisnessListCategory() {
  const [categoryList,setCategoryList]=useState([])
  const param=useRoute().params;
  const navigation=useNavigation()

  useEffect(()=>{
    param && getCategoriesListBuisness(param.category)
  },[])

  const getCategoriesListBuisness=(category)=>{
    GlobalApi.getCategoryBuisness(category).then((res)=>{
       setCategoryList(res.buisnessLists)
    }).catch((err)=>{
        console.log(err)
    })
}


     // rendering the items of the category
     const renderItem = ({ item }) => (
      <BuisnessListItem buisness={item}/>
    );
  return (
    <View style={{padding:20,paddingTop:40}}>
    <TouchableOpacity style={{display:'flex',flexDirection:'row', alignItems:'center', gap:10,marginBottom:10}} onPress={()=>navigation.goBack()}>
      <Ionicons name="arrow-back-outline" size={24} color="black" />
      <Text style={{fontFamily:'outfit-medium',fontSize: 25}}>{param.category}</Text>
      </TouchableOpacity>
      {
        categoryList.length===0? 
        <Text style={{marginTop:25, textAlign: 'center',color:color.GRAY , fontFamily:'outfit', fontSize:25}}>No buisness found</Text>
        :
        <FlatList
      data={categoryList}          
      showsHorizontalScrollIndicator={false}      
      renderItem={renderItem}    
      keyExtractor={item => item.id}  
    />
      }
    </View>
  )
}