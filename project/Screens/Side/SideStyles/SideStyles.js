import { StyleSheet } from 'react-native'
import { Colors } from '../../../Constants/Colors'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'





export default StyleSheet.create({










   

    ProfileCardNameactiive: {
         width: wp(50),
        marginHorizontal: wp(1.5),
        //   backgroundColor: 'pink',
    
        },

    ProfileCardMainNew: {
        width: wp(90),
        height: hp(10),
        alignSelf: 'center',
        elevation: 5,
        shadowColor: Colors.neutral53,
        backgroundColor: Colors.neutral50,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: hp(2),
        justifyContent: 'space-between'
    },
    Viewaddress: {
    width: wp(90),
    height: hp(7),
    backgroundColor: Colors.neutral50,
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'black',
    alignSelf: 'center',
    top: wp(2),
    flexDirection: 'row',
    alignItems: 'center',
},
    Textactivity: {
        color: Colors.neutral53,
        fontSize: 8,
        fontFamily: 'Poppins-SemiBold',
        backgroundColor: '#7DF0CF',
        borderRadius: 10,
        width: wp(15),
        alignItems: 'center',
        textAlign: 'center',
        right: wp(1.5),

    },
    editButtonMainUpdate: {
        alignItems: 'center',
        position: 'absolute',
        marginTop: hp(24),
        marginLeft: wp(60)
    
    },
    MessageMain: {
        width: wp(80),
        elevation: 5,
        shadowColor: Colors.neutral53,
        backgroundColor: Colors.neutral50,

    },
    MesaageproviderParent2: {
        width: wp(80),
        flexDirection: 'row'
    },
    MesaageproviderParent: {
    
    },
    Commanbtn: {
        marginVertical: hp(9),
    },
    ButtonCommon: {
        width: wp(90),
        height: hp(7),
        borderWidth: 1,
        borderColor: Colors.neutral51,

        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.neutral50,
        marginVertical:hp(8),
    
    },
    TextMainCommonbutton: {
        color: Colors.neutral52,
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold'  
     },
    editButtonMain: {
        alignItems: 'center',
        position: 'absolute',
        marginTop: hp(12),
        marginLeft: wp(60)
    
    },
    Textnumbr: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: Colors.neutral53,
        left: wp(2),
    
    },
    viewfoter: {
        flexDirection: 'row',
    },
    TextMainRatingsParent2: {
        fontFamily: 'Poppins-Medium',
        fontSize: 46,
        color: Colors.neutral52,
    },
    ViewMainRatingsParent2: {
        width: wp(90),
        alignSelf: 'center',
        // flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    ViewMainRatingsParent: {
      width: wp(90),
      alignSelf: 'center',
    },
    TextInput: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        width: wp(85),
        textAlignVertical: 'top',
        height: hp(19),
        color:Colors.neutral53,
    },
