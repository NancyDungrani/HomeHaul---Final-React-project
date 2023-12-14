import { Image,StyleSheet,ScrollView, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './searcTile.style';
import { useNavigation } from '@react-navigation/native';

const SearchTile = ({item}) => {
    const navigation = useNavigation();
  return (
  <View >
    <TouchableOpacity  style = {styles.container} onPress={() => navigation.navigate("ProductDetails" , {item})}>
        <View style= {styles.image}>
            <Image source={{uri : "https://www.purbafurniture.ca/wp-content/uploads/2022/05/Luxury-bedroom.png"}}
            style = {styles.productImg}
            />
        </View>
        <View style = {styles.textContainer}>
            <Text style ={styles.productTitle}>Product Title</Text>
            <Text style ={styles.supplier}>Supplier</Text>
            <Text style ={styles.supplier}>250$</Text>

        </View>
    </TouchableOpacity>
  </View>
  )
}

export default SearchTile
