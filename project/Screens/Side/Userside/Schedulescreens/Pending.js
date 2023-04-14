import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import GlobalStyle from '../../../GlobalStyle/GlobalStyle'
import { Colors } from '../../../../Constants/Colors'
import HeaderHome from '../../../../Components/TopHeader/HeaderHome'
import SideStyles from '../../SideStyles/SideStyles'
import Schedule_Card from '../../../../Components/ScheduleCards/Schedule_Card'
import { Pending_Services_Booking } from '../../../../Api/UserApi'
import Loader from '../../../AppScreens/Loader/Loader'
import { useSelector } from 'react-redux'


export default function Pending({ navigation }) {

    const userdata = useSelector(state => state?.USER)

    // console.log('UserDataCheck ReduxSchedule Screens', userdata.userData.userdata.api_token)
 
    const [isLoading, setIsLoading] = useState(false)

    const [PendingData,setPendingData] = useState([])

    // console.log('PendingData',PendingData)

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {

            ViewPending_Handler()
          
        });
    
        return unsubscribe;
      }, [navigation]);

      const ViewPending_Handler = async () => {
        setIsLoading(true)
        await Pending_Services_Booking({auth:userdata.userData.userdata.api_token})
          .then(res => {
            console.log("Pending screen all services Api>>>>><<<<", res)
            setPendingData(res)
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
                        <View style={SideStyles.ParentViewSchedule}>
                        <TouchableOpacity  activeOpacity={0.7} style={SideStyles.Touch2Pending}>
                                <Text style={SideStyles.TextTouch2Pending}>Pending</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('YourScheduleactive')} activeOpacity={0.7} style={SideStyles.Touch1Pending}>
                                <Text style={SideStyles.TextTouch1pending}>Active</Text>
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
                                data={PendingData.pending}
                                showsHorizontalScrollIndicator={false}
                                renderItem={(item) => (
                                    <View>
                                        <Schedule_Card item={item} onpress={() => navigation.navigate('PendingScheduleDetails',{item})}/>
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