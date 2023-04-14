import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Componentstyles from '../componentsStyles/Componentstyles'
import { Colors } from '../../Constants/Colors'
import AuthStyles from '../../Screens/AppScreens/authScreens/AuthStyles/AuthStyles'

export default function Button_Inital({title,onPress,cStyle,txtStyle}) {
  return (
    <TouchableOpacity onPress={onPress} style={[Componentstyles.ButtonViewMan,{...cStyle}]}>
    <Text style={[Componentstyles.TextMain,{...txtStyle}]}>{title}</Text>
    </TouchableOpacity>
  )
}