import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants'

const BackBtn = ({onPress}) => {
  
  return (
   <TouchableOpacity onPress={onPress} style={styles.backBtn}>
    <Ionicons
        name='chevron-back-circle'
        size={30}
        color={COLORS.primary}
    />


   </TouchableOpacity>

  )
}

export default BackBtn

const styles = StyleSheet.create({
    backBtn:{
        alignItems:"center",
        position:"absolute",
        zIndex:999,
        top: SIZES.large-10
    }
})

