import {   View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
 } from 'react-native'
import React from 'react'
import GlobalStyle from '../../GlobalStyle/GlobalStyle'
import { Colors } from '../../../Constants/Colors'
import TopheaderLeftIcon from '../../../Components/TopHeader/TopHeaderLeftIcon/TopheaderLeftIcon'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CommonButton from '../../../Components/CommonButton/CommonButton'


const PaymentCash = ({navigation}) => {
  const names = [
    {index: '1', name: 'Office'},
  
  ];
  const renderItem = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 5,
        backgroundColor: '#fff',
        marginBottom: wp(2),
        paddingHorizontal: wp(5),
        width: wp(90),
        height: hp(8),
        alignSelf: 'center',
        borderRadius:10,
        marginVertical: hp(5),
    
      }}>
      <View>
        <Text style={{fontFamily: 'Poppins-SemiBold',color:Colors.neutral52,fontSize: 14,}}>Pay By Cash</Text>
        <Text style={{fontFamily: 'Poppins-SemiBold',color:Colors.neutral53,fontSize: 10,}}>Complete the service payment here</Text>
      </View>
      <View>
        <Image
          style={{width: wp(12), height: wp(12)}}
          source={require('../../../Assets/png/15.png')}
          resizeMode="contain"
        />
      </View>
  
    </View>
  );

  return (
  <View style={GlobalStyle.RootContainer}>
    <TopheaderLeftIcon title={'Payment'} />
    <View >
        <FlatList 
          style={{height:hp(50)}}
          keyExtractor={key => {
            return key.index;
          }}
          data={names}
          renderItem={renderItem}
        />
        </View>
        <View style={{bottom: wp(26)}}>
          <CommonButton title={'Okay'} onPress={() => navigation.navigate('DrawerNavUser')} />
        </View>
        <View style={{bottom: wp(16)}}>
        <Image style={{width:wp(100),height:wp(80),}}
        source={require("../../../Assets/png/wallet.png")}
        resizeMode="contain"/>
</View>
      </View>
    
  );
};
const Styles = StyleSheet.create({
  textstyle: {
    fontSize: 10,
    color: 'black',
    borderRadius: 5,
  },
});

export default PaymentCash;