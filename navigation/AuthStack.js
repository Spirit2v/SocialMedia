import React,{useState,useEffect} from 'react'
import {NavigationContainer} from'@react-navigation/native'
import {createStackNavigator} from'@react-navigation/stack'
import { View, Text,StatusBar, } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignUp from '../screens/SignUp';

const AppStack = createStackNavigator();


export default function AuthStack() {
const [isFirstLaunch,setIsFirstLaunch]  = React.useState(null)

useEffect(() => {
  AsyncStorage.getItem('alreadyLaunched').then(value=>{
    if(value == null ){
      AsyncStorage.setItem('alreadylaunched','true');
      setIsFirstLaunch(true);
    }
    else{
setIsFirstLaunch(false)
    }
  });
  
}, []);

if( isFirstLaunch===null){
  return null;

}else if(isFirstLaunch===true){
  return(

<AppStack.Navigator

headerMode="none"
>
<AppStack.Screen 
name='Onboarding'
component={OnboardingScreen}
/>
<AppStack.Screen 
name='Login'
component={LoginScreen}
/>
<AppStack.Screen 
name='signup'
component={SignUp}
/>
</AppStack.Navigator>



  );
}
else{

 return  <LoginScreen />
}

}