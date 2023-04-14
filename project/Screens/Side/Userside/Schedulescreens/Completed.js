import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import GlobalStyle from '../../../GlobalStyle/GlobalStyle'
import { Colors } from '../../../../Constants/Colors'
import HeaderHome from '../../../../Components/TopHeader/HeaderHome'
import SideStyles from '../../SideStyles/SideStyles'
import Schedule_Card from '../../../../Components/ScheduleCards/Schedule_Card'
import TopheaderLeftIcon from '../../../../Components/TopHeader/TopHeaderLeftIcon/TopheaderLeftIcon'
import Loader from '../../../AppScreens/Loader/Loader'
import { Pending_Services_Booking } from '../../../../Api/UserApi'
import { useSelector } from 'react-redux'


export default function Completed({ navigation }) {
  
    const userdata = useSelector(state => state?.USER)

    // console.log('UserDataCheck ReduxSchedule Screens', userdata.userData.userdata.api_token)

    const [isLoading, setIsLoading] = useState(false)

    const [CompletedData,setCompletedData] = useState([])

//    console.log('Completed????',CompletedData.complete)

    
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {

            ViewCompleted_Handler()
          
        });
    
        return unsubscribe;
      }, [navigation]);

      const ViewCompleted_Handler = async () => {
        setIsLoading(true)
        await Pending_Services_Booking({auth:userdata.userData.userdata.api_token})
          .then(res => {
            console.log("Completed screen all services Api>>>>><<<<", res)
            setCompletedData(res)
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
                        <TopheaderLeftIcon title={'Completed Schedule'} onpress={() => navigation.goBack()} />

                        <View style={SideStyles.ParentViewSchedule}>
                           
                            <TouchableOpacity onPress={() => navigation.navigate('Pending')} activeOpacity={0.7} style={SideStyles.Touch2}>
                                <Text style={SideStyles.TextTouch2}>Pending</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('YourScheduleactive')} activeOpacity={0.7} style={SideStyles.Touch1completed}>
                                <Text style={SideStyles.TextTouch1pending}>Active</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7} style={SideStyles.Touch3Complteted}>
                                <Text style={SideStyles.TextTouch3completed}>Completed</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Cancelled')} activeOpacity={0.7} style={SideStyles.Touch4}>
                                <Text style={SideStyles.TextTouch4}>Cancelled</Text>
                            </TouchableOpacity>
                        </View>


                        <View>
                            <FlatList
                                data={CompletedData.complete}


                                showsHorizontalScrollIndicator={false}
                                renderItem={(item) => (
                                    <View>
                                        <Schedule_Card item={item} onpress={() => navigation.navigate('CompletedScheduleDetails',{item})}/>
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