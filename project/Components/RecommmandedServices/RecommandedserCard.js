import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Componentstyles from '../componentsStyles/Componentstyles'
import { Colors } from '../../Constants/Colors'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Rating, AirbnbRating } from 'react-native-ratings';


export default function RecommandedSerCard({ item }) {
    // console.log("Test ======== recommanedde>>>>", item)

    return (
        <TouchableOpacity style={Componentstyles.RECommandedSercardParent}>
            <View style={Componentstyles.SecondContainerRSC}>
                <Image style={{ width: 75, height: 85, borderWidth: 2, borderRadius: 10, borderColor: Colors.neutral51, }}
                    source={{uri:item.item.image}} />
                <View style={Componentstyles.JopTextView}>
                    <Text style={Componentstyles.TextBotImage}>Job Completed ( {item.item.job_completed} )</Text>

                    <Rating
                        type='star'
                        ratingImage={require('../../Assets/png/Star.png')}
                        startingValue={item.item.rating}
                        ratingCount={5}
                        imageSize={18}
                      
                        style={{ paddingVertical: 10 }}
                    />

                </View>
            </View>

            <View style={Componentstyles.FirstContainerRSC}>
                <View style={Componentstyles.titleImage}>
                    <Text style={Componentstyles.TextTitle}>{item.item.username}</Text>
                    <Image style={{width: 25,height: 25,}} source={require('../../Assets/png/tit.png')} />
                    </View>
                    <Text style={Componentstyles.TextTitle2}>{item.item.job}</Text>
              


                {/* <Text style={Componentstyles.TextTitle2details}>Computer technicians install, maintain, and
                    troubleshoot hardware andsoftware for businesses
                    and organizations...... </Text> */}

            </View>


        </TouchableOpacity>
    )
}