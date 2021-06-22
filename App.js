import React from 'react'
import { View, Text,StatusBar} from 'react-native'
import OnboardingScreen from './screens/OnboardingScreen'
import Routes1 from './navigation/Routes1'
export default function App() {
  
  return (
    <>
    <StatusBar
    barStyle="light-content"
   translucent
    backgroundColor="transparent" />
<Routes1 />
</>
 
  )
}
