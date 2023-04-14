import { View, Text, FlatList, TouchableOpacity,Image } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

import React,{useEffect,useState,useCallback} from 'react'
import GlobalStyle from '../../../GlobalStyle/GlobalStyle'
import ChatListCard from '../../../../Components/ChatListCard/ChatListCard'
import database from '@react-native-firebase/database';
import { useSelector } from 'react-redux';
import Loader from '../../../AppScreens/Loader/Loader'
import { Value } from 'react-native-reanimated'

export default function ChatList({ navigation }) {

  const SenderUserInfo = useSelector(state => state?.USER)
  
  // console.log('userdataemail.cheak??,',SenderUserInfo)

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
    // console.log('listchat',List)


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
              console.log('child??',child)
              users.push(child.val());
            });
  
            setList(users.reverse());
            console.log('users list ', JSON.stringify(users));
  
          });
        setIsLoading(false)
      }
      catch (error) {
        setIsLoading(false)
      }
  
    }, []);
  
  


  

  return (
    <View style={GlobalStyle.RootContainer}>




      {/* <HeaderHome title={'Chat'} /> */}

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
            <ChatListCard  onPress={() =>navigation.navigate('Messages',{screenName: 'ChatList', item: item}) }
           x={item}
           />

          </View>

        )}
      />

    </View>
  )
}