import { View, Text,FlatList } from 'react-native'
import React from 'react'
import GlobalStyle from '../../GlobalStyle/GlobalStyle'
import TopheaderLeftIcon from '../../../Components/TopHeader/TopHeaderLeftIcon/TopheaderLeftIcon'
import Searchbar from '../../../Components/Searchbar/Searchbar'
import SideStyles from '../SideStyles/SideStyles'
import Loader from '../../AppScreens/Loader/Loader'

import ServiceProCard from '../../../Components/RecommmandedServices/ServiceProviderCard'

export default function ServiceProviderList({navigation,route}) {

    const  Sname = route?.params?.Sname;
    const  NNN = route?.params?.Name;

    // console.log('Sname>>>,',Sname)
     const subserviveName =route?.params?.subserviveName;
    //  console.log('.subservice',subserviveName)
   



    return (
        <View style={GlobalStyle.RootContainer}>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={[1]}

                renderItem={() => (
               <View>
            <TopheaderLeftIcon title={subserviveName} onpress={() => navigation.goBack()} />
            {/* <View style={SideStyles.ViewSearchBar}>
                <Searchbar />
            </View> */}
            <View style={SideStyles.ViewFlatlist}>
            <FlatList
          data={Sname.data}
        
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => (
            // <ServicesCardMain  onpress={() => navigation.navigate('ServiceProviderList')} item={item}/>
            
         <ServiceProCard info={item}  onpress={() => navigation.navigate('ProviderDetails',{item,Servicename:NNN})}/>
            
          )}
        />

  
            </View>
            </View>
    )}
    />
        </View>
    )
}