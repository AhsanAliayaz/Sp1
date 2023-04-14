import { View, Text,Image,ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import GlobalStyle from '../../../GlobalStyle/GlobalStyle'
import { Colors } from '../../../../Constants/Colors'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function TermAndCondition({navigation}) {

    useEffect(() => {
  
        navigation.setOptions({
            title: 'Term&Conditions',
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
       <View style={{width: wp(90), alignSelf: 'center', marginVertical: hp(7)}}>
  <Text style={{fontFamily: 'Poppins-Medium',fontSize: 13,color: Colors.neutral53}}>
  On sait depuis longtemps que travailler avec du texte 
lisible et contenant du sens est source de distractions, 
et empêche de se concentrer sur la mise en page elle 
même. L'avantage du Lorem Ipsum sur un texte 
générique comme 'Du texte. Du texte. Du texte.' est 
qu'il possède une distribution de lettres plus ou 
moins normale, et en tout cas comparable avec celle
 du français standard. De nombreuses suites 
logicielles de mise en page ou éditeurs de sites Web
 ont fait du Lorem Ipsum leur faux texte par défaut, et 
une recherche pour 'Lorem Ipsum' vous conduira vers
 de nombreux sites qui n'en sont encore qu'à leur 
phase de construction. Plusieurs versions sont 
apparues avec le temps, parfois par accident, 
souvent intentionnellement (histoire d'y rajouter 
de petits clins d'oeil, voire des phrases
 embarassantes).

  </Text>
       </View>
    </View>
    </ScrollView>

  )
}