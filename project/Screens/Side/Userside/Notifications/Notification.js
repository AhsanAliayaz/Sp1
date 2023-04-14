import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import HeaderHome from '../../../../Components/TopHeader/HeaderHome'
import { Colors } from '../../../../Constants/Colors'
import SideStyles from '../../SideStyles/SideStyles'
import GlobalStyle from '../../../GlobalStyle/GlobalStyle'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import NotificationCard from '../../../../Components/NotificationCard/NotificationCard'
import Loader from '../../../AppScreens/Loader/Loader'
import { GetNotifications } from '../../../../Api/UserApi'
import { useSelector } from 'react-redux'


export default function Notification({navigation}) {

    const userdata = useSelector(state => state?.USER)


const [getNotifi,setGetNotifi] = useState([])
// console.log('getNotifici',getNotifi)

const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {

            Getnotification_handler()
          
        });
    
        return unsubscribe;
      }, [navigation]);



    const Getnotification_handler = async () => {
        setIsLoading(true)
        await GetNotifications({auth:userdata.userData.userdata.api_token})
          .then(res => {
            // console.log("Home screen all services  Api", res)
            setGetNotifi(res)
            setIsLoading(false)
        
          })
          .catch(err => {
            console.log('Error from all Services Api catch....', err)
            setIsLoading(false)
            
          })
      }

    useEffect(() => {
  
        navigation.setOptions({
            title: 'Notifications',
            headerRight: ()=> (
                <View>
                    <Image style={{width: 40,height: 40,borderRadius: 50,borderWidth: 1,borderColor: '#FF766A', right: wp(4)}}  source={{uri:userdata.userData.userdata.image}}/>
                </View>
            )
        })
        
        }, [])


    return (
        <View style={GlobalStyle.RootContainer}>
          
            <View style={{ width: wp(90), alignSelf: 'center', marginVertical: hp(2) }}>
            
            

            <FlatList
                data={getNotifi.data}



                showsHorizontalScrollIndicator={false}
                renderItem={(item) => (
                    <View>
                        <NotificationCard item={item} />
                    </View>

                )}
            />
            </View>
           

            

<Loader visible={isLoading} />
        
        </View>
    )
}