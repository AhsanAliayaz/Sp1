import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Componentstyles from '../componentsStyles/Componentstyles'
import { Colors } from '../../Constants/Colors'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Rating, AirbnbRating } from 'react-native-ratings';


export default function ServiceProCard({ item ,onpress,info }) {
    // console.log("Test ========>>>>info", info.item.job_completed)

    return (
        <TouchableOpacity onPress={onpress} activeOpacity={0.6} style={Componentstyles.ServiceProcardParent}>
            <View style={Componentstyles.SecondContainerRSC}>
                <Image style={{ width: 75, height: 85, borderWidth: 2, borderRadius: 10, borderColor: Colors.neutral51, }}
                    source={{uri:info.item.image}} />
                <View style={Componentstyles.JopTextViewSpro}>
                    <Text style={Componentstyles.TextBotImage}>Job Completed {info.item.job_completed}</Text>

                    <Rating
                        type='star'
                        // ratingImage={require('../../Assets/png/Star.png')}
                        // ratingColor='#3498db'
                        // ratingBackgroundColor='#c8c7c8'
                        ratingCount={5}
                        imageSize={18}
                        startingValue={info.item.rating}
                        style={{ paddingVertical: 10 }}
                    />

                </View>
            </View>

            <View style={Componentstyles.FirstContainerSerProCard}>
                <View style={Componentstyles.titleImageSerProlist}>
                    <Text style={Componentstyles.TextTitle4}>{info.item.username}</Text>
                    <Image style={{width: 25,height: 25,}} source={require('../../Assets/png/tit.png')} />
                    </View>
                    <Text style={Componentstyles.TextTitle5}>{info.item.job}</Text>

                {/* <Text style={Componentstyles.TextTitle2details}>Computer technicians install, maintain, and
                    troubleshoot hardware andsoftware for businesses
                    and organizations. Depending on...... </Text> */}

            </View>


        </TouchableOpacity>
    )
}