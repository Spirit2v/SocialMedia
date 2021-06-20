import React,{useState,useEffect} from 'react'
import {NavigationContainer} from'@react-navigation/native'
import {createStackNavigator} from'@react-navigation/stack'
import { View, Text,StatusBar, } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignUp from '../screens/SignUp';

export default function Routes1({navigation}) {

    const AppStack = createStackNavigator();

    return (


 <NavigationContainer>

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

 </NavigationContainer>




    )
}
