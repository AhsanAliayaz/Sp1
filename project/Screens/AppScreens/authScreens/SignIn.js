import { View, Text, TouchableOpacity,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../../Constants/Colors';
import GlobalStyle from '../../GlobalStyle/GlobalStyle';
import AuthStyles from './AuthStyles/AuthStyles';
import Inputtext from '../../../Components/Inputtext';
import CommonButton from '../../../Components/CommonButton/CommonButton';
import AndroidToast from '../AndroidToast/AndroidToast';
import Loader from '../Loader/Loader';
import { login_api } from '../../../Api/CommonApi';
import { addUser } from '../../../Redux/Action/Index';
import { useDispatch,useSelector } from 'react-redux';





export default function SignIn({navigation}) {


  // const userdata = useSelector(state => state?.USER)
  // console.log('userData>>Redux data>>Check >>>>SingIn>>>',userdata.userData.userdata.type)

  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
const [email, setEmail] = useState('');
const [EmailError, setEmailError] = useState('');

const [password, setPassword] = useState('');
const [passwordError, setPasswordError] = useState('');

  const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 

  const loginHandler = () => {

    if (Validation()) {
        setIsLoading(true)
        const data = new FormData();
        data.append('email', email);
        data.append('password', password);
        // console.log('data', data);
        login_api(data)
            .then(res => {
                
                dispatch(addUser(res))
                // dispatch(addUser(res))
                setIsLoading(false)
                navigation.navigate('UserNav')
            })
            .catch(err => {
                // console.log('from Login catch Block ', err.response.data)
                console.log('from Login catch Block ', err)
                setIsLoading(false)
                // dispatch(addUser())
                AndroidToast(err?.response?.data?.message)
                // ToastAndroid.show(err.message, ToastAndroid.SHORT);
            })
    }
}

  const Validation= () => {
    
    if (!email && !password ) {
  
      setEmailError('Please Enter Email')
    
      setPasswordError('Please Enter UserName')
  
    
  
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
  
    else if (password.length < 8) {
      setPasswordError('Please enter atleast 8 character.')
      return false
    }
  
    return true
  
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
    <View style={GlobalStyle.RootContainer}>
      <View style={AuthStyles.TextViewMainLogin}>
        <Text style={AuthStyles.texttitleLogin}>Log In To Your Account</Text>
      </View>
      <View style={AuthStyles.inputText}>
      <Inputtext emailstate={email} setEmail={(text) => { setEmail(text), setEmailError('') }} placeholder={'Example@123'} name="E-mail" imagePath={require('../../../Assets/png/Email.png')} 
                     borderBottomColor={EmailError ? 'red' : Colors.neutral53}
                     borderBottomWidth={EmailError ? 2 : 2}
                    />
      </View>
      <View style={AuthStyles.inputText2}>
      <Inputtext emailstate={password} setEmail={(text) => { setPassword(text), setPasswordError('')}} placeholder={'Enter Password'} name="Password" imagePath={require('../../../Assets/png/Password.png')} 
                     borderBottomColor={passwordError ? 'red' : Colors.neutral53}
                     borderBottomWidth={passwordError ? 2 : 2}
                    />
      </View>
      <TouchableOpacity style={AuthStyles.TouchForgotButton} onPress={() => navigation.navigate('ForgotPass')}>
        <Text style={AuthStyles.ForgotPassText}> Forgot Password ?</Text>
      </TouchableOpacity>
      <View style={AuthStyles.CommonbuttonView}>
        <CommonButton title='Sign Up' onPress={() => loginHandler()} />
      </View>
      <Loader visible={isLoading} />
    </View>
    </ScrollView>
  )
}