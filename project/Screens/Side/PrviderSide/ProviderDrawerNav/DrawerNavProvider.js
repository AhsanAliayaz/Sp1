import { View, Text,Image } from 'react-native'

import React from 'react'
// import Home from '../../Screens/Side/Userside/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors } from '../../../../Constants/Colors'; 
import ChatList from '../Chat/ChatList';
import ProfileHome from '../Profile/ProfileHome';
import DrawerCompProvider from '../../../../Components/DrawerCompProvider';
import AboutUs from '../aboutUs/AboutUs';
import TermAndCondition from '../TermandCondition/TermAndCondition';
import Homeprov from '../Home/Homeprov'; 
import Newschedule from '../Scheduleprovidenew/Newschedule';
import MyServices from '../More/My_Services';
import Notification from '../Notifications/Notification';



const Drawer = createDrawerNavigator();

export default function DrawerNavProvider() {

 


  return (
    <Drawer.Navigator 
    
    drawerContent={props => <DrawerCompProvider {...props} />} style={{}} 
    initialRouteName="Homeprov" screenOptions={{


         
      headerStyle:{
        backgroundColor: Colors.neutral51,
        height: hp(12),
        
        
      
      },
      headerTitleStyle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        color: Colors.neutral50,
        
      },
      headerTitleAlign:'center',   
      drawerActiveTintColor: Colors.neutral52,
      drawerActiveBackgroundColor: 'white',
      drawerInactiveBackgroundColor: 'white',
      drawerInactiveTintColor: Colors.neutral52,
      headerTintColor: 'white',
    
      

    }}>
    <Drawer.Screen name="Homeprov" component={Homeprov}  options={{
           title: 'Home',
           drawerIcon: ({focused, size}) => (
              <Image style={{width: 25,height: 25,}} source={require('../../../../Assets/png/Home.png')}/>
           ),
        }}/>
        <Drawer.Screen name="Newschedule" component={Newschedule} 
    options={{
      title: 'Scheduled',
      drawerIcon: ({focused, size}) => (
         <Image style={{width: 25,height: 25,}} source={require('../../../../Assets/png/Noti.png')}/>
      ),
   }}
    />

<Drawer.Screen name="ChatList" component={ChatList} 
    options={{
      title: 'Chat',
      drawerIcon: ({focused, size}) => (
         <Image style={{width: 25,height: 25,}} source={require('../../../../Assets/png/Noti.png')}/>
      ),
   }}
    />
    <Drawer.Screen name="Notification" component={Notification} 
    options={{
      title: 'Notifications',
      drawerIcon: ({focused, size}) => (
         <Image style={{width: 25,height: 25,}} source={require('../../../../Assets/png/Noti.png')}/>
      ),
   }}
    />





<Drawer.Screen name="ProfileHome" component={ProfileHome} 
    options={{
      title: 'Profile',
      drawerIcon: ({focused, size}) => (
         <Image style={{width: 25,height: 25,}} source={require('../../../../Assets/png/Noti.png')}/>
      ),
   }}
    />

<Drawer.Screen name="AboutUs" component={AboutUs} 
    options={{
      title: 'Profile',
      drawerIcon: ({focused, size}) => (
         <Image style={{width: 25,height: 25,}} source={require('../../../../Assets/png/Noti.png')}/>
      ),
   }}
    />
    <Drawer.Screen name="TermAndCondition" component={TermAndCondition} 
    options={{
      title: 'Term&Conditions',
      drawerIcon: ({focused, size}) => (
         <Image style={{width: 25,height: 25,}} source={require('../../../../Assets/png/Noti.png')}/>
      ),
   }}
    />

     {/* <Drawer.Screen name="MyServices" component={MyServices} 
    options={{
      title: 'My Services',
      drawerIcon: ({focused, size}) => (
         <Image style={{width: 25,height: 25,}} source={require('../../../../Assets/png/Noti.png')}/>
      ),
   }}
    />
     */}
  </Drawer.Navigator>
  )
}