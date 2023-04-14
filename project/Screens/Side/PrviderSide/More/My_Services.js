// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   TextInput
// } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
//   listenOrientationChange,
// } from 'react-native-responsive-screen';
// import { Colors } from '../../../../Constants/Colors';
// import GlobalStyle from '../../../GlobalStyle/GlobalStyle';
// import CommonButton from '../../../../Components/CommonButton/CommonButton';
// import { useSelector } from 'react-redux';
// import { ScrollView } from 'react-native-gesture-handler';
// import AuthStyles from '../../../AppScreens/authScreens/AuthStyles/AuthStyles';
// import Loader from '../../../AppScreens/Loader/Loader';
// import Componentstyles from '../../../../Components/componentsStyles/Componentstyles';
// import { Get_Subservices_api } from '../../../../Api/UserApi';



// const MyServices = ({ navigation }) => {

//   const userdata = useSelector(state => state?.USER)
//   // console.log('userdata,more screen',userdata.userData.userdata.subservices)
//   const [isLoading, setIsLoading] = useState(false)
//  const job= userdata.userData.userdata.job
//   const [wholeItem, setwholeItem] = useState([userdata.userData.userdata.subservices])
//   // console.log('whole item itas================== state???', wholeItem)

//   // const [data, setData] = useState([])
 

//   const addtocheckItem = (item) => {

//     // console.log("ooopopoopopo====",item)
//     if (wholeItem.length > 0) {
//       let y = wholeItem.findIndex(it => it.id == item.id)
//       // console.log('yyy22222', y)
//       if (y != -1) {
//         let arr = [...wholeItem]
//         arr.splice(y, 1)
//         setwholeItem(arr)
//       }
//       else {
//         setwholeItem([...wholeItem, item])
//       }
//     }
//     else {
//       setwholeItem([...wholeItem, item])
//     }
//   }
//   const checkid2 = (item) => {
//     console.log('wholeitem?????',item)
//     if (wholeItem.length > 0) {

//       let y = wholeItem.findIndex(it => it.service== item.subservice_name)
//       if (y != -1) {
//         return true
//       }
//       else {
//         return false
//       }
//     }
//     else {
//       return false
//     }
//   }



//   const valuesave = (tx, id) => {

//     // console.log("ooopopoopopo====",item)
//     if (wholeItem.length > 0) {
//       let y = wholeItem.findIndex(it => it.id == id)
//       // console.log('yyy22222', y)
//       if (y != -1) {
//         let arr = [...wholeItem]
//         arr[y]["price"] = tx
//         setwholeItem(arr)
//       }
//       else {

//         alert("please slect service")
//       }
//     }
//     else {
//       alert("please slect service")
//     }
//   }
//   const viewvaluw = (id) => {
//     // console.log('item?????',item)
//     if (wholeItem.length > 0) {
//       let y = wholeItem.findIndex(it => it.service == id)
//       if (y != -1) {
//         return wholeItem[y]?.price
//       }
//       else {
//         return wholeItem[y]?.price
//       }
//     }
//     // else {
//     //   return wholeItem[y]?.value
//     // }
//   }

// const [data,setData] = useState([])

//   useEffect(() => {
//     const unsubscribe = navigation.addListener('focus', () => {

//       Get_subservices()

//     });

//     return unsubscribe;
//   }, [navigation]);

//   const Get_subservices = () => {

//     setIsLoading(true)
//     const sData = new FormData();
//     sData.append('service_name', job)
//     console.log('sData>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', sData)
//     Get_Subservices_api(sData)
//       .then(res => {
//         console.log('Then Block from services.js submitReviewHandler() ... ', res)
//         setIsLoading(false)
//         setData(res)
      
//       })
//       .catch(err => {
//         console.log('Catch Block from services.js submitReviewHandler() ... ', err.response.data)
//         setIsLoading(false)

//       })

//   }


// return(
//   <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//       <View style={GlobalStyle.RootContainer}>

