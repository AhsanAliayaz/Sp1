import { View, Text, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import GlobalStyle from '../../GlobalStyle/GlobalStyle'
import TopheaderLeftIcon from '../../../Components/TopHeader/TopHeaderLeftIcon/TopheaderLeftIcon'
import SideStyles from '../SideStyles/SideStyles'
import { Data1 } from '../Userside/DommyData.js/DummyData'
import Componentstyles from '../../../Components/componentsStyles/Componentstyles'
import ServicesCardMain from '../../../Components/ServicePopularCards/ServicesCardMain'
import { GetServerNameApi } from '../../../Api/UserApi'
import { useState } from 'react'
import Loader from '../../AppScreens/Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'


export default function HouseKeeping({ navigation, route }) {


  const userdata = useSelector(state => state?.USER)

  // console.log('userData>>Redux data>>Check >>>>SingIn>>>', userdata.userData.userdata.api_token)


  const [isLoading, setIsLoading] = useState(false)
  const { item } = route.params

  const a = item.item.service_name
  const b = item.item.service_icon

  const GetProviderServerNameHnadler = (rr,b) => {

    // console.log("......",b)


    setIsLoading(true)
    const fromData = new FormData();
    fromData.append('service_name',rr);

    GetServerNameApi(fromData, { auth: userdata.userData.userdata.api_token })
      .then(res => {
        setIsLoading(false)
        if (res.status === "success") {
          // AndroidToast('Payment Successfully Donated')
          navigation.navigate('ServiceProviderList',{
            Name:b,
            Sname: res,
            subserviveName: rr})

        }

      })
      .catch(e => {
        setIsLoading(false)

      })

  }

  return (
    <View style={GlobalStyle.RootContainer}>
      <TopheaderLeftIcon title={item.item.service_name} onpress={() => navigation.goBack()} />
      <View style={SideStyles.ViewTextservicesKeeping}>
        <Text style={SideStyles.TextMain}>Which service do you want today?</Text>
      </View>
      <View style={SideStyles.MainFlatistView}>

        <FlatList
          data={item.item.subservice}

          showsHorizontalScrollIndicator={false}
          renderItem={(item) => {

            console.log("000000",item)
            return (
              <TouchableOpacity onPress={() => GetProviderServerNameHnadler(item.item.subservice_name,a)} activeOpacity={0.7} style={Componentstyles.ScardMainParent}>
                <View style={Componentstyles.FirstMainContainer}>

                  <Text style={Componentstyles.TextTitle}>{item.item.subservice_name}</Text>
                  <Text style={Componentstyles.TextTitle2}>{a}'s work</Text>

                </View>

                <ImageBackground source={require('../../../Assets/png/50.png')} style={Componentstyles.SecondContainer}>

                  <Image style={{ width: 35, height: 35, }} source={{ uri: b }} />
                </ImageBackground>
              </TouchableOpacity>
            )
          }




          }
        />

      </View>
      <View style={SideStyles.ViewBottomImage}>
        <Image style={{ width: 350, height: 240, }} source={require('../../../Assets/png/19.png')} />
      </View>
      <Loader visible={isLoading} />
    </View>
  )
}