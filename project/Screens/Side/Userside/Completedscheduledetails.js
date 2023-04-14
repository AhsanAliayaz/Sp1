import { View, Text, Image, TouchableOpacity, FlatList, TextInput } from 'react-native'
import React from 'react'
import GlobalStyle from '../../GlobalStyle/GlobalStyle'
import { Colors } from '../../../Constants/Colors'
import TopheaderLeftIcon from '../../../Components/TopHeader/TopHeaderLeftIcon/TopheaderLeftIcon'
import SideStyles from '../SideStyles/SideStyles'
import BookingdetilsCard from '../../../Components/BookingDetailsCard/BookingdetailsCard'
import Provider_Ser_Card from '../../../Components/ProviderServicecard/Pro_Service_card'
import CommonButton from '../../../Components/CommonButton/CommonButton'
import Componentstyles from '../../../Components/componentsStyles/Componentstyles'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useState } from 'react'
import AndroidToast from '../../AppScreens/AndroidToast/AndroidToast'
import Loader from '../../AppScreens/Loader/Loader'
import { BookProviderService_api } from '../../../Api/UserApi'
import { useSelector } from 'react-redux'



export default function CompletedScheduleDetails({ navigation, route }) {
    const { item } = route.params

    // console.log('item>>>>>>',item)


const Job = item.item.providerJob
// console.log('Job',Job)

    return (
        <View style={GlobalStyle.RootContainer}>
            <FlatList


                showsVerticalScrollIndicator={false}
                data={[1]}

                renderItem={() => (
                    <View>

                        <TopheaderLeftIcon title={'Provider Deatil'} onpress={() => navigation.goBack()} />

                        <View style={SideStyles.ProfileCardMain}>
                            <Image style={{ width: 55, height: 55, borderWidth: 2, borderColor: Colors.neutral51, borderRadius: 10, marginHorizontal: 5, }} source={{uri:item.item.providerImage}} />
                            <View style={SideStyles.ProfileCardNameS}>
                                <Text style={SideStyles.ProfileCardTextN}>{item.item.providerName}</Text>
                                <Text style={SideStyles.ProfileCardTextS}>{item.item.providerJob}</Text>
                            </View>
                        </View>

                        <View style={SideStyles.ContainerBookingdetCrd}>
                            <BookingdetilsCard header={'Booking Date'} date={item.item.date}  iMagePth={require('../../../Assets/png/date1.png')} />
                            <BookingdetilsCard header={'Booking Time'} date={item.item.time} iMagePth={require('../../../Assets/png/clock.png')} />
                            <BookingdetilsCard header={'Address'} date={item.item.address} iMagePth={require('../../../Assets/png/clock.png')} />
                            {/* <BookingdetilsCard address={Providerdata} header={'Address'} date={Providerdata.item.address} iMagePth={require('../../../Assets/png/address.png')} /> */}
                         
                           


                        </View>
                        <View style={SideStyles.ContainerdheaderName}>
                            <Text style={SideStyles.textNotes}>Notes</Text>
                            <View style={SideStyles.Containerdiscraption}>
                                <TextInput
                                
                                    editable={false}
                                    value={item.item.note}
                                    // onChangeText={(text) => { setNotes(text) }}
                                    numberOfLines={6} multiline={true} style={SideStyles.TextInput} placeholder='Write Here...' placeholderTextColor={Colors.neutral53} />

                            </View>
                        </View>

                        <View style={SideStyles.PaymentView}>
                            <Text style={SideStyles.TextPaymentHistText}>Payment Summary</Text>
                        </View>
                        <View>
                            <FlatList
                                 data={item.item.services}
                               
                                showsHorizontalScrollIndicator={false}
                                renderItem={(item) => {
                                    // console.log("Hellllo",item)
                                    return (
                                        <TouchableOpacity activeOpacity={0.9} style={Componentstyles.ScardMainParentProvider}>
                                            <View style={Componentstyles.FirstMainContainer}>
                                                <Text style={Componentstyles.TextTitle}>{item.item.serviceName}</Text>
                                                <Text style={Componentstyles.TextTitle2}>{Job}</Text>
                                            </View>
                                            <Image resizeMode='contain' style={{ width: 30, height: 30, }} source={require('../../../Assets/png/tic.png')} />
                                            <View style={Componentstyles.SecondContainerserProCard}>
                                                <Text style={Componentstyles.TextRs}>{item.item.servicePrice}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }
                                }
                            />


                        </View>

                        <View style={SideStyles.totalpayment}>

                            <View style={SideStyles.ProfileCardNameS}>
                                <Text style={SideStyles.ProfileCardTextN}>{item.item.providerName}</Text>
                                <Text style={SideStyles.ProfileCardTextS}>Rs {item.item.total_price}</Text>
                            </View>
                            <Image style={{ width: 75, height: 75, borderWidth: 2, }} source={require('../../../Assets/png/total.png')} />
                        </View>

                        <View style={SideStyles.CommonButton}>
                            <CommonButton title={'feedBack Us'} onPress={() => navigation.navigate('Feedbackus',{item})} />
                        </View>
                        <View style={SideStyles.ViewImageBottom}>
                            <Image style={{ width: 240, height: 240, }} source={require('../../../Assets/png/20.png')} />
                        </View>
                  
                    </View>

                )} />
        </View>
    )
}