import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import GlobalStyle from '../../GlobalStyle/GlobalStyle';
import AuthStyles from './AuthStyles/AuthStyles';
import CheckBox from '@react-native-community/checkbox';
import { Colors } from '../../../Constants/Colors'; 
import Button_Inital from '../../../Components/ButtonInital/Button_Inital';
import { white } from 'react-native-paper/lib/typescript/styles/colors';

export default function Initialscreen({navigation}) {

  const [ProviderCheckBox, setProviderCheckBox] = useState(false)
  // const [ProviderCheckBoxError, setProviderCheckBoxError] = useState('')
  console.log('ProviderCheckboxClick>>>>>', ProviderCheckBox)

  const [UserCheckBox, setUserCheckBox] = useState(false)
  // const [UserCheckBoxError, setUserCheckBoxError] = useState('')
  console.log('UserCheckboxClick>>>>>', UserCheckBox)
  




  return (
    <View style={GlobalStyle.RootContainer}>
      <View style={AuthStyles.ViewLogoMain}>

      </View>
      <View style={AuthStyles.TextViewMain}>
        <Text style={AuthStyles.texttitle}>Log in or Sign Up as service provider</Text>
        <Text style={AuthStyles.texttitle}>or user</Text>
      </View>
      <View style={AuthStyles.ImagesViewMain}>
        <View style={AuthStyles.ImagesViewMain2}>
          <View style={AuthStyles.ServiceProviderText}>
            <Image style={{ width: 90, height: 90 }} source={(require('../../../Assets/png/Sprovider.png'))} />
            <Text style={AuthStyles.TextServiceMain}>Service</Text>
            <Text style={AuthStyles.TextProviderMain}>Provider</Text>
            <View style={AuthStyles.CheckBoxView}>
              <CheckBox
                disabled={false}
                value={ProviderCheckBox}
                
                onValueChange={() => { setProviderCheckBox(!ProviderCheckBox), setUserCheckBox(false)}}
                tintColors={{ true: '#37A068', false: '#37A068' }}
                style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.1 }] }}
              />

            </View>
            <View style={AuthStyles.BottonSignup}>
            <Button_Inital
                            txtStyle={{
                                color:Colors.neutral52
                            }}
                            cStyle={{
                              backgroundColor: null,
                                borderWidth:1
                            }} title={'Sign Up'} onPress={() =>{
                              UserCheckBox?
                               navigation.navigate('Signup',{ProviderCheckBox}):null,
                               ProviderCheckBox?
                               navigation.navigate('SignupSprovider',{ProviderCheckBox}):null,
                               !UserCheckBox&&!ProviderCheckBox?alert("check one of them"):null
                               
                               }} />
 
            </View>
          </View>
          <View style={AuthStyles.UserText}>
            <Image style={{ width: 90, height: 90 }} source={(require('../../../Assets/png/userImage.png'))} />
            <Text style={AuthStyles.TextUserMain}>User</Text>
            <View style={AuthStyles.CheckBoxViewuser}>
              <CheckBox

                disabled={false}
                value={UserCheckBox}
                onValueChange={() => { setUserCheckBox(!UserCheckBox), setProviderCheckBox(false)}}
                tintColors={{ true: '#37A068', false: '#37A068' }}
                style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.1 }] }}

              />
            </View>
            <View style={AuthStyles.BottonSignin}>
                                       <Button_Inital 
                            cStyle={{
                                backgroundColor:  Colors.neutral51,
                                borderWidth:1
                            }}
                            txtStyle={{
                                color:Colors.neutral50,
                            }}
                            title={'Sign In'} onPress={() => navigation.navigate('SignIn')} />
          </View>
          </View>
          
        </View>

      </View>
    </View>
  )
}