import database from '@react-native-firebase/database';

export const senderMsg = async (msgValue, currentUserId, guestUserId, date,fcmToken) => {
  // console.log(
  //   'inside sender function',
  //   msgValue,
  //   currentUserId,
  //   guestUserId,
  //   date,
  //   fcmToken
  // );
  try {
    return await database()
      .ref('messeges/' + currentUserId)
      .child(guestUserId)
      .push({
        messege: {
          sender: currentUserId,
          reciever: guestUserId,
          msg: msgValue,
          date,
          fcmToken
        },
      })
  } catch (error) {
    console.log('error in send message', error);
    return error;
  }
};

export const recieverMsg = async (
  msgValue,
  currentUserId,
  guestUserId,
  date,
  fcmToken
) => {

  try {
    return await database()
      .ref('messeges/' + guestUserId)
      .child(currentUserId)
      .push({
        messege: {
          sender: currentUserId,
          reciever: guestUserId,
          msg: msgValue,
          date,
          fcmToken
        },
      });
  } catch (error) {
    console.log('error in reciving message ', error);
    return error;
  }
};