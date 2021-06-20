import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import { View, Text } from 'react-native'


const Stack =createStackNavigator();
export default function AppStack() {
  return (
<Stack.Navigator>

  <Stack.Screen 
  name='Home'
  component={HomeScreen}
  
  />
</Stack.Navigator>

    )
}
