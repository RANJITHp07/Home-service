import { View, Text,StyleSheet,FlatList, ActivityIndicator,Image } from 'react-native'
import React,{useEffect, useState} from 'react'
import GlobalApi from '../../utils/GlobalApi'
import color from '../../utils/color'
import Heading from '../../Component/Heading'

export default function Slider() {


    const [sliders,setSliders]=useState([])
    useEffect(()=>{
        getSliders()
    },[])

    const getSliders=()=>{
        GlobalApi.getSlider().then((res)=>{
            setSliders(res.slider)
        }).catch((err)=>{
            console.log(err)
        })
    }

    // rendering the items of the slider
    const renderItem = ({ item }) => (
        <View style={{marginRight:20}}>
          <Image source={{uri:item?.image?.url}} style={styles.sliderImage} />
        </View>
      );

  return (
    <View>
       <Heading text={'Offer for you'}/>
      {
        sliders.length===0? 
        <ActivityIndicator size="large" color={color.PRIMARY} style={{marginVertical:10}}/>
        :
        <FlatList
      data={sliders}      
      horizontal={true}    
      showsHorizontalScrollIndicator={false}      
      renderItem={renderItem}    
      keyExtractor={item => item.id}  
    />
      }
      
    </View>
  )
}


const styles=StyleSheet.create({
    sliderImage:{
        width:270,
        height:150,
        borderRadius: 20,
        objectFit: 'contain',
    }
})