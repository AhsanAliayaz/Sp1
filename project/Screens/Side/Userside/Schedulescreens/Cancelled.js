import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import GlobalStyle from '../../../GlobalStyle/GlobalStyle'
import { Colors } from '../../../../Constants/Colors'
import HeaderHome from '../../../../Components/TopHeader/HeaderHome'
import SideStyles from '../../SideStyles/SideStyles'

import TopheaderLeftIcon from '../../../../Components/TopHeader/TopHeaderLeftIcon/TopheaderLeftIcon'
import Schedule_Card_Cancel from '../../../../Components/ScheduleCards/ScheduleCardCancel'
import { useSelector } from 'react-redux'
import { Pending_Services_Booking } from '../../../../Api/UserApi'
import Loader from '../../../AppScreens/Loader/Loader'

export default function Cancelled({ navigation }) {


  const userdata = useSelector(state => state?.USER)

  console.log('UserDataCheck ReduxSchedule Screens', userdata.userData.userdata.api_token)

  const [isLoading, setIsLoading] = useState(false)

  const [CanceledData, setCanceledData] = useState([])

  console.log('Cancelled????', CanceledData.cancelled)


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {

      ViewCompleted_Handler()

    });

    return unsubscribe;
  }, [navigation]);

  const ViewCompleted_Handler = async () => {
    setIsLoading(true)
    await Pending_Services_Booking({ auth: userdata.userData.userdata.api_token })
      .then(res => {
        console.log("Completed screen all services Api>>>>><<<<", res)
        setCanceledData(res)
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
            {/* <HeaderHome /> */}
            <TopheaderLeftIcon title={'Cancelled Schedule'} onpress={() => navigation.goBack()} />

            <View style={SideStyles.ParentViewSchedule}>

              <TouchableOpacity onPress={() => navigation.navigate('Pending')} activeOpacity={0.7} style={SideStyles.Touch2}>
                <Text style={SideStyles.TextTouch2}>Pending</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('YourScheduleactive')} activeOpacity={0.7} style={SideStyles.Touch1completed}>
                <Text style={SideStyles.TextTouch1pending}>Active</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Completed')} activeOpacity={0.7} style={SideStyles.Touch3}>
                <Text style={SideStyles.TextTouch3}>Completed</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} style={SideStyles.Touch4Cancelled}>
                <Text style={SideStyles.TextTouch4Cancelled}>Cancelled</Text>
              </TouchableOpacity>
            </View>

            <View>
              <FlatList
                data={CanceledData.cancelled}


                showsHorizontalScrollIndicator={false}
                renderItem={(item) => (
                  <View>
                    <Schedule_Card_Cancel item={item} />
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