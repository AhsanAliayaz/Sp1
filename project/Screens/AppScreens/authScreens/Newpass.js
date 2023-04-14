import { View, Text,TouchableOpacity, Image,ScrollView,TextInput  } from 'react-native'
import React,{useEffect,useState} from 'react'
import { Colors } from '../../../Constants/Colors';
import GlobalStyle from '../../GlobalStyle/GlobalStyle';
import AuthStyles from './AuthStyles/AuthStyles';
import Inputtext from '../../../Components/Inputtext';
import CommonButton from '../../../Components/CommonButton/CommonButton';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {CodeField,Cursor,useBlurOnFulfill,useClearByFocusCell,} from 'react-native-confirmation-code-field';
import Componentstyles from '../../../Components/componentsStyles/Componentstyles';
import Loader from '../Loader/Loader';
import AndroidToast from '../AndroidToast/AndroidToast';
import { resetPassword_api } from '../../../Api/CommonApi';

export default function Newpass({navigation,route}) {

    const email = route?.params?.email
    const pin = route?.params?.pin

    const [isLoading, setIsLoading] = useState(false)

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword,setConfirmpassword ] = useState('');
    const [confirmPasswordError,setConfirmpasswordError ] = useState('');


    const Validation = () => {
        if (!password && !confirmPassword) {
    
          setPasswordError('Please Enter Password')
          setConfirmpasswordError('Please Enter Confirm Password')
    
          return false
        }
        else if (!password) {
          setPasswordError('please enter Pasword')
          return false
        }
        else if (confirmPassword.length < 8) {
          setConfirmpasswordError('Please enter atleast 8 character.')
          return false
        }
    
    
      
    
    
        return true
      }
    
      const passwordHandler = () => {
        if (Validation()) {
            // console.log('validationHandler')
            setIsLoading(true)
            const formData = new FormData();
            formData.append('email', email);
            formData.append('pin', pin);
            formData.append('password', password);
            formData.append('password_confirmation', confirmPassword);
            // console.log('formData', formData)
            resetPassword_api(formData)
                .then(res => {
                    setIsLoading(false)
                    console.log('ForgotPassword Screen then', res);
                    if (res.status === 'success') {
                        AndroidToast('Password reset successfully')
                        navigation.navigate('SignIn')
                    }
                    // navigation.navigate('Login')
                })
                .catch(e => {
                    setIsLoading(false)
                    // ToastAndroid.show("Something went wrong", ToastAndroid.SHORT);
                    console.log('changePassword  Screen catch', e?.response?.data);
                    AndroidToast(e?.response?.data?.message.password[0])
                })
        }
        // navigation.navigate('SignUp')
    }
    

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
    <View style={GlobalStyle.RootContainer}>
      <View style={AuthStyles.viewForgotnewPass}>
                <Text style={AuthStyles.TextForgotPass}>Your new must be different from previous Password</Text>
            </View>
            <View style={AuthStyles.viewImageMainForge}>
                <Image style={AuthStyles.imageMainnewpass} source={require('../../../Assets/png/reset.png')} />
            </View>
            <View style={AuthStyles.ViewInputForgotnewpass}>
                {/* <Inputtext placeholder={'Enter Password'} name="New Password" />
                <Inputtext placeholder={'Enter Confirm Password'} name="Confirm Password" /> */}
                 <View style={Componentstyles.emailText}>
                    <Text style={Componentstyles.textInputMain}>
                       New Password
                    </Text>
                </View>
                <View style={[Componentstyles.ViewTextInputMain,{
                    borderWidth: passwordError ? 1: null,
                    borderColor: passwordError ? 'red': null
                }]}>
                    <TextInput
                    value={password}
                    onChangeText={(text) => { setPassword(text), setPasswordError('')}}
                    secureTextEntry={true}
                        placeholderTextColor='#3A6E88'

                        style={Componentstyles.textInputprofile}
                        placeholder='Enter Password'
                    />

                    

                    </View>
                    <View style={Componentstyles.emailText}>
                    <Text style={Componentstyles.textInputMain}>
                        Confirm Password
                    </Text>
                </View>
                <View style={[Componentstyles.ViewTextInputMain,{
                    borderWidth: confirmPasswordError ? 1: null,
                    borderColor: confirmPasswordError ? 'red': null
                }]}>
                    <TextInput
                     value={confirmPassword}
                     onChangeText={(text) => { setConfirmpassword(text), setConfirmpasswordError('')}}
                    secureTextEntry={true}
                        placeholderTextColor='#3A6E88'

                        style={Componentstyles.textInputprofile}
                        placeholder='EnterPassword'
                    />

                    

                    </View>
                   
            </View>
            <View style={AuthStyles.CommonbuttonView}>
        <CommonButton onPress={() => passwordHandler()} title='Save'/>
      </View>
      <Loader visible={isLoading} />
    </View>
    </ScrollView>
  )
}