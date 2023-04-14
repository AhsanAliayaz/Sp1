import React, { useState } from "react";
import { Button, View,Text, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors } from "../../Constants/Colors";
import moment from "moment";

const TimeSelected = ({parentReference}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    // console.log('.....',isDatePickerVisible)
    const [time, setTime] = useState('');
    
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  // const handleConfirm = (date) => {
  //   console.warn("A date has been picked: ", date);
  //   hideDatePicker();
  // };


  const handleConfirm = (time) => {
    setTime(time);
    hideDatePicker();
  };

  const getTime = () => {
    parentReference(time)
    return time !== ''
      ? moment(time).format('hh:mm:ss a') 
      : '';
  };

  return (
    <TouchableOpacity onPress={showDatePicker}  style={{   width: wp(90),
      height: hp(7),
      borderWidth: 1,
      borderColor: Colors.neutral51,
      borderRadius: 40,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: Colors.neutral50,}}>
     { isDatePickerVisible?
     <DateTimePickerModal
       isVisible={isDatePickerVisible}
       mode="time"
       is24Hour={false}
       onChange={(e)=>{
        console.log("==========",e)
       }}

       
       
       onConfirm={handleConfirm}
       onCancel={hideDatePicker}
     />
    //  <DateTimePickerModal
    //     isVisible={true}
    //     mode="time"
    //     is24Hour={24}
    //     display='default'
    //     onConfirm={handleConfirm}
    //     onCancel={hideDatePicker}
    //   />
      :<Text style={{fontFamily: 'Poppins-SemiBold',fontSize: 16, color: Colors.neutral52}}>Select Time</Text>}
      <Text style={{fontFamily: 'Poppins-SemiBold',fontSize: 14, color: Colors.neutral52}}>Selected Time {getTime()}</Text>
      {/* <Text>{time.toString()}</Text> */}
    </TouchableOpacity>

  );
};

export default TimeSelected;