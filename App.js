import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { NavigationContainer }  from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  BottomTabNavigation  from './navigation/BottomTabNavigation';
import { View } from 'react-native';
import {Cart , ProductDetails , NewRivals , SignUp ,LoginPage , Orders , Favorties} from './screens';  

export default function App() {

  const [fontsLoaded] = useFonts({
    'regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'semi-bold': require('./assets/fonts/Poppins-SemiBold.ttf'),
      'light': require("./assets/fonts/Poppins-Light.ttf"),
      'medium': require("./assets/fonts/Poppins-Medium.ttf"),
      'extrabold': require("./assets/fonts/Poppins-ExtraBold.ttf"),
      'Bold': require("./assets/fonts/Poppins-Bold.ttf"),
  
    })
  
    const onLayoutRootView = useCallback(async() =>{
      if(fontsLoaded){
        await SplashScreen.hideAsync();
      }
    },[fontsLoaded]);
  
    if(!fontsLoaded){
      return null;
    }
  
  
  const Stack = createNativeStackNavigator();
   
  return (

  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      name='Bottom Navigation'
      component={BottomTabNavigation}
      options={{headerShown:false}}>
      </Stack.Screen>
      <Stack.Screen
      name='Cart'
      component={Cart}
      options={{headerShown:false}}>

      </Stack.Screen>
      <Stack.Screen
      name='ProductDetails'
      component={ProductDetails}
      options={{headerShown:false}}>

      </Stack.Screen>
      <Stack.Screen
      name='NewRivals'
      component={NewRivals}
      options={{headerShown:false}}>
        
      </Stack.Screen>
      <Stack.Screen
      name='Login'
      component={LoginPage}
      options={{headerShown:false}}>
        
      </Stack.Screen>
      <Stack.Screen
      name='Orders'
      component={Orders}
      options={{headerShown:false}}>
        
      </Stack.Screen>
      <Stack.Screen
      name='Favorites'
      component={Favorties}
      options={{headerShown:false}}>
        
      </Stack.Screen>

      <Stack.Screen
      name='SignUp'
      component={SignUp}
      options={{headerShown:false}}>
        
      </Stack.Screen>
      

  
    </Stack.Navigator>
  </NavigationContainer>
  );
}

