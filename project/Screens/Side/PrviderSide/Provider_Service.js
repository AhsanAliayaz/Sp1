import { View, Text, StyleSheet, Image, FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Colors } from '../../../Constants/Colors'
import TopHeaderImage2 from '../../../Components/TopHeader/TopHeaderLeftIcon/TopHeaderImage2'
import GlobalStyle from '../../GlobalStyle/GlobalStyle'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useSelector,useDispatch } from 'react-redux'
import Componentstyles from '../../../Components/componentsStyles/Componentstyles'

import Loader from '../../AppScreens/Loader/Loader'
import AndroidToast from '../../AppScreens/AndroidToast/AndroidToast'
import CommonButton from '../../../Components/CommonButton/CommonButton'
import AuthStyles from '../../AppScreens/authScreens/AuthStyles/AuthStyles'
import { SaveServices_api } from '../../../Api/UserApi'
import { Get_Subservices_api } from '../../../Api/UserApi'
import { addUser } from '../../../Redux/Action/Index'


export default function Provider_Service({ navigation }) {
 
  const dispatch = useDispatch()
 
  const userdata = useSelector(state => state?.USER)

  // variabler bna raha hn

  const job = userdata?.userData?.userdata?.job

  console.log('userdata provider Job', userdata)

  const Saveservices_Handler = () => {

    setIsLoading(true)
    const data = new FormData();

    wholeItem.forEach((item) => {
      // console.log("=====================",item)
        data.append('service[]', item.subservice_name)
      
    })
    wholeItem.forEach((item) => {
      // console.log('item?????????', item)
      
        data.append('price[]', item.value)

    })
    // console.log('data>>>>>>>',data)
    SaveServices_api(data, {auth:userdata.userData.userdata.api_token})
      .then(res => {
        dispatch(addUser(res))
        setIsLoading(false)
        navigation.navigate('DrawerNavProvider')
        AndroidToast('Services Added SuccessFully')

      })
      .catch(err => {

        console.log('from SaveApi catch Block ', err)

        setIsLoading(false)
      })

  }


  // const [tick, settick] = useState([])
  const [wholeItem, setwholeItem] = useState([])
  console.log('whole item itas state???', wholeItem)

  const [data, setData] = useState([])
 
  const [isLoading, setIsLoading] = useState(false)



  const [price, setPrice] = useState([])
 





 
  

  const addtocheckItem = (item) => {

    // console.log("ooopopoopopo====",item)
    if (wholeItem.length > 0) {
      let y = wholeItem.findIndex(it => it.id == item.id)
      // console.log('yyy22222', y)
      if (y != -1) {
        let arr = [...wholeItem]
        arr.splice(y, 1)
        setwholeItem(arr)
      }
      else {
        setwholeItem([...wholeItem, item])
      }
    }
    else {
      setwholeItem([...wholeItem, item])
    }
  }
  const checkid2 = (item) => {
    // console.log('item?????',item)
    if (wholeItem.length > 0) {
      let y = wholeItem.findIndex(it => it.id == item.id)
      if (y != -1) {
        return true
      }
      else {
        return false
      }
    }
    else {
      return false
    }
  }


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {

      Get_subservices()

    });

    return unsubscribe;
  }, [navigation]);

  const Get_subservices = () => {

    setIsLoading(true)
    const sData = new FormData();
    sData.append('service_name', job)
    console.log('sData>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', sData)
    Get_Subservices_api(sData)
      .then(res => {
        console.log('Then Block from services.js submitReviewHandler() ... ', res)
        setIsLoading(false)
        setData(res)
      
      })
      .catch(err => {
        console.log('Catch Block from services.js submitReviewHandler() ... ', err.response.data)
        setIsLoading(false)

      })

  }


  const valuesave = (tx, id) => {

    // console.log("ooopopoopopo====",item)
    if (wholeItem.length > 0) {
      let y = wholeItem.findIndex(it => it.id == id)
      // console.log('yyy22222', y)
      if (y != -1) {
        let arr = [...wholeItem]
        arr[y]["value"] = tx
        setwholeItem(arr)
      }
      else {

        alert("please slect service")
      }
    }
    else {
      alert("please slect service")
    }
  }
  const viewvaluw = (id) => {
    // console.log('item?????',item)
    if (wholeItem.length > 0) {
      let y = wholeItem.findIndex(it => it.id == id)
      if (y != -1) {
        return wholeItem[y]?.value
      }
      else {
        return wholeItem[y]?.value
      }
    }
    // else {
    //   return wholeItem[y]?.value
    // }
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={GlobalStyle.RootContainer}>
        <TopHeaderImage2 title={userdata?.userData?.userdata?.job} />

        <View style={styles.prentViewImage}>
          <View style={styles.ViewImage}>
            <Image style={{ width: wp(30), height: wp(30), borderWidth: 1.5, borderColor: '#5DC8F6', borderRadius: 10, }} source={{ uri: userdata?.userData?.userdata?.image }} />
          </View>
          <Text style={styles.Textservice}>{userdata?.userData?.userdata?.job}</Text>
        </View>

        <View style={styles.ParentTextPleaseSelect_Services}>
          <Text style={styles.TextSelectservices}>Please Select Services</Text>
        </View>

        <View>
          <FlatList
            data={data.data}
            showsHorizontalScrollIndicator={false}
            renderItem={(item) => {
              // console.log("checkkk",item)
              return (
                <TouchableOpacity style={{ marginBottom: hp(1) }}>
                  {/* <Provider_Ser_Card info={item} Servicename={Servicename} /> */}

                  <TouchableOpacity onPress={() => {
                    addtocheckItem(item.item)
                    // addtochecklist(item.item.id)
                    // addtocheckProId(item.item.provider_id)
                    console.log('....?????', item.item)
                  }} activeOpacity={0.7} style={Componentstyles.ScardMainParentProvider}>
                    <View style={Componentstyles.FirstMainContainer}>

                      <Text style={Componentstyles.TextTitle}>{item.item.subservice_name}</Text>
                      <Text style={Componentstyles.TextTitle2}>{job}'s Work</Text>

                    </View>
                    {checkid2(item.item) ?
                      <Image resizeMode='contain' style={{ width: 30, height: 30, }} source={require('../../../Assets/png/tic.png')} />
                      : null}

                    <View style={Componentstyles.SecondContainerserProCardproList}>
                      <TextInput
                        value={viewvaluw(item.id)}
                        onChangeText={(txt) => { valuesave(txt, item.item.id) }}

                        style={styles.TextInpout} placeholder='Rs' placeholderTextColor={'black'} keyboardType={'numeric'} />
                    </View>
                  </TouchableOpacity>
                </TouchableOpacity>

              )
            }
            }
          />

        </View>
        <View style={AuthStyles.Signupbuttonview}>
          <CommonButton title='Save' onPress={() => Saveservices_Handler()} />
        </View>
        <Loader visible={isLoading} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  prentViewImage: {
    width: wp(90),
    height: wp(40),
    // backgroundColor:'pink',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: wp(1)
  },
  ViewImage: {
    width: wp(30),
    height: wp(30),
    // backgroundColor:'brown',
    // borderWidth: 1.5,
    // borderColor: '#5DC8F6',
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: wp(4)
  },
  Textservice: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#132E47',
    top: wp(3),
  },
  ParentTextPleaseSelect_Services: {
    width: wp(90),
    alignSelf: 'center',
    marginVertical: wp(6),
  },
  TextSelectservices: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#132E47',
  },
  TextInpout: {
    width: wp(20),
    height: wp(10)
    // top: wp(2)
  },

})