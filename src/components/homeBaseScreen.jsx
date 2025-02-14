import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../helpers/constant/colors'
import { SVG_NAME } from '../helpers/constant/svgHelpers'
import { FONT_FAMILY, FONT_SIZE } from '../helpers/constant/font'

const HomeBaseScreen = ({children}) => {
  return (
    <View style={{flex:1,backgroundColor:COLORS.primaryColor}}>
        <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor="transparent"
        />
        <View style={styles.headerContainer}>
            <View style={styles.innerContainer}>
            <Image
            source={require('../assets/png/user.png')}
            resizeMode='cover'
            style={{width:50,height:50,borderRadius:50}}
            />
            <Text style={styles.titleHeader}>Welcome,Chief!</Text>
        </View>
        <TouchableOpacity>
            {SVG_NAME.notificationWithDot}
        </TouchableOpacity>
        </View>
      <Text>{children}</Text>
    </View>
  )
}

export default HomeBaseScreen

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:22,
        marginVertical:42,
        alignItems:'center'
    },
    innerContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    titleHeader:{
        marginLeft:12,
        color:COLORS.white,
        fontSize:FONT_SIZE.h18,
        fontFamily:FONT_FAMILY.GILROY_SEMIBOLD
    }
})