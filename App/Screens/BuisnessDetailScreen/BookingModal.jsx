import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CalendarPicker from "react-native-calendar-picker";
import color from '../../utils/color';
import Heading from '../../Component/Heading';
import { FlatList, TextInput } from 'react-native-gesture-handler';

export default function BookingModal({ hideModal }) {
  const [timeList, setTimeList] = useState([]);
  const [selectedTime,setSelectedTime]=useState();
  const [selectedDate,setSelectedDate]=useState()

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({
        time: i.toString() + ":00 AM"
      });
      if(i!=12){
        timeList.push({
          time: i.toString() + ":30 AM"
        });
      }
    }

    for (let i = 1; i <= 7; i++) {
      timeList.push({
        time: i.toString() + ":00 PM"
      });
      timeList.push({
        time: i.toString() + ":30 PM"
      });
    }
    setTimeList(timeList);
  }


  return (
    <ScrollView>
    <KeyboardAvoidingView style={{ padding: 20 }}>
      <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 20 }} onPress={() => hideModal()}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
        <Text style={{ fontFamily: 'outfit-medium', fontSize: 25 }}>Booking</Text>
      </TouchableOpacity>
      <Heading text={'Select Date'} />
      <View style={styles.calanderContainer}>
        <CalendarPicker onDateChange={setSelectedDate} width={340} minDate={Date.now()} todayBackgroundColor={color.PRIMARY} todayTextStyle={{ color: color.WHITE }} selectedDayColor={color.PRIMARY} selectedDayTextStyle={{ color: color.WHITE }} />
      </View>
      <View style={{marginTop: 20}}>
       <Heading text={"Select Time Slot"}/>
      <View style={{marginTop: 10}}>
        <FlatList
          data={timeList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item})=>(
            <TouchableOpacity onPress={()=>setSelectedTime(item.time)}>
              <Text style={ selectedTime===item.time? styles.selectedTime: styles.unSelectedTime}>{item.time}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      </View>

      <View style={{marginTop: 20}}>
        <Heading text={'Any Suggestion Note'}/>
        <TextInput placeholder=" Any suggestions !!!" numberOfLines={5} multiline={true} style={styles.noteInput} />
      </View>
      <Text style={{backgroundColor:color.PRIMARY,color:color.WHITE, textAlign:'center',marginHorizontal:5, borderRadius:99,paddingVertical:20, marginTop: 20,fontSize:16}}>Confirm Booking</Text>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  calanderContainer: {
    backgroundColor: "#f4e1f5",
    padding: 20,
    borderRadius: 15
  },
  selectedTime:{
    padding: 10,
    paddingHorizontal:13,
    marginHorizontal: 4,
    borderRadius: 99,
    backgroundColor: color.PRIMARY,
    color:color.WHITE
  },
  unSelectedTime:{
    padding: 10,
    paddingHorizontal:13,
    borderWidth:1,
    marginHorizontal: 4,
    borderRadius: 99,
    borderColor: color.PRIMARY,
    color:color.PRIMARY
  },
  noteInput:{
    borderWidth:1,
    borderRadius:10,
    borderColor: color.GRAY,
    textAlignVertical:'top',
    padding: 15,
    fontSize:16,
    fontFamily: 'outfit'
  }
});
