import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import GlobalStyle from '../../../GlobalStyle/GlobalStyle'
import { Colors } from '../../../../Constants/Colors'
import HeaderHome from '../../../../Components/TopHeader/HeaderHome'
import SideStyles from '../../SideStyles/SideStyles'
import Schedule_Card from '../../../../Components/ScheduleCards/Schedule_Card'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useSelector } from 'react-redux'
import { Home_Api } from '../../../../Api/UserApi'
import Loader from '../../../AppScreens/Loader/Loader'
import Componentstyles from '../../../../Components/componentsStyles/Componentstyles'


export default function Homeprov({ navigation }) {

    const userdata = useSelector(state => state?.USER)

 const [HomeData,setHomeData] = useState([])

//  console.log('homescreen data????',userdata.userData.userdata.subservices)
    useEffect(() => {

        navigation.setOptions({
            title: 'Home',
            headerRight: () => (
                <View>
                    <Image style={{ width: 40, height: 40, borderRadius: 50, borderWidth: 1, borderColor: '#FF766A', right: wp(4) }} source={{uri:userdata?.userData?.userdata?.image}} />
                </View>
            )
        })

    }, [])




    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {

            ViewHome_Handler()

        });

        return unsubscribe;
    }, [navigation]);

    const ViewHome_Handler = async () => {
        setIsLoading(true)
        await Home_Api({ auth: userdata.userData.userdata.api_token})
            .then(res => {
                console.log("Home screen all services Api>>>>><<<<", res)
                setHomeData(res)
                setIsLoading(false)

            })
            .catch(err => {
                console.log('Error from Home Api catch....', err)
                setIsLoading(false)

            })
    }


    return (
        <View style={GlobalStyle.RootContainer}>
            <FlatList


                showsVerticalScrollIndicator={false}
                data={[1]}

                renderItem={() => (
                    <View>
                        
                      
                        <View>
                        <FlatList
                                data={HomeData.data}
                            

                                showsHorizontalScrollIndicator={false}
                                renderItem={(item) => (
                                    <View style={Componentstyles.ViewscheduleCard}>
                                    <View style={Componentstyles.inernalView}>
                                      <Image style={{width: 40,height: 40,borderRadius: 40,borderWidth:1,borderColor: Colors.neutral58, }} source={{uri:item.item.UserImage}} />
                                      <View style={Componentstyles.nameandser}>
                                          <Text style={Componentstyles.Textname}>{item.item.UserName}</Text>
                                          {/* <Text style={Componentstyles.TextService}>{job}</Text> */}
                              
                                      </View>
                                      <View>
                                      <Text style={Componentstyles.Textactivityindicator}>{item.item.status}</Text>
                                      </View>
                                      <Image style={{width: 25,height: 25, }} source={require('../../../../Assets/png/tit.png')} />
                              
                                    </View>
                                    <View style={Componentstyles.inernalView2}>
                                    <View style={Componentstyles.Viewdatetimepayment}>
                                      <Text style={Componentstyles.Textnamn_andser}>Date</Text>
                                      <Text style={Componentstyles.Textnamn_andser2}>{item.item.date}</Text>
                                    </View>
                                    <View>
                                      <Text style={Componentstyles.Textnamn_andser}>Time</Text>
                                      <Text style={Componentstyles.Textnamn_andser2}>{item.item.time}</Text>
                                    </View>
                                    <View>
                                      <Text style={Componentstyles.Textnamn_andser}>Total amount</Text>
                                      <Text style={Componentstyles.Textnamn_andser2}>Rs {item.item.total_price}</Text>
                                    </View>
                                    </View>
                              
                                    <TouchableOpacity onPress={() => navigation.navigate('UserScheduleDetail',{item})} style={Componentstyles.inernalView3}>
                                       <Text style={Componentstyles.Textnam_bottombutton}>Service Details</Text>
                                    </TouchableOpacity>
                                  </View>
                               

                                )}
                            />

                        </View>

                    </View>

                )} />

            <Loader visible={isLoading} />

        </View>
    )
}