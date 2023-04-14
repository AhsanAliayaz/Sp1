import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../Constants/Colors'
import Componentstyles from '../componentsStyles/Componentstyles'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'



export default function NotificationCard({item}) {
    console.log('Notification??Item>>',item)
  return (
    <TouchableOpacity style={{width: wp(90),height: hp(10), 
        borderRadius:10,
        elevation: 5,
    shadowColor: Colors.neutral53,
    backgroundColor:Colors.neutral50,
    alignSelf: 'center',
    marginVertical: hp(1),
    marginTop: hp(2),
    justifyContent: 'center',
    // backgroundColor: 'pink',
    }}>
        <View style={{flexDirection: 'row',alignItems: 'center',
           marginLeft: wp(5)
           
           
    }}>
        <Image  style={{width: 30,height: 30, borderRadius: 50,
    
        

       
        }} source={{uri: item.item.image}} />

        <View style={{width: wp(50), marginLeft: wp(4)}}>
            <Text style={{fontFamily: 'Poppins-SemiBold',fontSize: 14,color: Colors.neutral52,}}>{item.item.title}</Text>
            <Text numberOfLines={1} style={{ fontFamily: 'Poppins-Medium',fontSize: 12,color: Colors.neutral59,}}>{item.item.message}</Text>
        </View>
        {/* <View style={{}}>
            <Text style={{fontFamily: 'Poppins-Medium',fontSize: 9,color: Colors.neutral53, bottom:wp(3),}}>YesterDay</Text>
        </View> */}
        </View>
    </TouchableOpacity>
  )
}