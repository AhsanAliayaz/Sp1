import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import Componentstyles from './componentsStyles/Componentstyles'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function Inputtext({ placeholder, name, imagePath,emailstate,setEmail,borderBottomWidth,borderBottomColor }) {
  return (
    <View>
      <View style={Componentstyles.emailText}>
        <Text style={Componentstyles.textInputMain}>
          {name}
        </Text>
      </View>
      <View style={[Componentstyles.ViewTextInputMain,{
        borderBottomColor: borderBottomColor,
        borderBottomWidth: borderBottomWidth
      }]}>
        <TextInput value={emailstate}
        onChangeText={setEmail} secureTextEntry={placeholder=="Enter Password"||placeholder=="Enter Confirm Password"?true:false} style={Componentstyles.textInput} placeholder={placeholder} placeholderTextColor="#8092A7" />
        <View style={Componentstyles.ImageViewSAtyle}>
        <Image style={{width: 40,height: 30, resizeMode: 'contain'}} source={imagePath} />
        </View>
      </View>

    </View>
  )
}