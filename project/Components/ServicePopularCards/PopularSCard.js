import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Componentstyles from '../componentsStyles/Componentstyles'

export default function PopularSCard({item}) {
  console.log("Test ========>>>>",item)
  return (
    <TouchableOpacity style={Componentstyles.ScardParent}>
      <View style={Componentstyles.FirstContainer}>

      <Text style={Componentstyles.TextTitle}>{item.item.MainserviceName}</Text>
      <Text style={Componentstyles.TextTitle2}>{item.item.SubserviceName}</Text>
            
      </View>
      <View style={Componentstyles.SecondContainer}>
      <Image style={{width: 60,height: 60,}} source={{uri:item.item.image}} /> 
      </View>
    </TouchableOpacity>
  )
}