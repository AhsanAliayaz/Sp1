import { View, Text,Image,TouchableOpacity, } from 'react-native'
import React,{useState,useEffect} from 'react'
import Componentstyles from '../componentsStyles/Componentstyles'
import { Colors } from '../../Constants/Colors'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Rating, AirbnbRating } from 'react-native-ratings';

export default function CustomerReviewCard({item}) {
  console.log('itemdata???',item)

  const getFormattedDate = (
    Idate,
    prefomattedDate = false,
    hideYear = false,
  ) => {
    console.log('');

    const date = new Date(Idate);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) {
      // Adding leading zero to minutes
      minutes = `0${minutes}`;
    }
    if (prefomattedDate) {
      // Today at 10:20
      // Yesterday at 10:20
      return `${prefomattedDate} at ${hours}:${minutes}`;
    }
    if (hideYear) {
      // 10. January at 10:20
      return `${day}. ${mon[month]} at ${hours}:${minutes}`;
    }
    // 10. January 2017. at 10:20
    return `${day}. ${mon[month]} ${year}. at ${hours}:${minutes}`;
  };
  const getTimeAgo = dateParam => {
    if (!dateParam) {
      return null;
    }
    const date =
      typeof dateParam === 'object' ? dateParam : new Date(dateParam);
    const DAY_IN_MS = 86400000; // 24  60  60 * 1000
    const today = new Date();
    const yesterday = new Date(today - DAY_IN_MS);
    const seconds = Math.round((today - date) / 1000);
    const minutes = Math.round(seconds / 60);
    const isToday = today.toDateString() === date.toDateString();
    const isYesterday = yesterday.toDateString() === date.toDateString();
    const isThisYear = today.getFullYear() === date.getFullYear();
    if (seconds < 5) {
      return 'now';
    } else if (seconds < 60) {
      return `${seconds} seconds ago`;
    } else if (seconds < 90) {
      return 'about a minute ago';
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (isToday) {
      return getFormattedDate(date, 'Today'); // Today at 10:20
    } else if (isYesterday) {
      return getFormattedDate(date, 'Yesterday'); // Yesterday at 10:20
    } else if (isThisYear) {
      return getFormattedDate(date, false, true); // 10. January at 10:20
    }
    return getFormattedDate(date); // 10. January 2017. at 10:20
  };
  const [mon, setmon] = useState([
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ]);

  
  return (
    <>
    {item.map((i)=>{
      return(
        <View style={Componentstyles.MainReviewCardParent}>
        <View style={Componentstyles.Parent2main}>
        <View style={Componentstyles.View2Parent2Main}>
           <Image style={{width: 50,height: 50,borderWidth: 1,borderRadius: 50, }} source={{uri:i.user.image}}/>
           <View style={Componentstyles.TextNameMain}>
               <Text style={Componentstyles.MainTextView}>{i.user.username}</Text>
               <Rating
                       type='star'
                       ratingImage={require('../../Assets/png/Star.png')}

                       ratingCount={5}
                       startingValue={i.rating}
                       imageSize={14}
                      style={{ paddingVertical: 10 }}
                   />

               
           </View>
           
        </View>
        <View style={Componentstyles.ViewTime}>
               <Text style={Componentstyles.TextTime}>{getTimeAgo(i.created_at)}</Text>
           </View>
        </View>
        <View style={Componentstyles.ViewDetailsText}>
           <Text style={Componentstyles.TextReview}>{i.note}</Text>
        </View>
   </View>
      )
    })}
    
 
    
    </>
    )
}