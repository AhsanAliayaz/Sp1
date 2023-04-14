import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
import { Colors } from '../../../../Constants/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Messages from '../../Userside/Chat/Messages';
import Provider_Service from '../Provider_Service';

import CompletedProv from '../Scheduleprovidenew/CompletedProv';
import Cancelledprov from '../Scheduleprovidenew/Cancelledprov';
import UserScheduleDetail from './UserServiceDetail/UserSheduleDetail';
import DoneScheduleNew from './UserServiceDetail/Done_Scheduling_new';
import Done_scheduling_Arrived from './UserServiceDetail/Done_schedling_rrivred';
import Done_scheduling_Completed from './UserServiceDetail/Done_Scheduling_Completed';
import Done_scheduling_onProgress from './UserServiceDetail/Done_scheduling_onProgress';
import DrawerNavProvider from '../ProviderDrawerNav/DrawerNavProvider';
import ProfileHome from '../Profile/ProfileHome';
import ActiveProv from '../../../../Screens/Side/PrviderSide/Scheduleprovidenew/ActiveProv'
import AuthNav from '../../../../ParentNavigation/AuthNav';
import { useSelector } from 'react-redux';
import DrawerCompProvider from '../../../../Components/DrawerCompProvider';
import { addUser } from '../../../../Redux/Action/Index';




const Stack = createStackNavigator();



export default function ProviderNav() {

    const userdata = useSelector(state => state?.USER)
     
   
    return (
      
        <Stack.Navigator screenOptions={{
            headerTintColor: 'white'
        }}>
   

            {userdata?.userData?.userdata?.subservices?.length == 0 ?

                <Stack.Screen name="Provider_Service" component={Provider_Service}
                    options={{ headerShown: false }}
                /> 
             :

                <Stack.Screen name="DrawerNavProvider" component={DrawerNavProvider}
                    options={{ headerShown: false }}
                />
          }
       

            <Stack.Screen name="ProfileHome" component={ProfileHome}
                options={{ headerShown: false }}
            />

            <Stack.Screen name="Messages" component={Messages}
                options={{ headerShown: false }}
            />

            <Stack.Screen name="ActiveProv" component={ActiveProv}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="CompletedProv" component={CompletedProv}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Cancelledprov" component={Cancelledprov}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="UserScheduleDetail" component={UserScheduleDetail}
                options={{ headerShown: false }}
            />

            <Stack.Screen name="DoneScheduleNew" component={DoneScheduleNew}
                options={{ headerShown: false }}
            />

            <Stack.Screen name="Done_scheduling_Arrived" component={Done_scheduling_Arrived}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Done_scheduling_Completed" component={Done_scheduling_Completed}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="DrawerCompProvider" component={DrawerCompProvider}
                options={{ headerShown: false }}
            />


        </Stack.Navigator>
        
    )
}