import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Componentstyles from '../componentsStyles/Componentstyles'
import { Colors } from '../../Constants/Colors'

export default function Schedule_Card ({onpress,name,title,item}) {
  // console.log('item<>>>????',item)
  return (
    <View style={Componentstyles.ViewscheduleCard}>
      <View style={Componentstyles.inernalView}>
        <Image style={{width: 40,height: 40,borderRadius: 40,borderWidth:1,borderColor: Colors.neutral58, }} source={{uri:item.item.providerImage}} />
        <View style={Componentstyles.nameandser}>
            <Text style={Componentstyles.Textname}>{item.item.providerName}</Text>
            <Text style={Componentstyles.TextService}>{item.item.providerJob}</Text>

        </View>
        <View>
        <Text style={Componentstyles.Textactivityindicator}>{item.item.status}</Text>
        </View>
        <Image style={{width: 25,height: 25, }} source={require('../../Assets/png/tit.png')} />

      </View>
      <View style={Componentstyles.inernalView2}>
      <View style={Componentstyles.Viewdatetimepayment}>
        <Text style={Componentstyles.Textnamn_andser}>Date</Text>
        <Text style={Componentstyles.Textnamn_andser2}>{item.item.date}</Text>
      </View>
      <View>
        <Text style={Componentstyles.Textnamn_andser}>Time</Text>
        <Text style={Componentstyles.Textnamn_andser2}>{item.item.time}</Text>
      </View>
      <View>
        <Text style={Componentstyles.Textnamn_andser}>Total amount</Text>
        <Text style={Componentstyles.Textnamn_andser2}>{item.item.total_price}</Text>
      </View>
      </View>

      <TouchableOpacity onPress={onpress} style={Componentstyles.inernalView3}>
         <Text style={Componentstyles.Textnam_bottombutton}>Service Details</Text>
      </TouchableOpacity>
    </View>
  )
}