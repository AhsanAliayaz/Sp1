import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from './project/Constants/Colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ProviderNav from './project/Screens/Side/PrviderSide/ProviderNav/ProviderNav';
import AuthNav from './project/ParentNavigation/AuthNav';
import store, { persistor } from './project/Redux/Store/Store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ParentNav from './project/ParentNavigation/ParentNav';
import messaging from '@react-native-firebase/messaging';
import { fcmToken_api } from './project/Api/CommonApi';
// import { addUser } from './project/Redux/Action/Index';
// import { useSelector, useDispatch } from 'react-redux';
import PushNotification from 'react-native-push-notification';



export default function App() {



  const userData = store.getState();

  // const apiToken = user?.token
  console.log('userApp> js', userData?.USER?.userData?.userdata?.api_token)
  const apiToken = userData?.USER?.userData?.userdata?.api_token

  const Loginstatus = userData.USER.isLoggedIn

  // console.log('is looged in check app.js???????/',apiToken)





  useEffect(() => {
    if (Loginstatus) {
      getToken()
    }
  }, [Loginstatus])



  const getToken = async () => {
    let fcmToken = await messaging().getToken();

    console.log("fcmmmm",fcmToken)
    const data = new FormData();
    data.append('fcm_token', fcmToken);

    console.log("-----=====",data)
    fcmToken_api(data,{auth: apiToken})
      .then(res => console.log('FCM_REASPONDE', res))
      .catch(error => console.log('Error Message FCm', error));
  };


  useEffect(() => {
    // getToken();
    getNotifications();
    Platform.OS === 'android' && _createChannel();
    const unsubscribe = messaging().onMessage(remoteMessage => {
     
    });
    return unsubscribe;
  }, []);

  const getNotifications = async () => {
    await messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });
    await messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log( 
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });
  };
  const _createChannel = () => {
    PushNotification.createChannel(
      {
        channelId: 'fcm_fallback_notification_channel', // (required)
        channelName: 'fcm_fallback_notification_channel', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: 4, // (optional) default: 4. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  };


  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>

        <ParentNav />

      </PersistGate>
    </Provider>
  )
}