import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg,{Rect} from 'react-native-svg'

const IndicatorWrapper = ({firstFill="#EAEBFF",secondFill="#EAEBFF",thirdFill="#304FFE"}) => {
  return (
<Svg width="103" height="8" viewBox="0 0 103 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<Rect width="37" height="8" rx="4" transform="matrix(-1 0 0 1 102.5 0)" fill={thirdFill}/>
<Rect width="37" height="8" rx="4" transform="matrix(-1 0 0 1 59.5 0)" fill={secondFill}/>
<Rect width="16" height="8" rx="4" transform="matrix(-1 0 0 1 16.5 0)" fill={firstFill}/>
</Svg>

  )
}

export default IndicatorWrapper

