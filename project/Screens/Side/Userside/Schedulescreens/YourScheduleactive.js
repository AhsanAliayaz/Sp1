import { View, Text, FlatList, TouchableOpacity,Image } from 'react-native'
import React, { useState,useEffect } from 'react'
import GlobalStyle from '../../../GlobalStyle/GlobalStyle'
import { Colors } from '../../../../Constants/Colors'
import HeaderHome from '../../../../Components/TopHeader/HeaderHome'
import SideStyles from '../../SideStyles/SideStyles'
import Schedule_Card from '../../../../Components/ScheduleCards/Schedule_Card'
import TopheaderLeftIcon from '../../../../Components/TopHeader/TopHeaderLeftIcon/TopheaderLeftIcon'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useSelector } from 'react-redux'
import { Pending_Services_Booking } from '../../../../Api/UserApi'
import Loader from '../../../AppScreens/Loader/Loader'


export default function YourScheduleactive({ navigation }) {

    
    const userdata = useSelector(state => state?.USER)

    // console.log('UserDataCheck ReduxSchedule Screens', userdata.userData.userdata.api_token)

    const [isLoading, setIsLoading] = useState(false)

    const [activeData,setactiveData] = useState([])

//    console.log('active????',activeData.active)

    
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {

            Viewactive_Handler()
          
        });
    
        return unsubscribe;
      }, [navigation]);

      const Viewactive_Handler = async () => {
        setIsLoading(true)
        await Pending_Services_Booking({auth:userdata.userData.userdata.api_token})
          .then(res => {
            console.log("Active screen all services Api>>>>><<<<", res)
            setactiveData(res)
            setIsLoading(false)
        
          })
          .catch(err => {
            console.log('Error from all Services Api catch....', err)
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
                       <TopheaderLeftIcon title={'Active Schedule'} onpress={() => navigation.goBack()} />

                        <View style={SideStyles.ParentViewSchedule}>
                        <TouchableOpacity onPress={() => navigation.navigate('Pending')} activeOpacity={0.7} style={SideStyles.Touch2}>
                                <Text style={SideStyles.TextTouch2}>Pending</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  activeOpacity={0.7} style={SideStyles.Touch1}>
                                <Text style={SideStyles.TextTouch1}>Active</Text>
                            </TouchableOpacity>
                           
                            <TouchableOpacity onPress={() => navigation.navigate('Completed')} activeOpacity={0.7} style={SideStyles.Touch3}>
                                <Text style={SideStyles.TextTouch3}>Completed</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Cancelled')} activeOpacity={0.7} style={SideStyles.Touch4}>
                                <Text style={SideStyles.TextTouch4}>Cancelled</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                        <FlatList
                                data={activeData.active}
                            

                                showsHorizontalScrollIndicator={false}
                                renderItem={(item) => (
                                    <View>
                                       <Schedule_Card item={item} onpress={() => navigation.navigate('ActiveScheduleDetails',{item})} /> 
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