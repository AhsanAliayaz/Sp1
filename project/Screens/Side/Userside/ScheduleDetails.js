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
import { color } from 'react-native-reanimated'
import { useState } from 'react'
import AndroidToast from '../../AppScreens/AndroidToast/AndroidToast'
import Loader from '../../AppScreens/Loader/Loader'
import { BookProviderService_api } from '../../../Api/UserApi'
import { useSelector } from 'react-redux'



export default function ScheduleDetails({ navigation, route }) {


    const userdata = useSelector(state => state?.USER)

    // console.log('UserDataCheck ReduxSchedule Screens', userdata.userData.userdata.api_token)

    const userToken = userdata.userData.userdata.api_token


    const time = route.params.time
    const ServiceId = route.params.ServiceId
    // const Checked = route.params.Checked
    const Providerdata = route.params.Providerdata
    const Datecheck = route.params.Datecheck
    const ProviderId = route.params.ProviderId
    const ServiceIdMain = route.params.ServiceIdMain
    // console.log("ServiceIdMain",ServiceIdMain)

    // Variable declear kia hai idr
    const Job = Providerdata.item.job
    // console.log('....',Job)
    // const [serviceid, setServiceid] = useState(ServiceId)



    // console.log('......state', serviceid)



    // console.log('>>>>><<<<,Priovider Id', ProviderId)

    const [Address, setaddress] = useState('')
    // const [AddressError, setAddressError] = useState('')
    const [Notes, setNotes] = useState('')
    // const [NotesError, setNotesError] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    

    const ApiHandlerHandler = () => {

        // if (Validation()) {
        setIsLoading(true)
        const data = new FormData();
        data.append('time', time);
        data.append('date', Datecheck);
        data.append('address', Address);
        data.append('note', Notes);
        data.append('provider_id', ProviderId);
         ServiceIdMain.forEach((item) => {
            return(
                data.append('service_id[]', item.id)

            )

     })
        // data.append('provider_id', ProviderId);

        console.log("=========",JSON.stringify(data))

        BookProviderService_api(data, { auth:userToken })
            .then(res => {

                console.log("000000000",res)
                setIsLoading(false)
                if (res.status === 'success') {
                    
                    AndroidToast(res.message)
                    navigation.navigate('PaymentCash')
                   }
                })
            .catch(err => {
                // console.log('from Login catch Block ', err.response.data)
                console.log('from  catch Block ', err)
                setIsLoading(false)

                AndroidToast(err?.response?.data?.message)
          
            })

    }


    // const Validation = () => {

    //     if (!Address && !Notes) {

    //         setAddressError('Please Enter Email')
    //         setNotesError('Please Enter UserName')
    //         return false
    //     }
    //     else if (!Address) {
    //         setAddressError('please enter Email')
    //         return false
    //     }
    //     else if (Notes) {
    //         setNotesError('Email is must have valid Syntax');
    //         return false;
    //     }
    //     return true

    // }







    return (
        <View style={GlobalStyle.RootContainer}>
            <FlatList


                showsVerticalScrollIndicator={false}
                data={[1]}

                renderItem={() => (
                    <View>

                        <TopheaderLeftIcon title={'Schedule Detail'} onpress={() => navigation.goBack()} />

                        <View style={SideStyles.ProfileCardMain}>
                            <Image style={{ width: 55, height: 55, borderWidth: 2, borderColor: Colors.neutral51, borderRadius: 10, marginHorizontal: 5, }} source={{ uri: Providerdata.item.image }} />
                            <View style={SideStyles.ProfileCardNameS}>
                                <Text style={SideStyles.ProfileCardTextN}>{Providerdata.item.username}</Text>
                                <Text style={SideStyles.ProfileCardTextS}>{Providerdata.item.job}</Text>
                            </View>
                        </View>

                        <View style={SideStyles.ContainerBookingdetCrd}>
                            <BookingdetilsCard header={'Booking Date'} date={Datecheck} iMagePth={require('../../../Assets/png/date1.png')} />
                            <BookingdetilsCard header={'Booking Time'} date={time} iMagePth={require('../../../Assets/png/clock.png')} />
                            {/* <BookingdetilsCard address={Providerdata} header={'Address'} date={Providerdata.item.address} iMagePth={require('../../../Assets/png/address.png')} /> */}
                            <Text style={{
                                fontFamily: 'Poppins-SemiBold',
                                fontSize: 16,
                                color: Colors.neutral52,
                                top: wp(2),
                                left: wp(5)
                            }}>Address</Text>
                            <View style={SideStyles.Viewaddress}>
                                <TextInput style={{
                                    fontFamily: 'Poppins-SemiBold',
                                    width: wp(75),
                                    // backgroundColor: 'pink',
                                    fontSize: 12,
                                    left: wp(2),

                                }}
                                    value={Address}
                                    onChangeText={(text) => { setaddress(text) }}
                                    placeholder='Enter Address' />
                                <Image resizeMode='contain' style={{ width: 26, height: 28, left: wp(5), }} source={require('../../../Assets/png/address.png')} />
                            </View>


                        </View>
                        <View style={SideStyles.ContainerdheaderName}>
                            <Text style={SideStyles.textNotes}>Notes</Text>
                            <View style={SideStyles.Containerdiscraption}>
                                <TextInput
                                    value={Notes}
                                    onChangeText={(text) => { setNotes(text) }}
                                    numberOfLines={3} multiline={true} style={SideStyles.TextInput} placeholder='Write Here...' placeholderTextColor={Colors.neutral53} />

                            </View>
                        </View>

                        <View style={SideStyles.PaymentView}>
                            <Text style={SideStyles.TextPaymentHistText}>Payment Summary</Text>
                        </View>
                        <View>
                            <FlatList

                                data={ServiceId}
                                showsHorizontalScrollIndicator={false}
                                renderItem={(item) => {
                                    // console.log("Hellllo",item)
                                    return (
                                        <TouchableOpacity activeOpacity={0.9} style={Componentstyles.ScardMainParentProvider}>
                                            <View style={Componentstyles.FirstMainContainer}>
                                                <Text style={Componentstyles.TextTitle}>{item.item.service}</Text>
                                                <Text style={Componentstyles.TextTitle2}>{Job}'s Work</Text>
                                            </View>
                                            <Image resizeMode='contain' style={{ width: 30, height: 30, }} source={require('../../../Assets/png/tic.png')} />
                                            <View style={Componentstyles.SecondContainerserProCard}>
                                                <Text style={Componentstyles.TextRs}>Rs {item.item.price}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }
                                }
                            />


                        </View>

                        {/* <View style={SideStyles.totalpayment}>

                            <View style={SideStyles.ProfileCardNameS}>
                                <Text style={SideStyles.ProfileCardTextN}>John Travolta</Text>
                                <Text style={SideStyles.ProfileCardTextS}>Rs 3000</Text>
                            </View>
                            <Image style={{ width: 75, height: 75, borderWidth: 2, }} source={require('../../../Assets/png/total.png')} />
                        </View> */}

                        <View style={SideStyles.CommonButton}>
                            <CommonButton title={'Confirm Schedule'} onPress={() => ApiHandlerHandler()} />
                        </View>
                        <View style={SideStyles.ViewImageBottom}>
                            <Image style={{ width: 240, height: 240, }} source={require('../../../Assets/png/20.png')} />
                        </View>
                        <Loader visible={isLoading} />
                    </View>

                )} />
        </View>
    )
}