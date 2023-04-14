import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Componentstyles from '../componentsStyles/Componentstyles'
import MenuIcon from 'react-native-vector-icons/Entypo'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Title } from 'react-native-paper'

export default function HeaderHome({title,navigation}) {
  return (
    <View style={Componentstyles.HeaderParent}>
      <View style={Componentstyles.HeaderParent2}>
        <TouchableOpacity>
       <MenuIcon name='menu' size={30} color={'#fff'} />
       </TouchableOpacity>
       <Text style={Componentstyles.TextHomeHeader}>
        {title}
       </Text>
       <Image style={{width: 40,height: 40,borderRadius: 50}} source={require('../../Assets/png/pro.jpg')} />
      </View>
    </View>
  )
}