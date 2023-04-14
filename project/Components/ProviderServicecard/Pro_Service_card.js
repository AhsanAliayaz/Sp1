import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Componentstyles from '../componentsStyles/Componentstyles'

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function Provider_Ser_Card({ item,onpress,info,Servicename}) {
     console.log(',...item',item)

  const [tick, setTick] = useState(true)


  return (
    <TouchableOpacity onPress={() => setTick(!tick)} activeOpacity={0.7} style={Componentstyles.ScardMainParentProvider}>
      <View style={Componentstyles.FirstMainContainer}>

        <Text style={Componentstyles.TextTitle}>{info.item.service}</Text>
        <Text style={Componentstyles.TextTitle2}>{Servicename}'s Work</Text>

      </View>
      
      {!tick ?
        <Image resizeMode='contain' style={{ width: 30, height: 30, }} source={require('../../Assets/png/tic.png')} />
        : null
      }
     
      <View style={Componentstyles.SecondContainerserProCard}>
        <Text style={Componentstyles.TextRs}>Rs {info.item.price}</Text>
      </View>
    </TouchableOpacity>
  )
}