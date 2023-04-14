import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import HeaderHome from '../../../Components/TopHeader/HeaderHome'
import GlobalStyle from '../../GlobalStyle/GlobalStyle'
import SideStyles from '../SideStyles/SideStyles'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Searchbar from '../../../Components/Searchbar/Searchbar'
import PopularSCard from '../../../Components/ServicePopularCards/PopularSCard'
import RecommandedSerCard from '../../../Components/RecommmandedServices/RecommandedserCard'
// import Carousel from 'react-native-snap-carousel';
import Carousel from 'react-native-reanimated-carousel';
import { ViewAll_Services } from '../../../Api/UserApi'
import Allservice from '../../../Components/Allservice'
import Loader from '../../AppScreens/Loader/Loader'
import { useSelector } from 'react-redux'
import { Popular_Services } from '../../../Api/UserApi'






export default function Home({ navigation }) {


    const userdata = useSelector(state => state?.USER)

    // console.log('HomeScreen Redux data', userdata)


    const [isLoading, setIsLoading] = useState(false)
    const [AllServices,setAllServices] = useState ([])

 

    const [PopularServices,setPopularServices] = useState ([])

    // console.log('All  services check',PopularServices.recommended)
    useEffect(() => {

        navigation.setOptions({
            title: 'Service Home',
            headerRight: () => (
                <View>
                    <Image style={{ width: 40, height: 40, borderRadius: 50, borderWidth: 1, borderColor: '#FF766A', right: wp(4) }} source={{uri:userdata.userData.userdata.image}} />
                </View>
            ),

        })

    }, [])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {

            ViewAllServicesHandler()
            Popular_Services_Handler()
          
        });
    
        return unsubscribe;
      }, [navigation]);



      const ViewAllServicesHandler = async () => {
        setIsLoading(true)
        await ViewAll_Services()
          .then(res => {
            // console.log("Home screen all services  Api", res)
            setAllServices(res.data)
            setIsLoading(false)
        
          })
          .catch(err => {
            console.log('Error from all Services Api catch....', err.response)
            setIsLoading(false)
            
          })
      }

      const Popular_Services_Handler = async () => {
        setIsLoading(true)
        await Popular_Services({auth:userdata.userData.userdata.api_token})
          .then(res => {
            // console.log("Home screen all services  Api", res)
            setPopularServices(res)
            setIsLoading(false)
        
          })
          .catch(err => {
            console.log('Error from all Services Api catch....', err.response)
            setIsLoading(false)
            
          })
      }
    

    const Images = {
        image1: require('../../../Assets/png/Hkeeeping.png'),
        image2: require('../../../Assets/png/48.png'),
        image3: require('../../../Assets/png/Hkeeping1.png')
    }
    const [images, SetImages] = useState([

        { id: '1', image: Images.image1, name: 'House Keepimg' },
        { id: '2', image: Images.image2, name: 'Electrician' },
        { id: '3', image: Images.image3, name: 'House Cleaning' },
    ])


    // console.log('first,images>>', images)




    return (
        <View style={GlobalStyle.RootContainer}>

            <FlatList


                showsVerticalScrollIndicator={false}
                data={[1]}

                renderItem={() => (
                    <View>
                        {/* <HeaderHome /> */}
                        <View style={SideStyles.SwiperFlatlist}>
                            {/* <SwiperFlatList
                                autoplay
                                autoplayDelay={2}
                                data={images}
                                autoplayLoop
                                index={2}
                                showPagination
                                paginationActiveColor='#37A068'
                                paginationDefaultColor="#8092A7"
                                paginationStyleItem={{ width: 7, height: 7, }}
                                renderItem={({ item, index }) => (
                                    <View style={{ width: 360, alignItems: 'center', justifyContent: 'center', height: 200, borderRadius: 10, }}>
                                        <Image style={{ width: 320, height: 185, borderRadius: 10, }} source={item.image} />

                                    </View>


                                )} /> */}

                            {/* <Carousel
                                // ref={}
                                data={images}
                                renderItem={({item,index}) => {
                                    return(
                                        <View>
                                            <Text>how r u</Text>
                                        </View>
                                    )
                                }}
                                sliderWidth={70}
                                itemWidth={90}
                                autoplay={true}
                                loop={true}
                            /> */}


                            <Carousel
                                loop
                                width={wp(95)}
                                style={{ borderRadius: 10, }}
                                height={wp(60)}
                                autoPlay={true}
                                pagingEnabled={true}
                                data={images}
                                mode='parallax'
                                modeConfig={{
                                    parallaxScrollingScale: 0.9,
                                    parallaxScrollingOffset: 30,
                                }}
                                scrollAnimationDuration={1000}
                                // onSnapToItem={(index) => console.log('current index:', index)}
                                renderItem={({ index, item }) => (
                                    <View
                                        style={{
                                            // flex: 1,
                                            // borderWidth: 1,
                                            width: wp(120),
                                            justifyContent: 'center',
                                            // backgroundColor: 'brown',
                                            alignItems: 'center',
                                            alignSelf: 'center',


                                        }}
                                    >
                                        <View >
                                            <Image style={{ width: 350, height: 210, borderRadius: 10, }} source={item.image} />
                                            <View style={{ position: 'absolute',backgroundColor: 'rgba(52,52,52,0.4)',top: wp(5),borderRadius: 10, width: wp(30),height: hp(4),justifyContent: 'center',left: wp(2) }}>
                                            <Text style={{ textAlign: 'center', fontSize: 11, color: 'white', fontFamily: 'Poppins-SemiBold',  }}>{item.name}</Text>
                                            </View>

                                        </View>
                                    </View>
                                )}
                            />




                        </View>

                        {/* <View style={SideStyles.SearchView}>
                            <Searchbar />

                        </View> */}

                        <FlatList
                                data={AllServices}
                                numColumns={3}
                                key={3}

                                showsHorizontalScrollIndicator={false}
                                renderItem={(item) => (
                                    <View>
                                    <Allservice info={item} onPress={() => navigation.navigate('HouseKeeping', {item})} />
                                    </View>

                                )}
                            />
                        {/* <View style={SideStyles.ViewServicesParent}>
                            <TouchableOpacity onPress={() => navigation.navigate('Homeprov')} style={SideStyles.touchPadButtonElectrican}>
                                <Image style={{ width: 80, height: 80, }} source={require('../../../Assets/png/12.png')} />
                                <Text style={SideStyles.Textservices}>horjn</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Provider_Service')} style={SideStyles.touchPadButtonElectrican}>
                                <Image style={{ width: 80, height: 80, }} source={require('../../../Assets/png/13.png')} />
                                <Text style={SideStyles.Textservices}>Plumber</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('HouseKeeping')} style={SideStyles.touchPadButtonKeeping}>
                                <Image style={{ width: 80, height: 80, }} source={require('../../../Assets/png/14.png')} />
                                <Text style={SideStyles.Textservices}>House{'\n'}Keeping</Text>

                            </TouchableOpacity>


                        </View> */}
                        <View style={SideStyles.ViewPopularServicesParent}>
                            <Text style={SideStyles.PopularSerText}>Popular Services</Text>
                        </View>
                        <View>
                            <FlatList
                                data={PopularServices.popular_services}
                                horizontal={true}

                                showsHorizontalScrollIndicator={false}
                                renderItem={(item) => (
                                    <View>
                                        <PopularSCard item={item} />
                                    </View>

                                )}
                            />

                        </View>
                        <View style={SideStyles.RecommandedserTextview}>
                            <Text style={SideStyles.RecommandedSerText}>Recommended Providers</Text>
                        </View>
                        <View>
                            <FlatList
                                data={PopularServices.recommended}
                                horizontal={true}

                                showsHorizontalScrollIndicator={false}
                                renderItem={(item) => (
                                    <View>
                                        <RecommandedSerCard item={item} />
                                    </View>

                                )}
                            />

                        </View>
                        <Loader visible={isLoading} />
                    </View>

                )} />
        </View>
    )
}