import { View, Text,Image,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../Constants/Colors'
import Componentstyles from '../componentsStyles/Componentstyles'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import moment from 'moment';




export default function ChatListCard({onPress,x}) {
    // console.log("??????????????????????",x)
  return (
    <TouchableOpacity onPress={onPress} style={{width: wp(90),height: hp(10), 
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
           justifyContent: 'space-evenly',
    
           width: wp(85),
           alignSelf: 'center',
    }}>
        <Image  style={{width: 40,height: 40, borderRadius: 40, borderWidth: 1,
        borderColor: '#5592D9',
        

       
        }} source={{uri:x.item.user.Image}} />

        <View style={{width: wp(45),}}>
            <Text style={{fontFamily: 'Poppins-SemiBold',fontSize: 14,color: Colors.neutral52,}}>{x.item.user.Name}</Text>
            <Text numberOfLines={1}
            style={styles.newTexted}>
          {x.item.latestMessage!=String?
              <Text style={{ fontFamily: 'Poppins-Medium',fontSize: 12,color: Colors.neutral53,}}>{x.item.latestMessage}</Text>:
              <Text style={{ fontFamily: 'Poppins-Medium',fontSize: 12,color: Colors.neutral53,}}>{x.item.latestMessage}</Text> }

            </Text>
            
        </View>
        <View style={{width: wp(26),alignItems: 'center',justifyContent: 'center'}}>
            <Text style={{fontFamily: 'Poppins-Medium',fontSize: 10,color: Colors.neutral53, bottom:wp(3),}}>{moment(x?.item.timestamp).calendar()}</Text>

            {x.item.counter != '0' ?
          <View style={styles.totalCountCircle}>
          <Text style={styles.num}>{x.item.counter}</Text>

          </View>: null}
        </View>
        </View>
    </TouchableOpacity>
  )
}




const styles = StyleSheet.create({
    totalCountCircle: {
        width: 20, height: 20, borderRadius: 20 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.neutral51,
      },
      num:{
        fontSize: 12,
        color: 'white',
        
      },
      newTexted: {
        color: Colors.neutral51, fontFamily: 'Poppins.Regular',
        fontSize: 14
      },
    
  })
  