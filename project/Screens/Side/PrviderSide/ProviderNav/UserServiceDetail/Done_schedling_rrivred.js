import { View, Text, Image, TouchableOpacity, FlatList, TextInput } from 'react-native'
import React,{useState,useEffect} from 'react'
import GlobalStyle from '../../../../GlobalStyle/GlobalStyle'
import { Colors } from '../../../../../Constants/Colors'
import TopheaderLeftIcon from '../../../../../Components/TopHeader/TopHeaderLeftIcon/TopheaderLeftIcon'
import SideStyles from '../../../SideStyles/SideStyles'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BookingdetilsCard from '../../../../../Components/BookingDetailsCard/BookingdetailsCard'
import Provider_Ser_Card from '../../../../../Components/ProviderServicecard/Pro_Service_card'
import CommonButton from '../../../../../Components/CommonButton/CommonButton'
import Button_Inital from '../../../../../Components/ButtonInital/Button_Inital'
import Componentstyles from '../../../../../Components/componentsStyles/Componentstyles'
import { Mark_Complete_Booking } from '../../../../../Api/UserApi'
import Loader from '../../../../AppScreens/Loader/Loader'
import AndroidToast from '../../../../AppScreens/AndroidToast/AndroidToast'
import { useSelector } from 'react-redux'

export default function Done_scheduling_Arrived({ navigation, route }) {

    const [isLoading, setIsLoading] = useState(false)

    const userdata = useSelector(state => state?.USER)

    const { item } = route.params
    console.log('item??????',item.item)
  

    const ApiAcceptHandler = () => {

        // if (Validation()) {
        setIsLoading(true)
        const data = new FormData();
        data.append('booking_id', item.item.id);
  


        // console.log("=========",data)

        Mark_Complete_Booking(data, { auth:userdata.userData.userdata.api_token})
            .then(res => {

                console.log("000000000",res)
                setIsLoading(false)
                if (res.status === 'success') {
                    
                    AndroidToast(res.message)
                    navigation.navigate('CompletedProv')
                   }
                })
            .catch(err => {
                // console.log('from Login catch Block ', err.response.data)
                console.log('from  catch Block ', err)
                setIsLoading(false)

                AndroidToast(err?.response?.data?.message)
          
            })

    }


    return (
        <View style={GlobalStyle.RootContainer}>
            <FlatList


                showsVerticalScrollIndicator={false}
                data={[1]}

                renderItem={() => (
                    <View>

                        <TopheaderLeftIcon title={'Schedule Detail'} onpress={() => navigation.goBack()} />

                        <View style={SideStyles.ProfileCardMain}>
                            <Image style={{ width: 55, height: 55, borderWidth: 2, borderColor: Colors.neutral51, borderRadius: 10, marginHorizontal: 5, }} source={{ uri: item.item.UserImage }} />
                            <View style={SideStyles.ProfileCardNameS}>
                                <Text style={SideStyles.ProfileCardTextN}>{item.item.UserName}</Text>

                            </View>
                            <View style={SideStyles.newandicon}>
                                <Image style={{ width: 20, height: 20, bottom: wp(3), left: wp(8) }} source={require('../../../../../Assets/png/tit.png')} />
                                <Text style={SideStyles.Textactivity}>{item.item.status}</Text>
                            </View>
                        </View>

                        <View tyle={SideStyles.ContainerBookingdetCrd}>
                            <BookingdetilsCard header={'Booking Date'} date={item.item.date} iMagePth={require('../../../../../Assets/png/date1.png')} />
                            <BookingdetilsCard header={'Booking Time'} date={item.item.time} iMagePth={require('../../../../../Assets/png/clock.png')} />
                            <BookingdetilsCard header={'Address'} date={item.item.address} iMagePth={require('../../../../../Assets/png/address.png')} />

                        </View>
                        <View style={SideStyles.ContainerdheaderName}>
                            <Text style={SideStyles.textNotes}>Notes</Text>
                            <View style={SideStyles.Containerdiscraption}>
                                <TextInput
                                    editable={false}
                                    value={item.item.note}
                                    numberOfLines={6}
                                    multiline={true}
                                    style={SideStyles.TextInput} placeholder='Write Here...' placeholderTextColor={Colors.neutral53} />

                            </View>
                        </View>

                        <View style={SideStyles.PaymentView}>
                            <Text style={SideStyles.TextPaymentHistText}>Payment Summary</Text>
                        </View>
                        <View>
                            <FlatList
                                data={item.item.services}
                                showsHorizontalScrollIndicator={false}
                                renderItem={(item) => (
                                    <TouchableOpacity activeOpacity={0.7} style={Componentstyles.ScardMainParentProvider}>
                                        <View style={Componentstyles.FirstMainContainer}>

                                            <Text style={Componentstyles.TextTitle}>{item.item.serviceName}</Text>
                                            {/* <Text style={Componentstyles.TextTitle2}>{}'s Work</Text> */}

                                        </View>

                                            <Image resizeMode='contain' style={{ width: 30, height: 30, }} source={require('../../../../../Assets/png/tic.png')} />
                                        

                                        <View style={Componentstyles.SecondContainerserProCard}>
                                            <Text style={Componentstyles.TextRs}>Rs {item.item.servicePrice}</Text>
                                        </View>
                                    </TouchableOpacity>

                                )}
                            />

                        </View>

                        <View style={SideStyles.totalpayment}>

                            <View style={SideStyles.ProfileCardNameS}>
                                <Text style={SideStyles.ProfileCardTextN}>Total Price</Text>
                                <Text style={SideStyles.ProfileCardTextS}>Rs {item.item.total_price}</Text>
                            </View>
                            <Image style={{ width: 75, height: 75, borderWidth: 2, }} source={require('../../../../../Assets/png/total.png')} />
                        </View>

                        <View style={{ marginVertical: hp(5) }}>
                            <CommonButton title={'Mark As Complete'} onPress={() => ApiAcceptHandler()} />
                        </View>
                        <Loader visible={isLoading} />
                    </View>

                )} />
        </View>
    )
}