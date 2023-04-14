import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Componentstyles from '../componentsStyles/Componentstyles'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function BookingdetilsCard({header,date,iMagePth,datechck,time,address}) {

  return (
    <View style={Componentstyles.BookingDetailscardhedr}>
        <Text style={Componentstyles.textHeadr}>{header}</Text>
      <View style={Componentstyles.BookingBorderContainer}>

      <Text style={Componentstyles.TextTitle}>{date}</Text>
    

      <Image resizeMode='contain' style={{width: 26,height: 28, marginRight: wp(2.5), }} source={iMagePth} /> 
             
      </View>
    
    </View>
  )
}