ContainerdiscraptionFeedus: {
        width: wp(90),
     height: hp(20),
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: hp(2),
    alignItems: 'center',
    },
    TetxtDetailsMainFeedNootes: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: Colors.neutral53,
    
    },
    TextDetaisFeedNootes: {
        width: wp(90),
        alignSelf: 'center',
 
    },
    ViewRatring: {
        marginVertical: hp(3),
    },
    TetxtDetailsMainFeed: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        color: Colors.neutral53,
        textAlign: 'center'
    },
    TextDetaisFeed: {
        width: wp(70),
        alignSelf: 'center',
    },
    ImageandTextProFeedback: {
     
        alignItems:'center',   
        marginVertical: hp(3),     
        
       },
    TextTouch4Cancelled: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 10,
        color: Colors.neutral50,
    },
    Touch4Cancelled: {
        width: wp(23),
        height: wp(9),
        backgroundColor: Colors.neutral51,
        borderTopEndRadius: 5,
        borderBottomEndRadius: 5,
        borderLeftWidth: 2,
        borderLeftColor: Colors.neutral51,
        alignItems: 'center',
        justifyContent: 'center',
    
    },
   
    TextTouch3completed: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 10,
        color: Colors.neutral50,
    },
    Touch3Complteted: {
        width: wp(22),
        height: wp(9),
        backgroundColor: Colors.neutral51,
        borderLeftWidth: 2,
        borderLeftColor: Colors.neutral51,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Touch1completed: {
        width: wp(22),
        height: wp(9),
        backgroundColor: Colors.neutral50,
        // borderTopStartRadius: 5,
        // borderBottomStartRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 2,
        borderLeftColor: Colors.neutral51,
 
    },
    TextTouch1pending: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 10,
        color: Colors.neutral52,
    },
    Touch1Pending: {
        width: wp(22),
        height: wp(9),
        backgroundColor: Colors.neutral50,
        borderTopStartRadius: 5,
        borderBottomStartRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
   
   
       },
       TextTouch2Pending: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 10,
        color: Colors.neutral50,
    },
    Touch2Pending : {
        width: wp(22),
           height: wp(9),
           backgroundColor: Colors.neutral51,
           alignItems: 'center',
           justifyContent: 'center',
           borderTopLeftRadius: 5,
           borderBottomLeftRadius: 5,
           
          },
    TextTouch1: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 10,
        color: Colors.neutral50,
    },
    TextTouch2: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 10,
        color: Colors.neutral52,
    },
    TextTouch3: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 10,
        color: Colors.neutral52,
    },
    TextTouch4: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 10,
        color: Colors.neutral52,
    },
    Touch1: {
     width: wp(22),
     height: wp(9),
     backgroundColor: Colors.neutral51,
    //  borderTopStartRadius: 5,
    //  borderBottomStartRadius: 5,
     alignItems: 'center',
     justifyContent: 'center',


    },
    Touch2 : {
     width: wp(22),
     height: wp(9),
     backgroundColor: Colors.neutral50,
     borderTopLeftRadius:7,
     borderBottomLeftRadius: 8,
     alignItems: 'center',
     justifyContent: 'center',
     
    },
    Touch3: {
        width: wp(22),
        height: wp(9),
        backgroundColor: Colors.neutral50,
        borderLeftWidth: 2,
        borderLeftColor: Colors.neutral51,
        alignItems: 'center',
     justifyContent: 'center',
        
    },
    Touch4: {
        width: wp(22),
        height: wp(9),
        backgroundColor: Colors.neutral50,
        borderTopEndRadius: 5,
     borderBottomEndRadius: 5,
     borderLeftWidth: 2,
     borderLeftColor: Colors.neutral51,
     alignItems: 'center',
     justifyContent: 'center',
    
    },
    ParentViewSchedule: {
        width:wp(90),
        height:wp(10),
        borderWidth: 2.2,
        borderColor: Colors.neutral51,
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: hp(2),
        flexDirection: 'row',
              
 
    },
    ViewHeaderMaintime: {
        width:wp(90),
        alignSelf: 'center',
        marginTop: hp(1),
    },
    CalendermainView: {
        width: wp(90),
        alignSelf: 'center',
        borderRadius: 20,
        elevation: 5,
        shadowColor: Colors.neutral53,
    },
    Textselectdate: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        color: Colors.neutral52,
        },
    ViewHeaderMain: {
        width:wp(90),
        alignSelf: 'center',
        marginTop: hp(3),

    },
    SwiperFlatlist: {
          height: hp(30),
          marginVertical: hp(1),
          alignSelf:'center'
         


    },
    TextDayandMonth: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 15,
        color: Colors.neutral50,
        
    },
    itmview:{
        width:wp(15),
        height:wp(17),
        elevation:2,
        borderRadius:wp(3),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"white"
    },
    itmview1:{
        width:wp(18),
        height:wp(24),
        
        alignItems:'center',
        justifyContent:'center',
        
    },
    SearchView: {
        alignSelf: 'center',
    },
    ViewServicesParent: {
        height: hp(18),
        width: wp(90),
        // backgroundColor: 'pink',
        alignSelf: 'center',
        marginVertical: hp(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    touchPadButtonElectrican: {
         alignItems: 'center',
         alignSelf: 'center',
         width: wp(33),
        
         
    },
    Textservices: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        color: Colors.neutral52,
        textAlign: 'center',
    },
    touchPadButtonKeeping: {
        alignItems: 'center',
        marginTop: hp(3),
    },
    ViewPopularServicesParent: {
        height: hp(5),
        width: wp(90),
        // backgroundColor: 'pink',
        alignSelf: 'center',
        marginVertical: hp(1.5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
 
    },
    PopularSerText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        color: Colors.neutral52,
    },
    SeeAllText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        color: Colors.neutral57,
    },
    RecommandedserTextview: {
        height: hp(5),
        width: wp(90),
        // backgroundColor: 'pink',
        alignSelf: 'center',
        marginVertical: hp(1.5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    RecommandedSerText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        color: Colors.neutral52,
    },

    ViewTextservicesKeeping: {
        width: wp(90),
        alignSelf: 'center',
        marginVertical: hp(4),
    },
    TextMain: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        color: Colors.neutral52,
    },
    MainFlatistView: {
        height: hp(50),
        // backgroundColor: 'pink',
    },
    ViewBottomImage: {
        width: wp(90),
        alignSelf: 'center',
    },
    ViewSearchBar: {
        width: wp(90),
        alignSelf: 'center',
        marginVertical: hp(2),
    },
    ViewFlatlist: {
        width: wp(90),
        alignSelf: 'center',
    },
    MainViewProDetails: {
        width: wp(90),
        // height: hp(90),
    
    // alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp(20),
    elevation: 5,
    shadowColor: Colors.neutral53,
    borderRadius: 10,
    backgroundColor: Colors.neutral50,
    },
    ImageandTextPro: {
     
     position: 'absolute',
     alignItems:'center',
     bottom:0,
     top:-30,
     left:0,
     right:0
     
    },
    textName: {
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        color: Colors.neutral52,
    },
    textService: {
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold',
        color: Colors.neutral56,
    },
    LoactionTextView: {
       marginTop: hp(20),
       width: wp(86),
       flexDirection: 'row',
    //    backgroundColor: 'pink',
       alignItems: 'center',
       justifyContent: 'space-around',
       alignSelf: 'center'
    },
    ViewLocText: {
     
    },
    Loctext: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        color: Colors.neutral52,
    },
    TextDetailsPro: {
    width: wp(87),
    // backgroundColor: 'pink',
    alignSelf: 'center',
    marginVertical: hp(1),
    },
    Text: {
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold',
        color: Colors.neutral56,
    },
    ServiceTiltle: {
        width: wp(87),
        alignSelf: 'center',
        marginVertical: hp(3),
    },
    TextserP: {
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        color: Colors.neutral52,
    },
    ViewProviderServicesParent: {
        height: hp(5),
        width: wp(87),
        // backgroundColor: 'pink',
        alignSelf: 'center',
        marginVertical: hp(1),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        top: wp(2),
    
 
    },
    ProviderSerText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        color: Colors.neutral52,
    },
    chatandcallus: {
       width: wp(90),
       alignSelf:'center',
       flexDirection: 'row',
       justifyContent: 'space-between',
       marginVertical: hp(2),
       marginTop: hp(7),
    },
    ViewMainReviewCard: {
        marginVertical: hp(2),
    },
    ViewButtonMain: {
        width: wp(75),
        height: hp(7),
        backgroundColor:Colors.neutral51,
        alignSelf: 'center',
        borderRadius: 40,
        flexDirection: 'row',
        alignItems:'center', 
        justifyContent: 'space-around',
        marginVertical: hp(2),

    },
    TextButton: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        color: Colors.neutral50,
    },
    TextBookservice: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: Colors.neutral56,
    },
    RadioButonViewParent: {
        width: wp(90),
        height: hp(10),
        // backgroundColor: 'pink',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ViewRadio2: {
         
    },
    TextNow: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: 'black',
    },
    CommonButtonView: {
        marginVertical: hp(2),
        marginTop: hp(10),
    },
    ViewImageBottom: {
        width: wp(90),
        height: hp(40),
        alignItems: 'center',
        justifyContent: 'flex-end',

        alignSelf: 'center',
    },
    viewCalanderParent: {
        
    },
    ProfileCardMain: {
        width: wp(90),
        height: hp(10),
        alignSelf: 'center',
        elevation: 5,
        shadowColor: Colors.neutral53,
        backgroundColor: Colors.neutral50,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: hp(2),
        justifyContent: 'space-between'
    },
     
    ProfileCardNameS: {
    marginHorizontal: wp(1.5),
    //   backgroundColor: 'pink',
    marginRight: wp(30),
    },
    ProfileCardTextN: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        color: Colors.neutral52,
    },
    ProfileCardTextS: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 12,
        color: Colors.neutral56,
    },
    Containerdiscraption: {
        width: wp(90),
     height: hp(15),
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: hp(2),
    alignItems: 'center',
    },
    ContainerdheaderName: {
        width: wp(90),
        alignSelf: 'center',
    },
    textNotes: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        color: Colors.neutral52,
        top: wp(3),

    },
    // ContainerBookingdetCrd: {
    //     width: wp(90),
    //     height: hp(40),
    //     backgroundColor: 'pink',
    //     },
    TextInput: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        width: wp(85),
        textAlignVertical: 'top',
        height: hp(19),
        color:Colors.neutral53,
    },
    PaymentView: {
        width: wp(90),
        alignSelf: 'center',
        // marginVertical: hp(2),
        marginTop: hp(2),
    },
    TextPaymentHistText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        color: Colors.neutral52,
    
    },
    totalpayment: {
        width: wp(90),
        height: hp(10),
        alignSelf: 'center',
        elevation: 5,
        shadowColor: Colors.neutral53,
        backgroundColor: Colors.neutral50,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: hp(2),
        justifyContent: 'space-between',
    },
    CommonButton: {
        marginVertical: hp(5),
    },

})