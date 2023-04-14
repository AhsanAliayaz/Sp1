import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Componentstyles from '../componentsStyles/Componentstyles'
import MenuIcon from 'react-native-vector-icons/Entypo'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function TopHeaderWithOutimg({title}) {
  return (
    <View style={Componentstyles.HeaderParent}>
      <View style={Componentstyles.HeaderParent2withoutimg}>
        <TouchableOpacity>
       <MenuIcon name='menu' size={30} color={'#fff'} />
       </TouchableOpacity>
       <Text style={Componentstyles.TextHomeHeader}>
        {title}
       </Text>
    
      </View>
    </View>
  )
}