//         <View style={styles.prentViewImage}>
//           <View style={styles.ViewImage}>
         
//             <Image style={{ width: wp(15), height: wp(15), borderWidth: 1.5, borderColor: '#5DC8F6', borderRadius: 10, }} source={{ uri: userdata?.userData?.userdata?.image }} />

//             <View style={{width: wp(50),marginLeft: wp(3)}}>
//             <Text style={styles.Textservice}>{userdata?.userData?.userdata?.username}</Text>
//             <Text style={styles.Textservice1}>{userdata?.userData?.userdata?.job}</Text>
//             </View>

//           </View>
          
//         </View>

//         <View style={styles.ParentTextPleaseSelect_Services}>
//           <Text style={styles.TextSelectservices}>Please Update Services</Text>
//         </View>

//         <View>
//           <FlatList
//             data={data.data}
//             showsHorizontalScrollIndicator={false}
//             renderItem={(item) => {
//               // console.log("checkkk",item)
//               return (
//                 <TouchableOpacity style={{ marginBottom: hp(1) }}>
//                   {/* <Provider_Ser_Card info={item} Servicename={Servicename} /> */}

//                   <TouchableOpacity onPress={() => {
//                     addtocheckItem(item.item)
//                     // addtochecklist(item.item.id)
//                     // addtocheckProId(item.item.provider_id)
//                     console.log('....?????', item.item)
//                   }} activeOpacity={0.7} style={Componentstyles.ScardMainParentProvider}>
//                     <View style={Componentstyles.FirstMainContainer}>

//                       <Text style={Componentstyles.TextTitle}>{item.item.subservice_name}</Text>
//                       <Text style={Componentstyles.TextTitle2}>{job}'s Work</Text>

//                     </View>
//                     {checkid2(item.item) ?
//                       <Image resizeMode='contain' style={{ width: 30, height: 30, }} source={require('../../../../Assets/png/tic.png')} />
//                       : null}

//                     <View style={Componentstyles.SecondContainerserProCardproList}>
//                       <TextInput
//                         value={viewvaluw(item.item.subservice_name)}
//                         onChangeText={(txt) => { valuesave(txt, item.item.id) }}

//                         style={styles.TextInpout} placeholder='Rs' placeholderTextColor={'black'} keyboardType={'numeric'} />
//                     </View>
//                   </TouchableOpacity>
//                 </TouchableOpacity>

//               )
//             }
//             }
//           />

//         </View>
//         <View style={AuthStyles.Signupbuttonview}>
//           <CommonButton title='update' onPress={() => Saveservices_Handler()} />
//         </View>
//         <Loader visible={isLoading} />
//       </View>
//     </ScrollView>
//   );
// };
// const styles = StyleSheet.create({
//   prentViewImage: {
//     width: wp(90),
//     height: wp(20),
  
//     alignSelf: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     // marginTop: wp(1),
//     elevation:5,
//     borderRadius: 10,
//     marginVertical: wp(3),
//   },
//   ViewImage: {
//     width: wp(80),
//     height: wp(15),
//     // backgroundColor:'brown',
//     borderRadius: 10,
//     alignSelf: 'center',
//     // marginTop: wp(4)
//     flexDirection: 'row',

//   },
//   Textservice: {
//     fontFamily: 'Poppins-SemiBold',
//     fontSize: 16,
//     color: '#132E47',
  
//   },
//   ParentTextPleaseSelect_Services: {
//     width: wp(90),
//     alignSelf: 'center',
//     marginVertical: wp(6),
//   },
//   TextSelectservices: {
//     fontFamily: 'Poppins-Medium',
//     fontSize: 14,
//     color: '#132E47',
//   },
//   TextInpout: {
//     width: wp(20),
//     height: wp(10)
//     // top: wp(2)
//   },
//   Textservice1: {
//     fontFamily: 'Poppins-Medium',
//     fontSize: 14,
//     color: '#132E47',
   
//   },
// });

// export default MyServices;