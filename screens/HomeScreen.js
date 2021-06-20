import React from 'react'
import { View, Text } from 'react-native'
import FormButton from '../component/FormButton'

export default function HomeScreen() {
    return (
        <View>
            <Text> welcome</Text>
            <FormButton 
            buttonTitle='Logout'
            onPress={()=>{}}
            
            />
        </View>
    )
}
