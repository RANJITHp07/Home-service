import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider,SignedIn, SignedOut } from '@clerk/clerk-expo';
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import { useFonts } from 'expo-font';

 
const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/font/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/font/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/font/Outfit-Bold.ttf'),
  
  });
  
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey='pk_test_YW1hemVkLWdpYmJvbi01My5jbGVyay5hY2NvdW50cy5kZXYk'>
    <View style={styles.container}>
    <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
        <Login/>
        </SignedOut>
    </View>
    <StatusBar style='auto'/>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
