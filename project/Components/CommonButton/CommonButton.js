import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Componentstyles from '../componentsStyles/Componentstyles'
import { Colors } from '../../Constants/Colors'
import AuthStyles from '../../Screens/AppScreens/authScreens/AuthStyles/AuthStyles'

export default function CommonButton({title,onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={Componentstyles.ButtonCommon}>
    <Text style={Componentstyles.TextMainCommonbutton}>{title}</Text>
    </TouchableOpacity>
  )
}