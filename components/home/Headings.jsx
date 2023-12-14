import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './headings.style'
import { Ionicons,Fontisto} from "@expo/vector-icons"
import { COLORS } from '../../constants'
import { useNavigation , useRoute } from '@react-navigation/native'

const Headings = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View  style={styles.header}>
      <Text  style={styles.hearderTitle}>New Rivals</Text>
      <TouchableOpacity onPress={() => navigation.navigate('NewRivals')}>
      <Ionicons name='ios-grid' size={24} color={COLORS.primary}/>

      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Headings

