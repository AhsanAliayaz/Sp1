import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from '../Constants/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import Home from '../Screens/Side/Userside/Home';

import HouseKeeping from '../HouseKeeping';
import Electrician from '../Electrician';
import ServiceProviderList from '../ServiceProviderList';
import ProviderDetails from '../ProviderDetails';
import BookingScreen from '../BookingScreen';
import Sheduling from '../Sheduling';
import ScheduleDetails from '../ScheduleDetails';
import Completed from '../Schedulescreens/Completed';
import Cancelled from '../Schedulescreens/Cancelled';
import ReviewScreen from '../ReviewScreen';
// import ProfileHome from '../Profile/ProfileHome';
import Messages from '../../../../Screens/Side/Userside/Chat/Messages'
import PaymentCash from '../PaymentCash';
import DrawerNavUser from './DrawerNavUser';
import YourScheduleactive from '../Schedulescreens/YourScheduleactive';
import ActiveUserSchedule from '../ActiveUserDetails';
import PendingScheduleDetails from '../PendingScheduleDetails';
import ActiveScheduleDetails from '../ActivesacheduleDetails';
import CompletedScheduleDetails from '../Completedscheduledetails';
import CanceledScheduleDetails from '../CanceledscheduleDetails';
import Feedbackus from '../Feedbackus';


const Stack = createStackNavigator();

export default function UserNav() {
    return (

        <Stack.Navigator screenOptions={{
            headerTintColor: 'white'
        }}>

            <Stack.Screen name="DrawerNavUser" component={DrawerNavUser}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="HouseKeeping" component={HouseKeeping}
                options={{ headerShown: false }}
            />

            <Stack.Screen name="Electrician" component={Electrician}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="ServiceProviderList" component={ServiceProviderList}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="BookingScreen" component={BookingScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="ProviderDetails" component={ProviderDetails}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Sheduling" component={Sheduling}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="ScheduleDetails" component={ScheduleDetails}
                options={{ headerShown: false }}
            />
            {/* <Stack.Screen name="YourScheduleactive" component={YourScheduleactive}
            options={{headerShown: false}}
            /> */}
            <Stack.Screen name="YourScheduleactive" component={YourScheduleactive}
                options={{ headerShown: false, 
                    presentation: 'modal',
                    animationTypeForReplace: 'pop',
                    animation: 'slide_from_left',
                }}
                
            />
            <Stack.Screen name="Completed" component={Completed}
                options={{ headerShown: false, 
                
                    presentation: 'modal',
                    animationTypeForReplace: 'pop',
                    animation: 'slide_from_left',
                }}
            />
            <Stack.Screen name="Cancelled" component={Cancelled}
                options={{ 
                    headerShown: false,
                    presentation: 'modal',
                    animationTypeForReplace: 'pop',
                    animation: 'slide_from_left',
                 }}
            />
            {/* <Stack.Screen name="feedbackus" component={feedbackus}
                    options={{ headerShown: false }}
                /> */}
            {/* <Stack.Screen name="ProfileHome" component={ProfileHome}
                options={{ headerShown: false }}
            /> */}
            <Stack.Screen name="Messages" component={Messages}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="ReviewScreen" component={ReviewScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="PaymentCash" component={PaymentCash}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="ActiveUserSchedule" component={ActiveUserSchedule}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="PendingScheduleDetails" component={PendingScheduleDetails}
                options={{ headerShown: false }}
            />

            <Stack.Screen name="ActiveScheduleDetails" component={ActiveScheduleDetails}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="CompletedScheduleDetails" component={CompletedScheduleDetails}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="CanceledScheduleDetails" component={CanceledScheduleDetails}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Feedbackus" component={Feedbackus}
                options={{ headerShown: false }}
            />


        </Stack.Navigator>

    )
}