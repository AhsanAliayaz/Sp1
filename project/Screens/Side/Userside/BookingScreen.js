import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import GlobalStyle from '../../GlobalStyle/GlobalStyle'
import { Colors } from '../../../Constants/Colors'
import SideStyles from '../SideStyles/SideStyles'
import TopheaderLeftIcon from '../../../Components/TopHeader/TopHeaderLeftIcon/TopheaderLeftIcon'
import { RadioButton } from 'react-native-paper'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import CommonButton from '../../../Components/CommonButton/CommonButton'


export default function BookingScreen({ navigation,route }) {
    const [checked, setChecked] = useState('Schedule');
    const ServiceId = route.params.serviceId
    const Providerdata = route.params.Providerdata

    const PrviderId = route.params.PrviderId

    const ServiceIdMain = route.params.ServiceIdMain
//    console.log('./.././../',checked)
//     console.log(';,>..service id',ServiceId)
//     console.log('uuuuuuuuuoooppppp',PrviderId)
//     console.log('>>>>>',ServiceIdMain)
    
    

    return (
        <View style={GlobalStyle.RootContainer}>
            <TopheaderLeftIcon title={'Booking Now'} onpress={() => navigation.goBack()} />

            <View style={SideStyles.ServiceTiltle}>
                <Text style={SideStyles.TextserP}>Booking Time</Text>
                <Text style={SideStyles.TextBookservice}>When do you want our services?</Text>
            </View>

            <View style={SideStyles.RadioButonViewParent}>
                <View style={SideStyles.ViewRadio2}>
                    <View>
                        {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                                value="Now"
                                status={checked === 'Now' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('Now')}
                                uncheckedColor="#132E47"
                                color='#132E47'
                            />
                            <Text style={SideStyles.TextNow}>Now</Text>
                        </View> */}
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton
                               value="Schedule"
                               status={ checked === 'Schedule' ? 'checked' : 'unchecked' }
                               onPress={() => setChecked('Schedule')}
                               uncheckedColor="#132E47"
                               color='#132E47'
                            />
                            <Text style={SideStyles.TextNow}>Schedule</Text>
                        </View>

                    </View>

                    {/* <RadioButton.Group
                        value={radioValue}
                        onValueChange={newValue => setRadioValue(newValue)}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity
                                onPress={() => { setRadioValue(0) }}>
                                <RadioButton
                                    value="0"
                                // color={colors.primary200}
                                />
                                <Text style={SideStyles.TextNow}>Now</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { setRadioValue(1) }}>
                                <RadioButton
                                    value="1"
                                />
                                <Text style={SideStyles.TextNow}>Schedule</Text>
                            </TouchableOpacity>
                        </View>
                    </RadioButton.Group> */}

                </View>
                <Image style={{ width: 60, height: 60, top: wp(3) }} source={require('../../../Assets/png/Dtime.png')} />
            </View>

         <View style={SideStyles.CommonButtonView}>
            <CommonButton onPress={() => navigation.navigate('Sheduling',{ServiceId:ServiceId,Checked:checked,Providerdata:Providerdata,ProviderId:PrviderId, ServiceIdMain:ServiceIdMain})} title={'Continue'}/>
         </View>
         <View style={SideStyles.ViewImageBottom}>
            <Image style={{ width: 240, height: 240, }}  source={require('../../../Assets/png/book.png')} />
         </View>

        </View>
    )
}