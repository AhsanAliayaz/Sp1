import { View, Text, FlatList, TouchableOpacity,Image } from 'react-native'
import React, { useState,useEffect } from 'react'
import GlobalStyle from '../../../GlobalStyle/GlobalStyle'
import { Colors } from '../../../../Constants/Colors'
import HeaderHome from '../../../../Components/TopHeader/HeaderHome'
import SideStyles from '../../SideStyles/SideStyles'
// import Schedule_Card from '../../../../Components/ScheduleCards/Schedule_Card'
import TopheaderLeftIcon from '../../../../Components/TopHeader/TopHeaderLeftIcon/TopheaderLeftIcon'
import { Bokings_Services_Booking_provider } from '../../../../Api/UserApi'
import { useSelector } from 'react-redux'
import Loader from '../../../AppScreens/Loader/Loader'
import Componentstyles from '../../../../Components/componentsStyles/Componentstyles'

export default function AvtiveProv({ navigation }) {
    
    useEffect(() => {
  
        navigation.setOptions({
            title: 'Active Schedule',
            headerRight: ()=> (
                <View>
                    <Image style={{width: 40,height: 40,borderRadius: 50,borderWidth: 1,borderColor: '#FF766A', right: wp(4)}}  source={require('../../../../Assets/png/pro.jpg')}/>
                </View>
            )
        })
        
        }, [])


        const userdata = useSelector(state => state?.USER)

        const [isLoading, setIsLoading] = useState(false)

        const [ActiveData,setActiveData] = useState([])

        
    console.log('active prop api checxk',ActiveData.active)

        useEffect(() => {
            const unsubscribe = navigation.addListener('focus', () => {
    
                Viewactive_Handler()
              
            });
        
            return unsubscribe;
          }, [navigation]);
    
          const Viewactive_Handler = async () => {
            setIsLoading(true)
            await Bokings_Services_Booking_provider({auth:userdata.userData.userdata.api_token})
              .then(res => {
                console.log("Pending screen all services Api>>>>><<<<", res)
                setActiveData(res)
                setIsLoading(false)
            
              })
              .catch(err => {
                console.log('Error from all Services Api catch....', err.response.data)
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
                        <TopheaderLeftIcon onpress={() => navigation.goBack()} title={'Active'} />

                        <View style={SideStyles.ParentViewSchedule}>
                            <TouchableOpacity onPress={() => navigation.navigate('DrawerNavProvider')} activeOpacity={0.7} style={SideStyles.Touch1Pending}>
                                <Text style={SideStyles.TextTouch1pending}>New</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} style={SideStyles.Touch2Pending}>
                                <Text style={SideStyles.TextTouch2Pending}>Active</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('CompletedProv')} activeOpacity={0.7} style={SideStyles.Touch3}>
                                <Text style={SideStyles.TextTouch3}>Completed</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Cancelledprov')} activeOpacity={0.7} style={SideStyles.Touch4}>
                                <Text style={SideStyles.TextTouch4}>Cancelled</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <FlatList
                                data={ActiveData.active}


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
                                      <Text style={Componentstyles.Textactivityindicator}>{item.item.status == 'pending'? 'new' :item.item.status}</Text>
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
                              
                                    <TouchableOpacity onPress={() => navigation.navigate('Done_scheduling_Arrived',{item})} style={Componentstyles.inernalView3}>
                                       <Text style={Componentstyles.Textnam_bottombutton}>Service Details</Text>
                                    </TouchableOpacity>
                                  </View>


                                )}
                            />

                        </View>
                        <Loader visible={isLoading} />

                    </View>

                )} /> 
        </View>
    )
}