import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import color from '../../utils/color';
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
 
WebBrowser.maybeCompleteAuthSession();

export default function Login() {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
     
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);
     
      


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
          <TouchableOpacity style={styles.button} onPress={onPress}>
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
    marginTop: 40,
    cursor: 'pointer'
}

});
