import React,{useState} from 'react'
import { View, Text, Image,StyleSheet ,TouchableOpacity,ScrollView} from 'react-native'
import FormButton from '../component/FormButton'
import FormInput from '../component/FormInput'
import SocialButton from '../component/SocialButton'
import AntDesign from 'react-native-vector-icons/AntDesign'
export default function LoginScreen({navigation}) {
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
    return (
        <ScrollView contentContainerStyle={styles.container}>
 <Image
        source={require('../assets/rn-social-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>RN Social App</Text>
     
     
      <FormInput
    labelValue={email}
        placeholderText="Email"
        iconType="user"
onChangeText={(userEmail)=>setEmail(userEmail)}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

     <FormInput
  
  labelValue={password}
  placeholderText="Password"
  onChangeText={(userPassword)=>setPassword(userPassword)}  
  iconType="lock"
    secureTextEntry={true}
  />
  <Text>{email}{password}</Text>




<FormButton
        buttonTitle="Sign In"
       />


      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
         
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            />
   <TouchableOpacity style={styles.forgotButton} 
   onPress={() => navigation.navigate(
       'signup'
   )}>

        <Text style={styles.navButtonText}>
            Dont have a account? create here</Text>
      </TouchableOpacity>

</ScrollView>

)
}

const styles = StyleSheet.create({
    container: {
        flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
    },
    logo: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
  });
  