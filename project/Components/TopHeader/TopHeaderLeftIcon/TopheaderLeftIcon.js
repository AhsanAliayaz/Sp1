import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Componentstyles from '../../componentsStyles/Componentstyles'
import { Colors } from '../../../Constants/Colors'

import BackIcon from 'react-native-vector-icons/AntDesign'

export default function TopheaderLeftIcon({onpress,title, }) {
  return (
    <View style={Componentstyles.HeaderLeftParent}>
      <View style={Componentstyles.HeaderleftParent2}>
        <TouchableOpacity onPress={onpress}>
       <BackIcon name='left' size={25} color={'#fff'} />
       </TouchableOpacity>
       <View style={Componentstyles.ViewTextTitleMain}> 
       <Text style={Componentstyles.TextHomeHeader}>
        {title}
       </Text>
       </View>

      </View>
    </View>
  )
}