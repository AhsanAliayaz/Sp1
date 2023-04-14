
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors } from "../Constants/Colors";
import { useSelector,useDispatch } from "react-redux";
import { addUser } from "../Redux/Action/Index";


const DrawerCompUser = (props) => {

    const dispatch = useDispatch()
    //  console.log('props>>>',props.navigation.navigate)

     const userdata = useSelector(state => state?.USER)
    //  console.log('usderdata>>>>????',userdata.userData.userdata.username)

    return (
        <DrawerContentScrollView contentContainerStyle={{
            paddingTop: 0,


        }} {...props}>
            <View style={{flex:1,  backgroundColor: '#F3F7F1'   }}>
                <View style={{ alignItems: 'center',marginVertical: hp(5)}}>
                 <Image style={{width: 65, height: 65, borderWidth: 1,borderColor: Colors.neutral51, borderRadius: 50,}} source={{uri:userdata?.userData?.userdata?.image}} />
                 <Text style={{fontFamily: 'Poppins-SemiBold',fontSize: 16,color: Colors.neutral52,}}>{userdata?.userData?.userdata?.username}</Text>
                </View>
      <View style={{height: hp(50),justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={{flexDirection: 'row', alignItems: 'center',marginHorizontal: wp(6),}}>
        <Image style={{width: 20, height: 20,}} source={require('../Assets/png/Home.png')} />
        <Text style={{fontFamily: 'Poppins-SemiBold',fontSize: 14,color: Colors.neutral52, left: wp(4)}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Pending')} style={{flexDirection: 'row',alignItems: 'center',marginHorizontal: wp(6)}}>
        <Image style={{width: 20, height: 20,}} source={require('../Assets/png/schedule.png')} />
        <Text style={{fontFamily: 'Poppins-SemiBold',fontSize: 14,color: Colors.neutral52, left: wp(4)}}>Your Sechedules</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('ChatList')} style={{flexDirection: 'row',alignItems: 'center',marginHorizontal: wp(6)}}>
        <Image style={{width: 22, height: 20,}} source={require('../Assets/png/chats.png')} />
        <Text style={{fontFamily: 'Poppins-SemiBold',fontSize: 14,color: Colors.neutral52, left: wp(4)}}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Notification')} style={{flexDirection: 'row', alignItems: 'center',marginHorizontal: wp(6)}}>
        <Image style={{width: 20, height: 20,}} source={require('../Assets/png/Noti.png')} />
        <Text style={{fontFamily: 'Poppins-SemiBold',fontSize: 14,color: Colors.neutral52,left: wp(4)}}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('ProfileHome')} style={{flexDirection: 'row',alignItems: 'center',marginHorizontal: wp(6)}}>
        <Image style={{width: 20, height: 20,}} source={require('../Assets/png/Email.png')} />
        <Text style={{fontFamily: 'Poppins-SemiBold',fontSize: 14,color: Colors.neutral52,left: wp(4)}}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('AboutUs')} style={{flexDirection: 'row',alignItems: 'center',marginHorizontal: wp(6)}}>
        <Image style={{width: 20, height: 20,}} source={require('../Assets/png/about.png')} />
        <Text style={{fontFamily: 'Poppins-SemiBold',fontSize: 14,color: Colors.neutral52, left: wp(4)}}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('TermAndCondition')} style={{flexDirection: 'row',alignItems: 'center',marginHorizontal: wp(6)}}>
        <Image style={{width: 20, height: 27,}} source={require('../Assets/png/term1.png')} />
        <Text style={{fontFamily: 'Poppins-SemiBold',fontSize: 14,color: Colors.neutral52,left: wp(4)}}>Term & Conditions</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => props.navigation.navigate('MyServices')} style={{flexDirection: 'row',alignItems: 'center',marginHorizontal:wp(6) }}>
        <Image style={{width: 23, height: 20,}} source={require('../Assets/png/more.png')} />
        <Text style={{fontFamily: 'Poppins-SemiBold',fontSize: 14,color: Colors.neutral52,left: wp(4)}}>More</Text>
        </TouchableOpacity> */}
      </View>
      <TouchableOpacity onPress={() =>dispatch(addUser())} style={{flexDirection: 'row',alignItems: 'center',marginHorizontal:wp(5), marginTop: hp(20), }}>
      <Image style={{width: 23, height: 22,}} source={require('../Assets/png/23.png')} />
        <Text style={{fontFamily: 'Poppins-SemiBold',fontSize: 16,color: Colors.neutral51,left: wp(4)}}>Logout</Text>
        
      </TouchableOpacity>
            </View>
           
        </DrawerContentScrollView>
    )
}

export default DrawerCompUser

const styles = StyleSheet.create({})