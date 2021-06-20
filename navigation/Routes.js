import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import { View, Text,StatusBar } from 'react-native'
import AuthStack from './AuthStack'
import {AuthContext} from './AuthProvider';
import AppStack from './AppStack';

export default function Routes() {
  const {user,setUser} = useContext(AuthContext)
 const [initializing,setInitializing] =useState(true);

const onAuthStateChanged=(user)=>{

    setUser(user);
if(initializing) setInitializing(false);
}

 useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []); 


if(initializing) return null;


    return (
       <NavigationContainer>
{user ? <AppStack/> :   <AuthStack />}
       </NavigationContainer>
    )
}
