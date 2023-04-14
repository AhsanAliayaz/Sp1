import { View, Text, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import SideStyles from '../../Side/SideStyles/SideStyles'
import GlobalStyle from '../../GlobalStyle/GlobalStyle'
import TopHeaderWithOutimg from '../../../Components/TopHeader/TopHeaderwithoutImg'
import AuthStyles from './AuthStyles/AuthStyles'
import { Colors } from '../../../Constants/Colors'
import Inputtext from '../../../Components/Inputtext'
import Componentstyles from '../../../Components/componentsStyles/Componentstyles'
import CommonButton from '../../../Components/CommonButton/CommonButton'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import ImageCropPicker from 'react-native-image-crop-picker'
import TopheaderLeftIcon from '../../../Components/TopHeader/TopHeaderLeftIcon/TopheaderLeftIcon'
import { useSelector,useDispatch } from 'react-redux'
import { addUser } from '../../../Redux/Action/Index'
import { editProfile_api } from '../../../Api/CommonApi'
import Loader from '../Loader/Loader'
import AndroidToast from '../AndroidToast/AndroidToast'



export default function UpdateProfile({ navigation }) {

    
    const dispatch = useDispatch()

   

    const userdata = useSelector(state => state?.USER)

    // console.log('UserDataCheck ReduxSchedule Screens', userdata)



    const [isLoading, setIsLoading] = useState(false)

    const [editImage,seteditImage] = useState ()

    const [ProfileImage,setProfileImage] = useState(userdata.userData.userdata.image?userdata.userData.userdata.image:'')
    const [UserName, setUserName] = useState(userdata.userData.userdata.username?userdata.userData.userdata.username:'')
    const [Phone, setPhone] = useState(userdata.userData.userdata.phone_no?userdata.userData.userdata.phone_no:'')
    const [address, setaddress] = useState(userdata.userData.userdata.address?userdata.userData.userdata.address:'')
    const [Location, setLocation] = useState(userdata.userData.userdata.location?userdata.userData.userdata.location:'')



    const uploadImageHandler = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,

        }).then(image => {
            setProfileImage(image.path)
            seteditImage(image.path)
        }).catch(e => {
            console.log('User Cancel Image Profile Image', e)
        })
    }


    const updateProfileHandler = () => {
        
        setIsLoading(true)
        const sData = new FormData();
    
     editImage&&   sData.append('image', {
          uri: editImage,
          name: 'image' + new Date() + '.jpg',
          type: 'image/jpeg',
        });
   
        sData.append('username', UserName);
        sData.append('phone_no', Phone);
        sData.append('address', address);
        sData.append('location', Location);

        // console.log("---------",sData)
       editProfile_api({sData,auth:userdata.userData.userdata.api_token})
          .then(res => {
            console.log('EditProfile Screen then Block', res);

          
            dispatch(addUser(res))
            setIsLoading(false)
            // navigation.goBack()
            AndroidToast('Profile Updated Successfully')
  
          })
          .catch(e => {
            console.log('EditProfile Screen Catch Block', e);
            setIsLoading(false)
            AndroidToast('Something went wrong')
          })
  
      
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1,}}>
        <View contentContainerStyle={{ flexGrow: 1, }} style={GlobalStyle.RootContainer}>
            <TopheaderLeftIcon title={'Edit Profile'} onpress={() => navigation.goBack()} />

            <View style={AuthStyles.ImageProView}>
                <Image
                    source={ProfileImage ? { uri: ProfileImage } : editImage}
                    style={{ width: 80, height: 80, borderRadius: 50, alignItems: 'center', }}
                    resizeMode='contain'

                />
            </View>
            <TouchableOpacity  onPress={() => uploadImageHandler()} style={SideStyles.editButtonMainUpdate}>
                <Image
                    style={{ width: 35, height: 35, alignItems: 'center', }}
                    resizeMode='contain'
                    source={require('../../../Assets/png/uploadimg.png')} />
            </TouchableOpacity>



            <View style={AuthStyles.TextInputprofile}>

                <View style={Componentstyles.emailText}>
                    <Text style={Componentstyles.textInputMain}>
                        UserName or e-mail
                    </Text>
                </View>
                <View style={Componentstyles.ViewTextInputMain}>
                    <TextInput
                    onChangeText={(txt)=>setUserName(txt)}
                    value={UserName}
                        // placeholderTextColor='#3A6E88'
                        style={Componentstyles.textInputprofile}
                        // placeholder='JohnTravolta@678'
                    />
                    <Image style={{ width: 20, height: 20, marginLeft: widthPercentageToDP(9), bottom: widthPercentageToDP(2), }} source={require('../../../Assets/png/pencil.png')} />

                </View>


                <View style={Componentstyles.emailText}>
                    <Text style={Componentstyles.textInputMain}>
                        Phone No#.
                    </Text>
                </View>
                <View style={Componentstyles.ViewTextInputMain}>
                    <TextInput
                        // placeholderTextColor='#3A6E88'
                        onChangeText={(txt)=>setPhone(txt)}
                        value={Phone}
                        style={Componentstyles.textInputprofile}
                        // placeholder='0333 263248#'
                    />
                    <Image style={{ width: 20, height: 20, marginLeft: widthPercentageToDP(9), bottom: widthPercentageToDP(2), }} source={require('../../../Assets/png/pencil.png')} />

                </View>



                <View style={Componentstyles.emailText}>
                    <Text style={Componentstyles.textInputMain}>
                        Address
                    </Text>
                </View>
                <View style={Componentstyles.ViewTextInputMain}>
                    <TextInput
                        // placeholderTextColor='#3A6E88'
                        value={address}
                        onChangeText={(txt)=>setaddress(txt)}
                        style={Componentstyles.textInputprofile}
                        // placeholder='10th street, Lake Avenue, Philadelphia, America'
                    />
                    <Image style={{ width: 20, height: 20, marginLeft: widthPercentageToDP(9), bottom: widthPercentageToDP(2), }} source={require('../../../Assets/png/pencil.png')} />


                </View>



                <View style={Componentstyles.emailText}>
                    <Text style={Componentstyles.textInputMain}>
                        Location
                    </Text>
                </View>
                <View style={Componentstyles.ViewTextInputMain}>
                    <TextInput
                        // placeholderTextColor='#3A6E88'
                        value={Location}
                        onChangeText={(txt)=>setLocation(txt)}
                        style={Componentstyles.textInputprofile}
                        // placeholder='Philadelphia, America@678'
                    />
                    <Image style={{ width: 20, height: 20, marginLeft: widthPercentageToDP(9), bottom: widthPercentageToDP(2), }} source={require('../../../Assets/png/pencil.png')} />

                </View>

            </View>
            <View style={SideStyles.Commanbtn}>
                <CommonButton title={'Update Profile'} onPress={() => updateProfileHandler()} />
            </View>
            <Loader visible={isLoading} />
        </View>
        </ScrollView>
    )
}