import { View, Text, Image, TouchableOpacity, FlatList, TextInput } from 'react-native'
import React from 'react'
import GlobalStyle from '../../../../GlobalStyle/GlobalStyle'
import { Colors } from '../../../../../Constants/Colors'
import TopheaderLeftIcon from '../../../../../Components/TopHeader/TopHeaderLeftIcon/TopheaderLeftIcon'
import SideStyles from '../../../SideStyles/SideStyles'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BookingdetilsCard from '../../../../../Components/BookingDetailsCard/BookingdetailsCard'
import Provider_Ser_Card from '../../../../../Components/ProviderServicecard/Pro_Service_card'
import CommonButton from '../../../../../Components/CommonButton/CommonButton'
import Button_Inital from '../../../../../Components/ButtonInital/Button_Inital'

export default function Done_scheduling_onProgress({ navigation }) {
    const data = [
        {
            id: 1,
            title: "Hello",
            arr: [
                {
                    id: 1,
                    title: 'Sub helo'
                },
            ]
        },
        {
            id: 2,
            title: "Hi"
        },
        {
            id: 3,
            title: "How"
        },
    ]



    return (
        <View style={GlobalStyle.RootContainer}>
            <FlatList


                showsVerticalScrollIndicator={false}
                data={[1]}

                renderItem={() => (
                    <View>

                        <TopheaderLeftIcon title={'Schedule Detail'} onpress={() => navigation.goBack()} />

                        <View style={SideStyles.ProfileCardMain}>
                            <Image style={{ width: 55, height: 55, borderWidth: 2, borderColor: Colors.neutral51, borderRadius: 10, marginHorizontal: 5, }} source={require('../../../../../Assets/png/pro2.jpg')} />
                            <View style={SideStyles.ProfileCardNameS}>
                                <Text style={SideStyles.ProfileCardTextN}>John Travolta</Text>
                                <Text style={SideStyles.ProfileCardTextS}>Computer Tech</Text>
                            </View>
                            <View style={SideStyles.newandicon}>
                                <Image style={{width: 20,height: 20, bottom: wp(3), left: wp(8)}} source={require('../../../../../Assets/png/tit.png')} />
                                <Text  style={SideStyles.Textactivity}>In Progress</Text>
                            </View>
                        </View>

                        <View tyle={SideStyles.ContainerBookingdetCrd}>
                            <BookingdetilsCard header={'Booking Date'} date={'15,june,2021'} iMagePth={require('../../../../../Assets/png/date1.png')} />
                            <BookingdetilsCard header={'Booking Time'} date={'2:16 PM'} iMagePth={require('../../../../../Assets/png/clock.png')} />
                            <BookingdetilsCard header={'Address'} date={'Philadelphia, America  86 VeniceItaly, 30133'} iMagePth={require('../../../../../Assets/png/address.png')} />

                        </View>
                        <View style={SideStyles.ContainerdheaderName}>
                            <Text style={SideStyles.textNotes}>Notes</Text>
                            <View style={SideStyles.Containerdiscraption}>
                                <TextInput numberOfLines={3} multiline={true} style={SideStyles.TextInput} placeholder='Write Here...' placeholderTextColor={Colors.neutral53} />

                            </View>
                        </View>

                        <View style={SideStyles.PaymentView}>
                            <Text style={SideStyles.TextPaymentHistText}>Payment Summary</Text>
                        </View>
                        <View>
                            <FlatList
                                data={data}
                                showsHorizontalScrollIndicator={false}
                                renderItem={(item) => (
                                    <View>
                                        <Provider_Ser_Card item={item} />
                                    </View>

                                )}
                            />

                        </View>

                        <View style={SideStyles.totalpayment}>

                            <View style={SideStyles.ProfileCardNameS}>
                                <Text style={SideStyles.ProfileCardTextN}>John Travolta</Text>
                                <Text style={SideStyles.ProfileCardTextS}>Rs 3000</Text>
                            </View>
                            <Image style={{ width: 75, height: 75, borderWidth: 2, }} source={require('../../../../../Assets/png/total.png')} />
                        </View>

                        <View style={{marginVertical: hp(8)}}>
                        <CommonButton title={'Mark as Completed'} onPress={() => navigation.navigate('Done_scheduling_Completed')} />
                        </View>
                       
                    </View>

                )} />
        </View>
    )
}