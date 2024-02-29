import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import color from '../../utils/color';

export default function Login() {
  return (
    <View style={{alignItems:'center'}}>
      <Image 
        source={require('../../../assets/images/login.png')}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
          <Text style={{fontSize:27,color: color.WHITE, textAlign:'center'}}>
            Let's Find 
            <Text style={{fontWeight:'bold'}}> Professional {'\n'} Cleaning and Repair </Text>
            Services
          </Text>
          <Text style={{fontSize:17,color:color.WHITE, textAlign:'center', marginTop:20}}>
            Best App to find services near you which deliver you a professional service.
          </Text>
          <TouchableOpacity style={styles.button} onPress={()=>console.log("helooo")}>
          <Text style={{textAlign:'center',fontSize: 17, color:color.PRIMARY}}>
          Let's Get Started
          </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: color.BLACK,
    borderRadius: 15
  },
subContainer:{
    width:'100%',
    height:"70%",
    backgroundColor:color.PRIMARY,
    marginTop:-20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15
},

button:{
    padding:15,
    borderRadius: 99,
    backgroundColor:color.WHITE,
    marginTop: 40
}
});
