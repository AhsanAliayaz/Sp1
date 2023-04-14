import { StyleSheet } from 'react-native'
import { Colors } from '../../../../Constants/Colors'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
export default StyleSheet.create({
    TextInputpreset: {
        height: hp(30),
        // backgroundColor: 'yellow',
        justifyContent: 'space-between',
     },
    ViewImageMain: {
        width: wp(90),
        alignSelf: 'center',
        alignItems: 'center',
        marginVertical: hp(3),
    },
    TextInputprofile: {
        height: hp(45),
        // backgroundColor: 'yellow',
        justifyContent: 'space-between',
     },
    ViewLogoMain: {
        backgroundColor: 'yellow',

    },
    TextViewMain: {
            marginTop: hp(30),

    },
    texttitle:{
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        color: Colors.neutral52,
        textAlign: 'center',

    },
    ImagesViewMain:{
         
        // backgroundColor: 'pink',
       width: wp(85),
       alignSelf: 'center',
       marginTop: hp(5),


    },
    ImagesViewMain2:{
         
        // backgroundColor: 'pink',
        flexDirection: 'row',
        justifyContent: 'space-between',
        


    },
    ServiceProviderText:{
        // backgroundColor: 'pink',
        alignItems: 'center',

    },
       UserText:{
        // backgroundColor: 'pink',
        alignItems: 'center',

    },
    TextServiceMain: {
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        color: Colors.neutral52,
    },
    TextProviderMain: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        color: Colors.neutral52,
    },

    TextUserMain: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        color: Colors.neutral52,
        top: wp(3),
        
    },
    CheckBoxView: {
        alignItems: 'center',
        marginVertical: hp(1),
    },
    CheckBoxViewuser: {
        alignItems: 'center',
        marginVertical: hp(2.9),
    },
    BottonSignup: {
        marginVertical: hp(8.7),
    },
    BottonSignin: {
        marginVertical: hp(7),
    },
    TextViewMainLogin: {
        marginTop: hp(15),  
    },

    texttitleLogin:{
        fontSize: 22,
        fontFamily: 'Poppins-SemiBold',
        color: Colors.neutral52,
        textAlign: 'center',
    },
    inputText: {
        marginTop: hp(8),
    },
    inputText2: {
        marginTop: hp(2),
    },
    TouchForgotButton: {
        alignSelf: 'center',
        alignItems: 'flex-end',
        width: wp(90),
        top: wp(1.5),
    },
    ForgotPassText: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        color: Colors.neutral51,
    },
    CommonbuttonView: {
         marginTop: hp(15)
    },

        DontHaveAccountView: {
            alignSelf: 'center',
             flexDirection: 'row',
             marginTop: hp(1),
        },
        TextDontHaveAcoount: {
            fontFamily:'Poppins-Regular',
            fontSize: 14,
            color: Colors.neutral53,
        },
        TextSignUp: {
            fontFamily:'Poppins-SemiBold',
            fontSize: 14,
            color: Colors.neutral51,
        },
        ImageProView: {
            width: wp(25),
            height: wp(25),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            alignSelf: 'center',
            marginVertical: hp(4),
            // backgroundColor: Colors.neutral55,
            
            // alignItems: 'center',
            // justifyContent: 'center',

          },
          PlusImage: {
            width: 25,
            height: 25,
          },
          TouchUploadImage: {
            position: 'absolute',
            bottom: wp(1),
            right: wp(2.),
          },
          TextInputSignup: {
             height: hp(110),
            //  backgroundColor: 'yellow',
             justifyContent:  'space-between',
             alignItems: 'center',
          },
          CheckboxSignupView: {
            width: wp(90),
            flexDirection: 'row',
            marginVertical: hp(4),
            alignSelf: 'center',
          }, 
          TextAceptConditions: {
            fontSize: 14,
            fontFamily: 'Poppins-Medium',
            top: wp(1),
            left: wp(2),
          },
          Signupbuttonview: {
            marginVertical: hp(9)
       },
       TextForgotPass: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        textAlign: 'center',
        color: Colors.neutral52,
       },
       viewForgotPass: {
        marginVertical: hp(8),
       },
       imageMain: {
        width: 190,
        height: 190,
        resizeMode: 'contain'
       },
       viewImageMainForge: {
        alignItems: 'center',
       },
       ViewInputForgot: {
        marginTop: hp(4),
       },
       CodeFieldView: {
        
            width: wp(90),
            alignSelf: 'center',
            marginTop: hp(4),
          
       },
       cell: {
        width: 60,
        height: 50,
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
    
        textAlign: 'center',
        lineHeight: hp(9),
        borderBottomWidth: 2,
        borderColor: Colors.neutral52,
        
        // elevation: 3,
        
        // backgroundColor: Colors.neutral50,
        // backgroundColor: colors.neutral100,
    },
    focusCell: {
        // borderColor: 'pink',
        borderWidth: 1,
      },
      bodyLarge:{
        fontFamily: 'Poppins-Regular',
        fontSize: 16
      },
      imageMainnewpass: {
        width: 190,
        height: 190,
        
       },
       viewForgotnewPass: {
        marginVertical: hp(5),
       },
       ViewInputForgotnewpass: {
        marginTop: hp(2),
       },
       CheckboxSignupViewprovider: {
        width: wp(90),
        flexDirection: 'row',
        marginTop: hp(10),
        alignSelf: 'center',
      },
      matchpassmain: {
        
    alignSelf: 'center',
    color: 'red',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    alignSelf: 'flex-start',
    left: wp(5),
    bottom: wp(3),
      },
      paswordmastchtExt: {
        alignSelf: 'flex-start',
        left: wp(5),
      },
      
      



})