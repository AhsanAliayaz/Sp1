import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React,{useEffect,useState} from 'react'
import GlobalStyle from '../../GlobalStyle/GlobalStyle'
import SideStyles from '../SideStyles/SideStyles'
import TopheaderLeftIcon from '../../../Components/TopHeader/TopHeaderLeftIcon/TopheaderLeftIcon'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import CustomerReviewCard from '../../../Components/CustomerReviewCard/CustomerReviewCard'
import Loader from '../../AppScreens/Loader/Loader'
import { Get_Review_api } from '../../../Api/UserApi'
import { useSelector } from 'react-redux'
import Componentstyles from '../../../Components/componentsStyles/Componentstyles'
import { Rating, AirbnbRating } from 'react-native-ratings';


export default function ReviewScreen({navigation,route}) {



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




  const  ProviderId = route?.params?.ProviderId;
  // console.log('providerId>>>.?????',ProviderId)

  const userdata = useSelector(state => state?.USER)


  const [isLoading, setIsLoading] = useState(false)
  

  const [getReview,setGetreview] = useState([])
  
  //  const GetReview1 = getReview.all_reviews
  //  console.log('GetReview1111??????',getReview)
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {

      submitReviewHandler()
      
    });

    return unsubscribe;
  }, [navigation]);


  const submitReviewHandler = () => {

        setIsLoading(true)
        const sData = new FormData();
        sData.append('provider_id', ProviderId)
        // console.log('sData>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', sData)
        Get_Review_api({auth:userdata.userData.userdata.api_token},sData)
            .then(res => {
                console.log('Then Block from Review.js submitReviewHandler() ... ', res)
         setIsLoading(false)
         setGetreview(res)
            })
            .catch(err => {
                console.log('Catch Block from FeedBack.js submitReviewHandler() ... ', err.response)
                setIsLoading(false)
              
            })
  
  }


  


  return (
    <View style={GlobalStyle.RootContainer}>


      <FlatList


        showsVerticalScrollIndicator={false}
        data={[1]}

        renderItem={() => (
          <View>

            <TopheaderLeftIcon title={'Reviews'} onpress={() => navigation.goBack()} />
            
            <View style={SideStyles.ViewMainRatingsParent}>
              <View style={SideStyles.ViewMainRatingsParent2}>
                <View>
                  <Text style={SideStyles.TextMainRatingsParent2}>{getReview.average_rating}</Text>
                  <View style={SideStyles.viewfoter}>
                    <Image style={{ width: 25, height: 25, }} source={require('../../../Assets/png/person.png')} />
                    <Text style={SideStyles.Textnumbr}>{getReview.total_user}</Text>
                  </View>
                </View>
                {/* <Image resizeMode='contain' style={{ width: 210, height: 210, }} source={require('../../../Assets/png/Chart.png')} /> */}

              </View>
            </View>

          
            <View>
            <FlatList
                                data={getReview.all_reviews}
                                

                                showsHorizontalScrollIndicator={false}
                                renderItem={({item}) => {
                                  // console.log('item', item)
                                  return(
                                  <View style={Componentstyles.MainReviewCardParent}>
                                  <View style={Componentstyles.Parent2main}>
                                  <View style={Componentstyles.View2Parent2Main}>
                                     <Image style={{width: 50,height: 50,borderWidth: 1,borderRadius: 50, }} source={{uri:item.UserImage}}/>
                                     <View style={Componentstyles.TextNameMain}>
                                         <Text style={Componentstyles.MainTextView}>{item.UserName}</Text>
                                         <Rating
                                                 type='star'
                                                 ratingImage={require('../../../Assets/png/Star.png')}
                          
                                                 ratingCount={5}
                                                 startingValue={item.rating}
                                                 imageSize={14}
                                                style={{ paddingVertical: 10 }}
                                             />
                          
                                         
                                     </View>
                                     
                                  </View>
                                  <View style={Componentstyles.ViewTime}>
                                         <Text style={Componentstyles.TextTime}>{item.date}</Text>
                                     </View>
                                  </View>
                                  <View style={Componentstyles.ViewDetailsText}>
                                     <Text style={Componentstyles.TextReview}>{item.note}</Text>
                                  </View>
                             </View>

                                )
}}
                            />

            </View>
            <Loader visible={isLoading} />
            </View>

)} />

          </View>
        )
        }