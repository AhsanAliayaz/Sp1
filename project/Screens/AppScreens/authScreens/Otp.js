import { View, Text,Image,TouchableOpacity,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import { Colors } from '../../../Constants/Colors';
import GlobalStyle from '../../GlobalStyle/GlobalStyle';
import AuthStyles from './AuthStyles/AuthStyles';
import Inputtext from '../../../Components/Inputtext';
import CommonButton from '../../../Components/CommonButton/CommonButton';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {CodeField,Cursor,useBlurOnFulfill,useClearByFocusCell,} from 'react-native-confirmation-code-field';
import Loader from '../Loader/Loader';
import AndroidToast from '../AndroidToast/AndroidToast';
import { verifyEmail_api } from '../../../Api/CommonApi';


export default function Otp({navigation,route}) {



  const email = route?.params?.email;

  console.log('checkemail...',email)

  const [isLoading, setIsLoading] = useState(false)

    const verifyCode_Handler = () => {
      if (Validation()) {
          console.log('Verify Code')
          setIsLoading(true)
          const formData = new FormData();
          formData.append('email', email);
          formData.append('pin', value);
  
          verifyEmail_api(formData)
              .then(res => {
                  setIsLoading(false)
                  console.log('VerifyCode Screen then', res);
                  if (res.status === 'success') {
                      navigation.navigate('Newpass', { email: email, pin: value })
                  }
                  // navigation.navigate('ForgotPassword', { email: email, pin: value })
  
              })
              .catch(e => {
                  setIsLoading(false)
                  AndroidToast(e?.response?.data?.error)
                  console.log('VerifyCode Screen catch', e?.response?.data);
              })
      }
  }

  const Validation = () => {   
    if (!value) {

      setValueError('Please Enter Pin')
      return false
    }
    return true
  }


    const CELL_COUNT = 4;
    const [value, setValue] = useState('');
    const [valueError, setValueError] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
        <View style={GlobalStyle.RootContainer}>
              <View style={AuthStyles.viewForgotPass}>
                <Text style={AuthStyles.TextForgotPass}>Please enter the 4 digits code sent to your E-mail</Text>
            </View>
            <View style={AuthStyles.viewImageMainForge}>
                <Image style={AuthStyles.imageMain} source={require('../../../Assets/png/Message.png')} />
            </View>
            <View style={AuthStyles.CodeFieldView}>
            
        <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={(val) => { setValue(val), setValueError('') }}
        cellCount={CELL_COUNT}
        rootStyle={AuthStyles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
        
  

          <Text
            key={index}
            style={[AuthStyles.cell, isFocused && AuthStyles.focusCell &&
                AuthStyles.bodyLarge,
              {color: Colors.neutral52,
                borderBottomWidth: valueError ? 2 : 2, borderBottomColor: valueError ? 'red' : Colors.neutral53

              }

            ]}
            onLayout={getCellOnLayoutHandler(index)}
            >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
         
        )}
      />

        </View>
        <Loader visible={isLoading} />
        <View style={AuthStyles.CommonbuttonView}>
        <CommonButton title='Varify' onPress={() => verifyCode_Handler()} />
      </View>
      
    </View>
    </ScrollView>
  )
}