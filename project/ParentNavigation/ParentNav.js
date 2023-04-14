import React, { Fragment,useCallback,useEffect,useState } from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../Constants/Colors'
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, } from 'react-native';
import AuthNav from './AuthNav';
import UserNav from '../Screens/Side/Userside/UserNav/UserNav';
import ProviderNav from '../Screens/Side/PrviderSide/ProviderNav/ProviderNav'
import UpdateProfile from '../Screens/AppScreens/authScreens/UpdateProfile';
import ResetPassword from '../Screens/AppScreens/authScreens/ResetPass';
import { useSelector,useDispatch } from 'react-redux';





const Stack = createStackNavigator();

function ParentNav({ navigation }) {
    
    const userdata = useSelector(state => state?.USER)

    return (
        <NavigationContainer>
            <Stack.Navigator>

                {!userdata.userData ? (
                    <Fragment>
                        <Stack.Screen name="AuthNav" component={AuthNav} options={{ headerShown: false }} />
                    </Fragment>
                )
                    :
                    (
                        <Fragment>
                            {userdata?.userData?.userdata?.type == "User" ?
                                <Fragment>
                                    <Stack.Screen name="UserNav" component={UserNav} options={{ headerShown: false }} />

                                </Fragment>
                                :
                                <Fragment>
                                    <Stack.Screen name="ProviderNav" component={ProviderNav} options={{ headerShown: false }} />

                                </Fragment>
                            }
                            <Stack.Screen name="UpdateProfile" component={UpdateProfile}options={{headerShown: false }}/>
                            <Stack.Screen name="ResetPassword" component={ResetPassword}options={{headerShown: false}}/>


                        </Fragment>
                    )


                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default ParentNav;