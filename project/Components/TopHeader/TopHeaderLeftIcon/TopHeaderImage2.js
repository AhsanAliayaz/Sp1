import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Componentstyles from '../../componentsStyles/Componentstyles'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function TopHeaderImage2({title,imagePath}) {
  return (
    <View style={Componentstyles.HeaderParent}>
      <View style={Componentstyles.HeaderParent2feedus}>
       <Text style={Componentstyles.TextHomeHeader}>
        {title}
       </Text>
       <Image style={{width: 40,height: 40,borderRadius: 50, right: wp(4)}} source={imagePath} />
      </View>
    </View>
  )
}