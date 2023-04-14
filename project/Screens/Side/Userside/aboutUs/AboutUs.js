import { View, Text,ScrollView,Image } from 'react-native'
import React,{useEffect,useState} from 'react'
import GlobalStyle from '../../../GlobalStyle/GlobalStyle'
import TopheaderLeftIcon from '../../../../Components/TopHeader/TopHeaderLeftIcon/TopheaderLeftIcon'
import { Colors } from '../../../../Constants/Colors'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function AboutUs({navigation}) {

    
  useEffect(() => {
  
    navigation.setOptions({
        title: 'About Us',
        headerRight: ()=> (
            <View>
                <Image style={{width: 40,height: 40,borderRadius: 50,borderWidth: 1,borderColor: '#FF766A', right: wp(4)}}  source={require('../../../../Assets/png/pro.jpg')}/>
            </View>
        )
    })
    
    }, [])
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
    <View style={GlobalStyle.RootContainer}>
        {/* <TopheaderLeftIcon title={'About Us'} onpress={() => navigation.goBack()} /> */}
      <View style={{width: wp(90),alignSelf: 'center', marginVertical: hp(3)}}>
      <Text style={{fontFamily: 'Poppins-SemiBold',fontSize: 16,color: Colors.neutral52}}>
      Why choose this services app?
      </Text>
      </View>

      <View style={{width: wp(90),alignSelf: 'center', marginVertical: hp(3)}}>
      <Text style={{fontFamily: 'Poppins-Medium',fontSize: 13,color: Colors.neutral53}}>
      When you choose us, you’ll feel the benefit of 15 years’s 
experience of writing and editing. Because we know 
digital. With working know-ledge of online, SEO and social
media, we can take your message wherever it needs to 
go. Because we don't cost the earth.
      </Text>
      </View>


      <View style={{alignItems: 'center', marginVertical: hp(6)}}>
<Image style={{width: 330,height: 200}} source={require('../../../../Assets/png/Aboutus.png')} />
      </View>

    </View>
    </ScrollView>
  )
}