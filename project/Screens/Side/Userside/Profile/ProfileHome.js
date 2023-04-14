import { View, Text, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import SideStyles from '../../../Side/SideStyles/SideStyles'
import GlobalStyle from '../../../GlobalStyle/GlobalStyle'
import TopHeaderWithOutimg from '../../../../Components/TopHeader/TopHeaderwithoutImg'
import AuthStyles from '../../../AppScreens/authScreens/AuthStyles/AuthStyles'
import { Colors } from '../../../../Constants/Colors'
import Inputtext from '../../../../Components/Inputtext'
import Componentstyles from '../../../../Components/componentsStyles/Componentstyles'
import CommonButton from '../../../../Components/CommonButton/CommonButton'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useSelector } from 'react-redux'


export default function ProfileHome({navigation}) {

    const userdata = useSelector(state => state?.USER)

    // console.log('UserDataCheck ReduxSchedule Screens', userdata)

    useEffect(() => {
  
        navigation.setOptions({
            title: 'Profile',
            headerRight: ()=> (
                <View>
                    <Image style={{width: 40,height: 40,borderRadius: 50,borderWidth: 1,borderColor: '#FF766A', right: wp(4)}}  source={{uri:userdata?.userData?.userdata?.image}}/>
                </View>
            )
        })
        
        }, [])


    return (
        <View contentContainerStyle={{ flexGrow: 1, }} style={GlobalStyle.RootContainer}>
            {/* <TopHeaderWithOutimg title={'Profile'} /> */}

            <View style={AuthStyles.ImageProView}>
                <Image
                    source={{uri:userdata?.userData?.userdata?.image}}
                    style={{ width: 80, height: 80, borderRadius: 50, alignItems: 'center', borderWidth: 2, borderColor: Colors.neutral51, }}
                    resizeMode='contain'

                />

            </View>
            <TouchableOpacity onPress={() => navigation.navigate('UpdateProfile')} style={SideStyles.editButtonMain}>
                <Image
                    style={{ width: 35, height: 35, alignItems: 'center', }}
                    resizeMode='contain'
                    source={require('../../../../Assets/png/pen.png')} />
            </TouchableOpacity>



            <View style={AuthStyles.TextInputprofile}>

                <View style={Componentstyles.emailText}>
                    <Text style={Componentstyles.textInputMain}>
                        UserName or e-mail
                    </Text>
                </View>
                <View style={Componentstyles.ViewTextInputMain}>
                    <TextInput
                        placeholderTextColor='#3A6E88'
                        editable={false}
                        value={userdata?.userData?.userdata?.username}
                        style={Componentstyles.textInputprofile}
                        // placeholder='JohnTravolta@678'
                    />

                </View>


                <View style={Componentstyles.emailText}>
                    <Text style={Componentstyles.textInputMain}>
                        Phone No#.
                    </Text>
                </View>
                <View style={Componentstyles.ViewTextInputMain}>
                    <TextInput
                        placeholderTextColor='#3A6E88'
                        editable={false}
                        value={userdata?.userData?.userdata?.phone_no}
                        style={Componentstyles.textInputprofile}
                        // placeholder='0333 4690045#'
                    />

                </View>



                <View style={Componentstyles.emailText}>
                    <Text style={Componentstyles.textInputMain}>
                        Address
                    </Text>
                </View>
                <View style={Componentstyles.ViewTextInputMain}>
                    <TextInput
                        placeholderTextColor='#3A6E88'
                        editable={false}
                        value={userdata?.userData?.userdata?.address}
                        style={Componentstyles.textInputprofile}
                        // placeholder='10th street, Lake Avenue, Philadelphia, America'
                    />

                </View>



                <View style={Componentstyles.emailText}>
                    <Text style={Componentstyles.textInputMain}>
                        Location
                    </Text>
                </View>
                <View style={Componentstyles.ViewTextInputMain}>
                    <TextInput
                        placeholderTextColor='#3A6E88'
                        editable={false}
                        value={userdata?.userData?.userdata?.location}
                        style={Componentstyles.textInputprofile}
                        // placeholder='Philadelphia, America'
                    />

                </View>

            </View>
            <TouchableOpacity  onPress={() => navigation.navigate('ResetPassword')} style={SideStyles.ButtonCommon}>
    <Text style={SideStyles.TextMainCommonbutton}>Reset Password</Text>
    </TouchableOpacity>
        </View>
    )
}