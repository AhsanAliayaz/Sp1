import {   
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet, } from 'react-native'
import React, { useState, useEffect, Children } from 'react'
import GlobalStyle from '../../../GlobalStyle/GlobalStyle';
import { Colors } from '../../../../Constants/Colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import TopheaderLeftIcon from '../../../../Components/TopHeader/TopHeaderLeftIcon/TopheaderLeftIcon';
import SendChat from '../../../../Components/SendChat/SendChat';
import { useSelector } from 'react-redux';
import { senderMsg,recieverMsg } from '../../../../Assets/Lib/MessageUlits';
import database from '@react-native-firebase/database';

import moment from 'moment';



const Messages = ({navigation,route}) => {

const SenderUserInfo = useSelector(state => state?.USER)


const receiverUserData = route?.params?.ProviderInfo

console.log('SenderUserInfo?????',SenderUserInfo)

const chatListScreenData = route?.params?.item
const screenName = route?.params?.screenName

const [message, setMessage] = useState('');
const [messages, setMessages] = useState([]);
// const [fcmToken, setFcmToken] = useState(SenderUserInfo.userData.userdata.fcm_token);

const guestData = {
  Name:  screenName==='ChatList'?chatListScreenData.Name:`${receiverUserData.item.user.Name}`,
  email: screenName==='ChatList'?chatListScreenData.email: receiverUserData.email,
  Image:  screenName==='ChatList'?chatListScreenData.Image:receiverUserData.image,
};
const userData2 = {
  Name: `${SenderUserInfo.userData.userdata.username}`,
  email: SenderUserInfo.userData.userdata.email,
  Image: SenderUserInfo.userData.userdata.image,
};


useEffect(() => {
  _getMeesages();
  // messageNotificationHandler();
  // getToken()
  _updateChatCount();


}, []);
const _getMeesages = async () => {
  try {
    database()
      .ref('messeges')
      .child(userData2.email.replace(/[^a-zA-Z0-9 ]/g, ''))
      .child(guestData.email.replace(/[^a-zA-Z0-9 ]/g, ''))
      .on('value', dataSnapshot => {
        // console.log('dataSnapshot ... ', dataSnapshot.val())
        let msgs = [];
        dataSnapshot.forEach(child => {
          msgs.push({
            sendBy: child.val().messege.sender,
            recievedBy: child.val().messege.reciever,
            msg: child.val().messege.msg,
            date: child.val().messege.date,
          });
          return undefined;
        });
        setMessages(msgs.reverse());

        // console.log('msssssssssssssggggggggggsssssssss', msgs);
      });
  } catch (error) { }
};
const _chatUsers = async () => {
  try {
    // console.log('_chatUsers() ... ',)
    database()
      .ref('users/' + userData2.email.replace(/[^a-zA-Z0-9 ]/g, ''))
      .child(guestData.email.replace(/[^a-zA-Z0-9 ]/g, ''))
      .set({
        latestMessage: message,
        timestamp: database.ServerValue.TIMESTAMP,
        counter: 0,
        user: guestData,

      });

    database()
      .ref('users/' + guestData.email.replace(/[^a-zA-Z0-9 ]/g, ''))
      .child(userData2.email.replace(/[^a-zA-Z0-9 ]/g, ''))
      .once('value', snapshot => {
        const counts = snapshot?.val()?.counter;
       // console.log('counts ... main ', counts);
        // console.log('counts ... main laal ', snapshot.val());
        database()
          .ref('users/' + guestData.email.replace(/[^a-zA-Z0-9 ]/g, ''))
          .child(userData2.email.replace(/[^a-zA-Z0-9 ]/g, ''))
          .set({
            latestMessage: message,
            timestamp: database.ServerValue.TIMESTAMP,
            counter: counts ? counts + 1 : 1,
            user: userData2,
          });
        // console.log('first...........latestmessage',set  )
      });
  } catch (error) { console.log("error in crate chat", error) }
};

const handleSend = () => {
  setMessage('');
  console.log('handleSend() ... ', message);
  if (message) {
    // _handlePushNotification();
    // console.log('message is here', message);
    senderMsg(
      message,
      userData2.email.replace(/[^a-zA-Z0-9 ]/g, ''),
      guestData.email.replace(/[^a-zA-Z0-9 ]/g, ''),
      Date.now(),
      fcmToken
    );
    _chatUsers()
      .then(res => {
        console.log('no error found in send', res);
      })
      .catch(err => {
        console.log('error inside sender', err);
      });

    recieverMsg(
      message,
      userData2.email.replace(/[^a-zA-Z0-9 ]/g, ''),
      guestData.email.replace(/[^a-zA-Z0-9 ]/g, ''),
      Date.now(),
      fcmToken
    );
    _chatUsers()
      .then(res => {
        console.log('no error found in rev', res);
      })
      .catch(err => {
        console.log('error inside receiver', err);
      });
  }
};
const _updateChatCount = async () => {
  try {
    database()
      .ref(
        'users/' + userData2.email.replace(/[^a-zA-Z0-9 ]/g, ''),
      )
      .child(guestData.email.replace(/[^a-zA-Z0-9 ]/g, ''))
      .once('value', snapshot => {
        if (snapshot.val() != null) {
          database()
            .ref(
              'users/' +
              userData2.email.replace(/[^a-zA-Z0-9 ]/g, ''),
            )
            .child(guestData.email.replace(/[^a-zA-Z0-9 ]/g, ''))
            .update({
              counter: 0,
            });
        }
      });
  } catch (error) {}
};


return(
<View style={GlobalStyle.RootContainer}>
 
    <View style={{ flex: 1 }}>
      <FlatList
        inverted
        data={{}}
        contentContainerStyle={[GlobalStyle.paddingHorizontalToAllS, styles.contentContainer]}
        ItemSeparatorComponent={() => <View style={styles.itemseparator} />}
        renderItem={({ item }) => (
          // console.log('Chat Screen renderItem ... ', item),
           <>
          

            <View style={{
              // backgroundColor: item.sendBy === userData2.email.replace(/[^a-zA-Z0-9 ]/g, '') ? Colors.neutral53 : Colors.neutral55,
              borderRadius: 4,
              marginTop: 12,
              minWidth: wp(40),
              maxWidth: wp(80),
              // alignSelf: item.sendBy === userData2.email.replace(/[^a-zA-Z0-9 ]/g, '') ? 'flex-end' : 'flex-start',
              paddingHorizontal: 12, paddingVertical: 8
            }}>
              <Text style={[styles.chatScreenMessage, { color: item.sendBy === userData2.email.replace(/[^a-zA-Z0-9 ]/g, '') ? Colors.neutral50 : Colors.neutral53 }]}>{}</Text>
              <Text style={[styles.chatScreenMessageTime, { color: item.sendBy === userData2.email.replace(/[^a-zA-Z0-9 ]/g, '') ? Colors.neutral50 : Colors.neutral53 }]}>{}</Text>
            </View> 
           
         
          </>
        )}
      />
    </View>
    <SendChat
      value={message}
      onChangeText={(text) => setMessage(text)}
      // onPress={handleSend}
    />
  </View>
)      
}
    
const styles = StyleSheet.create({
  textstyle: {
    fontSize: 10,
    color: 'black',
    borderRadius: 5,
  },
  contentContainer: {
    // backgroundColor: 'red',
    paddingVertical: hp(1),
    flexGrow: 1,
    justifyContent: 'flex-end'
  },
  itemseparator: {
    height: hp(1),
    //  backgroundColor: 'green' 
  },
  chatScreenMessage: {
    color: 'white', fontFamily: 'poppins.regular',
    fontSize: 14
},
chatScreenMessageTime: {
  // marginTop: 4,
  color: 'white', textAlign: 'right',
  fontFamily: 'poppins.regular',
  fontSize: 10
},

});

export default Messages;