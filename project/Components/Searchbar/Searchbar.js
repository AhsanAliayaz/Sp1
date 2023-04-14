import { View, Text,TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Componentstyles from '../componentsStyles/Componentstyles'
import { Colors } from '../../Constants/Colors'
import SearchIcon from 'react-native-vector-icons/EvilIcons'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function Searchbar() {
  return (
    <View style={Componentstyles.SearchContainer}>
    <TextInput style={Componentstyles.TextInputStyle} placeholder='Search Here' />
    <TouchableOpacity>
    <Image style={{width: 21,height: 21, right: wp(4), }} source={require('../../Assets/png/pan.png')} />
    </TouchableOpacity>
    </View>
  )
}