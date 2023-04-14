import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Initialscreen from '../Screens/AppScreens/authScreens/Initialscreen';
import { Colors } from '../Constants/Colors'
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import SignIn from '../Screens/AppScreens/authScreens/SignIn';
import AntIcon from 'react-native-vector-icons/AntDesign'
import Signup from '../Screens/AppScreens/authScreens/Signup';
import ForgotPass from '../Screens/AppScreens/authScreens/ForgotPass';
import Otp from '../Screens/AppScreens/authScreens/Otp';
import Newpass from '../Screens/AppScreens/authScreens/Newpass';
import SignupSprovider from '../Screens/AppScreens/authScreens/SignupSprovider';

import UserNav from '../Screens/Side/Userside/UserNav/UserNav';
import ProviderNav from '../Screens/Side/PrviderSide/ProviderNav/ProviderNav';




const Stack = createStackNavigator();

function AuthNav({ navigation }) {



    return (
            <Stack.Navigator>

                <Stack.Screen name="Initialscreen" component={Initialscreen}
                    options={{

                        headerTitle: () => {
                            return (
                                <View style={{}}>
                                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 18, color: Colors.neutral50, textAlign: 'center' }}>Welcome To The</Text>
                                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 18, color: Colors.neutral50, textAlign: 'center' }}> Service Providing App</Text>
                                </View>
                            )

                        },
                        headerStyle: { height: hp(10), elevation: 5, backgroundColor: Colors.neutral51 },
                        headerTitleAlign: 'center',
                        headerTitleStyle: { fontFamily: 'Poppins-SemiBold', fontSize: 18, color: Colors.neutral50 }
                    }}
                />
                <Stack.Screen name="SignIn" component={SignIn}

                    options={{
                        // headerLeft:({navigation})=> (

                        //     <AntIcon  onPress={()=> navigation.navigate()} name='left' size={25} color={Colors.neutral50} />
                        //   ),
                        headerLeft: (null),
                        headerTitle: () => {
                            return (
                                <View style={{}}>
                                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 18, color: Colors.neutral50, textAlign: 'center' }}>Welcome To The</Text>
                                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 18, color: Colors.neutral50, textAlign: 'center' }}> Service Providing App</Text>
                                </View>
                            )

                        },
                        headerStyle: { height: hp(10), elevation: 5, backgroundColor: Colors.neutral51 },
                        headerTitleAlign: 'center',
                        headerTitleStyle: { fontFamily: 'Poppins-SemiBold', fontSize: 18, color: Colors.neutral50 }
                    }}
                />
                <Stack.Screen name="Signup" component={Signup}

                    options={{
                        // headerLeft:({navigation})=> (

                        //     <AntIcon  onPress={()=> navigation.navigate()} name='left' size={25} color={Colors.neutral50} />
                        //   ),
                        headerLeft: (null),
                        headerTitle: () => {
                            return (
                                <View style={{}}>
                                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 18, color: Colors.neutral50, textAlign: 'center' }}>SignUp to Register</Text>
                                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 18, color: Colors.neutral50, textAlign: 'center' }}> Account</Text>
                                </View>
                            )

                        },
                        headerStyle: { height: hp(10), elevation: 5, backgroundColor: Colors.neutral51 },
                        headerTitleAlign: 'center',
                        headerTitleStyle: { fontFamily: 'Poppins-SemiBold', fontSize: 18, color: Colors.neutral50 }
                    }}
                />
                <Stack.Screen name="SignupSprovider" component={SignupSprovider}

                    options={{
                        // headerLeft:({navigation})=> (

                        //     <AntIcon  onPress={()=> navigation.navigate()} name='left' size={25} color={Colors.neutral50} />
                        //   ),
                        headerLeft: (null),
                        headerTitle: () => {
                            return (
                                <View style={{}}>
                                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 18, color: Colors.neutral50, textAlign: 'center' }}>SignUp to Register</Text>
                                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 18, color: Colors.neutral50, textAlign: 'center' }}> Account</Text>
                                </View>
                            )

                        },
                        headerStyle: { height: hp(10), elevation: 5, backgroundColor: Colors.neutral51 },
                        headerTitleAlign: 'center',
                        headerTitleStyle: { fontFamily: 'Poppins-SemiBold', fontSize: 18, color: Colors.neutral50 }
                    }}
                />


                <Stack.Screen name="ForgotPass" component={ForgotPass}

                    options={{
                        // headerLeft:({navigation})=> (

                        //     <AntIcon  onPress={()=> navigation.navigate()} name='left' size={25} color={Colors.neutral50} />
                        //   ),

                        headerTitle: () => {
                            return (
                                <View style={{}}>
                                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 18, color: Colors.neutral50, textAlign: 'center' }}>Forgot Password</Text>

                                </View>
                            )

                        },
                        headerStyle: { height: hp(10), elevation: 5, backgroundColor: Colors.neutral51 },
                        headerTitleAlign: 'center',
                        headerTitleStyle: { fontFamily: 'Poppins-SemiBold', fontSize: 18, color: Colors.neutral50 }
                    }}
                />

                <Stack.Screen name="Otp" component={Otp}

                    options={{
                        // headerLeft:({navigation})=> (

                        //     <AntIcon  onPress={()=> navigation.navigate()} name='left' size={25} color={Colors.neutral50} />
                        //   ),

                        headerTitle: () => {
                            return (
                                <View style={{}}>
                                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 18, color: Colors.neutral50, textAlign: 'center' }}>Enter 4 Digit Code</Text>

                                </View>
                            )

                        },
                        headerStyle: { height: hp(10), elevation: 5, backgroundColor: Colors.neutral51 },
                        headerTitleAlign: 'center',
                        headerTitleStyle: { fontFamily: 'Poppins-SemiBold', fontSize: 18, color: Colors.neutral50 }
                    }}
                />


                <Stack.Screen name="Newpass" component={Newpass}

                    options={{
                        // headerLeft:({navigation})=> (

                        //     <AntIcon  onPress={()=> navigation.navigate()} name='left' size={25} color={Colors.neutral50} />
                        //   ),

                        headerTitle: () => {
                            return (
                                <View style={{}}>
                                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 18, color: Colors.neutral50, textAlign: 'center' }}>Enter 4 Digit Code</Text>

                                </View>
                            )

                        },
                        headerStyle: { height: hp(10), elevation: 5, backgroundColor: Colors.neutral51 },
                        headerTitleAlign: 'center',
                        headerTitleStyle: { fontFamily: 'Poppins-SemiBold', fontSize: 18, color: Colors.neutral50 }
                    }}
                />

                <Stack.Screen name="UserNav" component={UserNav} options={{ headerShown: false }} />

    

            </Stack.Navigator>
    );
}

export default AuthNav;