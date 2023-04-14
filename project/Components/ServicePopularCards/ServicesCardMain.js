import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Componentstyles from '../componentsStyles/Componentstyles'

export default function ServicesCardMain({info,onpress}) {

  console.log("Test ========>>>item>",info.item)

  return (
    <TouchableOpacity onPress={onpress} activeOpacity={0.7} style={Componentstyles.ScardMainParent}>
      <View style={Componentstyles.FirstMainContainer}>

      <Text style={Componentstyles.TextTitle}>{info.item.subservice.subservice_name}</Text>
      <Text style={Componentstyles.TextTitle2}></Text>
            
      </View>
      <View style={Componentstyles.SecondContainer}>
      <Image style={{width: 70,height: 70,}} source={{}} /> 
      </View>
    </TouchableOpacity>
  )
}