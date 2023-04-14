import { View, Text,TouchableOpacity, Image,ScrollView,TextInput,StyleSheet  } from 'react-native'
import React,{useEffect,useState} from 'react'
import { Colors } from '../../../Constants/Colors';
import GlobalStyle from '../../GlobalStyle/GlobalStyle';
import AuthStyles from './AuthStyles/AuthStyles';
import Inputtext from '../../../Components/Inputtext';
import CommonButton from '../../../Components/CommonButton/CommonButton';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TopheaderLeftIcon from '../../../Components/TopHeader/TopHeaderLeftIcon/TopheaderLeftIcon';
import Componentstyles from '../../../Components/componentsStyles/Componentstyles';
import Loader from '../Loader/Loader';
import AndroidToast from '../AndroidToast/AndroidToast';
import { useSelector } from 'react-redux';
import { changePassword_api } from '../../../Api/CommonApi';


export default function ResetPassword({navigation}) {


    const userdata = useSelector(state => state?.USER)


    const [Oldpassword, setOldPassword] = useState('');
    const [OldpasswordError, setOldPasswordError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmpassword] = useState('');
    const [confirmPasswordError, setConfirmpasswordError] = useState('');
    const [MatchPassword, setMatchPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const  ChamngepasswordHandler = () => {
        if (Validation()) {
            // console.log('validationHandler')
            setIsLoading(true)
            const sData = new FormData();

            sData.append('old_password', Oldpassword);
            sData.append('password', password);
            sData.append('password_confirmation', confirmPassword);
            // console.log('sDatamain>>>>>>>>>>', sData)
            changePassword_api(sData, { auth: userdata.userData.userdata.api_token})
                .then(res => {

                    setIsLoading(false)

                    if (res.status === 'success') {
                        AndroidToast('Password Changed successfully')
                        navigation.navigate('ProfileHome')
                    }
                    // navigation.navigate('Login')
                })
                .catch(e => {
                    setIsLoading(false)
                    // ToastAndroid.show("Something went wrong", ToastAndroid.SHORT);
                    console.log('changepasword Screen catch', e);
                    AndroidToast('your old password is incorrect')
                })
        }
        // navigation.navigate('SignUp')
    }

    const Validation = () => {
        if (!password && !confirmPassword && !Oldpassword) {

            setPasswordError('Please Enter Password')
            setConfirmpasswordError('Please Enter Confirm Password')
            setOldPasswordError('Please Enter Old Password')


            return false
        }
        else if (!Oldpassword) {
            setOldPasswordError('please enter Old Pasword')
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
        else if (password != confirmPassword) {
            setMatchPassword('Password Not Match.')
            return false

        }





        return true






    }


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
    <View style={GlobalStyle.RootContainer}>
        <TopheaderLeftIcon onpress={() => navigation.goBack()}  title={'Reset Password'}/>

            <View style={AuthStyles.ViewImageMain}>
                <Image style={{width: 230,height:230,}} source={require('../../../Assets/png/21.png')}/>
            </View>
         
            <View style={AuthStyles.ViewInputForgotnewpass}>
            <View style={AuthStyles.TextInputpreset}>
            <View style={Componentstyles.emailText}>
                    <Text style={Componentstyles.textInputMain}>
                        Old Password
                    </Text>
                </View>
                <View style={[Componentstyles.ViewTextInputMain,{
                    borderBottomWidth: OldpasswordError ? 1 : 1,
                    borderBottomColor: OldpasswordError ? 'red' : '#132E47'
                }]}>
                    <TextInput
                    secureTextEntry={true}
                        placeholderTextColor='#3A6E88'
                        value={Oldpassword}
                        onChangeText={(txt)=>{setOldPassword(txt), setOldPasswordError() }}
                        style={Componentstyles.textInputprofile}
                        placeholder='EnterPassword'
                    />

                    

                    </View>
                   
                    <View style={Componentstyles.emailText}>
                    <Text style={Componentstyles.textInputMain}>
                        New Password
                    </Text>
                </View>
                <View style={[Componentstyles.ViewTextInputMain,{
                    borderBottomWidth: passwordError ? 1 : 1,
                    borderBottomColor: passwordError ? 'red' : '#132E47'
                }]}>
                    <TextInput
                    secureTextEntry={true}
                        placeholderTextColor='#3A6E88'
                        value={password}
                        onChangeText={(txt)=>{setPassword(txt), setPasswordError() }}
                        style={Componentstyles.textInputprofile}
                        placeholder='EnterPassword'
                    />

                    

                    </View>
                    <View style={Componentstyles.emailText}>
                    <Text style={Componentstyles.textInputMain}>
                        Confirm Password
                    </Text>
                </View>
                <View style={[Componentstyles.ViewTextInputMain,{
                    borderBottomWidth: confirmPasswordError ? 1 : 1,
                    borderBottomColor: confirmPasswordError ? 'red' : '#132E47'
                }]}>
                    <TextInput
                    secureTextEntry={true}
                        placeholderTextColor='#3A6E88'
                        value={confirmPassword}
                        onChangeText={(txt)=>{setConfirmpassword(txt), setConfirmpasswordError() }}
                        style={Componentstyles.textInputprofile}
                        placeholder='EnterPassword'
                    />

                    

                    </View>
                    {MatchPassword ? (<Text style={styles.matchpassmain}>{MatchPassword}</Text> ) : null}
                    
            </View>
            <View style={AuthStyles.CommonbuttonView}>
        <CommonButton title='UpDate Password' onPress={() => ChamngepasswordHandler()} />
      </View>
    </View>
    <Loader visible={isLoading} />
    </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    
    matchpassmain: {
      
      height: hp(3),
      alignSelf: 'center',
      color: 'red',
      fontFamily: 'Poppins-Medium',
      fontSize: 12,
    },
    });