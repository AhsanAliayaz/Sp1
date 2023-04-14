import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import SideStyles from '../Screens/Side/SideStyles/SideStyles'

export default function Allservice({info,onPress}) {


  return (
    <TouchableOpacity onPress={onPress} style={SideStyles.touchPadButtonElectrican}>
    <Image  style={{ width: 80, height: 80,  }} resizeMode='cover' source={{uri:info.item.service_icon}} />
    <Text style={SideStyles.Textservices}>{info.item.service_name}</Text>
</TouchableOpacity>
  )
}