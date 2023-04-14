import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, {useState,useEffect}from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../../Constants/Colors';
import GlobalStyle from '../../GlobalStyle/GlobalStyle';
import AuthStyles from './AuthStyles/AuthStyles';
import Inputtext from '../../../Components/Inputtext';
import CommonButton from '../../../Components/CommonButton/CommonButton';
import { forgotEmail_api } from '../../../Api/CommonApi';
import Loader from '../Loader/Loader';
import AndroidToast from '../AndroidToast/AndroidToast';

export default function ForgotPass({navigation}) {

    
    const [email, setEmail] = useState('');
    const [EmailError, setEmailError] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    
      



    const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


 


  const VerifyHandler = () => {
    if (Validation()) {
        setIsLoading(true)
        const fromData = new FormData();
        fromData.append('email', email);

        forgotEmail_api(fromData)
            .then(res => {
                setIsLoading(false)
                console.log('verifyEmail.js Then ... ', res);
                if(res.status==="success"){
                AndroidToast(res?.message);
                navigation.navigate('Otp', { email: email })
                }
            })
            .catch(e => {
                setIsLoading(false)
                console.log('verifyEmail.js catch ... ', e?.response?.data);
                AndroidToast(e?.response?.data?.message);
            })
    }
}




  const Validation= () => {
    
    if (!email) {
  
      setEmailError('Please Enter Email')
    
      
  
    
  
      return false
    }
    else if (!email) {
      setEmailError('please enter Email')
      return false
    }
    else if (emailCheck.test(email) === false) {
      setEmailError('Email is must have valid Syntax');
      return false;
  }
    
  
    return true
  
  }


    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
        <View style={GlobalStyle.RootContainer}>
            <View style={AuthStyles.viewForgotPass}>
                <Text style={AuthStyles.TextForgotPass}>Enter your register E-mail to retrieve your Password</Text>
            </View>
            <View style={AuthStyles.viewImageMainForge}>
                <Image style={AuthStyles.imageMain} source={require('../../../Assets/png/forgotimg.png')} />
            </View>
            <View style={AuthStyles.ViewInputForgot}>
            <Inputtext emailstate={email} setEmail={(text) => { setEmail(text), setEmailError('') }} placeholder={'Example@123'} name="E-mail" imagePath={require('../../../Assets/png/Email.png')} 
                     borderBottomColor={EmailError ? 'red' : Colors.neutral53}
                     borderBottomWidth={EmailError ? 2 : 2}
                    />
            </View>
            <Loader visible={isLoading} />
            <View style={AuthStyles.CommonbuttonView}>
        <CommonButton title='Send' onPress={() => VerifyHandler()} />
        
      </View>
      
        </View>
        </ScrollView>
    )
}



