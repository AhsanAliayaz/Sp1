import { View, Text, FlatList,Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalStyle from '../../GlobalStyle/GlobalStyle'
import { Colors } from '../../../Constants/Colors'
import TopheaderLeftIcon from '../../../Components/TopHeader/TopHeaderLeftIcon/TopheaderLeftIcon'
import { Calendar } from 'react-native-calendars';
import SideStyles from '../SideStyles/SideStyles'
import moment from 'moment'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Schedule_Card from '../../../Components/ScheduleCards/Schedule_Card'
import TimeSelected from '../../../Components/TimeSelected'
// import DateTimePickerModal from "react-native-modal-datetime-picker";
import CommonButton from '../../../Components/CommonButton/CommonButton'
export default function Sheduling({ navigation,route }) {
  const ServiceId = route.params.ServiceId
  // const Checked = route.params.Checked
  const Providerdata = route.params.Providerdata
  const ProviderId = route.params.ProviderId
  const ServiceIdMain = route.params.ServiceIdMain

  // console.log('llkkkkkkkkk',ProviderId)
 


  let y = moment(new Date()).format('YYYY-MM-DD');
  // console.log('yyyy',y)
  const [datseleced, setdatseleced] = useState(y);
  const [datseleced1, setdatseleced1] = useState('');
  const [currentmonth, setcurrentmonth] = useState([])
  const [time, settime] = useState("")
   console.log('...time1111>>',datseleced1)

  useEffect(() => {
    setdatseleced1(y)
    month_day_array_set(y)
  }, [navigation])
  var month1 = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  console.log("==Now Time====", moment(new Date()).format('YYYY-MM-DD'))
  console.log("==Now Time====", moment(new Date()).format('hh:mm:ss A'))
  // console.log('=jj',datseleced)
  const getDaysInMonth = (m, y) => {
    return /8|3|5|10/.test(--m) ? 30 : m == 1 ? (!(y % 4) && y % 100) || !(y % 400) ? 29 : 28 : 31;
  }

  const dateSelected = dy => {
    console.log('DateCheck>>>>>>>>', dy);
    setdatseleced(dy.dateString);
    setdatseleced1(dy.dateString);
    month_day_array_set(dy.dateString)
  };
  const month_day_array_set = (d) => {

    console.log(month1[d.split('-')[1]])
    let yr = d.split('-')[0];
    let mo = d.split('-')[1];

    let y = getDaysInMonth(parseInt(mo), parseInt(yr))
    let dumyarr = []
    for (let i = 1; i < y; i++) {
      dumyarr.push({ id: i, day: i, monnam: month1[mo - 1] })

    }
    setcurrentmonth(dumyarr)


  }
const parentMethod=(data)=>{
  let timecheck=moment(data).format('hh:mm:ss a') 
  settime(timecheck)
// console.log("=====hassan========",)
}
  const monthlist = ({ item }) => (
    <View style={SideStyles.itmview1}>
      <View style={[SideStyles.itmview, { backgroundColor: datseleced.split('-')[2] == item.day ? Colors.neutral51 : Colors.neutral53 }]}>
        <Text style={SideStyles.TextDayandMonth}>{item.day}</Text>
        <Text style={SideStyles.TextDayandMonth}>{item.monnam}</Text>
      </View>
    </View>
  )

  
  

  return (
    <View style={GlobalStyle.RootContainer}>
      <FlatList


        showsVerticalScrollIndicator={false}
        data={[1]}

        renderItem={() => (
          <View>

            <TopheaderLeftIcon title={'Scheduling'} onpress={() => navigation.goBack()} />
            <View style={SideStyles.ViewHeaderMain}>
              <Text style={SideStyles.Textselectdate}>Select Date</Text>
            </View>
            <View style={SideStyles.viewCalanderParent}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={currentmonth}
                renderItem={monthlist}
              />
              <View style={SideStyles.CalendermainView}>
                <Calendar
                  onDayPress={day => {
                    dateSelected(day)
                  }}
                  minDate={y}
                  markedDates={{
                    [datseleced1]: {
                      selected: true,
                      marked: true,
                      dotColor: 'red',
                      selectedColor: Colors.neutral51,

                    },
                  }}
                />
              </View>
            </View>
          




           {/* {Checked!="Now"? */}
           <View style={{marginVertical: hp(4)}}>
            <TimeSelected 
              onRef={ref => (parentReference = ref)}
              parentReference = {parentMethod.bind(this)}
            />
            </View>


            <View style={{marginVertical: hp(4)}}>
              <CommonButton title={'Done Scheduling'} onPress={() => navigation.navigate('ScheduleDetails',{Providerdata:Providerdata,ServiceId:ServiceId,time:time,Datecheck:datseleced,ProviderId: ProviderId,ServiceIdMain:ServiceIdMain})} />
            </View>
          </View>

        )} />

          
        </View>
  )
}