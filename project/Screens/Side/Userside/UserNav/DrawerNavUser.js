import { View, Text,Image } from 'react-native'

import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Notification from '../Notifications/Notification';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors } from '../../../../Constants/Colors';
// import YourScheduleactive from '../../Screens/Side/Userside/Schedulescreens/YourScheduleactive';
import ChatList from '../Chat/ChatList';
import ProfileHome from '../Profile/ProfileHome';
import DrawerCompUser from '../../../../Components/DrawerCompUser';
import AboutUs from '../aboutUs/AboutUs';
import TermAndCondition from '../TermandCondition/TermAndCondition';
import Home from '../Home';
import Pending from '../Schedulescreens/Pending';


const Drawer = createDrawerNavigator();

export default function DrawerNavUser() {

 


  return (
    <Drawer.Navigator 
    
    drawerContent={props => <DrawerCompUser {...props} />} style={{}} 
    initialRouteName="Home" screenOptions={{


         
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
    <Drawer.Screen name="Home" component={Home}  options={{
           title: 'Home',
           drawerIcon: ({focused, size}) => (
              <Image style={{width: 25,height: 25,}} source={require('../../../../Assets/png/Home.png')}/>
           ),
        }}/>
      

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
     <Drawer.Screen name="Pending" component={Pending} 
    options={{
      title: 'Pending',
      drawerIcon: ({focused, size}) => (
         <Image style={{width: 25,height: 25,}} source={require('../../../../Assets/png/Noti.png')}/>
      ),
   }}
    />
    
  </Drawer.Navigator>
  )
}