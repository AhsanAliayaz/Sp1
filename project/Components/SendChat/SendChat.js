import { StyleSheet, Text, View, TextInput,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors } from '../../Constants/Colors'

export default function SendChat({ value, onChangeText, onPress }) {
    return (
        <View style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            padding: wp(4), alignItems: 'center'
        }}>
          
            <View style={{ flex: 1, marginHorizontal: wp(2) }}>
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    placeholder="Type a message"
                    placeholderTextColor={Colors.neutral53}
                    style={styles.textInput}

                />
            </View>
            <View style={{}}>
                <TouchableOpacity style={styles.sendMessage} onPress={onPress}>
                    <Image style={{width: 40, height: 40,}} source={require('../../Assets/png/Icon.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#EFEFF4',
        borderRadius: 10 / 2, paddingHorizontal: 12,
        color: 'black',
        fontFamily: 'Poppins.Regular',
        elevation: 5,
        shadowColor: Colors.neutral53,
    fontSize: 14
    },
    sendMessage: {
        width: 40, height: 40, borderRadius: 40 / 2,
        backgroundColor: 'white',
        alignItems: 'center', justifyContent: 'center'
    }
})