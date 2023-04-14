import { View, Text, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native'
import React from 'react'
import TopheaderLeftIcon from '../../../Components/TopHeader/TopHeaderLeftIcon/TopheaderLeftIcon'
import GlobalStyle from '../../GlobalStyle/GlobalStyle'
import SideStyles from '../SideStyles/SideStyles'
import { Colors } from '../../../Constants/Colors'
import Provider_Ser_Card from '../../../Components/ProviderServicecard/Pro_Service_card'
import View2Parent2Main from '../../../Components/CustomerReviewCard/CustomerReviewCard'
import Button_Inital from '../../../Components/ButtonInital/Button_Inital'
import AntDesignIIcon from 'react-native-vector-icons/AntDesign'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import Componentstyles from '../../../Components/componentsStyles/Componentstyles'
import { useState } from 'react'


export default function ProviderDetails({ navigation, route }) {
     const [tick,settick] = useState([])
    const [wholeItem, setwholeItem] = useState([])
    const [ProId,setProId] = useState([])
    const[pId,setPId] = useState()
    

    // console.log("----------sname ",pId)
  


    const { item } = route.params
    // console.log("-------????--sname ",item)
    const providerID = item.item.id
    const Review = item.item.reviews
    const Servicename = route.params.Servicename


    

    const addtochecklist = (id) => {
        if (tick.length > 0) {
            
            let y = tick.findIndex(it => it.id == id)
            // console.log('yyy',y)
            if (y != -1) {
                let arr = [...tick]
                arr.splice(y, 1)
                settick(arr)
            }
            else {
                settick([...tick, { id }])
            }
        }
        else {
            settick([...tick, { id }])
        }
    }
    const checkid=(id)=>{
        if(tick.length>0)
        {
    let y=tick.findIndex(it=>it.id==id)
    if(y!=-1)
    {
       return true
    }
    else{
        return false
    }
        }
        else{
            return false
        }
    }

    const addtocheckItem = (item) => {

        // console.log("ooopopoopopo====",item)
        if (wholeItem.length > 0) {
            let y = wholeItem.findIndex(it => it.id == item.id)
            console.log('yyy22222',y)
            if (y != -1) {
                let arr = [...wholeItem]
                arr.splice(y, 1)
                setwholeItem(arr)
            }
            else {
                setwholeItem([...wholeItem, item])
            }
        }
        else {
            setwholeItem([...wholeItem, item])
        }
    }


//ye provider id access kr raha hn




    const addtocheckProId = (provider_id) => {
        console.log("0000000",provider_id)
        setPId(provider_id)
        console.log("ooopopoopopo=",provider_id)
        if (ProId.length > 0) {
            let y = ProId.findIndex(it => it.id == item.provider_id)
            if (y != -1) {
                let arr = [...ProId]
                // arr.splice(y, 1)
                setProId(arr)
            }
            else {
                setProId([...ProId, provider_id])
            }
        }
        else {
            setProId([...ProId, provider_id])
        }
    }


    // const checkid2=(item)=>{
    //     if(wholeItem.length>0)
    //     {
    // let y=wholeItem.findIndex(it=>it.item==item)
    // if(y!=-1)
    // {
    //    return true
    // }
    // else{
    //     return false
    // }
    //     }
    //     else{
    //         return false
    //     }
    // }
    

    return (

        <View style={GlobalStyle.RootContainer}>

            <FlatList


                showsVerticalScrollIndicator={false}
                data={[1]}

                renderItem={() => (
                    <View>
                        <View>

                            <TopheaderLeftIcon title={'Provider Details'} onpress={() => navigation.goBack()} />

                        </View>
                        <View style={SideStyles.MainViewProDetails}>

                            <View style={SideStyles.ImageandTextPro}>
                                <Image resizeMode='contain' style={{ width: 55, height: 55, borderRadius: 40, borderWidth: 2, borderColor: Colors.neutral51 }} source={{ uri: item.item.image }} />
                                <Text style={SideStyles.textName}>{item.item.username}</Text>
                                <Text style={SideStyles.textService}>{item.item.job}</Text>
                            </View>

                            <View style={SideStyles.LoactionTextView}>
                                <Image resizeMode='contain' style={{ width: 30, height: 40, }} source={require('../../../Assets/png/pin.png')} />
                                <View style={SideStyles.ViewLocText}>
                                    <Text style={SideStyles.Loctext}>{item.item.address}</Text>
                                    <Text style={SideStyles.Loctext}>{item.item.location}</Text>
                                </View>
                            </View>

                            {/* <View style={SideStyles.TextDetailsPro}>
                                <Text style={SideStyles.Text}>

                                    Computer technicians install, maintain, and troubleshoot
                                    hardware and software for businesses and organizations.
                                    Depending on what type of company you work for, your
                                    day-to-day tasks may include: Setting up hardware and
                                    installing software. Performing repairs oncomputers and
                                    other peripherals

                                </Text>
                            </View> */}

                            <View style={SideStyles.ServiceTiltle}>
                                <Text style={SideStyles.TextserP}>My Services</Text>
                            </View>

                            <View>
                                <FlatList
                                    data={item.item.subservices}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={(item) => {
                                        // console.log("checkkk",item)
                                        return (
                                            <TouchableOpacity style={{ marginBottom: heightPercentageToDP(1) }}>
                                                {/* <Provider_Ser_Card info={item} Servicename={Servicename} /> */}

                                                <TouchableOpacity onPress={() => {
                                                    addtocheckItem(item.item)
                                                     addtochecklist(item.item.id)
                                                     addtocheckProId(item.item.provider_id)
                                                    //  console.log('....?????',item.item.provider_id)
                                                }} activeOpacity={0.7} style={Componentstyles.ScardMainParentProvider}>
                                                    <View style={Componentstyles.FirstMainContainer}>

                                                        <Text style={Componentstyles.TextTitle}>{item.item.service}</Text>
                                                        <Text style={Componentstyles.TextTitle2}>{Servicename}'s Work</Text>

                                                    </View>
                                                    {checkid(item.item.id) ?
                                                    <Image resizeMode='contain' style={{ width: 30, height: 30, }} source={require('../../../Assets/png/tic.png')} />
                                                    : null} 

                                                    <View style={Componentstyles.SecondContainerserProCard}>
                                                        <Text style={Componentstyles.TextRs}>Rs {item.item.price}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </TouchableOpacity>

                                        )
                                    }
                                    }
                                />

                            </View>

                            <View style={SideStyles.ViewProviderServicesParent}>
                                <Text style={SideStyles.ProviderSerText}>Customer's Reviews</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('ReviewScreen',{ProviderId:providerID})}>
                                    <Text style={SideStyles.SeeAllText}>See all</Text>
                                </TouchableOpacity>
                            </View>
                             {
                             Review?.length > 0 ?
                            <View style={SideStyles.ViewMainReviewCard}>
                                <View2Parent2Main item={Review}/>
                            </View>
                            : 
                            <Text style={{
                                
                                fontFamily: 'Poppins-Medium',
                                fontSize: 14,
                                color: 'black',
                                textAlign: 'center',
                            }}>No Reviews Found</Text>
                        }
                        </View>

                        <View style={SideStyles.chatandcallus}>
                            <Button_Inital
                                txtStyle={{
                                    color: 'white'
                                }}
                                cStyle={{
                                    backgroundColor: Colors.neutral51,
                                    borderWidth: 1
                                }} title={'Chat Now'} onPress={() => navigation.navigate('Messages',{ProviderInfo:item})} />
                            <Button_Inital
                                cStyle={{
                                    backgroundColor: null,
                                    borderWidth: 1
                                }}
                                txtStyle={{
                                    color: Colors.neutral51,
                                }}
                                title={'Call us'} onPress={() => navigation.navigate('')} />
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('BookingScreen', { serviceId: wholeItem, Providerdata: item,PrviderId:pId, ServiceIdMain:tick })} style={SideStyles.ViewButtonMain}>
                            <Text style={SideStyles.TextButton}>Book The Service</Text>
                            <AntDesignIIcon name='arrowright' size={25} color={Colors.neutral50} />
                        </TouchableOpacity>

                    </View>
                )} />
        </View>

    )
}