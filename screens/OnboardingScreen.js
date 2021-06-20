import React from 'react'
import { View, Text, Button,Image, TouchableOpacity } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';


const Done=({...props})=>{
    return(
        
     <TouchableOpacity
     style={{marginRight:20}}
     {...props}
     >
<Text>Done</Text>

     </TouchableOpacity>
    )
   
}

export default function OnboardingScreen({navigation}) {
    return (

<Onboarding
DoneButtonComponent={Done}
onSkip={()=>navigation.replace('Login')}
onDone={()=>navigation.navigate('Login')}

  pages={[
    {
      backgroundColor: '#a6e4d0',
      image: <Image source={require('../assets/onboarding-img1.png')} />,
      title: 'Connect to the world',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
        backgroundColor: '#fdeb93',
        image: <Image source={require('../assets/onboarding-img2.png')} />,
        title: 'Share your favorite',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#e9bcbe',
        image: <Image source={require('../assets/onboarding-img3.png')} />,
        title: 'Become the star',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
  
  ]}
/>
    )
}
