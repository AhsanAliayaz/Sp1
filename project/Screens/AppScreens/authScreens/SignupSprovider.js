import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../../Constants/Colors';
import GlobalStyle from '../../GlobalStyle/GlobalStyle';
import AuthStyles from './AuthStyles/AuthStyles';
import Inputtext from '../../../Components/Inputtext';
import CommonButton from '../../../Components/CommonButton/CommonButton';
import ImageCropPicker from 'react-native-image-crop-picker'
import Inputextphone from '../../../Components/InputextPhone';
import CheckBox from '@react-native-community/checkbox';
import DropDownPicker from 'react-native-dropdown-picker';
import Loader from '../Loader/Loader';
import AndroidToast from '../AndroidToast/AndroidToast';
import { signup_api } from '../../../Api/CommonApi';
import {useDispatch} from 'react-redux'
import { addUser } from '../../../Redux/Action/Index';
import { All_Services_Api } from '../../../Api/CommonApi';


export default function SignupSprovider({ navigation }) {

  const dispatch = useDispatch()


 
  

  const [isLoading, setIsLoading] = useState(false)
  const [ProfileImage, setProfileImage] = useState('')
  const [ProfileImageError, setProfileImageError] = useState('')

  const [UserName, setUserName] = useState('');
  const [UserNameError, setUserNameError] = useState('');

  const [Phone, setPhone] = useState('');
  const [PhoneError, setPhoneError] = useState('');

  const [email, setEmail] = useState('');
  const [EmailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [Confirmpassword, setConfirmpassword] = useState('');
  const [ConfirmpasswordError, setConfirmpasswordError] = useState('');

  const [Address, setAddress] = useState('');
  const [AddressError, setAddressError] = useState('');

  const [Location, setLocation] = useState('');
  const [LocationError, setLocationError] = useState('');

  const [ZipCode, setZipCode] = useState('');
  const [ZipCodeError, setZipCodeError] = useState('');

  const [MatchPassword, setMatchPassword] = useState('');

  const [selectTopic, setSelectTopic] = useState('')
  const [selectJobError, setselectJobError] = useState('')
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  
 console.log('getServiceDataItems?????',selectTopic)

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {

      SelectjobTypeHandler()
      
    });

    return unsubscribe;
  }, [navigation]);

  const SelectjobTypeHandler = async () => {
    await All_Services_Api()
      .then(res => {
        let arr = []
        res.data.forEach(element => {
          arr.push({ label: element.service_name, value: element.service_name }
          )
        });
        setItems(arr)
      })
      .catch(err => {
        console.log('Error from SelectTopic Api catch....', err)
      })
  }



  const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


  const emptyFeildHandler = () => {
    setUserName('')
    setEmail('')
    setPassword('')
    setPhone('')
    setAddress('')
    setProfileImage('')
    setConfirmpassword('')
    setLocation('')
    setZipCode('')
    setSelectTopic('')
    


  }

  const signUpHandler = () => {
    // console.log('signUpHandler', validationHandler())
    if (Validation()) {
      setIsLoading(true)
      const data = new FormData();
      data.append('image', {
        uri: ProfileImage,
        name: 'image' + new Date() + '.jpg',
        type: 'image/jpeg',
      });
      data.append('username', UserName);
      data.append('phone_no', Phone);
      data.append('email', email);
      data.append('password', password);
      data.append('password_confirmation', Confirmpassword);
      data.append('password_confirmation', Confirmpassword);
      data.append('location', Location);
      data.append('address', Address);
      data.append('zipcode', ZipCode);
      data.append('type', "Provider");
      data.append('job', selectTopic);
      signup_api(data)
        .then(res => {
          dispatch(addUser(res))
          setIsLoading(false)
          emptyFeildHandler()
          AndroidToast('Account Created Successfully')
        })
        .catch(err => {

          console.log('from Signup catch Block ', err)

          if (err.response.data.message.email) {
            AndroidToast(err.response.data.message.email[0])
          }
          else if (err.response.data.message.password) {

          }
          setIsLoading(false)
        })
    }
  }






  const Validation = (
  ) => {

    if (!email && !password && !UserName && !Phone && !ZipCode && !Confirmpassword && !selectTopic && !Location && !Address && !ProfileImage) {

      setEmailError('Please Enter Email')
      setPasswordError('Please Enter Password')
      setUserNameError('Please Enter UserName')

      setPhoneError('Please Enter  Phone Num')
      setAddressError('Please Enter address')
      setConfirmpasswordError('Please Enter Confirm Password')
      setProfileImageError('Please upload Image')
      setLocationError('Please upload location')
      setselectJobError('Please upload Job')
      setZipCodeError('Please upload Zipcode')

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
    else if (!ProfileImage) {
      setProfileImageError('please upload image')
      return false
    }
    else if (!UserName) {
      setUserNameError('please enter UserName')
      return false
    }
    else if (!Phone) {
      setPhoneError('please enter Phone num')
      return false
    }
    else if (!selectTopic) {
      setselectJobError('please Select Job')
      return false
    }
    else if (!Location) {
      setLocationError('please Select Job')
      return false
    }
    else if (!ZipCode) {
      setZipCodeError('please enter ZipCode')
      return false
    }
    else if (!Address) {
      setAddressError('please enter ZipCode')
      return false
    }
    else if (!Confirmpassword) {
      setConfirmpasswordError('please enter Confirm Pass')
      return false
    }
    else if (password != Confirmpassword) {
      setMatchPassword('Password Not Match.')
      return false

    }

    else if (password.length < 8) {
      setPasswordError('Please enter atleast 8 character.')
      return false
    }

    return true

  }


  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [image, setimage] = useState()
  // const imagepro = require('../../../Assets/png/upload.png')
  const uploadImageHandler = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,

    }).then(image => {
      // console.log(image);
      setProfileImage(image.path)
      // setProfileImageError('')
      // setStreamImage({ path: image.path, type: image.mime })
    }).catch(e => {
      console.log('User Cancel Image Profile Image', e)
    })
  }

  return (

    <ScrollView contentContainerStyle={{ flexGrow: 1, }}>

      <View style={GlobalStyle.RootContainer}>

        <View style={[AuthStyles.ImageProView, {
          borderWidth: ProfileImageError ? 1 : 0,
          borderColor: ProfileImageError ? 'red' : Colors.neutral53,
        }]}>
          <Image
            source={ProfileImage ? { uri: ProfileImage } : require('../../../Assets/png/upload.png')}
            style={{ width: 80, height: 80, borderRadius: 50, alignItems: 'center', }}
            resizeMode='contain'

          />
          <TouchableOpacity style={AuthStyles.TouchUploadImage} onPress={() => uploadImageHandler()}>
            {/* <Image style={{width: 50,height:50, }} source={require('../../../Assets/png/upload.png')} /> */}
            <Image style={AuthStyles.PlusImage} source={require('../../../Assets/png/add.png')} />

          </TouchableOpacity>
        </View>
        <View style={AuthStyles.TextInputSignup}>
          <Inputtext emailstate={UserName} setEmail={(text) => { setUserName(text), setUserNameError('') }} placeholder={'Example@123'} name="Username" imagePath={require('../../../Assets/png/username.png')}
            borderBottomColor={UserNameError ? 'red' : Colors.neutral53}
            borderBottomWidth={UserNameError ? 2 : 2}
          />
          <Inputtext emailstate={email} setEmail={(text) => { setEmail(text), setEmailError('') }} placeholder={'Example@123'} name="E-mail" imagePath={require('../../../Assets/png/Email.png')}
            borderBottomColor={EmailError ? 'red' : Colors.neutral53}
            borderBottomWidth={EmailError ? 2 : 2}
          />
          <Inputtext emailstate={password} setEmail={(text) => { setPassword(text), setPasswordError(''), setMatchPassword('') }} placeholder={'Enter Password'} name="Password" imagePath={require('../../../Assets/png/Password.png')}
            borderBottomColor={passwordError ? 'red' : Colors.neutral53}
            borderBottomWidth={passwordError ? 2 : 2}
          />

          {MatchPassword ? (<Text style={AuthStyles.matchpassmain}>{MatchPassword}</Text>) : null}

          <Inputtext emailstate={Confirmpassword} setEmail={(text) => { setConfirmpassword(text), setConfirmpasswordError(''), setMatchPassword('') }} placeholder={'Enter Confirm Password'} name="Confirm Password" imagePath={require('../../../Assets/png/Password.png')}
            borderBottomColor={ConfirmpasswordError ? 'red' : Colors.neutral53}
            borderBottomWidth={ConfirmpasswordError ? 2 : 2}
          />

          <Inputextphone emailstate={Phone} setEmail={(text) => { setPhone(text), setPhoneError('') }} name="Phone No" imagePath={require('../../../Assets/png/phone.png')}
            borderBottomColor={PhoneError ? 'red' : Colors.neutral53}
            borderBottomWidth={PhoneError ? 2 : 2}
          />
          <Inputtext emailstate={Address} setEmail={(text) => { setAddress(text), setAddressError('') }} placeholder={'Example123'} name="Address" imagePath={require('../../../Assets/png/address.png')}
            borderBottomColor={AddressError ? 'red' : Colors.neutral53}
            borderBottomWidth={AddressError ? 2 : 2}
          />
          <Inputtext emailstate={Location} setEmail={(text) => { setLocation(text), setLocationError('') }} placeholder={'Example[Karachi]'} name="Location" imagePath={require('../../../Assets/png/location.png')}
            borderBottomColor={LocationError ? 'red' : Colors.neutral53}
            borderBottomWidth={LocationError ? 2 : 2}
          />
          <Inputtext emailstate={ZipCode} setEmail={(text) => { setZipCode(text), setZipCodeError('') }} placeholder={'Enter Zip Code'} name="Zip Code" imagePath={require('../../../Assets/png/location.png')}
            borderBottomColor={ZipCodeError ? 'red' : Colors.neutral53}
            borderBottomWidth={ZipCodeError ? 2 : 2}
          />
          <DropDownPicker

            open={open}
            value={selectTopic}
            items={items}
            setOpen={setOpen}
            setValue={e => { setSelectTopic(e), setselectJobError('') }}
            setItems={setItems}
            // disableBorderRadius={false}
            placeholder={'Job'}
            arrowIconStyle={{
              width: 20,
              height: 30,
              color: 'blue'
            }}




            style={{
              borderTopWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderBottomWidth: selectJobError ? 2 : 2,
              borderBottomColor: selectJobError ? 'red' : null,
              borderRadius: 0,
              borderColor: Colors.neutral53,


              //   width: wp(90),
              //   alignSelf: 'center',
              //   elevation: 5,
            }}

            containerStyle={{
              zIndex: 5,
              width: wp(90),
            }}
            dropDownContainerStyle={{
              borderWidth: 0,
            }}

            labelStyle={{
              fontSize: 14,
              fontFamily: 'Poppins-Medium',
              color: Colors.neutral52,
            }}

          />


        </View>
        <View style={AuthStyles.CheckboxSignupView}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}

            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            tintColors={{ true: '#37A068', false: '#132E47' }}
            style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.1 }] }}
          />

          <Text style={AuthStyles.TextAceptConditions}>I accept all terms and conditions</Text>
        </View>

        <View style={AuthStyles.Signupbuttonview}>
          <CommonButton title='Sign Up' onPress={() => signUpHandler()} />
        </View>

        <View style={AuthStyles.DontHaveAccountView}>
          <Text style={AuthStyles.TextDontHaveAcoount}>Already have account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={AuthStyles.TextSignUp}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <Loader visible={isLoading} />
      </View>


    </ScrollView>

  )
}