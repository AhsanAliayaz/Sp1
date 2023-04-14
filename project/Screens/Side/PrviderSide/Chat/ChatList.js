import { View, Text, FlatList, TouchableOpacity,Image } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

import React,{useEffect,useState,useCallback} from 'react'
import GlobalStyle from '../../../GlobalStyle/GlobalStyle'
import { Colors } from '../../../../Constants/Colors'
import HeaderHome from '../../../../Components/TopHeader/HeaderHome'
import ChatListCard from '../../../../Components/ChatListCard/ChatListCard'
import { useDrawerStatus } from '@react-navigation/drawer'
import { useSelector } from 'react-redux'
import Loader from '../../../AppScreens/Loader/Loader'
import database from '@react-native-firebase/database';


export default function ChatList({ navigation }) {

  const SenderUserInfo = useSelector(state => state?.USER)
  
  // console.log('userdataemail.==============cheak??,',SenderUserInfo.userData.userdata.email)

  useEffect(() => {
  
    navigation.setOptions({
        title: 'Chat',
        headerRight: ()=> (
            <View>
                <Image style={{width: 40,height: 40,borderRadius: 50,borderWidth: 1,borderColor: '#FF766A', right: wp(4)}}  source={{uri:SenderUserInfo?.userData?.userdata?.image}}/>
            </View>
        )
    })
    
    }, [])
 

    const [isLoading, setIsLoading] = useState(false)
  
    const [List, setList] = useState();

    // console.log('list????ProviderSide???????',List)

    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
  
        
      setIsLoading(true)
      _usersList();
      
      
    });
    return unsubscribe
    }, []);

    const _usersList = useCallback(async () => {
  
      try {
        database()
          .ref('users/' + SenderUserInfo?.userData?.userdata?.email.replace(/[^a-zA-Z0-9 ]/g, ''))
          .on('value', dataSnapshot => {
            let users = [];
            dataSnapshot.forEach(child => {
              // console.log('child???======================',child)
              users.push(child.val());
            });
  
            setList(users.reverse());
            // console.log('users list ', JSON.stringify(users));
          
  
  
          });
        setIsLoading(false)
      }
      catch (error) {
        setIsLoading(false)
        console.log("------------",error)
      }
  
    }, []);

  return (
    <View style={GlobalStyle.RootContainer}>






      <FlatList
        data={List}

        ListEmptyComponent={() =>
          <View >
            <Loader visible={isLoading} />
          
          </View>
        }

        showsHorizontalScrollIndicator={false}
        renderItem={(item) => (
          <View>
            <ChatListCard  
            x={item}
            onPress={() =>navigation.navigate('Messages',{ screenName: 'ChatList', item: item}) }/>
          </View>

        )}
      />

    </View>
  )
}