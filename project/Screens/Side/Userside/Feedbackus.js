import { View, Text, TextInput, ScrollView, Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import GlobalStyle from '../../GlobalStyle/GlobalStyle'
import { Colors } from '../../../Constants/Colors'
import TopHeaderImage from '../../../Components/TopHeader/TopHeaderImage'
import { Rating, AirbnbRating } from 'react-native-ratings';
import SideStyles from '../SideStyles/SideStyles'
import Button_Inital from '../../../Components/ButtonInital/Button_Inital'
import { useSelector } from 'react-redux'
import Loader from '../../AppScreens/Loader/Loader'
import { createReview_api } from '../../../Api/UserApi'
import AndroidToast from '../../AppScreens/AndroidToast/AndroidToast'

export default function Feedbackus({navigation,route}) {
  
  const userdata = useSelector(state => state?.USER)

  console.log('UserDataCheck ReduxSchedule Screens', userdata.userData.userdata.api_token)


  const { item } = route.params
  

const providerid = item.item.providerID
// console.log('item?????',providerid)
  const [isLoading, setIsLoading] = useState(false)

  const [rating, setRating] = useState('')
  const [description, setDescription] = useState('')
  const [descriptionError, setDescriptionError] = useState('')
  // console.log('>>>rating',rating)

  const emptyFeildHandler = () => {
    setDescription('')
    setRating('')
}


const submitReviewHandler = () => {
  if (validator()) {
      setIsLoading(true)
      const sData = new FormData();
      sData.append('note', description)
      sData.append('rating', rating)
      sData.append('provider_id', providerid)
      // console.log('sData>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', sData)
      createReview_api({auth:userdata.userData.userdata.api_token},sData)
          .then(res => {
              console.log('Then Block from FeedBack.js submitReviewHandler() ... ', res)
              emptyFeildHandler()
              setIsLoading(false)
              AndroidToast(res?.message)
              navigation.goBack()
          })
          .catch(err => {
              console.log('Catch Block from FeedBack.js submitReviewHandler() ... ', err.response)
              setIsLoading(false)
              AndroidToast('Review not submitted')
          })
  }
}

const validator = () => {
  // console.log('validating')
  if (!description) {
      setDescriptionError('Please enter description')
      return false
  }
  else if (!rating) {
      AndroidToast('Please give rating')
      return false
  }
  else return true
}
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={GlobalStyle.RootContainer}>


        <TopHeaderImage imagePath={{uri:userdata.userData.userdata.image}} title={'Feedback us'} />

        <View style={SideStyles.ImageandTextProFeedback}>
          <Image resizeMode='contain' style={{ width: 60, height: 60, borderRadius: 40, borderWidth: 2, borderColor: Colors.neutral51 }} source={{uri: item.item.providerImage}} />
          <Text style={SideStyles.textName}>{item.item.providerName}</Text>
          <Text style={SideStyles.textService}>{item.item.providerJob}</Text>
        </View>
        <View style={SideStyles.TextDetaisFeed}>
          <Text style={SideStyles.TetxtDetailsMainFeed}>After using this app for a bit now,
            how would you rate your
            experience</Text>

        </View>
        <View style={SideStyles.ViewRatring}>
          <Rating
            type='star'
            ratingImage={require('../../../Assets/png/Star.png')}
          readonly={false}
            ratingCount={5}
            imageSize={50}
            startingValue={0}
            onFinishRating={(rating) => setRating(rating)}
            style={{ paddingVertical: 10 }}
          />

        </View>

        <View style={SideStyles.TextDetaisFeedNootes}>
          <Text style={SideStyles.TetxtDetailsMainFeedNootes}>Dou you have any thoughts you'd like to
            share?</Text>

        </View>
        <View style={[SideStyles.ContainerdiscraptionFeedus,{
          borderWidth: descriptionError ? 1 : 0,
          borderColor: descriptionError ? 'red' : null 
        }]}>
          <TextInput 
          value={description}
          onChangeText={(text) => { setDescription(text), setDescriptionError('') }}
          numberOfLines={7} 
          multiline={true} 
          style={SideStyles.TextInput} 
          placeholder='Write Here...' 
          placeholderTextColor={Colors.neutral53} />

        </View>

        <View style={SideStyles.chatandcallus}>
                            <Button_Inital
                            txtStyle={{
                                color:'white'
                            }}
                            cStyle={{
                                backgroundColor:Colors.neutral51,
                                borderWidth:1
                            }} title={'Send'} onPress={() => submitReviewHandler()} />
                            <Button_Inital 
                            cStyle={{
                                backgroundColor: null,
                                borderWidth:1
                            }}
                            txtStyle={{
                                color:Colors.neutral51,
                            }}
                            title={'Cancel'} onPress={() => navigation.navigate('Completed')} />
                        </View>
                        <Loader visible={isLoading} />
      </View>
    </ScrollView>

  )
}